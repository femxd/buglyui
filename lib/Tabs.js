'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var flattenChildren = require('react/lib/flattenChildren');
var classNames = require('classnames');
var omit = require('object.omit');
var ClassNameMixin = require('./mixins/ClassNameMixin');
var Nav = require('./Nav');
var NavItem = require('./NavItem');

var Tabs = React.createClass({
  displayName: 'Tabs',

  mixins: [ClassNameMixin],

  propTypes: {
    theme: React.PropTypes.oneOf(['default', 'd2']),
    onSelect: React.PropTypes.func,
    animation: React.PropTypes.oneOf(['slide', 'fade']),
    defaultActiveKey: React.PropTypes.any,
    justify: React.PropTypes.bool,
    data: React.PropTypes.array
  },

  getDefaultProps: function getDefaultProps() {
    return {
      classPrefix: 'tabs',
      animation: 'fade'
    };
  },

  getInitialState: function getInitialState() {
    var defaultActiveKey = this.props.defaultActiveKey != null ? this.props.defaultActiveKey : this.getDefaultActiveKey(this.props.children);

    return {
      activeKey: defaultActiveKey,
      previousActiveKey: null
    };
  },

  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if (nextProps.activeKey != null && nextProps.activeKey !== this.props.activeKey) {
      this.setState({
        activeKey: nextProps.activeKey,
        previousActiveKey: this.props.activeKey
      });
    }
  },

  getDefaultActiveKey: function getDefaultActiveKey(children) {
    var defaultActiveKey = null;

    if (this.props.data) {
      this.props.data.every(function (item, i) {
        if (item.active) {
          defaultActiveKey = i;
          return false;
        }

        return true;
      });

      return defaultActiveKey == null ? 0 : defaultActiveKey;
    }

    React.Children.forEach(children, function (child) {
      if (defaultActiveKey == null) {
        defaultActiveKey = child.props.eventKey;
      }
    });

    return defaultActiveKey;
  },

  handleClick: function handleClick(key, disabled, e) {
    e.preventDefault();
    var activeKey = this.state.activeKey;

    if (disabled) {
      return null;
    }

    if (this.props.onSelect && !this.props.onSelect(key)) {
      //增加onSelect 返回false 可以控制Tab切换的能力
      return null;
    }

    if (activeKey !== key) {
      this.setState({
        activeKey: key,
        previousActiveKey: activeKey
      });
    }
  },

  renderNav: function renderNav() {
    var _this = this;

    var activeKey = this.state.activeKey;
    var children = React.Children.toArray(this.props.children).filter(function (child) {
      return child != null;
    });
    return children.map(function (child, index) {
      var key = child.props.eventKey || index;
      var disabled = child.props.disabled;

      return React.createElement(
        NavItem,
        {
          href: '#',
          ref: 'ref' + key,
          key: key,
          onClick: _this.handleClick.bind(_this, key, disabled),
          active: child.props.eventKey === activeKey,
          disabled: disabled
        },
        child.props.title
      );
    });
  },

  renderTabPanels: function renderTabPanels() {
    var activeKey = this.state.activeKey;
    var children = React.Children.toArray(this.props.children).filter(function (child) {
      return child != null;
    });
    return children.map(function (child, index) {
      return React.createElement(
        Tabs.Item,
        {
          active: child.props.eventKey === activeKey,
          key: index
        },
        child.props.children
      );
    });
  },

  // for Amaze UI tabs widget
  renderData: function renderData() {
    var activeKey = this.state.activeKey;
    var navs = [];
    var panels = [];

    this.props.data.forEach(function (item, key) {
      navs.push(React.createElement(
        NavItem,
        {
          href: '#',
          ref: 'ref' + key,
          key: key,
          onClick: this.handleClick.bind(this, key, item.disabled),
          active: key === activeKey,
          disabled: item.disabled
        },
        item.title
      ));

      panels.push(React.createElement(
        Tabs.Item,
        {
          eventKey: key
          // active={item.active}
          , active: key === activeKey,
          key: key },
        item.content
      ));
    }.bind(this));

    return {
      navs: navs,
      panels: panels
    };
  },

  renderWrapper: function renderWrapper(children) {
    var classSet = this.getClassSet();
    var props = omit(this.props, 'data');

    return React.createElement(
      'div',
      _extends({}, props, {
        'data-am-widget': this.props.theme ? this.props.classPrefix : null,
        className: classNames(classSet, this.props.className)
      }),
      children
    );
  },

  renderNavWrapper: function renderNavWrapper(children) {
    var TabsNav = this.props.theme ? 'ul' : Nav;

    return React.createElement(
      TabsNav,
      {
        key: 'tabsNav',
        tabs: true,
        className: classNames(this.prefixClass('nav'), this.setClassNamespace('cf')),
        justify: this.props.justify
      },
      children
    );
  },

  renderBodyWrapper: function renderBodyWrapper(children) {
    var animationClass = this.prefixClass(this.props.animation);

    return React.createElement(
      'div',
      {
        key: 'tabsBody',
        className: classNames(this.prefixClass('bd'), animationClass)
      },
      children
    );
  },

  render: function render() {
    var children = this.props.data ? this.renderData() : {};

    return this.renderWrapper([this.renderNavWrapper(children.navs || this.renderNav()), this.renderBodyWrapper(children.panels || this.renderTabPanels())]);
  }
});

Tabs.Item = React.createClass({
  displayName: 'Item',

  mixins: [ClassNameMixin],

  propTypes: {
    title: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    eventKey: React.PropTypes.any,
    active: React.PropTypes.bool
  },

  render: function render() {
    var classSet = {};

    classSet[this.setClassNamespace('tab-panel')] = true;
    classSet[this.setClassNamespace('fade')] = true;
    classSet[this.setClassNamespace('active')] = this.props.active;
    classSet[this.setClassNamespace('in')] = this.props.active;

    return React.createElement(
      'div',
      { className: classNames(classSet) },
      this.props.children
    );
  }
});

module.exports = Tabs;
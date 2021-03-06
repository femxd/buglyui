'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var PropTypes = require('prop-types');
var classNames = require('classnames');
var createReactClass = require('create-react-class');
var omit = require('object.omit');
var ClassNameMixin = require('./mixins/ClassNameMixin');
var Icon = require('./Icon');
var AvgGrid = require('./AvgGrid');

var Menu = createReactClass({
  mixins: [ClassNameMixin],

  propTypes: {
    classprefix: PropTypes.string,
    theme: PropTypes.oneOf(['default', 'dropdown1', 'dropdown2', 'slide1', 'stack']),
    data: PropTypes.array,
    onSelect: PropTypes.func,
    toggleTitle: PropTypes.string,
    toggleCustomIcon: PropTypes.string,
    toggleIcon: PropTypes.string,
    cols: PropTypes.number
  },

  getDefaultProps: function getDefaultProps() {
    return {
      classprefix: 'menu',
      theme: 'default',
      data: [],
      onSelect: function onSelect() {}
    };
  },

  getInitialState: function getInitialState() {
    return {
      data: this.props.data,
      expanded: !this.isDropdown()
    };
  },

  handleClick: function handleClick(nav, index, closeAll, e) {
    if (nav && nav.subMenu) {
      this.handleParentClick(nav, index, closeAll, e);
    }

    this.props.onSelect.call(this, nav, index, e);
  },

  /**
   * handle nav with subMenu click
   * @param {object} nav - clicked nav
   * @param {number} index - clicked nav index
   * @param {bool} closeAll - close all submenu
   * @param {object} e
   */
  handleParentClick: function handleParentClick(nav, index, closeAll, e) {
    e && e.preventDefault();

    var data = this.state.data.map(function (item, i) {
      item.subActive = closeAll ? false : index === i ? !item.subActive : false;
      return item;
    });

    this.setState({
      data: data
    });
  },

  closeAll: function closeAll() {
    this.handleParentClick(null, null, true, undefined);
  },

  // handle toggle button click for dropdown/slide theme
  handleToggle: function handleToggle(e) {
    e && e.preventDefault();
    this.setState({
      expanded: !this.state.expanded
    }, function () {
      !this.state.expanded && this.closeAll();
    }.bind(this));
  },

  isDropdown: function isDropdown() {
    return ['dropdown1', 'dropdown2', 'slide1'].indexOf(this.props.theme) > -1;
  },

  renderMenuToggle: function renderMenuToggle() {
    var title = this.props.toggleTitle ? React.createElement(
      'span',
      {
        className: this.prefixClass('toggle-title')
      },
      this.props.toggleTitle
    ) : null;
    var icon = this.props.toggleCustomIcon ? React.createElement('img', {
      src: this.props.toggleCustomIcon,
      alt: 'Menu Toggle'
    }) : React.createElement(Icon, {
      className: this.prefixClass('toggle-icon'),
      icon: this.props.toggleIcon || 'bars'
    });

    return React.createElement(
      'a',
      {
        href: '#',
        onClick: this.handleToggle,
        className: classNames(this.prefixClass('toggle'), this.state.expanded ? this.setClassNamespace('active') : null)
      },
      title,
      icon
    );
  },

  renderNavs: function renderNavs() {
    var _this = this;
    var openClassName = this.setClassNamespace('open');
    var inClassName = this.setClassNamespace('in');

    return this.state.data.map(function (nav, i) {
      var Link = nav.component || 'a';
      var LinkProps = nav.props || {};

      return React.createElement(
        'li',
        {
          key: i,
          className: classNames(nav.subMenu ? _this.setClassNamespace('parent') : null, nav.subActive ? openClassName : null)
        },
        React.createElement(
          Link,
          _extends({
            onClick: _this.handleClick.bind(_this, nav, i, false),
            href: nav.link
          }, LinkProps),
          nav.title
        ),
        nav.subMenu ? React.createElement(
          AvgGrid,
          {
            sm: nav.subCols || 1,
            className: classNames(_this.prefixClass('sub'), _this.setClassNamespace('collapse'), nav.subActive ? inClassName : null)
          },
          nav.subMenu.map(function (subNav, index) {
            var SubLink = subNav.component || 'a';
            var SubLinkProps = subNav.props || {};

            return React.createElement(
              'li',
              { key: index },
              React.createElement(
                SubLink,
                _extends({
                  onClick: _this.handleClick.bind(_this, subNav, [i, index], false),
                  target: subNav.target,
                  href: subNav.link
                }, SubLinkProps),
                subNav.title
              )
            );
          })
        ) : null
      );
    });
  },

  render: function render() {
    var classSet = this.getClassSet();
    var props = omit(this.props, 'data');
    var hideTopLevel = !this.state.expanded ? this.setClassNamespace('collapse') : null;

    return React.createElement(
      'nav',
      _extends({}, props, {
        'data-am-widget': this.props.classprefix,
        className: classNames(this.props.className, classSet)
      }),
      this.renderMenuToggle(),
      React.createElement(
        AvgGrid,
        {
          sm: this.props.cols,
          className: classNames(this.prefixClass('nav'), hideTopLevel)
        },
        this.renderNavs()
      )
    );
  }
});

module.exports = Menu;
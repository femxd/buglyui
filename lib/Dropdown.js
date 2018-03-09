'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');
var PropTypes = require('prop-types');
var classNames = require('classnames');
var assign = require('object-assign');
var ClassNameMixin = require('./mixins/ClassNameMixin');
var constants = require('./constants');
var Button = require('./Button');
var Icon = require('./Icon');
var Events = require('./utils/Events');
var isNodeInTree = require('./utils/isNodeInTree');
var createChainedFunction = require('./utils/createChainedFunction');
var canUseDOM = require('./utils/canUseDOM');

var Dropdown = createReactClass({
  mixins: [ClassNameMixin],

  propTypes: {
    title: PropTypes.node.isRequired,
    dropup: PropTypes.bool,
    navItem: PropTypes.bool,
    btnstyle: PropTypes.string,
    btnSize: PropTypes.string,
    btnInlineStyle: PropTypes.object,
    contentInlineStyle: PropTypes.object,
    contentComponent: PropTypes.node,
    toggleClassName: PropTypes.string,
    caretClassName: PropTypes.string,
    contentClassName: PropTypes.string,
    onOpen: PropTypes.func, // open callback
    onClose: PropTypes.func // close callback
  },

  getDefaultProps: function getDefaultProps() {
    return {
      classprefix: 'dropdown',
      contentComponent: 'ul'
    };
  },

  getInitialState: function getInitialState() {
    return {
      open: false
    };
  },

  componentWillMount: function componentWillMount() {
    this.unbindOuterHandlers();
  },

  componentWillUnmount: function componentWillUnmount() {
    this.unbindOuterHandlers();
  },

  /**
   * setDropdown
   * @param {bool} isOpen - Dropdown state, `true` -> open, `close` -> false
   * @param {function} [callback]
   */
  setDropdown: function setDropdown(isOpen, callback) {
    if (isOpen) {
      this.bindOuterHandlers();
    } else {
      this.unbindOuterHandlers();
    }

    this.setState({
      open: isOpen
    }, function () {
      callback && callback();

      isOpen && this.props.onOpen && this.props.onOpen();
      !isOpen && this.props.onClose && this.props.onClose();
    });
  },

  // close dropdown on `esc` keyup
  handleKeyup: function handleKeyup(e) {
    e.keyCode === 27 && this.setDropdown(false);
  },

  // close dropdown when click outer dropdown
  handleOuterClick: function handleOuterClick(e) {
    if (isNodeInTree(e.target, ReactDOM.findDOMNode(this))) {
      return false;
    }

    this.setDropdown(false);
  },

  bindOuterHandlers: function bindOuterHandlers() {
    if (canUseDOM) {
      Events.on(document, 'click', this.handleOuterClick);
      Events.on(document, 'keyup', this.handleKeyup);
    }
  },

  unbindOuterHandlers: function unbindOuterHandlers() {
    if (canUseDOM) {
      Events.off(document, 'click', this.handleOuterClick);
      Events.off(document, 'keyup', this.handleKeyup);
    }
  },

  handleDropdownClick: function handleDropdownClick(e) {
    e.preventDefault();

    this.setDropdown(!this.state.open);
  },

  renderChildren: function renderChildren() {
    var _this = this;

    return React.Children.map(this.props.children, function (child, index) {
      if (React.isValidElement(child)) {
        var closeOnClick = child.props.closeOnClick;
        var onClick = child.props.onClick;
        var handleClick = closeOnClick ? createChainedFunction(onClick, function () {
          _this.setDropdown(false);
        }) : onClick;

        return React.cloneElement(child, assign({}, child.props, {
          key: 'dropdownItem-' + index,
          onClick: handleClick
        }));
      }
    });
  },

  render: function render() {
    var classSet = this.getClassSet();
    var Component = this.props.navItem ? 'li' : 'div';
    var btnclassprefix = this.props.navItem ? '' : 'btn';
    var btnComponent = this.props.navItem ? 'a' : null;
    var caret = React.createElement(Icon, {
      className: this.props.caretClassName,
      icon: 'caret-' + (this.props.dropup ? 'up' : 'down')
    });
    var animation = this.state.open ? this.setClassNamespace('animation-slide-top-fixed') : this.setClassNamespace('dropdown-animation');
    var ContentComponent = this.props.contentComponent;

    classSet[constants.CLASSES.active] = this.state.open;
    classSet[this.prefixClass('up')] = this.props.dropup;

    return React.createElement(
      Component,
      {
        btnstyle: null,
        className: classNames(this.props.className, classSet)
      },
      React.createElement(
        Button,
        {
          onClick: this.handleDropdownClick,
          amstyle: this.props.btnstyle,
          amsize: this.props.btnSize,
          style: this.props.btnInlineStyle,
          className: classNames(this.prefixClass('toggle'), this.props.toggleClassName),
          classprefix: btnclassprefix,
          component: btnComponent,
          ref: 'dropdownToggle'
        },
        this.props.title,
        ' ',
        caret
      ),
      React.createElement(
        ContentComponent,
        {
          ref: 'dropdownContent',
          style: this.props.contentInlineStyle,
          className: classNames(this.prefixClass('content'), animation, this.props.contentClassName)
        },
        this.renderChildren()
      )
    );
  }
});

Dropdown.Item = createReactClass({
  mixins: [ClassNameMixin],

  propTypes: {
    closeOnClick: PropTypes.bool,
    href: PropTypes.string,
    target: PropTypes.string,
    title: PropTypes.string,
    header: PropTypes.bool,
    divider: PropTypes.bool,
    linkComponent: PropTypes.any,
    linkProps: PropTypes.object
  },

  render: function render() {
    var classSet = this.getClassSet();
    var children = null;

    classSet[this.setClassNamespace('dropdown-header')] = this.props.header;

    if (this.props.header) {
      children = this.props.children;
    } else if (!this.props.divider) {
      var Component = this.props.linkComponent || 'a';

      children = React.createElement(
        Component,
        _extends({
          onClick: this.handleClick,
          href: this.props.href,
          target: this.props.target,
          title: this.props.title
        }, this.props.linkProps),
        this.props.children
      );
    }

    return React.createElement(
      'li',
      _extends({}, this.props, {
        title: null,
        href: null,
        className: classNames(this.props.className, classSet)
      }),
      children
    );
  }
});

module.exports = Dropdown;

/*
* TODO:
*   1. 关闭动画
*   2. 位置检测/宽度适应
* */
'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
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

var Dropdown = React.createClass({
  mixins: [ClassNameMixin],

  propTypes: {
    title: React.PropTypes.node.isRequired,
    dropup: React.PropTypes.bool,
    navItem: React.PropTypes.bool,
    btnStyle: React.PropTypes.string,
    btnSize: React.PropTypes.string,
    btnInlineStyle: React.PropTypes.object,
    contentInlineStyle: React.PropTypes.object,
    contentComponent: React.PropTypes.node,
    toggleClassName: React.PropTypes.string,
    caretClassName: React.PropTypes.string,
    contentClassName: React.PropTypes.string,
    onOpen: React.PropTypes.func, // open callback
    onClose: React.PropTypes.func // close callback
  },

  getDefaultProps: function() {
    return {
      classPrefix: 'dropdown',
      contentComponent: 'ul'
    };
  },

  getInitialState: function() {
    return {
      open: false
    };
  },

  componentWillMount: function() {
    this.unbindOuterHandlers();
  },

  componentWillUnmount: function () {
    this.unbindOuterHandlers();
  },

  /**
   * setDropdown
   * @param {bool} isOpen - Dropdown state, `true` -> open, `close` -> false
   * @param {function} [callback]
   */
  setDropdown: function(isOpen, callback) {
    if (isOpen) {
      this.bindOuterHandlers();
    } else {
      this.unbindOuterHandlers();
    }

    this.setState({
      open: isOpen
    }, function() {
      callback && callback();

      isOpen && this.props.onOpen && this.props.onOpen();
      !isOpen && this.props.onClose && this.props.onClose();
    });
  },

  // close dropdown on `esc` keyup
  handleKeyup: function(e) {
    (e.keyCode === 27) && this.setDropdown(false);
  },

  // close dropdown when click outer dropdown
  handleOuterClick: function(e) {
    if (isNodeInTree(e.target, ReactDOM.findDOMNode(this))) {
      return false;
    }

    this.setDropdown(false);
  },

  bindOuterHandlers: function() {
    if (canUseDOM) {
      Events.on(document, 'click', this.handleOuterClick);
      Events.on(document, 'keyup', this.handleKeyup);
    }
  },

  unbindOuterHandlers: function() {
    if (canUseDOM) {
      Events.off(document, 'click', this.handleOuterClick);
      Events.off(document, 'keyup', this.handleKeyup);
    }
  },

  handleDropdownClick: function(e) {
    e.preventDefault();

    this.setDropdown(!this.state.open);
  },

  renderChildren: function() {
    var _this = this;

    return React.Children.map(this.props.children, (child, index) => {
      if (React.isValidElement(child)) {
        var closeOnClick = child.props.closeOnClick;
        var onClick = child.props.onClick;
        var handleClick = closeOnClick ? createChainedFunction(
          onClick,
          function() {
            _this.setDropdown(false);
          }
        ) : onClick;

        return React.cloneElement(
          child,
          assign({}, child.props, {
            key: `dropdownItem-${index}`,
            onClick: handleClick
          })
        )
      }
    });
  },

  render: function() {
    var classSet = this.getClassSet();
    var Component = this.props.navItem ? 'li' : 'div';
    var btnClassPrefix = this.props.navItem ? '' : 'btn';
    var btnComponent = this.props.navItem ? 'a' : null;
    var caret = (
      <Icon
        className={this.props.caretClassName}
        icon={'caret-' + (this.props.dropup ? 'up' : 'down')}
      />
    );
    var animation = this.state.open ?
      this.setClassNamespace('animation-slide-top-fixed') :
      this.setClassNamespace('dropdown-animation');
    var ContentComponent = this.props.contentComponent;

    classSet[constants.CLASSES.active] = this.state.open;
    classSet[this.prefixClass('up')] = this.props.dropup;

    return (
      <Component
        btnStyle={null}
        className={classNames(this.props.className, classSet)}
      >
        <Button
          onClick={this.handleDropdownClick}
          amStyle={this.props.btnStyle}
          amSize={this.props.btnSize}
          style={this.props.btnInlineStyle}
          className={classNames(this.prefixClass('toggle'),
            this.props.toggleClassName)}
          classPrefix={btnClassPrefix}
          component={btnComponent}
          ref="dropdownToggle"
        >
          {this.props.title}
          {' '}
          {caret}
        </Button>
        <ContentComponent
          ref="dropdownContent"
          style={this.props.contentInlineStyle}
          className={classNames(this.prefixClass('content'),
          animation, this.props.contentClassName)}
        >
          {this.renderChildren()}
        </ContentComponent>
      </Component>
    );
  }
});

Dropdown.Item = React.createClass({
  mixins: [ClassNameMixin],

  propTypes: {
    closeOnClick: React.PropTypes.bool,
    href: React.PropTypes.string,
    target: React.PropTypes.string,
    title: React.PropTypes.string,
    header: React.PropTypes.bool,
    divider: React.PropTypes.bool,
    linkComponent: React.PropTypes.any,
    linkProps: React.PropTypes.object
  },

  render: function() {
    var classSet = this.getClassSet();
    var children = null;

    classSet[this.setClassNamespace('dropdown-header')] = this.props.header;

    if (this.props.header) {
      children = this.props.children;
    } else if (!this.props.divider) {
      var Component = this.props.linkComponent || 'a';

      children = (
        <Component
          onClick={this.handleClick}
          href={this.props.href}
          target={this.props.target}
          title={this.props.title}
          {...this.props.linkProps}
        >
          {this.props.children}
        </Component>
      );
    }

    return (
      <li
        {...this.props}
        title={null}
        href={null}
        className={classNames(this.props.className, classSet)}
      >
        {children}
      </li>
    );
  }
});

module.exports = Dropdown;

/*
* TODO:
*   1. 关闭动画
*   2. 位置检测/宽度适应
* */

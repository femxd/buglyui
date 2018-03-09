'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var createReactClass = require('create-react-class');
var PropTypes = require('prop-types');
var classNames = require('classnames');
var ClassNameMixin = require('./mixins/ClassNameMixin');
var omit = require('object.omit');

var Button = createReactClass({
  mixins: [ClassNameMixin],

  propTypes: {
    classprefix: PropTypes.string.isRequired,
    active: PropTypes.bool,
    block: PropTypes.bool,
    disabled: PropTypes.bool,
    radius: PropTypes.bool,
    round: PropTypes.bool,
    component: PropTypes.node,
    href: PropTypes.string,
    target: PropTypes.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      classprefix: 'btn',
      type: 'button',
      amstyle: 'default'
    };
  },

  renderAnchor: function renderAnchor(classSet) {
    var Component = this.props.component || 'a';
    var href = this.props.href || '#';
    var props = omit(this.props, 'type');

    return React.createElement(
      Component,
      _extends({}, props, {
        href: href,
        className: classNames(this.props.className, classSet),
        role: 'button'
      }),
      this.props.children
    );
  },

  renderButton: function renderButton(classSet) {
    var Component = this.props.component || 'button';

    return React.createElement(
      Component,
      _extends({}, this.props, {
        className: classNames(this.props.className, classSet)
      }),
      this.props.children
    );
  },

  render: function render() {
    var classSet = this.getClassSet();
    var renderType = this.props.href || this.props.target ? 'renderAnchor' : 'renderButton';

    // block button
    classSet[this.prefixClass('block')] = this.props.block;

    return this[renderType](classSet);
  }
});

module.exports = Button;
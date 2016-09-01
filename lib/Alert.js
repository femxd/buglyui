'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var classNames = require('classnames');
var ClassNameMixin = require('./mixins/ClassNameMixin');

var Alert = React.createClass({
  displayName: 'Alert',

  mixins: [ClassNameMixin],

  propTypes: {
    classPrefix: React.PropTypes.string.isRequired,
    amStyle: React.PropTypes.oneOf(['secondary', 'success', 'warning', 'danger']),
    onClose: React.PropTypes.func
  },

  getDefaultProps: function getDefaultProps() {
    return {
      classPrefix: 'alert'
    };
  },

  renderCloseBtn: function renderCloseBtn() {
    return React.createElement(
      'button',
      {
        type: 'button',
        className: this.setClassNamespace('close'),
        onClick: this.props.onClose
      },
      '×'
    );
  },

  render: function render() {
    var classSet = this.getClassSet();
    var isCloseable = !!this.props.onClose;

    if (this.props.amStyle) {
      classSet[this.prefixClass(this.props.amStyle)] = true;
    }

    classSet[this.prefixClass('closeable')] = isCloseable;

    return React.createElement(
      'div',
      _extends({}, this.props, {
        className: classNames(this.props.className, classSet)
      }),
      isCloseable ? this.renderCloseBtn() : null,
      this.props.children
    );
  }
});

module.exports = Alert;
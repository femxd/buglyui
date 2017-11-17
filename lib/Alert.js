'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var createReactClass = require('create-react-class');
var PropTypes = require('prop-types');
var classNames = require('classnames');
var ClassNameMixin = require('./mixins/ClassNameMixin');

var Alert = createReactClass({
  mixins: [ClassNameMixin],

  propTypes: {
    classPrefix: PropTypes.string.isRequired,
    amStyle: PropTypes.oneOf(['secondary', 'success', 'warning', 'danger']),
    onClose: PropTypes.func
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
      '\xD7'
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
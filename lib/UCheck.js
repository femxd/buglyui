'use strict';

/**
 * Custom radio/checkbox style
 */

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var createReactClass = require('create-react-class');
var PropTypes = require('prop-types');
var classNames = require('classnames');
var ClassNameMixin = require('./mixins/ClassNameMixin');
var Input = require('./Input');
var Icon = require('./Icon');
var constants = require('./constants');

var UCheck = createReactClass({
  mixins: [ClassNameMixin],

  propTypes: {
    type: PropTypes.oneOf(['radio', 'checkbox']),
    disabled: PropTypes.bool,
    amStyle: PropTypes.oneOf(['secondary', 'success', 'warning', 'danger']),
    inline: PropTypes.bool,
    hasFeedback: PropTypes.bool
  },

  getDefaultProps: function getDefaultProps() {
    return {
      type: 'checkbox'
    };
  },

  render: function render() {
    var classSet = {};

    classSet[this.setClassNamespace(this.props.type)] = !this.props.inline;
    classSet[this.setClassNamespace(this.props.type + '-inline')] = this.props.inline;

    if (this.props.amStyle) {
      classSet[this.setClassNamespace(this.props.amStyle)] = true;
    }

    return React.createElement(
      'label',
      { className: classNames(this.props.className, classSet) },
      React.createElement(Input, _extends({}, this.props, {
        ref: 'field',
        className: this.setClassNamespace('ucheck-checkbox'),
        standalone: true
      })),
      React.createElement(
        'span',
        { className: this.setClassNamespace('ucheck-icons') },
        React.createElement(Icon, { icon: 'unchecked' }),
        React.createElement(Icon, { icon: 'checked' })
      ),
      this.props.label
    );
  }
});

module.exports = UCheck;
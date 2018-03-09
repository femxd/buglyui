'use strict';

var React = require('react');
var createReactClass = require('create-react-class');
var PropTypes = require('prop-types');
var classNames = require('classnames');
var ClassNameMixin = require('./mixins/ClassNameMixin');

var FormGroup = createReactClass({
  mixins: [ClassNameMixin],

  propTypes: {
    validation: PropTypes.string,
    amsize: PropTypes.oneOf(['sm', 'lg']),
    hasFeedback: PropTypes.bool
  },

  render: function render() {
    var classSet = {};

    classSet[this.setClassNamespace('form-group')] = true;
    this.props.validation && (classSet[this.setClassNamespace('form-' + this.props.validation)] = true);
    classSet[this.setClassNamespace('form-feedback')] = this.props.hasFeedback;
    classSet[this.setClassNamespace('form-icon')] = this.props.hasFeedback;

    if (this.props.amsize) {
      classSet[this.setClassNamespace('form-group-' + this.props.amsize)] = true;
    }

    return React.createElement(
      'div',
      { className: classNames(classSet, this.props.className) },
      this.props.children
    );
  }
});

module.exports = FormGroup;
'use strict';

/**
 * Custom radio/checkbox style
 */

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
    amstyle: PropTypes.oneOf(['secondary', 'success', 'warning',
      'danger']),
    inline: PropTypes.bool,
    hasFeedback: PropTypes.bool
  },

  getDefaultProps: function() {
    return {
      type: 'checkbox'
    };
  },

  render: function() {
    var classSet = {};

    classSet[this.setClassNamespace(this.props.type)] = !this.props.inline;
    classSet[this.setClassNamespace(this.props.type + '-inline')] =
      this.props.inline;

    if (this.props.amstyle) {
      classSet[this.setClassNamespace(this.props.amstyle)] = true;
    }

    return (
      <label className={classNames(this.props.className, classSet)}>
        <Input
          {...this.props}
          ref="field"
          className={this.setClassNamespace('ucheck-checkbox')}
          standalone="on"
        />

        <span className={this.setClassNamespace('ucheck-icons')}>
          <Icon icon="unchecked" />
          <Icon icon="checked" />
        </span>

        {this.props.label}
      </label>
    );
  }
});

module.exports = UCheck;

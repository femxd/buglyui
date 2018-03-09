'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var createReactClass = require('create-react-class');
var PropTypes = require('prop-types');
var classNames = require('classnames');
var ClassNameMixin = require('./mixins/ClassNameMixin');

var Divider = createReactClass({
  mixins: [ClassNameMixin],

  propTypes: {
    theme: PropTypes.oneOf(['default', 'dotted', 'dashed']),
    classprefix: PropTypes.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      classprefix: 'divider',
      theme: 'default'
    };
  },

  render: function render() {
    var classSet = this.getClassSet();

    return React.createElement('hr', _extends({}, this.props, {
      'data-am-widget': this.props.classprefix,
      className: classNames(this.props.className, classSet)
    }));
  }
});

module.exports = Divider;
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var createReactClass = require('create-react-class');
var PropTypes = require('prop-types');
var classNames = require('classnames');
var ClassNameMixin = require('./mixins/ClassNameMixin');

var Container = createReactClass({
  mixins: [ClassNameMixin],

  propTypes: {
    classprefix: PropTypes.string.isRequired,
    component: PropTypes.node.isRequired
  },

  getDefaultProps: function getDefaultProps() {
    return {
      classprefix: 'container',
      component: 'div'
    };
  },

  render: function render() {
    var Component = this.props.component;
    var classSet = this.getClassSet();

    return React.createElement(
      Component,
      _extends({}, this.props, {
        className: classNames(this.props.className, classSet)
      }),
      this.props.children
    );
  }
});

module.exports = Container;
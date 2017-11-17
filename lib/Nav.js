'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var PropTypes = require('prop-types');
var createReactClass = require('create-react-class');
var classNames = require('classnames');
var ClassNameMixin = require('./mixins/ClassNameMixin');

var Nav = createReactClass({
  mixins: [ClassNameMixin],

  propTypes: {
    justify: PropTypes.bool,
    pills: PropTypes.bool,
    tabs: PropTypes.bool,
    component: PropTypes.node.isRequired
  },

  getDefaultProps: function getDefaultProps() {
    return {
      classPrefix: 'nav',
      component: 'ul'
    };
  },

  render: function render() {
    var classes = this.getClassSet();
    var Component = this.props.component;

    // set classes
    classes[this.prefixClass('pills')] = this.props.pills || this.props.topbar;
    classes[this.prefixClass('tabs')] = this.props.tabs;
    classes[this.prefixClass('justify')] = this.props.justify;

    // topbar class
    classes[this.setClassNamespace('topbar-nav')] = this.props.topbar;

    return React.createElement(
      Component,
      _extends({}, this.props, {
        className: classNames(classes, this.props.className)
      }),
      this.props.children
    );
  }
});

module.exports = Nav;
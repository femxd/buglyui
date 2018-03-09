'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var PropTypes = require('prop-types');
var createReactClass = require('create-react-class');
var classNames = require('classnames');
var ClassNameMixin = require('./mixins/ClassNameMixin');

var Icon = createReactClass({
  mixins: [ClassNameMixin],

  propTypes: {
    amstyle: PropTypes.string,
    fw: PropTypes.bool,
    spin: PropTypes.bool,
    button: PropTypes.bool,
    size: PropTypes.string,
    href: PropTypes.string,
    component: PropTypes.node.isRequired,
    icon: PropTypes.string.isRequired
  },

  getDefaultProps: function getDefaultProps() {
    return {
      classprefix: 'icon',
      component: 'span'
    };
  },

  render: function render() {
    var classes = this.getClassSet(true);
    var props = this.props;
    var Component = props.href ? 'a' : props.component;
    var prefixClass = this.prefixClass;
    var setClassNamespace = this.setClassNamespace;

    // am-icon-[iconName]
    classes[prefixClass(props.icon)] = true;

    // am-icon-btn
    classes[prefixClass('btn')] = props.button;

    // button style
    props.button && props.amstyle && (classes[setClassNamespace(props.amstyle)] = true);

    // am-icon-fw
    classes[prefixClass('fw')] = props.fw;

    // am-icon-spin
    classes[prefixClass('spin')] = props.spin;

    return React.createElement(
      Component,
      _extends({}, props, {
        className: classNames(classes, this.props.className)
      }),
      this.props.children
    );
  }
});

module.exports = Icon;
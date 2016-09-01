'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var classNames = require('classnames');
var ClassNameMixin = require('./mixins/ClassNameMixin');

var Badge = React.createClass({
  displayName: 'Badge',

  mixins: [ClassNameMixin],

  propTypes: {
    component: React.PropTypes.node,
    href: React.PropTypes.string,
    round: React.PropTypes.bool,
    radius: React.PropTypes.bool
  },

  getDefaultProps: function getDefaultProps() {
    return {
      classPrefix: 'badge',
      component: 'span'
    };
  },

  renderAnchor: function renderAnchor(classSet) {
    var Component = this.props.component || 'a';
    var href = this.props.href || '#';

    return React.createElement(
      Component,
      _extends({}, this.props, {
        href: href,
        className: classNames(classSet, this.props.className),
        role: 'badge'
      }),
      this.props.children
    );
  },

  render: function render() {
    var classSet = this.getClassSet();
    var Component = this.props.component;
    var renderAnchor = this.props.href;

    if (renderAnchor) {
      return this.renderAnchor(classSet);
    }

    return React.createElement(
      Component,
      _extends({}, this.props, {
        className: classNames(classSet, this.props.className)
      }),
      this.props.children
    );
  }
});

module.exports = Badge;
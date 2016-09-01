'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var classNames = require('classnames');
var assign = require('object-assign');
var ClassNameMixin = require('./mixins/ClassNameMixin');

var Breadcrumb = React.createClass({
  displayName: 'Breadcrumb',

  mixins: [ClassNameMixin],

  propTypes: {
    slash: React.PropTypes.bool,
    component: React.PropTypes.node.isRequired
  },

  getDefaultProps: function getDefaultProps() {
    return {
      classPrefix: 'breadcrumb',
      component: 'ul'
    };
  },

  render: function render() {
    var classes = this.getClassSet();
    var Component = this.props.component;

    classes[this.prefixClass('slash')] = this.props.slash;

    return React.createElement(
      Component,
      _extends({}, this.props, {
        className: classNames(classes, this.props.className)
      }),
      this.props.children
    );
  }
});

Breadcrumb.Item = React.createClass({
  displayName: 'Item',

  mixins: [ClassNameMixin],

  propTypes: {
    active: React.PropTypes.bool,
    href: React.PropTypes.string,
    title: React.PropTypes.string,
    target: React.PropTypes.string,
    component: React.PropTypes.any,
    linkComponent: React.PropTypes.any,
    linkProps: React.PropTypes.object
  },

  getDefaultProps: function getDefaultProps() {
    return {
      component: 'li'
    };
  },


  renderAnchor: function renderAnchor(classes) {
    var Component = this.props.component;
    var linkComponent = this.props.linkComponent || 'a';

    return React.createElement(
      Component,
      _extends({}, this.props, {
        className: classes
      }),
      React.createElement(linkComponent, assign({
        href: this.props.href,
        title: this.props.title,
        target: this.props.target
      }, this.props.linkProps), this.props.children)
    );
  },

  render: function render() {
    var classes = classNames(this.props.className);
    var Component = this.props.component;

    if (this.props.href || this.props.linkComponent) {
      return this.renderAnchor(classes);
    }

    return React.createElement(
      Component,
      _extends({}, this.props, {
        className: classes
      }),
      this.props.children
    );
  }
});

module.exports = Breadcrumb;
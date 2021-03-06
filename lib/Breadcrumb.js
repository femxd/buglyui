'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var createReactClass = require('create-react-class');
var PropTypes = require('prop-types');
var classNames = require('classnames');
var assign = require('object-assign');
var ClassNameMixin = require('./mixins/ClassNameMixin');

var Breadcrumb = createReactClass({
  mixins: [ClassNameMixin],

  propTypes: {
    slash: PropTypes.bool,
    component: PropTypes.node.isRequired
  },

  getDefaultProps: function getDefaultProps() {
    return {
      classprefix: 'breadcrumb',
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

Breadcrumb.Item = createReactClass({
  mixins: [ClassNameMixin],

  propTypes: {
    active: PropTypes.bool,
    href: PropTypes.string,
    title: PropTypes.string,
    target: PropTypes.string,
    component: PropTypes.any,
    linkComponent: PropTypes.any,
    linkProps: PropTypes.object
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
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var PropTypes = require('prop-types');
var createReactClass = require('create-react-class');
var classNames = require('classnames');
var assign = require('object-assign');
var ClassNameMixin = require('./mixins/ClassNameMixin');

var ListItem = createReactClass({
  mixins: [ClassNameMixin],

  propTypes: {
    href: PropTypes.string,
    truncate: PropTypes.bool,
    component: PropTypes.any.isRequired,
    linkComponent: PropTypes.any,
    linkProps: PropTypes.object
  },

  getDefaultProps: function getDefaultProps() {
    return {
      component: 'li'
    };
  },

  render: function render() {
    var classes = {};
    var Component = this.props.component;

    // set .am-text-truncate
    classes['am-text-truncate'] = this.props.truncate;

    // render Anchor
    if (this.props.href || this.props.linkComponent) {
      return this.renderAnchor(classes);
    }

    return React.createElement(
      Component,
      _extends({}, this.props, {
        className: classNames(classes, this.props.className)
      }),
      this.props.children
    );
  },

  renderAnchor: function renderAnchor(classes) {
    var props = this.props;
    var Component = props.component;
    var truncate = props.truncate ? 'am-text-truncate' : '';
    var linkComponent = this.props.linkComponent || 'a';

    return React.createElement(
      Component,
      _extends({}, props, {
        className: classNames(classes, this.props.className)
      }),
      React.createElement(linkComponent, assign({
        className: truncate,
        href: this.props.href,
        title: this.props.title,
        target: this.props.target
      }, this.props.linkProps), this.props.children)
    );
  }
});

module.exports = ListItem;
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var createReactClass = require('create-react-class');
var PropTypes = require('prop-types');
var classNames = require('classnames');
var ClassNameMixin = require('./mixins/ClassNameMixin');

var Code = createReactClass({
  mixins: [ClassNameMixin],

  propTypes: {
    language: PropTypes.string,
    escape: PropTypes.bool,
    highlight: PropTypes.func
  },

  getDefaultProps: function getDefaultProps() {},

  escape: function escape(html) {
    return html.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  },

  render: function render() {
    var langClassName = this.props.language && 'language-' + this.props.language;
    var children = this.props.children;

    if (this.props.escape) {
      children = this.escape(children);
    }

    if (this.props.highlight) {
      children = this.props.highlight(language, children);
    }

    return React.createElement(
      'pre',
      _extends({}, this.props, {
        className: classNames(this.props.className, langClassName)
      }),
      children
    );
  }
});

module.exports = Code;
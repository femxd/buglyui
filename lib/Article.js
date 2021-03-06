'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var PropTypes = require('prop-types');
var classNames = require('classnames');
var createReactClass = require('create-react-class');
var ClassNameMixin = require('./mixins/ClassNameMixin');

var Article = createReactClass({
  mixins: [ClassNameMixin],

  propTypes: {
    classprefix: PropTypes.string,
    title: PropTypes.node,
    meta: PropTypes.node,
    lead: PropTypes.node
  },

  getDefaultProps: function getDefaultProps() {
    return {
      classprefix: 'article'
    };
  },

  render: function render() {
    var classSet = this.getClassSet();

    return React.createElement(
      'article',
      _extends({}, this.props, {
        className: classNames(classSet, this.props.className)
      }),
      React.createElement(
        'header',
        { className: this.prefixClass('hd') },
        this.props.title ? React.createElement(
          Article.Child,
          { role: 'title' },
          this.props.title
        ) : null,
        this.props.meta ? React.createElement(
          Article.Child,
          { role: 'meta' },
          this.props.meta
        ) : null
      ),
      React.createElement(
        'div',
        { className: this.prefixClass('bd') },
        this.props.lead ? React.createElement(
          Article.Child,
          { role: 'lead' },
          this.props.lead
        ) : null,
        this.props.children
      )
    );
  }
});

Article.Child = createReactClass({
  mixins: [ClassNameMixin],

  propTypes: {
    role: PropTypes.string.isRequired
  },

  getDefaultProps: function getDefaultProps() {
    return {
      role: 'title'
    };
  },

  render: function render() {
    var role = this.props.role;
    var Component;
    var classes = classNames(this.props.className, this.setClassNamespace('article-' + role));

    switch (role) {
      case 'meta':
      case 'lead':
        Component = 'p';
        break;
      case 'title':
        Component = 'h1';
        break;
      default:
        Component = 'div';
    }

    return role === 'divider' ? React.createElement('hr', _extends({}, this.props, {
      className: classes
    })) : React.createElement(
      Component,
      _extends({}, this.props, {
        className: classes
      }),
      this.props.children
    );
  }
});

module.exports = Article;
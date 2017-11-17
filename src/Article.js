'use strict';

var React = require('react');
var PropTypes = require('prop-types');
var classNames = require('classnames');
var createReactClass = require('create-react-class');
var ClassNameMixin = require('./mixins/ClassNameMixin');

var Article = createReactClass({
  mixins: [ClassNameMixin],

  propTypes: {
    classPrefix: PropTypes.string,
    title: PropTypes.node,
    meta: PropTypes.node,
    lead: PropTypes.node
  },

  getDefaultProps: function() {
    return {
      classPrefix: 'article'
    };
  },

  render: function() {
    var classSet = this.getClassSet();

    return (
      <article
        {...this.props}
        className={classNames(classSet, this.props.className)}
      >
        <header className={this.prefixClass('hd')}>
          {this.props.title ? (
            <Article.Child role="title">
              {this.props.title}
            </Article.Child>
          ) : null}

          {this.props.meta ? (
            <Article.Child role="meta">
              {this.props.meta}
            </Article.Child>
          ) : null}
        </header>
        <div className={this.prefixClass('bd')}>
          {this.props.lead ? (
            <Article.Child role="lead">
              {this.props.lead}
            </Article.Child>
          ) : null}
          {this.props.children}
        </div>
      </article>
    );
  }
});

Article.Child = createReactClass({
  mixins: [ClassNameMixin],

  propTypes: {
    role: PropTypes.string.isRequired
  },

  getDefaultProps: function() {
    return {
      role: 'title'
    };
  },

  render: function() {
    var role = this.props.role;
    var Component;
    var classes = classNames(
      this.props.className,
      this.setClassNamespace('article-' + role)
    );

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

    return role === 'divider' ? (
      <hr
        {...this.props}
        className={classes}
      />
    ) : (
      <Component
        {...this.props}
        className={classes}
      >
        {this.props.children}
      </Component>
    );
  }
});

module.exports = Article;

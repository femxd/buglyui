'use strict';

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

  getDefaultProps: function() {
    return {
      classPrefix: 'breadcrumb',
      component: 'ul'
    };
  },

  render: function() {
    var classes = this.getClassSet();
    var Component = this.props.component;

    classes[this.prefixClass('slash')] = this.props.slash;

    return (
      <Component
        {...this.props}
        className={classNames(classes, this.props.className)}
      >
        {this.props.children}
      </Component>
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

  getDefaultProps() {
    return {
      component: 'li'
    };
  },

  renderAnchor: function(classes) {
    var Component = this.props.component;
    var linkComponent = this.props.linkComponent || 'a';

    return (
      <Component
        {...this.props}
        className={classes}
      >
        {
          React.createElement(
            linkComponent,
            assign({
              href: this.props.href,
              title: this.props.title,
              target: this.props.target
            }, this.props.linkProps),
            this.props.children
          )
        }
      </Component>
    );
  },

  render: function() {
    var classes = classNames(this.props.className);
    var Component = this.props.component;

    if (this.props.href || this.props.linkComponent) {
      return this.renderAnchor(classes);
    }

    return (
      <Component
        {...this.props}
        className={classes}
      >
        {this.props.children}
      </Component>
    );
  }
});

module.exports = Breadcrumb;

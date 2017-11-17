'use strict';

var React = require('react');
var PropTypes = require('prop-types');
var createReactClass = require('create-react-class');
var classNames = require('classnames');
var ClassNameMixin = require('./mixins/ClassNameMixin');

var Badge = createReactClass({
  mixins: [ClassNameMixin],

  propTypes: {
    component: PropTypes.node,
    href: PropTypes.string,
    round: PropTypes.bool,
    radius: PropTypes.bool
  },

  getDefaultProps: function () {
    return {
      classPrefix: 'badge',
      component: 'span'
    };
  },

  renderAnchor: function (classSet) {
    var Component = this.props.component || 'a';
    var href = this.props.href || '#';

    return (
      <Component
        {...this.props}
        href={href}
        className={classNames(classSet, this.props.className)}
        role="badge"
      >
        {this.props.children}
      </Component>
    );
  },

  render: function () {
    var classSet = this.getClassSet();
    var Component = this.props.component;
    var renderAnchor = this.props.href;

    if (renderAnchor) {
      return this.renderAnchor(classSet);
    }

    return (
      <Component
        {...this.props}
        className={classNames(classSet, this.props.className)}
      >
        {this.props.children}
      </Component>
    );
  }
});

module.exports = Badge;

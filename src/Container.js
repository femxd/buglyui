'use strict';

var React = require('react');
var createReactClass = require('create-react-class');
var PropTypes = require('prop-types');
var classNames = require('classnames');
var ClassNameMixin = require('./mixins/ClassNameMixin');

var Container = createReactClass({
  mixins: [ClassNameMixin],

  propTypes: {
    classprefix: PropTypes.string.isRequired,
    component: PropTypes.node.isRequired
  },

  getDefaultProps: function() {
    return {
      classprefix: 'container',
      component: 'div'
    };
  },

  render: function() {
    var Component = this.props.component;
    var classSet = this.getClassSet();

    return (
      <Component
        {...this.props}
        className={classNames(this.props.className, classSet)}
      >
        {this.props.children}
      </Component>
    );
  }
});

module.exports = Container;

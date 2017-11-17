'use strict';

var React = require('react');
var createReactClass = require('create-react-class');
var PropTypes = require('prop-types');
var classNames = require('classnames');
var ClassNameMixin = require('./mixins/ClassNameMixin');

var Grid = createReactClass({
  mixins: [ClassNameMixin],

  propTypes: {
    classPrefix: PropTypes.string.isRequired,
    component: PropTypes.node.isRequired,
    collapse: PropTypes.bool,
    fixed: PropTypes.bool
  },

  getDefaultProps: function() {
    return {
      classPrefix: 'g',
      component: 'div'
    };
  },

  render: function() {
    var Component = this.props.component;
    var classSet = this.getClassSet();
    var props = this.props;

    // .am-g-fixed
    classSet[this.prefixClass('fixed')] = props.fixed;

    // .am-g-collapse
    classSet[this.prefixClass('collapse')] = props.collapse;

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

module.exports = Grid;

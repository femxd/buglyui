'use strict';

var React = require('react');
var createReactClass = require('create-react-class');
var PropTypes = require('prop-types');
var classNames = require('classnames');
var ClassNameMixin = require('./mixins/ClassNameMixin');

var AvgGrid = createReactClass({
  mixins: [ClassNameMixin],

  propTypes: {
    classprefix: PropTypes.string.isRequired,
    component: PropTypes.node,
    sm: PropTypes.number,
    md: PropTypes.number,
    lg: PropTypes.number
  },

  getDefaultProps: function() {
    return {
      classprefix: 'avg',
      component: 'ul'
    };
  },

  render: function() {
    var Component = this.props.component;
    var classSet = {};
    var prefixClass = this.prefixClass;
    var props = this.props;

    ['sm', 'md', 'lg'].forEach(function(size) {
      if (props[size]) {
        classSet[prefixClass(size + '-' + props[size])] = true;
      }
    });

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

module.exports = AvgGrid;

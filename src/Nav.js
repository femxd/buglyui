'use strict';

var React = require('react');
var PropTypes = require('prop-types');
var createReactClass = require('create-react-class');
var classNames = require('classnames');
var ClassNameMixin = require('./mixins/ClassNameMixin');

var Nav = createReactClass({
  mixins: [ClassNameMixin],

  propTypes: {
    justify: PropTypes.bool,
    pills: PropTypes.bool,
    tabs: PropTypes.bool,
    component: PropTypes.node.isRequired
  },

  getDefaultProps: function() {
    return {
      classPrefix: 'nav',
      component: 'ul'
    };
  },

  render: function() {
    var classes = this.getClassSet();
    var Component = this.props.component;

    // set classes
    classes[this.prefixClass('pills')] = this.props.pills || this.props.topbar;
    classes[this.prefixClass('tabs')] = this.props.tabs;
    classes[this.prefixClass('justify')] = this.props.justify;

    // topbar class
    classes[this.setClassNamespace('topbar-nav')] = this.props.topbar;

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

module.exports = Nav;

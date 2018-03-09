'use strict';

var React = require('react');
var PropTypes = require('prop-types');
var createReactClass = require('create-react-class');
var classNames = require('classnames');
var ClassNameMixin = require('./mixins/ClassNameMixin');

var Icon = createReactClass({
  mixins: [ClassNameMixin],

  propTypes: {
    amstyle: PropTypes.string,
    fw: PropTypes.bool,
    spin: PropTypes.bool,
    button: PropTypes.bool,
    size: PropTypes.string,
    href: PropTypes.string,
    component: PropTypes.node.isRequired,
    icon: PropTypes.string.isRequired
  },

  getDefaultProps: function() {
    return {
      classprefix: 'icon',
      component: 'span'
    };
  },

  render: function() {
    var classes = this.getClassSet(true);
    var props = this.props;
    var Component = props.href ? 'a' : props.component;
    var prefixClass = this.prefixClass;
    var setClassNamespace = this.setClassNamespace;

    // am-icon-[iconName]
    classes[prefixClass(props.icon)] = true;

    // am-icon-btn
    classes[prefixClass('btn')] = props.button;

    // button style
    props.button && props.amstyle &&
    (classes[setClassNamespace(props.amstyle)] = true);

    // am-icon-fw
    classes[prefixClass('fw')] = props.fw;

    // am-icon-spin
    classes[prefixClass('spin')] = props.spin;

    return (
      <Component
        {...props}
        className={classNames(classes, this.props.className)}
      >
        {this.props.children}
      </Component>
    );
  }
});

module.exports = Icon;

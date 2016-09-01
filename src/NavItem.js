'use strict';

var React = require('react');
var classNames = require('classnames');
var assign = require('object-assign');
var omit = require('object.omit');
var ClassNameMixin = require('./mixins/ClassNameMixin');

var NavItem = React.createClass({
  mixins: [ClassNameMixin],

  propTypes: {
    active: React.PropTypes.bool,
    disabled: React.PropTypes.bool,
    header: React.PropTypes.bool,
    divider: React.PropTypes.bool,
    href: React.PropTypes.any,
    component: React.PropTypes.any,
    linkComponent: React.PropTypes.any,
    linkProps: React.PropTypes.object
  },

  getDefaultProps: function() {
    return {
      classPrefix: 'nav',
      component: 'li'
    };
  },

  render: function() {
    var classes = this.getClassSet();
    var props = this.props;
    var Component = props.component;

    // del am-nav
    classes[this.setClassNamespace(props.classPrefix)] = false;

    // set classes
    classes[this.prefixClass('header')] = props.header;
    classes[this.prefixClass('divider')] = props.divider;

    if (props.href || props.linkComponent) {
      return this.renderAnchor(classes);
    }

    return (
      <Component
        {...props}
        className={classNames(classes, props.className)}
      >
        {this.props.children}
      </Component>
    );
  },

  renderAnchor: function(classes) {
    var Component = this.props.component;
    var linkComponent = this.props.linkComponent || 'a';
    var style = {};

    this.props.disabled && (style.pointerEvents = 'none');

    var linkProps = {
      href: this.props.href,
      title: this.props.tilte,
      target: this.props.target,
      style: style
    };

    return (
      <Component
        {...omit(this.props, ['href', 'target', 'title', 'disabled'])}
        className={classNames(classes, this.props.className)}
      >
        {
          React.createElement(
            linkComponent,
            assign(linkProps, this.props.linkProps),
            this.props.children
          )
        }
      </Component>
    );
  }
});

module.exports = NavItem;

// TODO: DropDown Tab 处理

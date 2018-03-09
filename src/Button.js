'use strict';

var React = require('react');
var createReactClass = require('create-react-class');
var PropTypes = require('prop-types');
var classNames = require('classnames');
var ClassNameMixin = require('./mixins/ClassNameMixin');
var omit = require('object.omit');

var Button = createReactClass({
  mixins: [ClassNameMixin],

  propTypes: {
    classprefix: PropTypes.string.isRequired,
    active: PropTypes.bool,
    block: PropTypes.bool,
    disabled: PropTypes.bool,
    radius: PropTypes.bool,
    round: PropTypes.bool,
    component: PropTypes.node,
    href: PropTypes.string,
    target: PropTypes.string
  },

  getDefaultProps: function() {
    return {
      classprefix: 'btn',
      type: 'button',
      amstyle: 'default'
    };
  },

  renderAnchor: function(classSet) {
    var Component = this.props.component || 'a';
    var href = this.props.href || '#';
    var props = omit(this.props, 'type');

    return (
      <Component
        {...props}
        href={href}
        className={classNames(this.props.className, classSet)}
        role="button"
      >
        {this.props.children}
      </Component>
    );
  },

  renderButton: function(classSet) {
    var Component = this.props.component || 'button';

    return (
      <Component
        {...this.props}
        className={classNames(this.props.className, classSet)}
      >
        {this.props.children}
      </Component>
    );
  },

  render: function() {
    var classSet = this.getClassSet();
    var renderType = this.props.href || this.props.target ?
      'renderAnchor' : 'renderButton';

    // block button
    classSet[this.prefixClass('block')] = this.props.block;

    return this[renderType](classSet);
  }
});

module.exports = Button;

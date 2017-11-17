'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var createReactClass = require('create-react-class');
var PropTypes = require('prop-types');
var classNames = require('classnames');
var ClassNameMixin = require('./mixins/ClassNameMixin');
var Icon = require('./Icon');

var Close = createReactClass({
  mixins: [ClassNameMixin],

  propTypes: {
    classPrefix: PropTypes.string.isRequired,
    component: PropTypes.node,
    spin: PropTypes.bool,
    alt: PropTypes.bool,
    icon: PropTypes.bool
  },

  getDefaultProps: function getDefaultProps() {
    return {
      classPrefix: 'close',
      type: 'button'
    };
  },

  render: function render() {
    var Component = this.props.component || 'button';
    var classSet = this.getClassSet();
    var props = this.props;

    // transfer type
    if (Component !== 'button') {
      props.type = undefined;
    }

    // className am-close-alt am-close-spin
    classSet[this.prefixClass('alt')] = this.props.alt;
    classSet[this.prefixClass('spin')] = this.props.spin;

    return React.createElement(
      Component,
      _extends({}, props, {
        className: classNames(classSet, this.props.className),
        role: 'close'
      }),
      this.props.icon ? React.createElement(Icon, { icon: 'times' }) : '\xD7'
    );
  }
});

module.exports = Close;
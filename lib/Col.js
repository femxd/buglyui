'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var createReactClass = require('create-react-class');
var PropTypes = require('prop-types');
var classNames = require('classnames');
var ClassNameMixin = require('./mixins/ClassNameMixin');

var Col = createReactClass({
  mixins: [ClassNameMixin],

  propTypes: {
    sm: PropTypes.number,
    md: PropTypes.number,
    lg: PropTypes.number,
    smOffset: PropTypes.number,
    mdOffset: PropTypes.number,
    lgOffset: PropTypes.number,
    smPush: PropTypes.number,
    mdPush: PropTypes.number,
    lgPush: PropTypes.number,
    smPull: PropTypes.number,
    mdPull: PropTypes.number,
    lgPull: PropTypes.number,
    classPrefix: PropTypes.string.isRequired,
    component: PropTypes.node.isRequired,
    end: PropTypes.bool
  },

  getDefaultProps: function getDefaultProps() {
    return {
      classPrefix: 'u',
      component: 'div'
    };
  },

  render: function render() {
    var Component = this.props.component;
    var classSet = {};
    var props = this.props;
    var prefixClass = this.prefixClass;

    ['sm', 'md', 'lg'].forEach(function (size) {
      var prop = size;

      if (props[size]) {
        classSet[prefixClass(size + '-' + props[prop])] = true;
      }

      prop = size + 'Offset';
      if (props[prop] >= 0) {
        classSet[prefixClass(size + '-offset-') + props[prop]] = true;
      }

      prop = size + 'Push';
      if (props[prop] >= 0) {
        classSet[prefixClass(size + '-push-') + props[prop]] = true;
      }

      prop = size + 'Pull';
      if (props[prop] >= 0) {
        classSet[prefixClass(size + '-pull-') + props[prop]] = true;
      }

      // `xxResetOrder` prop
      // - smResetOrder
      // - mdResetOrder
      // - lgResetOrder
      if (props[size + 'ResetOrder']) {
        classSet[prefixClass(size + '-reset-order')] = true;
      }

      // `xxCentered` prop
      // - smCentered
      // - mdCentered
      // - lgCentered
      if (props[size + 'Centered']) {
        classSet[prefixClass(size + '-centered')] = true;
      }

      // `xxUnCentered` prop
      // - smUnCentered
      // - mdUnCentered
      // - lgUnCentered
      if (props[size + 'UnCentered']) {
        classSet[prefixClass(size + '-uncentered')] = true;
      }
    });

    // `end` prop - end column
    classSet[prefixClass('end')] = props.end;

    return React.createElement(
      Component,
      _extends({}, this.props, {
        className: classNames(this.props.className, classSet)
      }),
      this.props.children
    );
  }
});

module.exports = Col;
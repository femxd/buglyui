'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var createReactClass = require('create-react-class');
var PropTypes = require('prop-types');
var classNames = require('classnames');
var ClassNameMixin = require('./mixins/ClassNameMixin');

var Popover = createReactClass({
  mixins: [ClassNameMixin],

  propTypes: {
    classprefix: PropTypes.string.isRequired,
    placement: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
    positionleft: PropTypes.number,
    positiontop: PropTypes.number,
    amsize: PropTypes.oneOf(['sm', 'lg']),
    amstyle: PropTypes.string,
    disablecaret: PropTypes.bool
  },

  getDefaultProps: function getDefaultProps() {
    return {
      classprefix: 'popover'
    };
  },

  render: function render() {
    var classSet = this.getClassSet();
    var style = {
      left: this.props.positionleft,
      top: this.props.positiontop,
      display: 'block'
    };

    classSet[this.setClassNamespace('active')] = true;
    classSet[this.prefixClass(this.props.placement)] = true;

    return React.createElement(
      'div',
      _extends({}, this.props, {
        style: style,
        className: classNames(classSet, this.props.className)
      }),
      React.createElement(
        'div',
        { className: this.prefixClass('inner') },
        this.props.children
      ),
      !this.props.disablecaret && React.createElement('div', { className: this.prefixClass('caret') })
    );
  }
});

module.exports = Popover;
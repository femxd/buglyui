'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var createReactClass = require('create-react-class');
var PropTypes = require('prop-types');
var classNames = require('classnames');
var ClassNameMixin = require('./mixins/ClassNameMixin');
var AvgGrid = require('./AvgGrid');
var omit = require('object.omit');

var Thumbnails = createReactClass({
  mixins: [ClassNameMixin],

  propTypes: {
    classprefix: PropTypes.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      classprefix: 'thumbnails'
    };
  },

  render: function render() {
    var classes = classNames(this.getClassSet(), this.props.className);
    var props = omit(this.props, 'classprefix');

    return React.createElement(
      AvgGrid,
      _extends({}, props, {
        className: classes
      }),
      React.Children.map(this.props.children, function (child, i) {
        return React.createElement(
          'li',
          { key: i },
          child
        );
      })
    );
  }
});

module.exports = Thumbnails;
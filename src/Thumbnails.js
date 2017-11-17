'use strict';

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
    classPrefix: PropTypes.string
  },

  getDefaultProps: function() {
    return {
      classPrefix: 'thumbnails'
    };
  },

  render: function() {
    var classes = classNames(this.getClassSet(), this.props.className);
    var props = omit(this.props, 'classPrefix');

    return (
      <AvgGrid
        {...props}
        className={classes}
      >
        {React.Children.map(this.props.children, function(child, i) {
          return (
            <li key={i}>
              {child}
            </li>
          );
        })}
      </AvgGrid>
    );
  }
});

module.exports = Thumbnails;

'use strict';

var React = require('react');
var PropTypes = require('prop-types');
var createReactClass = require('create-react-class');
var classNames = require('classnames');
var ClassNameMixin = require('./mixins/ClassNameMixin');

var ButtonGroup = createReactClass({
  mixins: [ClassNameMixin],

  propTypes: {
    classPrefix: PropTypes.string.isRequired,
    stacked: PropTypes.bool,
    justify: PropTypes.bool
  },

  getDefaultProps: function() {
    return {
      classPrefix: 'btn-group'
    };
  },

  render: function() {
    var classSet = this.getClassSet();

    classSet[this.prefixClass('stacked')] = this.props.stacked;
    classSet[this.prefixClass('justify')] = this.props.justify;

    return (
      <div
        {...this.props}
        className={classNames(this.props.className, classSet)}
      >
        {this.props.children}
      </div>
    );
  }
});

module.exports = ButtonGroup;

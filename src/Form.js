'use strict';

var React = require('react');
var createReactClass = require('create-react-class');
var PropTypes = require('prop-types');
var classNames = require('classnames');
var ClassNameMixin = require('./mixins/ClassNameMixin');

var Form = createReactClass({
  mixins: [ClassNameMixin],

  propTypes: {
    classPrefix: PropTypes.string.isRequired,
    horizontal: PropTypes.bool,
    inline: PropTypes.bool
  },

  getDefaultProps: function() {
    return {
      classPrefix: 'form'
    };
  },

  render: function() {
    var classSet = this.getClassSet();

    classSet[this.prefixClass('horizontal')] = this.props.horizontal;
    classSet[this.prefixClass('inline')] = this.props.inline;

    return (
      <form
        {...this.props}
        className={classNames(classSet, this.props.className)}
      >
        {this.props.children}
      </form>
    );
  }
});

module.exports = Form;

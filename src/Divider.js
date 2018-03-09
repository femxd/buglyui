'use strict';

var React = require('react');
var createReactClass = require('create-react-class');
var PropTypes = require('prop-types');
var classNames = require('classnames');
var ClassNameMixin = require('./mixins/ClassNameMixin');

var Divider = createReactClass({
  mixins: [ClassNameMixin],

  propTypes: {
    theme: PropTypes.oneOf(['default', 'dotted', 'dashed']),
    classprefix: PropTypes.string
  },

  getDefaultProps: function() {
    return {
      classprefix: 'divider',
      theme: 'default'
    };
  },

  render: function() {
    var classSet = this.getClassSet();

    return (
      <hr
        {...this.props}
        data-am-widget={this.props.classprefix}
        className={classNames(this.props.className, classSet)}
      />
    );
  }
});

module.exports = Divider;

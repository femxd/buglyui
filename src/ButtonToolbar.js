'use strict';

var React = require('react');
var createReactClass = require('create-react-class');
var PropTypes = require('prop-types');
var classNames = require('classnames');
var ClassNameMixin = require('./mixins/ClassNameMixin');

var ButtonToolbar = createReactClass({
  mixins: [ClassNameMixin],

  propTypes: {
    classPrefix: PropTypes.string.isRequired
  },

  getDefaultProps: function() {
    return {
      classPrefix: 'btn-toolbar'
    };
  },

  render: function() {
    var classSet = this.getClassSet();

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

module.exports = ButtonToolbar;

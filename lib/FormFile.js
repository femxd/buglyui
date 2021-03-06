'use strict';

var React = require('react');
var createReactClass = require('create-react-class');
var classNames = require('classnames');
var ClassNameMixin = require('./mixins/ClassNameMixin');
var Button = require('./Button');
var Input = require('./Input');

var FormFile = createReactClass({
  mixins: [ClassNameMixin],

  propTypes: {},

  getDefaultProps: function getDefaultProps() {
    return {};
  },

  render: function render() {
    return React.createElement(
      FormGroup,
      {
        className: this.setClassNamespace('form-file')
      },
      React.createElement(Input, { type: 'file', standalone: 'on' })
    );
  }
});

module.exports = FormFile;
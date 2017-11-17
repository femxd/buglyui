'use strict';

var React = require('react');
var createReactClass = require('create-react-class');
var Markdown = require('../utils').Markdown;

var PageComponentsIndex = createReactClass({
  render: function() {
    return (
      <Markdown doc>
        {require('./components.md')}
      </Markdown>
    );
  }
});

module.exports = PageComponentsIndex;

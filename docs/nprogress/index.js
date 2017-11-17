'use strict';

var React = require('react');
var createReactClass = require('create-react-class');
var ReactBin = require('../ReactBin');
var Markdown = require('../utils').Markdown;
var Doc = require('../utils').Doc;
var examples = {
  basic: require('fs').readFileSync(__dirname + '/01-basic.js', 'utf-8')
};

var NProgerssDoc = createReactClass({
  render: function() {
    return (
      <Doc>
        <h1>NProgress</h1>
        <hr/>
        <Markdown>{require('./01-intro.md')}</Markdown>
        <ReactBin code={examples.basic} />
      </Doc>
    );
  }
});

module.exports = NProgerssDoc;

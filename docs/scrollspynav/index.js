'use strict';

var React = require('react');
var ReactBin = require('../ReactBin');
var Markdown = require('../utils').Markdown;
var Doc = require('../utils').Doc;
var examples = {
  basic: require('fs').readFileSync(__dirname + '/01-basic.js', 'utf-8')
};

module.exports = React.createClass({
  render: function() {
    return (
      <Doc>
        <h1>ScrollSpyNav</h1>
        <hr/>
        <h2>组件介绍</h2>
        <Markdown>{require('./01-intro.md')}</Markdown>
        <h2>使用演示</h2>
        <ReactBin code={examples.basic} />
        <Markdown>{require('./01-code.md')}</Markdown>
      </Doc>
    );
  }
});

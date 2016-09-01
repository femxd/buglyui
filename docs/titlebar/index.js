'use strict';

var React = require('react');
var ReactBin = require('../ReactBin');
var Markdown = require('../utils').Markdown;
var Doc = require('../utils').Doc;
var examples = {
  default: require('fs').readFileSync(__dirname + '/01-default.js', 'utf-8'),
  multi: require('fs').readFileSync(__dirname + '/02-multi.js', 'utf-8'),
  cols: require('fs').readFileSync(__dirname + '/03-cols.js', 'utf-8')
};

module.exports = React.createClass({
  render: function() {
    return (
      <Doc>
        <h1>Titlebar</h1>
        <hr/>
        <h2>组件介绍</h2>
        <Markdown>{require('./01-intro.md')}</Markdown>
        <h2>组件演示</h2>
        <h3>默认主题</h3>
        <ReactBin code={examples.default} />

        <h3>multi 主题</h3>
        <ReactBin code={examples.multi} />

        <h3>cols 主题</h3>
        <ReactBin code={examples.cols} />
      </Doc>
    );
  }
});

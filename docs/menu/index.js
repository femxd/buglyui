'use strict';

var React = require('react');
var ReactBin = require('../ReactBin');
var Markdown = require('../utils').Markdown;
var Doc = require('../utils').Doc;
var examples = {
  default: require('fs').readFileSync(__dirname + '/01-default.js', 'utf-8'),
  dropdown1: require('fs').readFileSync(__dirname + '/02-dropdown1.js', 'utf-8'),
  dropdown2: require('fs').readFileSync(__dirname + '/03-dropdown2.js', 'utf-8'),
  slide1: require('fs').readFileSync(__dirname + '/04-slide1.js', 'utf-8'),
  stack: require('fs').readFileSync(__dirname + '/05-stack.js', 'utf-8')
};

module.exports = React.createClass({
  render: function() {
    return (
      <Doc>
        <h1>Menu</h1>
        <hr/>
        <h2>组件介绍</h2>
        <Markdown>{require('./01-intro.md')}</Markdown>
        <h2>组件演示</h2>
        <h3>默认主题</h3>
        <ReactBin code={examples.default} />

        <h3>主题 dropdown1</h3>
        <ReactBin code={examples.dropdown1} />

        <h3>主题 dropdown2</h3>
        <ReactBin code={examples.dropdown2} />

        <h3>主题 slide1</h3>
        <ReactBin code={examples.slide1} />

        <h3>主题 stack</h3>
        <ReactBin code={examples.stack} />
      </Doc>
    );
  }
});

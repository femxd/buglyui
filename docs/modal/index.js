'use strict';

var React = require('react');
var ReactBin = require('../ReactBin');
var Markdown = require('../utils').Markdown;
var Doc = require('../utils').Doc;
var examples = {
  default: require('fs').readFileSync(__dirname + '/01-default.js', 'utf-8'),
  alert: require('fs').readFileSync(__dirname + '/02-alert.js', 'utf-8'),
  confirm: require('fs').readFileSync(__dirname + '/03-confirm.js', 'utf-8'),
  prompt: require('fs').readFileSync(__dirname + '/04-prompt.js', 'utf-8'),
  loading: require('fs').readFileSync(__dirname + '/05-loading.js', 'utf-8'),
  actions: require('fs').readFileSync(__dirname + '/06-actions.js', 'utf-8'),
  popup: require('fs').readFileSync(__dirname + '/07-popup.js', 'utf-8'),
  show: require('fs').readFileSync(__dirname + '/08-show-props.js', 'utf-8')
};

module.exports = React.createClass({
  render: function() {
    return (
      <Doc>
        <h1>Modal</h1>
        <hr/>
        <h2>组件介绍</h2>
        <Markdown>{require('./01-intro.md')}</Markdown>
        <h2>组件演示</h2>
        <h3>默认 Modal</h3>
        <ReactBin code={examples.default} />

        <h3>模拟 Alert</h3>
        <ReactBin code={examples.alert} />

        <h3>模拟 Confirm</h3>
        <ReactBin code={examples.confirm} />

        <h3>模拟 Prompt</h3>
        <ReactBin code={examples.prompt} />

        <h3>Modal Loading</h3>
        <ReactBin code={examples.loading} />

        <h3>Actions</h3>
        <ReactBin code={examples.actions} />

        <h3>Popup</h3>
        <ReactBin code={examples.popup} />

        <h3>默认显示属性和关闭回调</h3>
        <ReactBin code={examples.show} />
      </Doc>
    );
  }
});

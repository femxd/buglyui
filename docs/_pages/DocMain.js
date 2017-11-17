'use strict';

var React = require('react');
var createReactClass = require('create-react-class');
var Container = require('../../src/Container');

var DocMain = createReactClass({
  render: function() {
    return (
      <main className="amr-main">
        {this.props.children}
      </main>
    );
  }

});

module.exports = DocMain;

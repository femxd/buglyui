'use strict';

var React = require('react');
var PropTypes = require('prop-types');
var createReactClass = require('create-react-class');
var Container = require('../../src/Container');

var DocBanner = createReactClass({
  propTypes: {
    title: PropTypes.string
  },

  render: function() {
    return (
      <div className="amr-banner">
        <Container>
          <h1>{this.props.title}</h1>
          {this.props.children ? (
            <p>{this.props.children}</p>
          ) : null}
        </Container>
      </div>
    );
  }

});

module.exports = DocBanner;

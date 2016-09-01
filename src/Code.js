'use strict';

var React = require('react');
var classNames = require('classnames');
var ClassNameMixin = require('./mixins/ClassNameMixin');

var Code = React.createClass({
  mixins: [ClassNameMixin],

  propTypes: {
    language: React.PropTypes.string,
    escape: React.PropTypes.bool,
    highlight: React.PropTypes.func
  },

  getDefaultProps: function() {
  },

  escape: function(html) {
    return html.replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  },

  render: function() {
    var langClassName = this.props.language &&
      ('language-' + this.props.language);
    var children = this.props.children;

    if (this.props.escape) {
      children = this.escape(children);
    }

    if (this.props.highlight) {
      children = this.props.highlight(language, children);
    }

    return (
      <pre
        {...this.props}
        className={classNames(this.props.className, langClassName)}
      >
        {children}
      </pre>
    );
  }
});

module.exports = Code;

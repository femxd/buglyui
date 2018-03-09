'use strict';

var React = require('react');
var createReactClass = require('create-react-class');
var PropTypes = require('prop-types');
var classNames = require('classnames');
var ClassNameMixin = require('./mixins/ClassNameMixin');

var Table = createReactClass({
  mixins: [ClassNameMixin],

  propTypes: {
    classprefix: PropTypes.string.isRequired,
    bordered: PropTypes.bool,
    compact: PropTypes.bool,
    hover: PropTypes.bool,
    striped: PropTypes.bool,
    radius: PropTypes.bool,
    responsive: PropTypes.bool
  },

  getDefaultProps: function() {
    return {
      classprefix: 'table'
    };
  },

  render: function() {
    var classSet = this.getClassSet();
    var responsive = this.props.responsive;

    classSet[this.prefixClass('bordered')] = this.props.bordered;
    classSet[this.prefixClass('compact')] = this.props.compact;
    classSet[this.prefixClass('hover')] = this.props.hover;
    classSet[this.prefixClass('striped')] = this.props.striped;
    classSet[this.prefixClass('radius')] = this.props.radius;

    // add `.am-text-nowrap` to responsive table
    classSet[this.setClassNamespace('text-nowrap')] = responsive;

    var table = (
      <table
        {...this.props}
        className={classNames(this.props.className, classSet)}
      >
        {this.props.children}
      </table>
    );

    return responsive ? (
      <div className={this.setClassNamespace('scrollable-horizontal')}>
        {table}
      </div>
    ) : table;
  }
});

module.exports = Table;

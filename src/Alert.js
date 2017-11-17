'use strict';

var React = require('react');
var createReactClass = require('create-react-class');
var PropTypes = require('prop-types');
var classNames = require('classnames');
var ClassNameMixin = require('./mixins/ClassNameMixin');

var Alert = createReactClass({
  mixins: [ClassNameMixin],

  propTypes: {
    classPrefix: PropTypes.string.isRequired,
    amStyle: PropTypes.oneOf(['secondary', 'success', 'warning',
      'danger']),
    onClose: PropTypes.func
  },

  getDefaultProps: function() {
    return {
      classPrefix: 'alert'
    };
  },

  renderCloseBtn: function() {
    return (
      <button
        type='button'
        className={this.setClassNamespace('close')}
        onClick={this.props.onClose}
      >
        &times;
      </button>
    );
  },

  render: function() {
    var classSet = this.getClassSet();
    var isCloseable = !!this.props.onClose;

    if (this.props.amStyle) {
      classSet[this.prefixClass(this.props.amStyle)] = true;
    }

    classSet[this.prefixClass('closeable')] = isCloseable;

    return (
      <div
        {...this.props}
        className={classNames(this.props.className, classSet)}
      >
        {isCloseable ? this.renderCloseBtn() : null}
        {this.props.children}
      </div>
    );
  }
});

module.exports = Alert;

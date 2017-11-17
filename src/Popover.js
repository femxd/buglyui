'use strict';

var React = require('react');
var createReactClass = require('create-react-class');
var PropTypes = require('prop-types');
var classNames = require('classnames');
var ClassNameMixin = require('./mixins/ClassNameMixin');

var Popover = createReactClass({
  mixins: [ClassNameMixin],

  propTypes: {
    classPrefix: PropTypes.string.isRequired,
    placement: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
    positionLeft: PropTypes.number,
    positionTop: PropTypes.number,
    amSize: PropTypes.oneOf(['sm', 'lg']),
    amStyle: PropTypes.string,
    disableCaret: PropTypes.bool
  },

  getDefaultProps: function() {
    return {
      classPrefix: 'popover'
    };
  },

  render: function() {
    var classSet = this.getClassSet();
    var style = {
      left: this.props.positionLeft,
      top: this.props.positionTop,
      display: 'block'
    };

    classSet[this.setClassNamespace('active')] = true;
    classSet[this.prefixClass(this.props.placement)] = true;

    return (
      <div
        {...this.props}
        style={style}
        className={classNames(classSet, this.props.className)}
      >
        <div className={this.prefixClass('inner')}>
          {this.props.children}
        </div>
        {!this.props.disableCaret && <div className={this.prefixClass('caret')}></div>}
      </div>
    );
  }
});

module.exports = Popover;

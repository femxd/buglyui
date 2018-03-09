'use strict';

var React = require('react');
var createReactClass = require('create-react-class');
var PropTypes = require('prop-types');
var classNames = require('classnames');
var ClassNameMixin = require('./mixins/ClassNameMixin');

var Popover = createReactClass({
  mixins: [ClassNameMixin],

  propTypes: {
    classprefix: PropTypes.string.isRequired,
    placement: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
    positionleft: PropTypes.number,
    positiontop: PropTypes.number,
    amsize: PropTypes.oneOf(['sm', 'lg']),
    amstyle: PropTypes.string,
    disablecaret: PropTypes.bool
  },

  getDefaultProps: function() {
    return {
      classprefix: 'popover'
    };
  },

  render: function() {
    var classSet = this.getClassSet();
    var style = {
      left: this.props.positionleft,
      top: this.props.positiontop,
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
        {!this.props.disablecaret && <div className={this.prefixClass('caret')}></div>}
      </div>
    );
  }
});

module.exports = Popover;

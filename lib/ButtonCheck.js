'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var createReactClass = require('create-react-class');
var PropTypes = require('prop-types');
var CSSCore = require('./utils/CSSCore');
var ClassNameMixin = require('./mixins/ClassNameMixin');
var ButtonGroup = require('./ButtonGroup');
var constants = require('./constants');

var ButtonCheck = createReactClass({
  mixins: [ClassNameMixin],

  propTypes: {
    clickHandler: PropTypes.func
  },

  getDefaultProps: function getDefaultProps() {
    return {
      clickHandler: function clickHandler() {}
    };
  },

  handleClick: function handleClick(e) {
    var changed = true;
    var target = e.target;
    var activeClassName = constants.CLASSES.active;

    if (target && target.nodeName === 'INPUT') {
      var parent = target.parentNode;

      if (target.type === 'radio') {
        if (target.checked && CSSCore.hasClass(parent, activeClassName)) {
          changed = false;
        } else {
          var siblings = parent.parentNode.children;

          // remove siblings activeClassName
          for (var i = 0; i < siblings.length; i++) {
            siblings[i] !== parent && CSSCore.removeClass(siblings[i], activeClassName);
          }
        }
      }

      if (changed) {
        CSSCore.toggleClass(parent, activeClassName);
      }
    }

    this.props.clickHandler.call(this);
  },

  render: function render() {
    return React.createElement(
      ButtonGroup,
      _extends({}, this.props, {
        onClick: this.handleClick,
        className: this.setClassNamespace('btn-group-check')
      }),
      this.props.children
    );
  }
});

module.exports = ButtonCheck;
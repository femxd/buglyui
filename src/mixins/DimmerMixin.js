'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var classNames = require('classnames');
var getScrollbarWidth = require('../utils/getScrollbarWidth');
var ownerDocument = require('../utils/domUtils').ownerDocument;
var CSSCore = require('../utils/CSSCore');

module.exports = {
  propTypes: {
    container: React.PropTypes.node
  },

  _getContainer: function() {
    var node = this.refs.modal;
    var doc = ownerDocument(node);

    return (this.props.container &&
      ReactDOM.findDOMNode(this.props.container)) || doc.body;
  },

  _getDimmerActiveClassName: function() {
    return this.setClassNamespace('dimmer-active');
  },

  setDimmerContainer: function() {
    var container = this._getContainer();
    var bodyPaddingRight = parseInt((container.style.paddingRight || 0), 10);
    var barWidth = getScrollbarWidth();

    if (barWidth) {
      container.style.paddingRight = bodyPaddingRight + barWidth + 'px';
    }

    CSSCore.addClass(container, this._getDimmerActiveClassName());
  },

  resetDimmerContainer: function(nextProps, nextState) {
    var container = this._getContainer();

    CSSCore.removeClass(container, this._getDimmerActiveClassName());

    container.style.paddingRight = '';
  },

  renderDimmer: function(children) {
    var onClick = this.handleDimmerClick || null;
    var classSet = {};

    classSet[this.setClassNamespace('dimmer')] = true;
    classSet[this.setClassNamespace('active')] = true;

    return (
      <div>
        <div
          onClick={onClick}
          ref="dimmer"
          style={{display: 'block'}}
          className={classNames(classSet)}
        ></div>
        {children}
      </div>
    );
  }
};

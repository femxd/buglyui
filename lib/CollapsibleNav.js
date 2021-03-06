'use strict';

/*
* https://github.com/react-bootstrap/react-bootstrap/blob/master/src/CollapsibleNav.js
* */

var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');
var PropTypes = require('prop-types');
var classNames = require('classnames');
var ClassNameMixin = require('./mixins/ClassNameMixin');
var CollapseMixin = require('./mixins/CollapseMixin');
var createChainedFunction = require('./utils/createChainedFunction');

var CollapsibleNav = createReactClass({
  mixins: [ClassNameMixin, CollapseMixin],

  propTypes: {
    collapsible: PropTypes.bool,
    onSelect: PropTypes.func,
    activeHref: PropTypes.string,
    activeKey: PropTypes.any,
    expanded: PropTypes.bool,
    eventKey: PropTypes.any
  },

  handleToggle: function handleToggle() {
    this.setState({ expanded: !this.state.expanded });
  },

  getCollapsibleDimensionValue: function getCollapsibleDimensionValue() {
    var height = 0;
    var nodes = this.refs;

    for (var key in nodes) {
      if (nodes.hasOwnProperty(key)) {
        var n = ReactDOM.findDOMNode(nodes[key]);
        var h = n.offsetHeight;
        var computedStyles = getComputedStyle(n, null);

        height += h + parseInt(computedStyles.marginTop, 10) + parseInt(computedStyles.marginBottom, 10);
      }
    }

    return height;
  },

  getCollapsibleDOMNode: function getCollapsibleDOMNode() {
    return ReactDOM.findDOMNode(this);
  },

  getChildActiveProp: function getChildActiveProp(child) {
    if (child.props.active) {
      return true;
    }

    if (this.props.activeKey != null) {
      if (child.props.eventKey === this.props.activeKey) {
        return true;
      }
    }

    if (this.props.activeHref != null) {
      if (child.props.href === this.props.activeHref) {
        return true;
      }
    }

    return child.props.active;
  },

  renderChildren: function renderChildren(child, index) {
    var key = child.key ? child.key : index;

    return React.cloneElement(child, {
      activeKey: this.props.activeKey,
      activeHref: this.props.activeHref,
      ref: 'nocollapse_' + key,
      key: key,
      navItem: true
    });
  },

  renderCollapsibleNavChildren: function renderCollapsibleNavChildren(child, index) {
    var key = child.key ? child.key : index;

    return React.cloneElement(child, {
      active: this.getChildActiveProp(child),
      activeKey: this.props.activeKey,
      activeHref: this.props.activeHref,
      onSelect: createChainedFunction(child.props.onSelect, this.props.onSelect),
      ref: 'collapsible_' + key,
      key: key
    });
  },

  render: function render() {
    var collapsible = this.props.collapsible;
    var classSet = collapsible ? this.getCollapsibleClassSet() : {};

    classSet[this.setClassNamespace('topbar-collapse')] = this.props.topbar;

    return React.createElement(
      'div',
      {
        eventKey: this.props.eventKey,
        className: classNames(classSet, this.props.className)
      },
      React.Children.map(this.props.children, collapsible ? this.renderCollapsibleNavChildren : this.renderChildren)
    );
  }
});

module.exports = CollapsibleNav;
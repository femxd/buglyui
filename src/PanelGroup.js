'use strict';

var React = require('react');
var createReactClass = require('create-react-class');
var PropTypes = require('prop-types');
var classNames = require('classnames');
var ClassNameMixin = require('./mixins/ClassNameMixin');

var PanelGroup = createReactClass({
  mixins: [ClassNameMixin],

  propTypes: {
    amstyle: PropTypes.string,
    activeKey: PropTypes.any,
    defaultActiveKey: PropTypes.any,
    onSelect: PropTypes.func,
    accordion: PropTypes.bool
  },

  getDefaultProps: function() {
    return {
      classprefix: 'panel-group'
    };
  },

  getInitialState: function() {
    return {
      activeKey: this.props.defaultActiveKey
    };
  },

  shouldComponentUpdate: function() {
    // Defer any updates to this component during the `onSelect` handler.
    return !this._isChanging;
  },

  handleSelect: function(e, key) {
    e.preventDefault();

    if (this.props.onSelect) {
      this._isChanging = true;
      this.props.onSelect(key);
      this._isChanging = false;
    }

    if (this.state.activeKey === key) {
      key = null;
    }

    this.setState({
      activeKey: key
    });
  },

  renderPanel: function(child, index) {
    var activeKey = this.props.activeKey != null ?
      this.props.activeKey : this.state.activeKey;

    var props = {
      amstyle: child.props.amstyle || this.props.amstyle,
      key: child.key ? child.key : index,
      ref: child.ref
    };

    if (this.props.accordion) {
      props.collapsible = true;
      props.expanded = (child.props.eventKey === activeKey);
      props.onSelect = this.handleSelect;
    }

    return React.cloneElement(child, props);
  },

  render: function() {
    var classes = this.getClassSet();

    return (
      <div
        {...this.props}
        className={classNames(classes, this.props.className)}
      >
        {React.Children.map(this.props.children, this.renderPanel)}
      </div>
    );
  }
});

module.exports = PanelGroup;

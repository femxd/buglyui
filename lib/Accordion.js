'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');
var PropTypes = require('prop-types');
var classNames = require('classnames');
var ClassNameMixin = require('./mixins/ClassNameMixin');
var CollapseMixin = require('./mixins/CollapseMixin');

var Accordion = createReactClass({
  mixins: [ClassNameMixin],

  propTypes: {
    theme: PropTypes.oneOf(['default', 'basic', 'gapped']),
    data: PropTypes.array,
    activeKey: PropTypes.any,
    defaultActiveKey: PropTypes.any
  },

  getDefaultProps: function getDefaultProps() {
    return {
      classprefix: 'accordion',
      theme: 'default'
    };
  },

  getInitialState: function getInitialState() {
    return {
      activeKey: this.props.defaultActiveKey
    };
  },

  handleSelect: function handleSelect(e, key) {
    e.preventDefault();

    if (this.state.activeKey === key) {
      key = null;
    }

    this.setState({
      activeKey: key
    });
  },

  render: function render() {
    var classSet = this.getClassSet();

    classSet[this.prefixClass(this.props.theme)] = true;

    return React.createElement(
      'section',
      _extends({}, this.props, {
        'data-am-widget': this.props.classprefix,
        className: classNames(classSet, this.props.className)
      }),
      this.props.data.map(function (item, index) {
        return React.createElement(
          Accordion.Item,
          {
            title: item.title,
            expanded: item.active && item.disabled,
            defaultExpanded: item.active && !item.disabled,
            eventKey: index,
            key: index
          },
          item.content
        );
      })
    );
  }
});

Accordion.Item = createReactClass({
  mixins: [ClassNameMixin, CollapseMixin],

  propTypes: {
    title: PropTypes.node,
    expanded: PropTypes.bool
  },

  handleToggle: function handleToggle() {
    this.setState({
      expanded: !this.state.expanded
    });
  },

  getCollapsibleDimensionValue: function getCollapsibleDimensionValue() {
    return ReactDOM.findDOMNode(this.refs.panel).scrollHeight;
  },

  getCollapsibleDOMNode: function getCollapsibleDOMNode() {
    if (!this.isMounted() || !this.refs || !this.refs.panel) {
      return null;
    }

    return ReactDOM.findDOMNode(this.refs.panel);
  },

  render: function render() {
    return React.createElement(
      'dl',
      {
        className: classNames(this.setClassNamespace('accordion-item'), this.isExpanded() ? this.setClassNamespace('active') : null, this.props.expanded ? this.setClassNamespace('disabled') : null)
      },
      React.createElement(
        'dt',
        {
          onClick: this.handleToggle,
          className: this.setClassNamespace('accordion-title')
        },
        this.props.title
      ),
      React.createElement(
        'dd',
        {
          className: classNames(this.getCollapsibleClassSet()),
          ref: 'panel' },
        React.createElement('div', {
          className: this.setClassNamespace('accordion-content'),
          dangerouslySetInnerHTML: { __html: this.props.children }
        })
      )
    );
  }
});

module.exports = Accordion;
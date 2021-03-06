'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');
var PropTypes = require('prop-types');
var classNames = require('classnames');
var ClassNameMixin = require('./mixins/ClassNameMixin');
var CollapseMixin = require('./mixins/CollapseMixin');

var Panel = createReactClass({
  mixins: [ClassNameMixin, CollapseMixin],

  propTypes: {
    collapsible: PropTypes.bool,
    header: PropTypes.node,
    footer: PropTypes.node,
    id: PropTypes.string,
    amstyle: PropTypes.string,
    onSelect: PropTypes.func,
    eventKey: PropTypes.any
  },

  getDefaultProps: function getDefaultProps() {
    return {
      classprefix: 'panel',
      amstyle: 'default'
    };
  },

  handleClick: function handleClick(e) {
    e.selected = true;

    if (this.props.onSelect) {
      this.props.onSelect(e, this.props.eventKey);
    } else {
      e.preventDefault();
    }

    if (e.selected) {
      this.handleToggle();
    }
  },

  handleToggle: function handleToggle() {
    this.setState({ expanded: !this.state.expanded });
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

  renderHeader: function renderHeader() {
    if (!this.props.header) {
      return null;
    }

    var header = this.props.header;

    return React.createElement(
      'div',
      { className: this.prefixClass('hd') },
      this.props.collapsible ? React.createElement(
        'h4',
        {
          'data-am-collapse': true // just for `pointer` style
          , className: classNames(this.prefixClass('title'), this.isExpanded() ? null : this.setClassNamespace('collapsed')),
          onClick: this.handleClick
        },
        header
      ) : header
    );
  },

  renderBody: function renderBody() {
    var bodyClass = this.prefixClass('bd');
    var bodyChildren = this.props.children;
    var bodyElements = [];
    var panelBodyChildren = [];

    function getProps() {
      return {
        key: bodyElements.length
      };
    }

    function addFillChild(child) {
      bodyElements.push(React.cloneElement(child, getProps()));
    }

    function addPanelBody(child) {
      bodyElements.push(React.createElement(
        'div',
        _extends({ className: bodyClass }, getProps, { key: 'panelBody' }),
        child
      ));
    }

    function maybeRenderPanelBody() {
      if (panelBodyChildren.length === 0) {
        return;
      }

      addPanelBody(panelBodyChildren);
      panelBodyChildren = [];
    }

    if (Array.isArray(bodyChildren)) {
      bodyChildren.forEach(function (child) {
        // props fill and isValidElement
        if (this.shouldRenderFill(child)) {
          maybeRenderPanelBody();

          addFillChild(child);
        } else {
          panelBodyChildren.push(child);
        }
      }.bind(this));

      maybeRenderPanelBody();
    } else {
      if (this.shouldRenderFill(bodyChildren)) {
        addFillChild(bodyChildren);
      } else {
        addPanelBody(bodyChildren);
      }
    }

    return bodyElements;
  },

  renderCollapsibleBody: function renderCollapsibleBody() {
    var collapseClass = this.prefixClass('collapse');

    return React.createElement(
      'div',
      {
        className: classNames(this.getCollapsibleClassSet(collapseClass)),
        id: this.props.id,
        ref: 'panel'
      },
      this.renderBody()
    );
  },

  shouldRenderFill: function shouldRenderFill(child) {
    return React.isValidElement(child) && child.props.fill;
  },

  renderFooter: function renderFooter() {
    if (!this.props.footer) {
      return null;
    }

    return React.createElement(
      'div',
      { className: this.prefixClass('footer') },
      this.props.footer
    );
  },

  render: function render() {
    var classes = this.getClassSet();
    var collapsible = this.props.collapsible;

    return React.createElement(
      'div',
      _extends({}, this.props, {
        id: collapsible ? null : this.props.id,
        className: classNames(classes, this.props.className)
      }),
      this.renderHeader(),
      collapsible ? this.renderCollapsibleBody() : this.renderBody(),
      this.renderFooter()
    );
  }
});

module.exports = Panel;
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var ReactDOM = require('react-dom');
var fecha = require('fecha');
var Events = require('../utils/Events');
var isNodeInTree = require('../utils/isNodeInTree');
var Input = require('../Input');
var DateTimePicker = require('./DateTimePicker');

var DateTimeInput = React.createClass({
  displayName: 'DateTimeInput',

  propTypes: {
    format: React.PropTypes.string,
    dateTime: React.PropTypes.string,
    onSelect: React.PropTypes.func,
    wrapClass: React.PropTypes.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      dateTime: '',
      format: 'YYYY-MM-DD HH:mm'
    };
  },

  getInitialState: function getInitialState() {
    return {
      value: this.props.dateTime || fecha.format(new Date(), this.props.format),
      showPicker: false
    };
  },

  handleOuterClick: function handleOuterClick(event) {
    var picker = ReactDOM.findDOMNode(this.refs.DateTimePicker);

    if (!isNodeInTree(event.target, picker)) {
      this.handleClose();
    }
  },

  bindOuterHandlers: function bindOuterHandlers() {
    Events.on(document, 'click', this.handleOuterClick);
  },

  unbindOuterHandlers: function unbindOuterHandlers() {
    Events.off(document, 'click', this.handleOuterClick);
  },

  handleClose: function handleClose() {
    this.unbindOuterHandlers();
    return this.setState({
      showPicker: false
    });
  },

  handleClick: function handleClick() {
    this.bindOuterHandlers();

    var positionNode = ReactDOM.findDOMNode(this.refs.dateInput);
    // fixes #57
    // @see http://stackoverflow.com/questions/1044988/getting-offsettop-of-element-in-a-table
    var rect = positionNode.getBoundingClientRect();
    var offset = {
      top: rect.top + positionNode.offsetHeight,
      left: rect.left
    };

    var styles = {
      display: 'block',
      top: 20,
      left: 0,
      position: 'absolute',
      zIndex: 1120
    };

    this.setState({
      showPicker: true,
      pickerStyle: styles
    });
  },

  handleChange: function handleChange(event) {
    this.setState({
      value: event.target.value
    });
  },

  handleSelect: function handleSelect(date) {
    this.setState({
      value: date
    });

    this.props.onSelect && this.props.onSelect.call(this, date);
  },

  renderPicker: function renderPicker() {
    if (this.state.showPicker) {
      return React.createElement(DateTimePicker, {
        style: this.state.pickerStyle,
        ref: 'DateTimePicker',
        showDatePicker: this.props.showDatePicker,
        showTimePicker: this.props.showTimePicker,
        onSelect: this.handleSelect,
        onClose: this.handleClose,
        amStyle: this.props.amStyle,
        dateTime: this.state.value,
        viewMode: this.props.viewMode,
        minViewMode: this.props.minViewMode,
        daysOfWeekDisabled: this.props.daysOfWeekDisabled,
        weekStart: this.props.weekStart,
        format: this.props.format,
        locale: this.props.locale,
        maxDate: this.props.maxDate,
        minDate: this.props.minDate
      });
    }
  },

  render: function render() {
    return React.createElement(
      'div',
      { className: this.props.wrapClass || '' },
      React.createElement(Input, _extends({}, this.props, {
        type: 'text',
        value: this.state.value,
        onClick: this.handleClick,
        onChange: this.handleChange,
        onSelect: null,
        ref: 'dateInput'
      })),
      this.renderPicker()
    );
  }
});

module.exports = DateTimeInput;

// TODO: 动画
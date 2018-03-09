'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');
var PropTypes = require('prop-types');
var fecha = require('fecha');
var Events = require('../utils/Events');
var isNodeInTree = require('../utils/isNodeInTree');
var Input = require('../Input');
var DateTimePicker = require('./DateTimePicker');

var DateTimeInput = createReactClass({
  propTypes: {
    format: PropTypes.string,
    dateTime: PropTypes.string,
    onSelect: PropTypes.func,
    wrapClass: PropTypes.string,
  },

  getDefaultProps: function() {
    return {
      dateTime: '',
      format: 'YYYY-MM-DD HH:mm'
    };
  },

  getInitialState: function() {
    return {
      value: this.props.dateTime || fecha.format(new Date(), this.props.format),
      showPicker: false
    };
  },

  handleOuterClick: function(event) {
    var picker = ReactDOM.findDOMNode(this.refs.DateTimePicker);

    if (!isNodeInTree(event.target, picker)) {
      this.handleClose();
    }
  },

  bindOuterHandlers: function() {
    Events.on(document, 'click', this.handleOuterClick);
  },

  unbindOuterHandlers: function() {
    Events.off(document, 'click', this.handleOuterClick);
  },

  handleClose: function() {
    this.unbindOuterHandlers();
    return this.setState({
      showPicker: false
    });
  },

  handleClick: function() {
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

  handleChange: function(event) {
    this.setState({
      value: event.target.value
    });
  },

  handleSelect: function(date) {
    this.setState({
      value: date
    });

    this.props.onSelect && this.props.onSelect.call(this, date);
  },

  renderPicker: function() {
    if (this.state.showPicker) {
      return (
        <DateTimePicker
          style={this.state.pickerStyle}
          ref="DateTimePicker"
          showDatePicker={this.props.showDatePicker}
          showTimePicker={this.props.showTimePicker}
          onSelect={this.handleSelect}
          onClose={this.handleClose}
          amstyle={this.props.amstyle}
          dateTime={this.state.value}
          viewMode={this.props.viewMode}
          minViewMode={this.props.minViewMode}
          daysOfWeekDisabled={this.props.daysOfWeekDisabled}
          weekStart={this.props.weekStart}
          format={this.props.format}
          locale={this.props.locale}
          maxDate={this.props.maxDate}
          minDate={this.props.minDate}
        />
      );
    }
  },

  render: function() {
    return (
      <div className={this.props.wrapClass || ''}>
        <Input
          {...this.props}
          type="text"
          value={this.state.value}
          onClick={this.handleClick}
          onChange={this.handleChange}
          onSelect={null}
          ref="dateInput"
        />
        {this.renderPicker()}
      </div>
    );
  }
});

module.exports = DateTimeInput;

// TODO: 动画

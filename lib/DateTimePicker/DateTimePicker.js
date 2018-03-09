'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var PropTypes = require('prop-types');
var classNames = require('classnames');
var createReactClass = require('create-react-class');
var fecha = require('fecha');
var ClassNameMixin = require('../mixins/ClassNameMixin');
var Icon = require('../Icon');
var DatePicker = require('./DatePicker');
var TimePicker = require('./TimePicker');

var DateTimePicker = createReactClass({
  mixins: [ClassNameMixin],

  propTypes: {
    showTimePicker: PropTypes.bool,
    showDatePicker: PropTypes.bool,
    caretDisplayed: PropTypes.bool,
    amstyle: PropTypes.oneOf(['success', 'danger', 'warning']),
    viewMode: PropTypes.string,
    minViewMode: PropTypes.string,
    onSelect: PropTypes.func.isRequired,
    onClose: PropTypes.func,
    daysOfWeekDisabled: PropTypes.array,
    format: PropTypes.string,
    dateTime: PropTypes.string,
    locale: PropTypes.string,
    weekStart: PropTypes.number,
    minDate: PropTypes.string,
    maxDate: PropTypes.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      classprefix: 'datepicker',
      dateTime: '',
      format: 'YYYY-MM-DD HH:mm',
      showTimePicker: true,
      showDatePicker: true,
      caretDisplayed: true
    };
  },

  getInitialState: function getInitialState() {
    var showToggle;
    var showTimePicker;

    if (this.props.showTimePicker && this.props.showDatePicker) {
      showToggle = true;
      showTimePicker = false;
    }

    if (!showToggle && !this.props.showDatePicker) {
      showTimePicker = true;
    }

    return {
      showTimePicker: showTimePicker,
      showDatePicker: this.props.showDatePicker,
      caretDisplayed: this.props.caretDisplayed,
      showToggle: showToggle,
      date: fecha.parse(this.props.dateTime, this.props.format),
      toggleDisplay: {
        toggleTime: {
          display: 'block'
        },
        toggleDate: {
          display: 'none'
        }
      }
    };
  },

  handleToggleTime: function handleToggleTime() {
    this.setState({
      showDatePicker: false,
      showTimePicker: true,
      toggleDisplay: {
        toggleTime: {
          display: 'none'
        },
        toggleDate: {
          display: 'block'
        }
      }
    });
  },

  handleToggleDate: function handleToggleDate() {
    this.setState({
      showDatePicker: true,
      showTimePicker: false,
      toggleDisplay: {
        toggleTime: {
          display: 'block'
        },
        toggleDate: {
          display: 'none'
        }
      }
    });
  },

  handleSelect: function handleSelect(date) {
    this.setState({
      date: date
    });
    this.props.onSelect(fecha.format(date, this.props.format));
  },

  renderToggleTime: function renderToggleTime() {
    if (this.state.showToggle) {
      return React.createElement(
        'div',
        {
          style: this.state.toggleDisplay.toggleTime,
          className: this.prefixClass('toggle'),
          onClick: this.handleToggleTime
        },
        React.createElement(Icon, { icon: 'clock-o' })
      );
    }
  },

  renderToggleDate: function renderToggleDate() {
    if (this.state.showToggle) {
      return React.createElement(
        'div',
        {
          style: this.state.toggleDisplay.toggleDate,
          className: this.prefixClass('toggle'),
          onClick: this.handleToggleDate
        },
        React.createElement(Icon, { icon: 'calendar' })
      );
    }
  },

  renderDatePicker: function renderDatePicker() {
    if (this.state.showDatePicker) {
      return React.createElement(DatePicker, {
        onSelect: this.handleSelect,
        onClose: this.props.onClose,
        weekStart: this.props.weekStart,
        viewMode: this.props.viewMode,
        minViewMode: this.props.minViewMode,
        daysOfWeekDisabled: this.props.daysOfWeekDisabled,
        format: this.props.format,
        date: this.state.date,
        locale: this.props.locale,
        minDate: this.props.minDate,
        maxDate: this.props.maxDate
      });
    }
  },

  renderTimePicker: function renderTimePicker() {
    if (this.state.showTimePicker) {
      return React.createElement(TimePicker, {
        onSelect: this.handleSelect,
        date: this.state.date,
        format: this.props.format
      });
    }
  },

  renderCaret: function renderCaret() {
    if (this.state.caretDisplayed) {
      return React.createElement('div', { className: this.prefixClass('caret') });
    }
  },

  render: function render() {
    var classSet = this.getClassSet();

    this.props.amstyle && (classSet[this.prefixClass(this.props.amstyle)] = true);

    return React.createElement(
      'div',
      _extends({}, this.props, {
        className: classNames(classSet, this.props.className)
      }),
      this.renderCaret(),
      React.createElement(
        'div',
        { className: this.prefixClass('date') },
        this.renderDatePicker()
      ),
      React.createElement(
        'div',
        { className: this.prefixClass('time') },
        this.renderTimePicker()
      ),
      this.renderToggleTime(),
      this.renderToggleDate()
    );
  }
});

module.exports = DateTimePicker;
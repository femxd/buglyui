'use strict';

/**
 * Inputs Components
 * @desc includes input, input-group
 */

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');
var PropTypes = require('prop-types');
var classNames = require('classnames');
var ClassNameMixin = require('./mixins/ClassNameMixin');
var FormGroup = require('./FormGroup');
var Button = require('./Button');
var Icon = require('./Icon');
var constants = require('./constants');

var Input = createReactClass({
  mixins: [ClassNameMixin],

  propTypes: {
    type: PropTypes.string,
    disabled: PropTypes.bool,
    radius: PropTypes.bool,
    round: PropTypes.bool,
    amsize: PropTypes.oneOf(['sm', 'lg']),
    amstyle: PropTypes.string,
    validation: PropTypes.oneOf(['default', 'success', 'warning', 'error']),
    label: PropTypes.node,
    help: PropTypes.node,
    addonBefore: PropTypes.node,
    addonafter: PropTypes.node,
    btnBefore: PropTypes.node,
    btnAfter: PropTypes.node,
    id: PropTypes.string,
    groupClassName: PropTypes.string,
    wrapperClassName: PropTypes.string,
    labelClassName: PropTypes.string,
    helpClassName: PropTypes.string,
    icon: PropTypes.string,
    standalone: PropTypes.string,
    inline: PropTypes.bool,
    hasFeedback: PropTypes.bool
  },

  getDefaultProps: function getDefaultProps() {
    return {
      type: 'text'
    };
  },

  getFieldDOMNode: function getFieldDOMNode() {
    return ReactDOM.findDOMNode(this.refs.field);
  },

  getValue: function getValue() {
    if (this.props.type === 'select' && this.props.multiple) {
      return this.getSelectedOptions();
    } else {
      return this.getFieldDOMNode().value;
    }
  },

  getChecked: function getChecked() {
    return this.getFieldDOMNode().checked;
  },

  getSelectedOptions: function getSelectedOptions() {
    var values = [];
    var options = this.getFieldDOMNode().getElementsByTagName('option');

    options.forEach(function (option) {
      if (option.selected) {
        var value = option.getAttribute('value') || option.innerHtml;

        values.push(value);
      }
    });

    return values;
  },

  isCheckboxOrRadio: function isCheckboxOrRadio() {
    return this.props.type === 'radio' || this.props.type === 'checkbox';
  },

  isFile: function isFile() {
    return this.props.type === 'file';
  },

  renderInput: function renderInput() {
    var input = null;
    var fieldClassName = this.isCheckboxOrRadio() || this.isFile() ? '' : this.setClassNamespace('form-field');
    var classSet = {};

    classSet[constants.CLASSES.round] = this.props.round;
    classSet[constants.CLASSES.radius] = this.props.radius;

    if (this.props.amsize && !this.props.standalone) {
      classSet[this.setClassNamespace('input-' + this.props.amsize)] = true;
    }

    var classes = classNames(this.props.className, fieldClassName, classSet);

    switch (this.props.type) {
      case 'select':
        input = React.createElement(
          'select',
          _extends({}, this.props, {
            className: classes,
            ref: 'field',
            key: 'field'
          }),
          this.props.children
        );
        break;
      case 'textarea':
        input = React.createElement('textarea', _extends({}, this.props, {
          className: classes,
          ref: 'field',
          key: 'field'
        }));
        break;
      case 'submit':
      case 'reset':
        input = React.createElement(Button, _extends({}, this.props, {
          component: 'input',
          ref: 'field',
          key: 'field'
        }));
        break;
      default:
        input = React.createElement('input', _extends({}, this.props, {
          className: classes,
          ref: 'field',
          key: 'field'
        }));
    }

    return input;
  },

  // Input wrapper if wrapperClassName set
  renderWrapper: function renderWrapper(children) {
    return this.props.wrapperClassName ? React.createElement(
      'div',
      {
        className: this.props.wrapperClassName,
        key: 'wrapper'
      },
      children
    ) : children;
  },

  // Wrap block checkbox/radio
  renderCheckboxAndRadioWrapper: function renderCheckboxAndRadioWrapper(children) {
    // Don't wrap inline checkbox/radio
    return this.props.inline ? children : React.createElement(
      'div',
      {
        className: this.setClassNamespace(this.props.type),
        key: 'checkboxAndRadioWrapper'
      },
      children
    );
  },

  renderLabel: function renderLabel(children) {
    // label doesn't work with icon
    /*if (this.props.icon) {
      return null;
    }*/

    var classSet = {};

    if (this.isCheckboxOrRadio()) {
      // inline checkbox and radio
      classSet[this.setClassNamespace(this.props.type + '-inline')] = this.props.inline;
    } else {
      // normal form label
      classSet[this.setClassNamespace('form-label')] = true;
    }

    return this.props.label ? React.createElement(
      'label',
      {
        htmlFor: this.props.id,
        className: classNames(this.props.labelClassName, classSet),
        key: 'label'
      },
      children,
      this.props.label
    ) : children;
  },

  renderInputGroup: function renderInputGroup(children) {
    var groupPrefix = this.setClassNamespace('input-group');
    var addonClassName = groupPrefix + '-label';
    var btnClassName = groupPrefix + '-btn';
    var addonBefore = this.props.addonBefore ? React.createElement(
      'span',
      { className: addonClassName, key: 'addonBefore' },
      this.props.addonBefore
    ) : null;
    var addonafter = this.props.addonafter ? React.createElement(
      'span',
      { className: addonClassName, key: 'addonafter' },
      this.props.addonafter
    ) : null;
    var btnBefore = this.props.btnBefore ? React.createElement(
      'span',
      { className: btnClassName, key: 'btnBefore' },
      this.props.btnBefore
    ) : null;
    var btnAfter = this.props.btnAfter ? React.createElement(
      'span',
      { className: btnClassName, key: 'btnAfter' },
      this.props.btnAfter
    ) : null;
    var classSet = {};

    if (this.props.amsize) {
      classSet[groupPrefix + '-' + this.props.amsize] = true;
    }

    if (this.props.amstyle) {
      classSet[groupPrefix + '-' + this.props.amstyle] = true;
    }

    return addonBefore || addonafter || btnBefore || btnAfter ? React.createElement(
      'div',
      {
        className: classNames(groupPrefix, classSet),
        key: 'inputGroup'
      },
      addonBefore,
      btnBefore,
      children,
      addonafter,
      btnAfter
    ) : children;
  },

  // form help
  renderHelp: function renderHelp() {
    return this.props.help ? React.createElement(
      'p',
      {
        className: classNames(this.setClassNamespace('form-help'), this.props.helpClassName),
        key: 'help'
      },
      this.props.help
    ) : '';
  },

  renderIcon: function renderIcon() {
    var props = this.props;
    var feedbackIcon = {
      success: 'check',
      warning: 'warning',
      error: 'times'
    };
    var icon = props.icon || props.hasFeedback && props.validation && feedbackIcon[props.validation];

    return icon ? React.createElement(Icon, { icon: icon, key: 'icon' }) : null;
  },

  render: function render() {
    // standalone mode
    if (this.props.standalone) {
      return this.renderInput();
    }

    // render checkbox and radio, without FormGroup wrapper
    if (this.isCheckboxOrRadio()) {
      return this.renderWrapper(this.renderCheckboxAndRadioWrapper(this.renderLabel(this.renderInput())));
    }

    var groupClassName = classNames(this.props.type === 'select' ? this.setClassNamespace('form-select') : null, this.props.icon && this.setClassNamespace('form-icon'), this.props.groupClassName);

    return React.createElement(
      FormGroup,
      {
        className: groupClassName,
        validation: this.props.validation,
        amsize: this.props.amsize,
        hasFeedback: this.props.hasFeedback
      },
      [this.renderLabel(), this.renderWrapper(this.renderInputGroup(this.renderInput())), this.renderIcon(), this.renderHelp()]
    );
  }
});

module.exports = Input;
'use strict';

/**
 * Inputs Components
 * @desc includes input, input-group
 */

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
    amSize: PropTypes.oneOf(['sm', 'lg']),
    amStyle: PropTypes.string,
    validation: PropTypes.oneOf(['default','success', 'warning', 'error']),
    label: PropTypes.node,
    help: PropTypes.node,
    addonBefore: PropTypes.node,
    addonAfter: PropTypes.node,
    btnBefore: PropTypes.node,
    btnAfter: PropTypes.node,
    id: PropTypes.string,
    groupClassName: PropTypes.string,
    wrapperClassName: PropTypes.string,
    labelClassName: PropTypes.string,
    helpClassName: PropTypes.string,
    icon: PropTypes.string,
    standalone: PropTypes.bool,
    inline: PropTypes.bool,
    hasFeedback: PropTypes.bool
},

  getDefaultProps: function() {
    return {
      type: 'text'
    };
  },

  getFieldDOMNode: function() {
    return ReactDOM.findDOMNode(this.refs.field);
  },

  getValue: function() {
    if (this.props.type === 'select' && this.props.multiple) {
      return this.getSelectedOptions();
    } else {
      return this.getFieldDOMNode().value;
    }
  },

  getChecked: function() {
    return this.getFieldDOMNode().checked;
  },

  getSelectedOptions: function() {
    var values = [];
    var options = this.getFieldDOMNode().getElementsByTagName('option');

    options.forEach(function(option) {
        if (option.selected) {
          var value = option.getAttribute('value') || option.innerHtml;

          values.push(value);
        }
      });

    return values;
  },

  isCheckboxOrRadio: function() {
    return this.props.type === 'radio' || this.props.type === 'checkbox';
  },

  isFile: function() {
    return this.props.type === 'file';
  },

  renderInput: function() {
    var input = null;
    var fieldClassName = this.isCheckboxOrRadio() || this.isFile() ? '' :
      this.setClassNamespace('form-field');
    var classSet = {};

    classSet[constants.CLASSES.round] = this.props.round;
    classSet[constants.CLASSES.radius] = this.props.radius;

    if (this.props.amSize && !this.props.standalone) {
      classSet[this.setClassNamespace('input-' + this.props.amSize)] = true;
    }

    var classes = classNames(this.props.className, fieldClassName, classSet);

    switch (this.props.type) {
      case 'select':
        input = (
          <select
            {...this.props}
            className={classes}
            ref="field"
            key="field"
          >
            {this.props.children}
          </select>
        );
        break;
      case 'textarea':
        input = (
          <textarea
            {...this.props}
            className={classes}
            ref="field"
            key="field"
          />
        );
        break;
      case 'submit':
      case 'reset':
        input = (
          <Button
            {...this.props}
            component="input"
            ref="field"
            key="field"
          />
        );
        break;
      default:
        input = (
          <input
            {...this.props}
            className={classes}
            ref="field"
            key="field"
          />
        );
    }

    return input;
  },

  // Input wrapper if wrapperClassName set
  renderWrapper: function(children) {
    return this.props.wrapperClassName ? (
      <div
        className={this.props.wrapperClassName}
        key="wrapper"
      >
        {children}
      </div>
    ) : children;
  },

  // Wrap block checkbox/radio
  renderCheckboxAndRadioWrapper: function(children) {
    // Don't wrap inline checkbox/radio
    return this.props.inline ? children :
      (
      <div
        className={this.setClassNamespace(this.props.type)}
        key="checkboxAndRadioWrapper"
      >
        {children}
      </div>
    );
  },

  renderLabel: function(children) {
    // label doesn't work with icon
    /*if (this.props.icon) {
      return null;
    }*/

    var classSet = {};

    if (this.isCheckboxOrRadio()) {
      // inline checkbox and radio
      classSet[this.setClassNamespace(this.props.type + '-inline')] =
        this.props.inline;
    } else {
      // normal form label
      classSet[this.setClassNamespace('form-label')] = true;
    }

    return this.props.label ? (
      <label
        htmlFor={this.props.id}
        className={classNames(this.props.labelClassName, classSet)}
        key="label"
      >
        {children}
        {this.props.label}
      </label>
    ) : children;
  },

  renderInputGroup: function(children) {
    var groupPrefix = this.setClassNamespace('input-group');
    var addonClassName = groupPrefix + '-label';
    var btnClassName = groupPrefix + '-btn';
    var addonBefore = this.props.addonBefore ? (
      <span className={addonClassName} key="addonBefore">
        {this.props.addonBefore}
      </span>
    ) : null;
    var addonAfter = this.props.addonAfter ? (
      <span className={addonClassName} key="addonAfter">
        {this.props.addonAfter}
      </span>
    ) : null;
    var btnBefore = this.props.btnBefore ? (
      <span className={btnClassName} key="btnBefore">
        {this.props.btnBefore}
      </span>
    ) : null;
    var btnAfter = this.props.btnAfter ? (
      <span className={btnClassName} key="btnAfter">
        {this.props.btnAfter}
      </span>
    ) : null;
    var classSet = {};

    if (this.props.amSize) {
      classSet[groupPrefix + '-' + this.props.amSize] = true;
    }

    if (this.props.amStyle) {
      classSet[groupPrefix + '-' + this.props.amStyle] = true;
    }

    return addonBefore || addonAfter || btnBefore || btnAfter ? (
      <div
        className={classNames(groupPrefix, classSet)}
        key="inputGroup"
      >
        {addonBefore}
        {btnBefore}
        {children}
        {addonAfter}
        {btnAfter}
      </div>
    ) : children;
  },

  // form help
  renderHelp: function() {
    return this.props.help ? (
      <p
        className={classNames(this.setClassNamespace('form-help'),
        this.props.helpClassName)}
        key="help"
      >
        {this.props.help}
      </p>
    ) : '';
  },

  renderIcon: function() {
    var props = this.props;
    var feedbackIcon = {
      success: 'check',
      warning: 'warning',
      error: 'times'
    };
    var icon = props.icon || (props.hasFeedback && props.validation &&
      feedbackIcon[props.validation]);

    return icon ? (<Icon icon={icon} key="icon" />) : null;
  },

  render: function() {
    // standalone mode
    if (this.props.standalone) {
      return this.renderInput();
    }

    // render checkbox and radio, without FormGroup wrapper
    if (this.isCheckboxOrRadio()) {
      return this.renderWrapper(
        this.renderCheckboxAndRadioWrapper(
          this.renderLabel(
            this.renderInput()
          )
        )
      );
    }

    var groupClassName = classNames(
      this.props.type === 'select' ?
        this.setClassNamespace('form-select') : null,
      this.props.icon && this.setClassNamespace('form-icon'),
      this.props.groupClassName
    );

    return (
      <FormGroup
        className={groupClassName}
        validation={this.props.validation}
        amSize={this.props.amSize}
        hasFeedback={this.props.hasFeedback}
      >
        {[
          this.renderLabel(),
          this.renderWrapper(
            this.renderInputGroup(
              this.renderInput()
            )
          ),
          this.renderIcon(),
          this.renderHelp()
        ]}
      </FormGroup>
    );
  }
});

module.exports = Input;

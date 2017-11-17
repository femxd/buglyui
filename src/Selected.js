'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');
var PropTypes = require('prop-types');
var classNames = require('classnames');
var ClassNameMixin = require('./mixins/ClassNameMixin');
var Dropdown = require('./Dropdown');
var Icon = require('./Icon');
var Input = require('./Input');
var cloneDeep = require('lodash.clonedeep');
var Selected = createReactClass({
  mixins: [ClassNameMixin],

  propTypes: {
    classPrefix: PropTypes.string,
    data: PropTypes.array.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    multiple: PropTypes.bool,
    searchBox: PropTypes.bool,
    name: PropTypes.string,
    onChange: PropTypes.func,
    optionFilter: PropTypes.func, // (filterText, option) => {}
    dropup: PropTypes.bool,
    btnWidth: PropTypes.number,
    btnStyle: PropTypes.string,
    btnSize: PropTypes.string,
    maxHeight: PropTypes.number,
    sortSelected: PropTypes.bool,
    limit: PropTypes.number,
    onValidateValue: PropTypes.func, // 判断value是否有效
    // delimiter to use to join multiple values
    delimiter: PropTypes.string
  },

  getDefaultProps: function () {
    return {
      sortSelected: true,
      classPrefix: 'selected',
      placeholder: '点击选择...',
      onChange: function () { },
      onValidateValue: function (value) { return true },
      value: '',
      delimiter: ',',
      optionFilter: function optionFilter(filterText, option) {
        return filterText ? option.label.toLowerCase().indexOf(filterText) > -1 : true;
      }
    };
  },

  getInitialState: function () {
    return {
      value: this.props.value,
      dropdownWidth: null,
      filterText: null
    };
  },

  componentDidMount: function () {
    this.setDropdownWidth();
  },

  componentWillReceiveProps: function (nextProps) {
    this.setState({
      value: nextProps.value
    });
  },

  setDropdownWidth: function () {
    if (this.isMounted()) {
      var toggleButton = ReactDOM.findDOMNode(this.refs.dropdown.
        refs.dropdownToggle);

      toggleButton && this.setState({ dropdownWidth: toggleButton.offsetWidth });
    }
  },

  getValueArray: function () {
    return this.state.value ? this.state.value.split(this.props.delimiter) : [];
  },

  hasValue: function (value) {
    return this.getValueArray().indexOf(value) > -1;
  },

  setValue: function (value, callback) {
    if (this.props.onValidateValue(value)) {
      this.setState({
        value: value
      }, function () {
        this.props.onChange(value);
        callback && callback();
      });
    }
  },

  handleCheck: function (option, e) {
    e.preventDefault();

    var clickedValue = option.value;

    // multiple select
    if (this.props.multiple) {
      var values = this.getValueArray();

      if (this.hasValue(clickedValue)) {
        values.splice(values.indexOf(clickedValue), 1);
      } else if (!this.props.limit || values.length < this.props.limit) {
        values.push(clickedValue);
      }

      this.setValue(values.join(this.props.delimiter));
    } else {
      this.setValue(clickedValue);
      this.refs.dropdown.setDropdown(false);
    }
  },

  handleUserInput: function (e) {
    e.preventDefault();

    this.setState({
      filterText: ReactDOM.findDOMNode(this.refs.filterInput).value
    });
  },

  // clear filter
  clearFilterInput: function () {
    if (this.props.multiple && this.props.searchBox) {
      this.setState({
        filterText: null
      });
      ReactDOM.findDOMNode(this.refs.filterInput).value = null;
    }
  },

  // API for getting component value
  getValue: function () {
    return this.state.value;
  },

  showSelectedFirst(value, data) {

    let that = this;

    if (Object.prototype.toString.call(data) != '[object Array]' || data.length == 0) {
      return [];
    }

    var arr = value && value.split(',') || [],
      temp = [];

    arr.forEach(_value => {
      //从data中找到_value, 并弹出
      let index = that.findIndex(data, _value);
      if (index == -1) {
        return;
      }
      temp = temp.concat(data.splice(index, 1))
    });

    return temp.concat(data);
  },

  findIndex(data, value) {
    // var value = '4.0.0.195(4.0.0.195)';
    for (var i = 0, l = data.length; i < l; i++) {
      if (data[i].value == value) {
        return i;
      }
    }
    return -1;
  },

  render: function () {
    var classSet = this.getClassSet();
    var selectedLabel = [];
    var items = [];
    var filterText = this.state.filterText;
    var groupHeader;


    //处理this.props.data, 把选中的值放到数组前面来
    // var _data = this.props.showSelectedFirst
    //   ? this.props.showSelectedFirst(this.state.value, this.props.data)
    //   : this.props.data;

    var _data = this.props.sortSelected ? this.showSelectedFirst(this.getValue(), cloneDeep(this.props.data)) : this.props.data;


    _data.forEach(function (option, i) {
      var checked = this.hasValue(option.value);
      var checkedClass = checked ? this.setClassNamespace('checked') : null;
      var checkedIcon = checked ? <Icon icon="check" /> : null;

      checked && selectedLabel.push(option.label);

      // add group header
      if (option.group && groupHeader !== option.group) {
        groupHeader = option.group;
        items.push(
          <li
            className={this.prefixClass('list-header')}
            key={'header' + i}
            >
            {groupHeader}
          </li>
        );
      }

      if (!this.props.optionFilter(filterText, option)) {
        return;
      }

      items.push(
        <li
          className={checkedClass}
          onClick={this.handleCheck.bind(this, option)}
          key={i}
          >
          <span className={this.prefixClass('text')}>
            {option.label}
          </span>
          {checkedIcon}
        </li>
      );
    }.bind(this));

    var status = (
      <span
        className={classNames(this.prefixClass('status'),
          this.setClassNamespace('fl'))}
        >
        {selectedLabel.length ? selectedLabel.join(', ') : (
          <span className={this.prefixClass('placeholder ')}>
            {this.props.placeholder}
          </span>
        )}
      </span>
    );
    var optionsStyle = {};

    if (this.props.maxHeight) {
      optionsStyle = {
        maxHeight: this.props.maxHeight,
        overflowY: 'scroll'
      };
    }

    let searchTip = this.props.searchBox && this.props.searchTip || null;

    return (
      <Dropdown
        className={classNames(this.props.className, classSet)}
        title={status}
        onClose={this.clearFilterInput}
        btnStyle={this.props.btnStyle}
        btnSize={this.props.btnSize}
        btnInlineStyle={{ width: this.props.btnWidth }}
        contentInlineStyle={{ minWidth: this.state.dropdownWidth }}
        toggleClassName={this.prefixClass('btn')}
        caretClassName={this.prefixClass('icon')}
        contentClassName={this.prefixClass('content')}
        contentTag="div"
        dropup={this.props.dropup}
        ref="dropdown"
        >
        {searchTip}
        {this.props.searchBox ? (
          <div className={this.prefixClass('search')}>
            <i className="icon-search"></i>
            <Input
              onChange={this.handleUserInput}
              autoComplete="off"
              standalone
              ref="filterInput"
              />
          </div>) : null}
        <ul
          style={optionsStyle}
          className={this.prefixClass('list')}
          >
          {items}
        </ul>
        <input
          name={this.props.name}
          type="hidden"
          ref="selectedField"
          value={this.state.value}
          />
      </Dropdown>
    );
  }
});

module.exports = Selected;

'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var Infinite = require('react-infinite');
var classNames = require('classnames');
var ClassNameMixin = require('./mixins/ClassNameMixin');
var Dropdown = require('./Dropdown');
var Icon = require('./Icon');
var Input = require('./Input');
var cloneDeep = require('lodash/cloneDeep');
var InfiniteSelected = React.createClass({
  mixins: [ClassNameMixin],

  propTypes: {
    classPrefix: React.PropTypes.string,
    data: React.PropTypes.array.isRequired,
    placeholder: React.PropTypes.string,
    value: React.PropTypes.string,
    multiple: React.PropTypes.bool,
    searchBox: React.PropTypes.bool,
    name: React.PropTypes.string,
    onChange: React.PropTypes.func,
    optionFilter: React.PropTypes.func, // (filterText, option) => {}
    dropup: React.PropTypes.bool,
    btnWidth: React.PropTypes.number,
    btnStyle: React.PropTypes.string,
    btnSize: React.PropTypes.string,
    maxHeight: React.PropTypes.number,
    sortSelected: React.PropTypes.bool,
    limit: React.PropTypes.number,
    onValidateValue: React.PropTypes.func, // 判断value是否有效
    // delimiter to use to join multiple values
    delimiter: React.PropTypes.string
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
      filterText: null,
      selectedLabel: [],
      isInfiniteLoading: false,
      items: [],
      data: [],
      loadNum: 50,
    };
  },

  componentDidMount: function () {
    this.setDropdownWidth();
  },

  componentWillUpdate: function componentWillUpdate(nextProps, nextState) {
    // console.log('componentWillUpdate', nextState.filterText, this.state.filterText);
    if (nextState.filterText !== this.state.filterText) {
      this.setItems(0, this.state.data.length, this.state.data, nextState.filterText);
    }
  },

  componentWillReceiveProps: function (nextProps) {
    var sortedData = this.showSelectedFirst(nextProps.value, cloneDeep(nextProps.data));
    this.setState({
      value: nextProps.value,
      data: sortedData,
      selectedLabel: this.getSelectedLabel(nextProps.value, sortedData)
    });
    this.setItems(0, this.state.loadNum, sortedData);
  },

  setItems: function (start, end, data) {
    if (!data || !data.length || data.length <= 0) {
      return {};
    }
    var itemsAndSelectedLabel = this.buildElements(data, start, end);
    this.setState({
      items: itemsAndSelectedLabel.items,
    });
  },

  buildElements: function (data, start, end, filterText) {
    var groupHeader;
    var items = [];

    data.slice(start, end).forEach(function (option, i) {
      var checked = this.hasValue(option.value);
      var checkedClass = checked ? this.setClassNamespace('checked') : null;
      var checkedIcon = checked ? <Icon icon="check" /> : null;

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
          key={i + new Date().getTime()}
          >
          <span className={this.prefixClass('text')}>
            {option.label}
          </span>
          {checkedIcon}
        </li>
      );
    }.bind(this));

    return {
      items: items,
      selectedLabel: selectedLabel
    };
  },

  handleInfiniteLoad: function () {
    var that = this;
    this.setState({
      isInfiniteLoading: true
    });
    setTimeout(function () {
      var elemLength = that.state.items.length;
      var dataLength = that.state.data.length;

      if (elemLength >= dataLength) {
        that.setState({
          isInfiniteLoading: false
        });
        return false;
      }
      var newElements = that.buildElements(that.state.data, elemLength, (elemLength + that.state.loadNum) >= dataLength ? dataLength : elemLength + that.state.loadNum).items;
      that.setState({
        isInfiniteLoading: false,
        items: that.state.items.concat(newElements)
      });
    }, 2500);
  },

  elementInfiniteLoad: function () {
    return <li className="infinite-list-item">
      Loading...
    </li>;
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
    var status = (
      <span
        className={classNames(this.prefixClass('status'),
          this.setClassNamespace('fl'))}
        >
        {this.state.selectedLabel.length ? this.state.selectedLabel.join(', ') : (
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

        <Infinite
          elementHeight={36}
          containerHeight={200}
          infiniteLoadBeginEdgeOffset={200}
          onInfiniteLoad={this.handleInfiniteLoad}
          loadingSpinnerDelegate={this.elementInfiniteLoad()}
          isInfiniteLoading={this.state.isInfiniteLoading}
          >
          <ul
            // style={optionsStyle}
            className={this.prefixClass('list')}
            >
            {this.state.items}
          </ul>
        </Infinite>;

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

module.exports = InfiniteSelected;

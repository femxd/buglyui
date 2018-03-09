'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var createReactClass = require('create-react-class');
var PropTypes = require('prop-types');
var classNames = require('classnames');
var ClassNameMixin = require('./mixins/ClassNameMixin');
var AvgGrid = require('./AvgGrid');
var omit = require('object.omit');

var Titlebar = createReactClass({
  mixins: [ClassNameMixin],

  propTypes: {
    classprefix: PropTypes.string,
    theme: PropTypes.oneOf(['default', 'multi', 'cols']),
    nav: PropTypes.array,
    title: PropTypes.node
  },

  getDefaultProps: function getDefaultProps() {
    return {
      classprefix: 'titlebar',
      theme: 'default',
      data: []
    };
  },

  render: function render() {
    var classSet = this.getClassSet();
    var props = omit(this.props, ['classprefix', 'nav', 'theme']);

    return React.createElement(
      'div',
      _extends({}, props, {
        'data-am-widget': this.props.classprefix,
        className: classNames(this.props.className, classSet)
      }),
      React.createElement(
        'h2',
        { className: this.prefixClass('title') },
        this.props.href ? React.createElement(
          'a',
          { href: this.props.href },
          this.props.title
        ) : this.props.title
      ),
      this.props.nav ? React.createElement(
        'nav',
        { className: this.prefixClass('nav') },
        this.props.nav.map(function (item, i) {
          return React.createElement(
            'a',
            { href: item.link, key: i },
            item.title
          );
        })
      ) : null
    );
  }
});

module.exports = Titlebar;
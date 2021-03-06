'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var createReactClass = require('create-react-class');
var PropTypes = require('prop-types');
var classNames = require('classnames');
var ClassNameMixin = require('./mixins/ClassNameMixin');
var Icon = require('./Icon');
var omit = require('object.omit');

var Navbar = createReactClass({
  mixins: [ClassNameMixin],

  propTypes: {
    classprefix: PropTypes.string,
    theme: PropTypes.oneOf(['default']),
    data: PropTypes.array,
    onSelect: PropTypes.func
  },

  getDefaultProps: function getDefaultProps() {
    return {
      classprefix: 'navbar',
      theme: 'default',
      data: [],
      onSelect: function onSelect() {}
    };
  },

  render: function render() {
    var classSet = this.getClassSet();
    var props = omit(this.props, 'data');

    return React.createElement(
      'div',
      _extends({}, props, {
        'data-am-widget': this.props.classprefix,
        cf: true,
        className: classNames(this.props.className, classSet)
      }),
      React.createElement(
        'ul',
        { className: this.prefixClass('nav') },
        this.props.data.map(function (item, i) {
          var Link = item.component || 'a';
          var LinkProps = item.props || {};

          return React.createElement(
            'li',
            {
              key: i,
              onClick: this.props.onSelect.bind(this, item.link)
            },
            React.createElement(
              Link,
              _extends({
                href: item.link
              }, LinkProps),
              item.customIcon ? React.createElement('img', {
                src: item.customIcon,
                alt: item.title
              }) : item.icon ? React.createElement(Icon, { icon: item.icon }) : null,
              item.title ? React.createElement(
                'span',
                { className: this.prefixClass('label') },
                item.title
              ) : null
            )
          );
        }.bind(this))
      )
    );
  }
});

module.exports = Navbar;
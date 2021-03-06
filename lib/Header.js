'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var createReactClass = require('create-react-class');
var PropTypes = require('prop-types');
var classNames = require('classnames');
var ClassNameMixin = require('./mixins/ClassNameMixin');
var Icon = require('./Icon');
var omit = require('object.omit');

var Header = createReactClass({
  mixins: [ClassNameMixin],

  propTypes: {
    classprefix: PropTypes.string,
    theme: PropTypes.oneOf(['default']),
    data: PropTypes.object,
    fixed: PropTypes.bool,
    title: PropTypes.node,
    link: PropTypes.string,
    onSelect: PropTypes.func
  },

  getDefaultProps: function getDefaultProps() {
    return {
      classprefix: 'header',
      theme: 'default',
      onSelect: function onSelect() {}
    };
  },

  renderTitle: function renderTitle() {
    return this.props.title ? React.createElement(
      'h1',
      {
        className: this.prefixClass('title'),
        onClick: this.props.onSelect.bind(this, {
          title: this.props.title,
          link: this.props.link
        })
      },
      this.props.link ? React.createElement(
        'a',
        { href: this.props.link },
        this.props.title
      ) : this.props.title
    ) : null;
  },

  renderNav: function renderNav(position) {
    var data = this.props.data;
    var renderItem = function (item, i) {
      var handleClick = item.onSelect || this.props.onSelect;

      return React.createElement(
        'a',
        { href: item.link,
          onClick: handleClick.bind(this, item),
          key: 'headerNavItem' + i
        },
        item.title ? React.createElement(
          'span',
          { className: this.prefixClass('nav-title') },
          item.title
        ) : null,
        item.customIcon ? React.createElement('img', { src: item.customIcon, alt: item.title || null }) : item.icon ? React.createElement(Icon, {
          className: this.prefixClass('icon'),
          icon: item.icon
        }) : null
      );
    }.bind(this);

    return data && data[position] ? React.createElement(
      'div',
      {
        className: classNames(this.prefixClass('nav'), this.prefixClass(position))
      },
      data[position].map(function (item, i) {
        return renderItem(item, i);
      })
    ) : null;
  },

  render: function render() {
    var classSet = this.getClassSet();

    // am-header-fixed: fixed header
    classSet[this.prefixClass('fixed')] = this.props.fixed;

    return React.createElement(
      'header',
      _extends({}, omit(this.props, ['data', 'title']), {
        'data-am-widget': this.props.classprefix,
        className: classNames(this.props.className, classSet)
      }),
      this.renderNav('left'),
      this.renderTitle(),
      this.renderNav('right')
    );
  }
});

module.exports = Header;
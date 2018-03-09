'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var createReactClass = require('create-react-class');
var PropTypes = require('prop-types');
var classNames = require('classnames');
var ClassNameMixin = require('./mixins/ClassNameMixin');

var Footer = createReactClass({
  mixins: [ClassNameMixin],

  propTypes: {
    theme: PropTypes.oneOf(['default']),
    classprefix: PropTypes.string,
    mobileTitle: PropTypes.string,
    mobileLink: PropTypes.string,
    desktopTitle: PropTypes.string,
    desktopLink: PropTypes.string,
    onRequestMobile: PropTypes.func,
    onRequestDesktop: PropTypes.func,
    data: PropTypes.array
  },

  getDefaultProps: function getDefaultProps() {
    return {
      classprefix: 'footer',
      theme: 'default',
      mobileTitle: '适配版',
      desktopTitle: '电脑版'
    };
  },

  render: function render() {
    var classSet = this.getClassSet();
    var MobileTag = this.props.mobileLink ? 'a' : 'span';

    return React.createElement(
      'footer',
      _extends({}, this.props, {
        'data-am-widget': this.props.classprefix,
        className: classNames(this.props.className, classSet)
      }),
      React.createElement(
        'div',
        { className: this.prefixClass('switch') },
        React.createElement(
          MobileTag,
          {
            className: this.prefixClass('ysp'),
            onClick: this.props.onRequestMobile,
            href: this.props.mobileLink,
            'data-rel': 'mobile'
          },
          this.props.mobileTitle
        ),
        React.createElement(
          'span',
          { className: this.prefixClass('divider') },
          '|'
        ),
        React.createElement(
          'a',
          {
            'data-rel': 'desktop',
            href: this.props.desktopLink,
            onClick: this.props.onRequestDesktop,
            className: this.prefixClass('desktop')
          },
          this.props.desktopTitle
        )
      ),
      React.createElement(
        'div',
        { className: this.prefixClass('miscs') },
        this.props.data ? this.props.data.map(function (item, i) {
          return React.createElement(
            'p',
            { key: i },
            item
          );
        }) : this.props.children
      )
    );
  }
});

module.exports = Footer;
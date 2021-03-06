'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var PropTypes = require('prop-types');
var createReactClass = require('create-react-class');
var classNames = require('classnames');
var ClassNameMixin = require('./mixins/ClassNameMixin');
var Button = require('./Button');
var Col = require('./Col');

var ListNews = createReactClass({
  mixins: [ClassNameMixin],

  propTypes: {
    classprefix: PropTypes.string,
    theme: PropTypes.oneOf(['default']),
    data: PropTypes.object,
    header: PropTypes.node,
    footer: PropTypes.node,
    morePosition: PropTypes.oneOf(['top', 'bottom']),
    moreText: PropTypes.string,
    thumbPosition: PropTypes.oneOf(['top', 'left', 'right', 'bottom-left', 'bottom-right'])
  },

  getDefaultProps: function getDefaultProps() {
    return {
      classprefix: 'list-news',
      theme: 'default',
      moreText: '\u66F4\u591A \xBB'
    };
  },

  renderHeader: function renderHeader() {
    var data = this.props.data;

    return data && data.header && data.header.title ? React.createElement(
      'div',
      {
        className: classNames(this.prefixClass('hd'), this.setClassNamespace('cf'))
      },
      data.header.link ? React.createElement(
        'a',
        { href: data.header.link },
        React.createElement(
          'h2',
          null,
          data.header.title
        ),
        this.props.morePosition === 'top' ? React.createElement(
          'span',
          {
            className: classNames(this.prefixClass('more'), this.setClassNamespace('fr')) },
          this.props.moreText
        ) : null
      ) : React.createElement(
        'h2',
        null,
        data.header.title
      )
    ) : null;
  },

  // `more` on bottom
  renderFooter: function renderFooter() {
    return this.props.morePosition === 'bottom' && this.props.data.header.link ? React.createElement(
      'div',
      { className: this.prefixClass('ft') },
      React.createElement(
        Button,
        {
          className: this.prefixClass('more'),
          href: this.props.data.header.link },
        this.props.moreText
      )
    ) : null;
  },

  getListItemClasses: function getListItemClasses(item) {
    return classNames(this.setClassNamespace('g'), item.date ? this.setClassNamespace('list-item-dated') : false, item.desc ? this.setClassNamespace('list-item-desced') : false, item.img ? this.setClassNamespace('list-item-thumbed') : false, this.props.thumbPosition ? this.setClassNamespace('list-item-thumb-' + this.props.thumbPosition) : false);
  },

  renderBody: function renderBody(children) {
    return React.createElement(
      'div',
      { className: this.prefixClass('bd') },
      React.createElement(
        'ul',
        { className: this.setClassNamespace('list') },
        children
      )
    );
  },

  renderList: function renderList() {
    var position = this.props.thumbPosition;
    var orderChildren = function (item, i) {
      var thumb = this.renderItemThumb(item, i);
      var main = this.renderItemMain(item, i);

      return position === 'right' || position === 'bottom-right' ? [main, thumb] : [thumb, main];
    }.bind(this);

    return this.props.data.main.map(function (item, i) {
      return React.createElement(
        'li',
        {
          key: i,
          className: this.getListItemClasses(item)
        },
        position === 'bottom-left' || position === 'bottom-right' ? this.renderThumbItemTitle(item) : null,
        orderChildren(item, i)
      );
    }.bind(this));
  },

  renderItemMisc: function renderItemMisc(item, type) {
    var Tag = type === 'date' ? 'span' : 'div';
    var className;

    switch (type) {
      case 'date':
        className = 'list-date';
        break;
      case 'desc':
        className = 'list-item-text';
        break;
      case 'mainAddition':
        className = 'list-news-addon';
        break;
      case 'thumbAddition':
        className = 'list-thumb-addon';
    }

    return item[type] ? React.createElement(
      Tag,
      { className: this.setClassNamespace(className) },
      item[type]
    ) : null;
  },

  renderItemThumb: function renderItemThumb(item, i) {
    var Link = item.component || 'a';
    var cols = this.props.thumbPosition === 'top' ? 12 : 4;

    return item.img ? React.createElement(
      Col,
      {
        key: 'thumb' + i,
        sm: cols,
        className: this.setClassNamespace('list-thumb')
      },
      React.createElement(
        Link,
        {
          href: item.link
        },
        React.createElement('img', { src: item.img, alt: item.title })
      ),
      this.renderItemMisc(item, 'thumbAddition')
    ) : null;
  },

  renderItemMain: function renderItemMain(item, i) {
    var Link = item.component || 'a';
    var position = this.props.thumbPosition;
    var date = this.renderItemMisc(item, 'date');
    var desc = this.renderItemMisc(item, 'desc');
    var addon = this.renderItemMisc(item, 'mainAddition');
    // title of list without thumbnail
    var itemWithoutThumbTitle = !position && item.title ? React.createElement(
      Link,
      {
        key: 'title' + i,
        className: this.setClassNamespace('list-item-hd'),
        href: item.link
      },
      item.title
    ) : null;
    var cols = position === 'top' ? 12 : item.img ? 8 : 12;

    return position ? React.createElement(
      Col,
      {
        sm: cols,
        className: this.setClassNamespace('list-main'),
        key: 'itemMain' + i
      },
      position !== 'bottom-left' && position !== 'bottom-right' ? this.renderThumbItemTitle(item) : null,
      date,
      desc,
      addon
    ) : [itemWithoutThumbTitle, date, desc, addon];
  },

  renderThumbItemTitle: function renderThumbItemTitle(item) {
    var Link = item.component || 'a';

    return item.title ? React.createElement(
      'h3',
      { className: this.setClassNamespace('list-item-hd') },
      React.createElement(
        Link,
        { href: item.link },
        item.title
      )
    ) : null;
  },

  render: function render() {
    var classSet = this.getClassSet();

    return React.createElement(
      'div',
      _extends({}, this.props, {
        'data-am-widget': this.props.classprefix,
        className: classNames(this.props.className, classSet)
      }),
      this.props.header || this.renderHeader(),
      this.renderBody(this.renderList()),
      this.props.footer || this.renderFooter()
    );
  }
});

module.exports = ListNews;
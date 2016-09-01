'use strict';

var React = require('react');
var classNames = require('classnames');
var ClassNameMixin = require('./mixins/ClassNameMixin');
var Icon = require('./Icon');
var omit = require('object.omit');

var Header = React.createClass({
  mixins: [ClassNameMixin],

  propTypes: {
    classPrefix: React.PropTypes.string,
    theme: React.PropTypes.oneOf(['default']),
    data: React.PropTypes.object,
    fixed: React.PropTypes.bool,
    title: React.PropTypes.node,
    link: React.PropTypes.string,
    onSelect: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      classPrefix: 'header',
      theme: 'default',
      onSelect: function() {}
    };
  },

  renderTitle: function() {
    return this.props.title ? (
      <h1
        className={this.prefixClass('title')}
        onClick={this.props.onSelect.bind(this, {
          title: this.props.title,
          link: this.props.link
        })}
      >
        {this.props.link ? (
          <a href={this.props.link}>
            {this.props.title}
          </a>
        ) : this.props.title}
      </h1>
    ) : null;
  },

  renderNav: function(position) {
    var data = this.props.data;
    var renderItem = function(item, i) {
      var handleClick = item.onSelect || this.props.onSelect;

      return (
        <a href={item.link}
           onClick={handleClick.bind(this, item)}
           key={'headerNavItem' + i}
        >
          {item.title ? (
            <span className={this.prefixClass('nav-title')}>
              {item.title}
            </span>
          ) : null}

          {item.customIcon ? (
            <img src={item.customIcon} alt={item.title || null} />
          ) : item.icon ? (
            <Icon
              className={this.prefixClass('icon')}
              icon={item.icon}
            />
          ) : null}
        </a>
      );
    }.bind(this);

    return data && data[position] ? (
      <div
        className={classNames(this.prefixClass('nav'),
          this.prefixClass(position))}
      >
        {data[position].map(function(item, i) {
          return renderItem(item, i);
        })}
      </div>
    ) : null;
  },

  render: function() {
    var classSet = this.getClassSet();

    // am-header-fixed: fixed header
    classSet[this.prefixClass('fixed')] = this.props.fixed;

    return (
      <header
        {...omit(this.props, ['data', 'title'])}
        data-am-widget={this.props.classPrefix}
        className={classNames(this.props.className, classSet)}
      >
        {this.renderNav('left')}
        {this.renderTitle()}
        {this.renderNav('right')}
      </header>
    );
  }
});

module.exports = Header;

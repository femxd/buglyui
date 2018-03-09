'use strict';

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

  getDefaultProps: function() {
    return {
      classprefix: 'titlebar',
      theme: 'default',
      data: []
    };
  },

  render: function() {
    var classSet = this.getClassSet();
    var props = omit(this.props, ['classprefix', 'nav', 'theme']);

    return (
      <div
        {...props}
        data-am-widget={this.props.classprefix}
        className={classNames(this.props.className, classSet)}
      >
        <h2 className={this.prefixClass('title')}>
          {this.props.href ? (
            <a href={this.props.href}>
              {this.props.title}
            </a>
          ) : this.props.title}
        </h2>
        {this.props.nav ? (
          <nav className={this.prefixClass('nav')}>
            {this.props.nav.map(function(item, i) {
              return (
                <a href={item.link} key={i}>
                  {item.title}
                </a>);
            })}
          </nav>
        ) : null}
      </div>
    );
  }
});

module.exports = Titlebar;

'use strict';

var React = require('react');
var classNames = require('classnames');
var ClassNameMixin = require('./mixins/ClassNameMixin');
var Icon = require('./Icon');
var omit = require('object.omit');

var Navbar = React.createClass({
  mixins: [ClassNameMixin],

  propTypes: {
    classPrefix: React.PropTypes.string,
    theme: React.PropTypes.oneOf(['default']),
    data: React.PropTypes.array,
    onSelect: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      classPrefix: 'navbar',
      theme: 'default',
      data: [],
      onSelect: function() {}
    };
  },

  render: function() {
    var classSet = this.getClassSet();
    var props = omit(this.props, 'data');

    return (
      <div
        {...props}
        data-am-widget={this.props.classPrefix}
        cf
        className={classNames(this.props.className, classSet)}
      >
        <ul className={this.prefixClass('nav')}>
          {this.props.data.map(function(item, i) {
            var Link = item.component || 'a';
            var LinkProps = item.props || {};

            return (
              <li
                key={i}
                onClick={this.props.onSelect.bind(this, item.link)}
              >
                <Link
                  href={item.link}
                  {...LinkProps}
                >
                  {item.customIcon ? (
                    <img
                      src={item.customIcon}
                      alt={item.title}
                    />
                  ) : item.icon ? (
                    <Icon icon={item.icon} />
                  ) : null}

                  {item.title ? (
                    <span className={this.prefixClass('label')}>
                      {item.title}
                    </span>
                  ) : null}
                </Link>
              </li>
            );
          }.bind(this))}
        </ul>
      </div>
    );
  }
});

module.exports = Navbar;

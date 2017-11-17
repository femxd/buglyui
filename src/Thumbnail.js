'use strict';

var React = require('react');
var createReactClass = require('create-react-class');
var PropTypes = require('prop-types');
var classNames = require('classnames');
var ClassNameMixin = require('./mixins/ClassNameMixin');
var omit = require('object.omit');

var Thumbnail = createReactClass({
  mixins: [ClassNameMixin],

  propTypes: {
    classPrefix: PropTypes.string,
    standalone: PropTypes.bool,
    caption: PropTypes.node,
    component: PropTypes.node
  },

  getDefaultProps: function() {
    return {
      classPrefix: 'thumbnail',
      component: 'figure'
    };
  },

  renderImg: function(classes, props) {
    props = props || {};

    return props.src ? (
      <img
        {...props}
        className={classes}
      />
    ) : null;
  },

  render: function() {
    var classes = classNames(this.getClassSet(), this.props.className);

    if (this.props.standalone) {
      return this.renderImg(classes, this.props);
    }

    var Component = this.props.href ? 'a' : this.props.component;
    var imgProps = {
      alt: this.props.alt,
      src: this.props.src,
      width: this.props.width,
      height: this.props.height
    };
    var props = omit(this.props, ['alt', 'src', 'width', 'height']);
    var caption = this.props.caption;

    return (
      <Component
        {...props}
        className={classes}
      >
        {this.renderImg(null, imgProps)}

        {caption || this.props.children ? (
          <Thumbnail.Caption
            component={typeof caption === 'string' ? 'figcaption' : 'div'}
          >
            {this.props.caption || this.props.children}
          </Thumbnail.Caption>
        ) : null}
      </Component>
    );
  }
});

Thumbnail.Caption = createReactClass({
  mixins: [ClassNameMixin],

  propTypes: {
    component: PropTypes.node
  },

  getDefaultProps: function() {
    return {
      component: 'div'
    };
  },

  render: function() {
    var Component = this.props.component;
    var classes = classNames(
      this.props.className,
      this.setClassNamespace('thumbnail-caption')
    );

    return (
      <Component
        {...this.props}
        className={classes}
      >
        {this.props.children}
      </Component>
    );
  }
});

module.exports = Thumbnail;

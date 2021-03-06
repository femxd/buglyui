'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');
var PropTypes = require('prop-types');
var classNames = require('classnames');
var ClassNameMixin = require('./mixins/ClassNameMixin');
var TransitionEvents = require('./utils/TransitionEvents');

//React.initializeTouchEvents(true);

var Slider = createReactClass({
  mixins: [ClassNameMixin],

  propTypes: {
    theme: PropTypes.oneOf(['default', 'a1', 'a2', 'a3', 'a4', 'a5', 'b1', 'b2', 'b3', 'b4', 'c1', 'c2', 'c3', 'c4', 'd1', 'd2', 'd3']),
    directionNav: PropTypes.bool, // prev/next icon
    controlNav: PropTypes.bool,

    animation: PropTypes.string, // not working
    slide: PropTypes.bool,
    autoPlay: PropTypes.bool,
    slideSpeed: PropTypes.number, // interval
    loop: PropTypes.bool, // loop slide

    pauseOnHover: PropTypes.bool,
    touch: PropTypes.bool, // TODO: add touch support

    onSelect: PropTypes.func,
    onSlideEnd: PropTypes.func,
    activeIndex: PropTypes.number,
    defaultActiveIndex: PropTypes.number,
    direction: PropTypes.oneOf(['prev', 'next'])
  },

  getDefaultProps: function getDefaultProps() {
    return {
      classprefix: 'slider',
      theme: 'default',
      directionNav: true,
      controlNav: true,
      slide: true,
      autoPlay: true,
      loop: true,
      slideSpeed: 5000,
      pauseOnHover: true
    };
  },

  getInitialState: function getInitialState() {
    return {
      activeIndex: this.props.defaultActiveIndex == null ? 0 : this.props.defaultActiveIndex,
      previousActiveIndex: null,
      direction: null
    };
  },

  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    var activeIndex = this.getActiveIndex();

    if (nextProps.activeIndex != null && nextProps.activeIndex !== activeIndex) {
      clearTimeout(this.timeout);
      this.setState({
        previousActiveIndex: activeIndex,
        direction: nextProps.direction != null ? nextProps.direction : this.getDirection(activeIndex, nextProps.activeIndex)
      });
    }
  },

  componentDidMount: function componentDidMount() {
    this.props.autoPlay && this.waitForNext();
  },

  componentWillUnmount: function componentWillUnmount() {
    clearTimeout(this.timeout);
  },

  getDirection: function getDirection(prevIndex, index) {
    if (prevIndex === index) {
      return null;
    }

    return prevIndex > index ? 'prev' : 'next';
  },

  next: function next(e) {
    e && e.preventDefault();

    var index = this.getActiveIndex() + 1;
    var count = React.Children.count(this.props.children);

    if (index > count - 1) {
      if (!this.props.loop) {
        return;
      }
      index = 0;
    }

    this.handleSelect(index, 'next');
  },

  prev: function prev(e) {
    e && e.preventDefault();

    var index = this.getActiveIndex() - 1;

    if (index < 0) {
      if (!this.props.loop) {
        return;
      }
      index = React.Children.count(this.props.children) - 1;
    }

    this.handleSelect(index, 'prev');
  },

  pause: function pause() {
    this.isPaused = true;
    clearTimeout(this.timeout);
  },

  play: function play() {
    this.isPaused = false;
    this.waitForNext();
  },

  waitForNext: function waitForNext() {
    if (!this.isPaused && this.props.slide && this.props.slideSpeed && this.props.activeIndex == null) {
      this.timeout = setTimeout(this.next, this.props.slideSpeed);
    }
  },

  handleMouseOver: function handleMouseOver() {
    if (this.props.pauseOnHover) {
      this.pause();
    }
  },

  handleMouseOut: function handleMouseOut() {
    if (this.isPaused) {
      this.play();
    }
  },

  getActiveIndex: function getActiveIndex() {
    return this.props.activeIndex != null ? this.props.activeIndex : this.state.activeIndex;
  },

  handleItemAnimateOutEnd: function handleItemAnimateOutEnd() {
    this.setState({
      previousActiveIndex: null,
      direction: null
    }, function () {
      this.waitForNext();

      if (this.props.onSlideEnd) {
        this.props.onSlideEnd();
      }
    });
  },

  handleSelect: function handleSelect(index, direction, e) {
    e && e.preventDefault();
    clearTimeout(this.timeout);

    var previousActiveIndex = this.getActiveIndex();

    direction = direction || this.getDirection(previousActiveIndex, index);

    if (this.props.onSelect) {
      this.props.onSelect(index, direction);
    }

    if (this.props.activeIndex == null && index !== previousActiveIndex) {
      if (this.state.previousActiveIndex != null) {
        // If currently animating don't activate the new index.
        // TODO: look into queuing this canceled call and
        // animating after the current animation has ended.
        return;
      }

      this.setState({
        activeIndex: index,
        previousActiveIndex: previousActiveIndex,
        direction: direction
      });
    }
  },

  renderDirectionNav: function renderDirectionNav() {
    return this.props.directionNav ? React.createElement(
      'ul',
      { className: this.setClassNamespace('direction-nav') },
      React.createElement(
        'li',
        null,
        React.createElement(
          'a',
          {
            onClick: this.prev,
            className: this.setClassNamespace('prev'),
            href: '#prev' },
          'Previous'
        )
      ),
      React.createElement(
        'li',
        null,
        React.createElement(
          'a',
          {
            onClick: this.next,
            className: this.setClassNamespace('next'),
            href: '#next' },
          'Next'
        )
      )
    ) : null;
  },

  renderControlNav: function renderControlNav() {
    if (this.props.controlNav) {
      var isThumbnailNav = false;
      var children = React.Children.map(this.props.children, function (child, i) {
        var className = i === this.getActiveIndex() ? this.setClassNamespace('active') : null;

        if (!isThumbnailNav) {
          isThumbnailNav = !!child.props.thumbnail;
        }

        var thumb = child.props.thumbnail;

        return React.createElement(
          'li',
          {
            onClick: this.handleSelect.bind(this, i, null),
            key: i
          },
          thumb ? React.createElement('img', { className: className, src: thumb }) : React.createElement('a', { href: '#' + i, className: className }),
          React.createElement('i', null)
        );
      }.bind(this));
      var controlClass = this.setClassNamespace('control-' + (isThumbnailNav ? 'thumbs' : 'paging'));

      return React.createElement(
        'ol',
        {
          className: classNames(this.setClassNamespace('control-nav'), controlClass) },
        children
      );
    }

    return null;
  },

  renderItem: function renderItem(child, index) {
    var activeIndex = this.getActiveIndex();
    var isActive = index === activeIndex;
    var isPreviousActive = this.state.previousActiveIndex != null && this.state.previousActiveIndex === index && this.props.slide;

    return React.cloneElement(child, {
      active: isActive,
      ref: child.ref,
      key: child.key ? child.key : index,
      index: index,
      animateOut: isPreviousActive,
      animateIn: isActive && this.state.previousActiveIndex != null && this.props.slide,
      direction: this.state.direction,
      onAnimateOutEnd: isPreviousActive ? this.handleItemAnimateOutEnd : null
    });
  },

  render: function render() {
    var classSet = this.getClassSet();
    var viewportStyle = {
      overflow: 'hidden',
      position: 'relative',
      width: '100%'
    };

    // React version slider style
    classSet[this.prefixClass('slide')] = true;

    return React.createElement(
      'div',
      _extends({}, this.props, {
        className: classNames(classSet, this.props.className),
        onMouseOver: this.handleMouseOver,
        onMouseOut: this.handleMouseOut
      }),
      React.createElement(
        'div',
        {
          className: this.setClassNamespace('viewport'),
          style: viewportStyle
        },
        React.createElement(
          'ul',
          { className: this.setClassNamespace('slides') },
          React.Children.map(this.props.children, this.renderItem)
        )
      ),
      this.renderDirectionNav(),
      this.renderControlNav()
    );
  }
});

Slider.Item = createReactClass({
  propTypes: {
    direction: PropTypes.oneOf(['prev', 'next']),
    onAnimateOutEnd: PropTypes.func,
    active: PropTypes.bool,
    animateIn: PropTypes.bool,
    animateOut: PropTypes.bool,
    caption: PropTypes.node,
    index: PropTypes.number,
    thumbnail: PropTypes.string
  },

  getInitialState: function getInitialState() {
    return {
      direction: null
    };
  },

  getDefaultProps: function getDefaultProps() {
    return {
      animation: true
    };
  },

  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if (this.props.active !== nextProps.active) {
      this.setState({
        direction: null
      });
    }
  },

  componentDidUpdate: function componentDidUpdate(prevProps) {
    if (!this.props.active && prevProps.active) {
      TransitionEvents.on(ReactDOM.findDOMNode(this), this.handleAnimateOutEnd);
    }

    if (this.props.active !== prevProps.active) {
      setTimeout(this.startAnimation, 20);
    }
  },

  handleAnimateOutEnd: function handleAnimateOutEnd() {
    if (this.props.onAnimateOutEnd && this.isMounted()) {
      this.props.onAnimateOutEnd(this.props.index);
    }
  },

  startAnimation: function startAnimation() {
    if (!this.isMounted()) {
      return;
    }

    this.setState({
      direction: this.props.direction === 'prev' ? 'right' : 'left'
    });
  },

  render: function render() {
    var classSet = {
      active: this.props.active && !this.props.animateIn || this.props.animateOut,
      next: this.props.active && this.props.animateIn && this.props.direction === 'next',
      prev: this.props.active && this.props.animateIn && this.props.direction === 'prev'
    };

    if (this.state.direction && (this.props.animateIn || this.props.animateOut)) {
      classSet[this.state.direction] = true;
    }

    return React.createElement(
      'li',
      {
        className: classNames(this.props.className, classSet)
      },
      this.props.children
    );
  }
});

module.exports = Slider;
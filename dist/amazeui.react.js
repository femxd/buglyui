/*! buglyui v1.2.15 | by Amaze UI Team | (c) 2017 AllMobilize, Inc. | Licensed under MIT | 2017-11-17T19:17:41+0800 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["AMUIReact"] = factory(require("react"), require("react-dom"));
	else
		root["AMUIReact"] = factory(root["React"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_36__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);

	if (!React) {
	  throw new Error('AMUIReact requires React.');
	}

	module.exports = {
	  VERSION: '1.2.15',

	  // layout
	  Grid: __webpack_require__(2),
	  Col: __webpack_require__(20),
	  Container: __webpack_require__(21),
	  AvgGrid: __webpack_require__(22),

	  // elements
	  Button: __webpack_require__(23),
	  ButtonToolbar: __webpack_require__(28),
	  ButtonCheck: __webpack_require__(29),
	  ButtonGroup: __webpack_require__(31),

	  // form related
	  Form: __webpack_require__(32),
	  FormGroup: __webpack_require__(33),
	  FormFile: __webpack_require__(34),
	  Input: __webpack_require__(35),
	  UCheck: __webpack_require__(38),

	  Image: __webpack_require__(39),
	  Thumbnail: __webpack_require__(40),
	  Thumbnails: __webpack_require__(41),
	  Table: __webpack_require__(42),
	  // Code: require('./Code'),

	  // Navs
	  Nav: __webpack_require__(43),
	  NavItem: __webpack_require__(44),
	  Breadcrumb: __webpack_require__(46),
	  Pagination: __webpack_require__(47),
	  Topbar: __webpack_require__(48),
	  Tabs: __webpack_require__(50),
	  CollapsibleNav: __webpack_require__(51),

	  Article: __webpack_require__(55),
	  Badge: __webpack_require__(56),
	  Close: __webpack_require__(57),
	  Icon: __webpack_require__(37),
	  List: __webpack_require__(58),
	  ListItem: __webpack_require__(59),
	  Panel: __webpack_require__(60),
	  PanelGroup: __webpack_require__(61),
	  Progress: __webpack_require__(62),

	  Alert: __webpack_require__(63),
	  // DatePicker: require('./DateTimePicker'),
	  // TimePicker: require('./DateTimePicker'),
	  DateTimeInput: __webpack_require__(64).DateTimeInput,
	  DateTimePicker: __webpack_require__(64).DateTimePicker,
	  Dropdown: __webpack_require__(73),
	  Modal: __webpack_require__(74),
	  ModalTrigger: __webpack_require__(78),
	  Popover: __webpack_require__(80),
	  PopoverTrigger: __webpack_require__(81),
	  NProgress: __webpack_require__(82),
	  ScrollSpy: __webpack_require__(83),
	  ScrollSpyNav: __webpack_require__(87),
	  Selected: __webpack_require__(89),
	  InfiniteSelected: __webpack_require__(92),
	  Slider: __webpack_require__(209),
	  Sticky: __webpack_require__(210),

	  // widgets
	  Accordion: __webpack_require__(211),
	  Divider: __webpack_require__(212),
	  Footer: __webpack_require__(213),
	  Gallery: __webpack_require__(214),
	  GoTop: __webpack_require__(215),
	  Header: __webpack_require__(216),
	  ListNews: __webpack_require__(217),
	  Menu: __webpack_require__(218),
	  Navbar: __webpack_require__(219),
	  Titlebar: __webpack_require__(220),

	  // mixins
	  mixins: __webpack_require__(221)
	};

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var React = __webpack_require__(1);
	var createReactClass = __webpack_require__(3);
	var PropTypes = __webpack_require__(11);
	var classNames = __webpack_require__(17);
	var ClassNameMixin = __webpack_require__(18);

	var Grid = createReactClass({
	  mixins: [ClassNameMixin],

	  propTypes: {
	    classPrefix: PropTypes.string.isRequired,
	    component: PropTypes.node.isRequired,
	    collapse: PropTypes.bool,
	    fixed: PropTypes.bool
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'g',
	      component: 'div'
	    };
	  },

	  render: function render() {
	    var Component = this.props.component;
	    var classSet = this.getClassSet();
	    var props = this.props;

	    // .am-g-fixed
	    classSet[this.prefixClass('fixed')] = props.fixed;

	    // .am-g-collapse
	    classSet[this.prefixClass('collapse')] = props.collapse;

	    return React.createElement(
	      Component,
	      _extends({}, this.props, {
	        className: classNames(this.props.className, classSet)
	      }),
	      this.props.children
	    );
	  }
	});

	module.exports = Grid;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

	var React = __webpack_require__(1);
	var factory = __webpack_require__(4);

	if (typeof React === 'undefined') {
	  throw Error(
	    'create-react-class could not find the React object. If you are using script tags, ' +
	      'make sure that React is being loaded before create-react-class.'
	  );
	}

	// Hack to grab NoopUpdateQueue from isomorphic React
	var ReactNoopUpdateQueue = new React.Component().updater;

	module.exports = factory(
	  React.Component,
	  React.isValidElement,
	  ReactNoopUpdateQueue
	);


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

	var _assign = __webpack_require__(6);

	var emptyObject = __webpack_require__(7);
	var _invariant = __webpack_require__(8);

	if (process.env.NODE_ENV !== 'production') {
	  var warning = __webpack_require__(9);
	}

	var MIXINS_KEY = 'mixins';

	// Helper function to allow the creation of anonymous functions which do not
	// have .name set to the name of the variable being assigned to.
	function identity(fn) {
	  return fn;
	}

	var ReactPropTypeLocationNames;
	if (process.env.NODE_ENV !== 'production') {
	  ReactPropTypeLocationNames = {
	    prop: 'prop',
	    context: 'context',
	    childContext: 'child context'
	  };
	} else {
	  ReactPropTypeLocationNames = {};
	}

	function factory(ReactComponent, isValidElement, ReactNoopUpdateQueue) {
	  /**
	   * Policies that describe methods in `ReactClassInterface`.
	   */

	  var injectedMixins = [];

	  /**
	   * Composite components are higher-level components that compose other composite
	   * or host components.
	   *
	   * To create a new type of `ReactClass`, pass a specification of
	   * your new class to `React.createClass`. The only requirement of your class
	   * specification is that you implement a `render` method.
	   *
	   *   var MyComponent = React.createClass({
	   *     render: function() {
	   *       return <div>Hello World</div>;
	   *     }
	   *   });
	   *
	   * The class specification supports a specific protocol of methods that have
	   * special meaning (e.g. `render`). See `ReactClassInterface` for
	   * more the comprehensive protocol. Any other properties and methods in the
	   * class specification will be available on the prototype.
	   *
	   * @interface ReactClassInterface
	   * @internal
	   */
	  var ReactClassInterface = {
	    /**
	     * An array of Mixin objects to include when defining your component.
	     *
	     * @type {array}
	     * @optional
	     */
	    mixins: 'DEFINE_MANY',

	    /**
	     * An object containing properties and methods that should be defined on
	     * the component's constructor instead of its prototype (static methods).
	     *
	     * @type {object}
	     * @optional
	     */
	    statics: 'DEFINE_MANY',

	    /**
	     * Definition of prop types for this component.
	     *
	     * @type {object}
	     * @optional
	     */
	    propTypes: 'DEFINE_MANY',

	    /**
	     * Definition of context types for this component.
	     *
	     * @type {object}
	     * @optional
	     */
	    contextTypes: 'DEFINE_MANY',

	    /**
	     * Definition of context types this component sets for its children.
	     *
	     * @type {object}
	     * @optional
	     */
	    childContextTypes: 'DEFINE_MANY',

	    // ==== Definition methods ====

	    /**
	     * Invoked when the component is mounted. Values in the mapping will be set on
	     * `this.props` if that prop is not specified (i.e. using an `in` check).
	     *
	     * This method is invoked before `getInitialState` and therefore cannot rely
	     * on `this.state` or use `this.setState`.
	     *
	     * @return {object}
	     * @optional
	     */
	    getDefaultProps: 'DEFINE_MANY_MERGED',

	    /**
	     * Invoked once before the component is mounted. The return value will be used
	     * as the initial value of `this.state`.
	     *
	     *   getInitialState: function() {
	     *     return {
	     *       isOn: false,
	     *       fooBaz: new BazFoo()
	     *     }
	     *   }
	     *
	     * @return {object}
	     * @optional
	     */
	    getInitialState: 'DEFINE_MANY_MERGED',

	    /**
	     * @return {object}
	     * @optional
	     */
	    getChildContext: 'DEFINE_MANY_MERGED',

	    /**
	     * Uses props from `this.props` and state from `this.state` to render the
	     * structure of the component.
	     *
	     * No guarantees are made about when or how often this method is invoked, so
	     * it must not have side effects.
	     *
	     *   render: function() {
	     *     var name = this.props.name;
	     *     return <div>Hello, {name}!</div>;
	     *   }
	     *
	     * @return {ReactComponent}
	     * @required
	     */
	    render: 'DEFINE_ONCE',

	    // ==== Delegate methods ====

	    /**
	     * Invoked when the component is initially created and about to be mounted.
	     * This may have side effects, but any external subscriptions or data created
	     * by this method must be cleaned up in `componentWillUnmount`.
	     *
	     * @optional
	     */
	    componentWillMount: 'DEFINE_MANY',

	    /**
	     * Invoked when the component has been mounted and has a DOM representation.
	     * However, there is no guarantee that the DOM node is in the document.
	     *
	     * Use this as an opportunity to operate on the DOM when the component has
	     * been mounted (initialized and rendered) for the first time.
	     *
	     * @param {DOMElement} rootNode DOM element representing the component.
	     * @optional
	     */
	    componentDidMount: 'DEFINE_MANY',

	    /**
	     * Invoked before the component receives new props.
	     *
	     * Use this as an opportunity to react to a prop transition by updating the
	     * state using `this.setState`. Current props are accessed via `this.props`.
	     *
	     *   componentWillReceiveProps: function(nextProps, nextContext) {
	     *     this.setState({
	     *       likesIncreasing: nextProps.likeCount > this.props.likeCount
	     *     });
	     *   }
	     *
	     * NOTE: There is no equivalent `componentWillReceiveState`. An incoming prop
	     * transition may cause a state change, but the opposite is not true. If you
	     * need it, you are probably looking for `componentWillUpdate`.
	     *
	     * @param {object} nextProps
	     * @optional
	     */
	    componentWillReceiveProps: 'DEFINE_MANY',

	    /**
	     * Invoked while deciding if the component should be updated as a result of
	     * receiving new props, state and/or context.
	     *
	     * Use this as an opportunity to `return false` when you're certain that the
	     * transition to the new props/state/context will not require a component
	     * update.
	     *
	     *   shouldComponentUpdate: function(nextProps, nextState, nextContext) {
	     *     return !equal(nextProps, this.props) ||
	     *       !equal(nextState, this.state) ||
	     *       !equal(nextContext, this.context);
	     *   }
	     *
	     * @param {object} nextProps
	     * @param {?object} nextState
	     * @param {?object} nextContext
	     * @return {boolean} True if the component should update.
	     * @optional
	     */
	    shouldComponentUpdate: 'DEFINE_ONCE',

	    /**
	     * Invoked when the component is about to update due to a transition from
	     * `this.props`, `this.state` and `this.context` to `nextProps`, `nextState`
	     * and `nextContext`.
	     *
	     * Use this as an opportunity to perform preparation before an update occurs.
	     *
	     * NOTE: You **cannot** use `this.setState()` in this method.
	     *
	     * @param {object} nextProps
	     * @param {?object} nextState
	     * @param {?object} nextContext
	     * @param {ReactReconcileTransaction} transaction
	     * @optional
	     */
	    componentWillUpdate: 'DEFINE_MANY',

	    /**
	     * Invoked when the component's DOM representation has been updated.
	     *
	     * Use this as an opportunity to operate on the DOM when the component has
	     * been updated.
	     *
	     * @param {object} prevProps
	     * @param {?object} prevState
	     * @param {?object} prevContext
	     * @param {DOMElement} rootNode DOM element representing the component.
	     * @optional
	     */
	    componentDidUpdate: 'DEFINE_MANY',

	    /**
	     * Invoked when the component is about to be removed from its parent and have
	     * its DOM representation destroyed.
	     *
	     * Use this as an opportunity to deallocate any external resources.
	     *
	     * NOTE: There is no `componentDidUnmount` since your component will have been
	     * destroyed by that point.
	     *
	     * @optional
	     */
	    componentWillUnmount: 'DEFINE_MANY',

	    // ==== Advanced methods ====

	    /**
	     * Updates the component's currently mounted DOM representation.
	     *
	     * By default, this implements React's rendering and reconciliation algorithm.
	     * Sophisticated clients may wish to override this.
	     *
	     * @param {ReactReconcileTransaction} transaction
	     * @internal
	     * @overridable
	     */
	    updateComponent: 'OVERRIDE_BASE'
	  };

	  /**
	   * Mapping from class specification keys to special processing functions.
	   *
	   * Although these are declared like instance properties in the specification
	   * when defining classes using `React.createClass`, they are actually static
	   * and are accessible on the constructor instead of the prototype. Despite
	   * being static, they must be defined outside of the "statics" key under
	   * which all other static methods are defined.
	   */
	  var RESERVED_SPEC_KEYS = {
	    displayName: function(Constructor, displayName) {
	      Constructor.displayName = displayName;
	    },
	    mixins: function(Constructor, mixins) {
	      if (mixins) {
	        for (var i = 0; i < mixins.length; i++) {
	          mixSpecIntoComponent(Constructor, mixins[i]);
	        }
	      }
	    },
	    childContextTypes: function(Constructor, childContextTypes) {
	      if (process.env.NODE_ENV !== 'production') {
	        validateTypeDef(Constructor, childContextTypes, 'childContext');
	      }
	      Constructor.childContextTypes = _assign(
	        {},
	        Constructor.childContextTypes,
	        childContextTypes
	      );
	    },
	    contextTypes: function(Constructor, contextTypes) {
	      if (process.env.NODE_ENV !== 'production') {
	        validateTypeDef(Constructor, contextTypes, 'context');
	      }
	      Constructor.contextTypes = _assign(
	        {},
	        Constructor.contextTypes,
	        contextTypes
	      );
	    },
	    /**
	     * Special case getDefaultProps which should move into statics but requires
	     * automatic merging.
	     */
	    getDefaultProps: function(Constructor, getDefaultProps) {
	      if (Constructor.getDefaultProps) {
	        Constructor.getDefaultProps = createMergedResultFunction(
	          Constructor.getDefaultProps,
	          getDefaultProps
	        );
	      } else {
	        Constructor.getDefaultProps = getDefaultProps;
	      }
	    },
	    propTypes: function(Constructor, propTypes) {
	      if (process.env.NODE_ENV !== 'production') {
	        validateTypeDef(Constructor, propTypes, 'prop');
	      }
	      Constructor.propTypes = _assign({}, Constructor.propTypes, propTypes);
	    },
	    statics: function(Constructor, statics) {
	      mixStaticSpecIntoComponent(Constructor, statics);
	    },
	    autobind: function() {}
	  };

	  function validateTypeDef(Constructor, typeDef, location) {
	    for (var propName in typeDef) {
	      if (typeDef.hasOwnProperty(propName)) {
	        // use a warning instead of an _invariant so components
	        // don't show up in prod but only in __DEV__
	        if (process.env.NODE_ENV !== 'production') {
	          warning(
	            typeof typeDef[propName] === 'function',
	            '%s: %s type `%s` is invalid; it must be a function, usually from ' +
	              'React.PropTypes.',
	            Constructor.displayName || 'ReactClass',
	            ReactPropTypeLocationNames[location],
	            propName
	          );
	        }
	      }
	    }
	  }

	  function validateMethodOverride(isAlreadyDefined, name) {
	    var specPolicy = ReactClassInterface.hasOwnProperty(name)
	      ? ReactClassInterface[name]
	      : null;

	    // Disallow overriding of base class methods unless explicitly allowed.
	    if (ReactClassMixin.hasOwnProperty(name)) {
	      _invariant(
	        specPolicy === 'OVERRIDE_BASE',
	        'ReactClassInterface: You are attempting to override ' +
	          '`%s` from your class specification. Ensure that your method names ' +
	          'do not overlap with React methods.',
	        name
	      );
	    }

	    // Disallow defining methods more than once unless explicitly allowed.
	    if (isAlreadyDefined) {
	      _invariant(
	        specPolicy === 'DEFINE_MANY' || specPolicy === 'DEFINE_MANY_MERGED',
	        'ReactClassInterface: You are attempting to define ' +
	          '`%s` on your component more than once. This conflict may be due ' +
	          'to a mixin.',
	        name
	      );
	    }
	  }

	  /**
	   * Mixin helper which handles policy validation and reserved
	   * specification keys when building React classes.
	   */
	  function mixSpecIntoComponent(Constructor, spec) {
	    if (!spec) {
	      if (process.env.NODE_ENV !== 'production') {
	        var typeofSpec = typeof spec;
	        var isMixinValid = typeofSpec === 'object' && spec !== null;

	        if (process.env.NODE_ENV !== 'production') {
	          warning(
	            isMixinValid,
	            "%s: You're attempting to include a mixin that is either null " +
	              'or not an object. Check the mixins included by the component, ' +
	              'as well as any mixins they include themselves. ' +
	              'Expected object but got %s.',
	            Constructor.displayName || 'ReactClass',
	            spec === null ? null : typeofSpec
	          );
	        }
	      }

	      return;
	    }

	    _invariant(
	      typeof spec !== 'function',
	      "ReactClass: You're attempting to " +
	        'use a component class or function as a mixin. Instead, just use a ' +
	        'regular object.'
	    );
	    _invariant(
	      !isValidElement(spec),
	      "ReactClass: You're attempting to " +
	        'use a component as a mixin. Instead, just use a regular object.'
	    );

	    var proto = Constructor.prototype;
	    var autoBindPairs = proto.__reactAutoBindPairs;

	    // By handling mixins before any other properties, we ensure the same
	    // chaining order is applied to methods with DEFINE_MANY policy, whether
	    // mixins are listed before or after these methods in the spec.
	    if (spec.hasOwnProperty(MIXINS_KEY)) {
	      RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);
	    }

	    for (var name in spec) {
	      if (!spec.hasOwnProperty(name)) {
	        continue;
	      }

	      if (name === MIXINS_KEY) {
	        // We have already handled mixins in a special case above.
	        continue;
	      }

	      var property = spec[name];
	      var isAlreadyDefined = proto.hasOwnProperty(name);
	      validateMethodOverride(isAlreadyDefined, name);

	      if (RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
	        RESERVED_SPEC_KEYS[name](Constructor, property);
	      } else {
	        // Setup methods on prototype:
	        // The following member methods should not be automatically bound:
	        // 1. Expected ReactClass methods (in the "interface").
	        // 2. Overridden methods (that were mixed in).
	        var isReactClassMethod = ReactClassInterface.hasOwnProperty(name);
	        var isFunction = typeof property === 'function';
	        var shouldAutoBind =
	          isFunction &&
	          !isReactClassMethod &&
	          !isAlreadyDefined &&
	          spec.autobind !== false;

	        if (shouldAutoBind) {
	          autoBindPairs.push(name, property);
	          proto[name] = property;
	        } else {
	          if (isAlreadyDefined) {
	            var specPolicy = ReactClassInterface[name];

	            // These cases should already be caught by validateMethodOverride.
	            _invariant(
	              isReactClassMethod &&
	                (specPolicy === 'DEFINE_MANY_MERGED' ||
	                  specPolicy === 'DEFINE_MANY'),
	              'ReactClass: Unexpected spec policy %s for key %s ' +
	                'when mixing in component specs.',
	              specPolicy,
	              name
	            );

	            // For methods which are defined more than once, call the existing
	            // methods before calling the new property, merging if appropriate.
	            if (specPolicy === 'DEFINE_MANY_MERGED') {
	              proto[name] = createMergedResultFunction(proto[name], property);
	            } else if (specPolicy === 'DEFINE_MANY') {
	              proto[name] = createChainedFunction(proto[name], property);
	            }
	          } else {
	            proto[name] = property;
	            if (process.env.NODE_ENV !== 'production') {
	              // Add verbose displayName to the function, which helps when looking
	              // at profiling tools.
	              if (typeof property === 'function' && spec.displayName) {
	                proto[name].displayName = spec.displayName + '_' + name;
	              }
	            }
	          }
	        }
	      }
	    }
	  }

	  function mixStaticSpecIntoComponent(Constructor, statics) {
	    if (!statics) {
	      return;
	    }
	    for (var name in statics) {
	      var property = statics[name];
	      if (!statics.hasOwnProperty(name)) {
	        continue;
	      }

	      var isReserved = name in RESERVED_SPEC_KEYS;
	      _invariant(
	        !isReserved,
	        'ReactClass: You are attempting to define a reserved ' +
	          'property, `%s`, that shouldn\'t be on the "statics" key. Define it ' +
	          'as an instance property instead; it will still be accessible on the ' +
	          'constructor.',
	        name
	      );

	      var isInherited = name in Constructor;
	      _invariant(
	        !isInherited,
	        'ReactClass: You are attempting to define ' +
	          '`%s` on your component more than once. This conflict may be ' +
	          'due to a mixin.',
	        name
	      );
	      Constructor[name] = property;
	    }
	  }

	  /**
	   * Merge two objects, but throw if both contain the same key.
	   *
	   * @param {object} one The first object, which is mutated.
	   * @param {object} two The second object
	   * @return {object} one after it has been mutated to contain everything in two.
	   */
	  function mergeIntoWithNoDuplicateKeys(one, two) {
	    _invariant(
	      one && two && typeof one === 'object' && typeof two === 'object',
	      'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.'
	    );

	    for (var key in two) {
	      if (two.hasOwnProperty(key)) {
	        _invariant(
	          one[key] === undefined,
	          'mergeIntoWithNoDuplicateKeys(): ' +
	            'Tried to merge two objects with the same key: `%s`. This conflict ' +
	            'may be due to a mixin; in particular, this may be caused by two ' +
	            'getInitialState() or getDefaultProps() methods returning objects ' +
	            'with clashing keys.',
	          key
	        );
	        one[key] = two[key];
	      }
	    }
	    return one;
	  }

	  /**
	   * Creates a function that invokes two functions and merges their return values.
	   *
	   * @param {function} one Function to invoke first.
	   * @param {function} two Function to invoke second.
	   * @return {function} Function that invokes the two argument functions.
	   * @private
	   */
	  function createMergedResultFunction(one, two) {
	    return function mergedResult() {
	      var a = one.apply(this, arguments);
	      var b = two.apply(this, arguments);
	      if (a == null) {
	        return b;
	      } else if (b == null) {
	        return a;
	      }
	      var c = {};
	      mergeIntoWithNoDuplicateKeys(c, a);
	      mergeIntoWithNoDuplicateKeys(c, b);
	      return c;
	    };
	  }

	  /**
	   * Creates a function that invokes two functions and ignores their return vales.
	   *
	   * @param {function} one Function to invoke first.
	   * @param {function} two Function to invoke second.
	   * @return {function} Function that invokes the two argument functions.
	   * @private
	   */
	  function createChainedFunction(one, two) {
	    return function chainedFunction() {
	      one.apply(this, arguments);
	      two.apply(this, arguments);
	    };
	  }

	  /**
	   * Binds a method to the component.
	   *
	   * @param {object} component Component whose method is going to be bound.
	   * @param {function} method Method to be bound.
	   * @return {function} The bound method.
	   */
	  function bindAutoBindMethod(component, method) {
	    var boundMethod = method.bind(component);
	    if (process.env.NODE_ENV !== 'production') {
	      boundMethod.__reactBoundContext = component;
	      boundMethod.__reactBoundMethod = method;
	      boundMethod.__reactBoundArguments = null;
	      var componentName = component.constructor.displayName;
	      var _bind = boundMethod.bind;
	      boundMethod.bind = function(newThis) {
	        for (
	          var _len = arguments.length,
	            args = Array(_len > 1 ? _len - 1 : 0),
	            _key = 1;
	          _key < _len;
	          _key++
	        ) {
	          args[_key - 1] = arguments[_key];
	        }

	        // User is trying to bind() an autobound method; we effectively will
	        // ignore the value of "this" that the user is trying to use, so
	        // let's warn.
	        if (newThis !== component && newThis !== null) {
	          if (process.env.NODE_ENV !== 'production') {
	            warning(
	              false,
	              'bind(): React component methods may only be bound to the ' +
	                'component instance. See %s',
	              componentName
	            );
	          }
	        } else if (!args.length) {
	          if (process.env.NODE_ENV !== 'production') {
	            warning(
	              false,
	              'bind(): You are binding a component method to the component. ' +
	                'React does this for you automatically in a high-performance ' +
	                'way, so you can safely remove this call. See %s',
	              componentName
	            );
	          }
	          return boundMethod;
	        }
	        var reboundMethod = _bind.apply(boundMethod, arguments);
	        reboundMethod.__reactBoundContext = component;
	        reboundMethod.__reactBoundMethod = method;
	        reboundMethod.__reactBoundArguments = args;
	        return reboundMethod;
	      };
	    }
	    return boundMethod;
	  }

	  /**
	   * Binds all auto-bound methods in a component.
	   *
	   * @param {object} component Component whose method is going to be bound.
	   */
	  function bindAutoBindMethods(component) {
	    var pairs = component.__reactAutoBindPairs;
	    for (var i = 0; i < pairs.length; i += 2) {
	      var autoBindKey = pairs[i];
	      var method = pairs[i + 1];
	      component[autoBindKey] = bindAutoBindMethod(component, method);
	    }
	  }

	  var IsMountedPreMixin = {
	    componentDidMount: function() {
	      this.__isMounted = true;
	    }
	  };

	  var IsMountedPostMixin = {
	    componentWillUnmount: function() {
	      this.__isMounted = false;
	    }
	  };

	  /**
	   * Add more to the ReactClass base class. These are all legacy features and
	   * therefore not already part of the modern ReactComponent.
	   */
	  var ReactClassMixin = {
	    /**
	     * TODO: This will be deprecated because state should always keep a consistent
	     * type signature and the only use case for this, is to avoid that.
	     */
	    replaceState: function(newState, callback) {
	      this.updater.enqueueReplaceState(this, newState, callback);
	    },

	    /**
	     * Checks whether or not this composite component is mounted.
	     * @return {boolean} True if mounted, false otherwise.
	     * @protected
	     * @final
	     */
	    isMounted: function() {
	      if (process.env.NODE_ENV !== 'production') {
	        warning(
	          this.__didWarnIsMounted,
	          '%s: isMounted is deprecated. Instead, make sure to clean up ' +
	            'subscriptions and pending requests in componentWillUnmount to ' +
	            'prevent memory leaks.',
	          (this.constructor && this.constructor.displayName) ||
	            this.name ||
	            'Component'
	        );
	        this.__didWarnIsMounted = true;
	      }
	      return !!this.__isMounted;
	    }
	  };

	  var ReactClassComponent = function() {};
	  _assign(
	    ReactClassComponent.prototype,
	    ReactComponent.prototype,
	    ReactClassMixin
	  );

	  /**
	   * Creates a composite component class given a class specification.
	   * See https://facebook.github.io/react/docs/top-level-api.html#react.createclass
	   *
	   * @param {object} spec Class specification (which must define `render`).
	   * @return {function} Component constructor function.
	   * @public
	   */
	  function createClass(spec) {
	    // To keep our warnings more understandable, we'll use a little hack here to
	    // ensure that Constructor.name !== 'Constructor'. This makes sure we don't
	    // unnecessarily identify a class without displayName as 'Constructor'.
	    var Constructor = identity(function(props, context, updater) {
	      // This constructor gets overridden by mocks. The argument is used
	      // by mocks to assert on what gets mounted.

	      if (process.env.NODE_ENV !== 'production') {
	        warning(
	          this instanceof Constructor,
	          'Something is calling a React component directly. Use a factory or ' +
	            'JSX instead. See: https://fb.me/react-legacyfactory'
	        );
	      }

	      // Wire up auto-binding
	      if (this.__reactAutoBindPairs.length) {
	        bindAutoBindMethods(this);
	      }

	      this.props = props;
	      this.context = context;
	      this.refs = emptyObject;
	      this.updater = updater || ReactNoopUpdateQueue;

	      this.state = null;

	      // ReactClasses doesn't have constructors. Instead, they use the
	      // getInitialState and componentWillMount methods for initialization.

	      var initialState = this.getInitialState ? this.getInitialState() : null;
	      if (process.env.NODE_ENV !== 'production') {
	        // We allow auto-mocks to proceed as if they're returning null.
	        if (
	          initialState === undefined &&
	          this.getInitialState._isMockFunction
	        ) {
	          // This is probably bad practice. Consider warning here and
	          // deprecating this convenience.
	          initialState = null;
	        }
	      }
	      _invariant(
	        typeof initialState === 'object' && !Array.isArray(initialState),
	        '%s.getInitialState(): must return an object or null',
	        Constructor.displayName || 'ReactCompositeComponent'
	      );

	      this.state = initialState;
	    });
	    Constructor.prototype = new ReactClassComponent();
	    Constructor.prototype.constructor = Constructor;
	    Constructor.prototype.__reactAutoBindPairs = [];

	    injectedMixins.forEach(mixSpecIntoComponent.bind(null, Constructor));

	    mixSpecIntoComponent(Constructor, IsMountedPreMixin);
	    mixSpecIntoComponent(Constructor, spec);
	    mixSpecIntoComponent(Constructor, IsMountedPostMixin);

	    // Initialize the defaultProps property after all mixins have been merged.
	    if (Constructor.getDefaultProps) {
	      Constructor.defaultProps = Constructor.getDefaultProps();
	    }

	    if (process.env.NODE_ENV !== 'production') {
	      // This is a tag to indicate that the use of these method names is ok,
	      // since it's used with createClass. If it's not, then it's likely a
	      // mistake so we'll warn you to use the static property, property
	      // initializer or constructor respectively.
	      if (Constructor.getDefaultProps) {
	        Constructor.getDefaultProps.isReactClassApproved = {};
	      }
	      if (Constructor.prototype.getInitialState) {
	        Constructor.prototype.getInitialState.isReactClassApproved = {};
	      }
	    }

	    _invariant(
	      Constructor.prototype.render,
	      'createClass(...): Class specification must implement a `render` method.'
	    );

	    if (process.env.NODE_ENV !== 'production') {
	      warning(
	        !Constructor.prototype.componentShouldUpdate,
	        '%s has a method called ' +
	          'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' +
	          'The name is phrased as a question because the function is ' +
	          'expected to return a value.',
	        spec.displayName || 'A component'
	      );
	      warning(
	        !Constructor.prototype.componentWillRecieveProps,
	        '%s has a method called ' +
	          'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?',
	        spec.displayName || 'A component'
	      );
	    }

	    // Reduce time spent doing lookups by setting these on the prototype.
	    for (var methodName in ReactClassInterface) {
	      if (!Constructor.prototype[methodName]) {
	        Constructor.prototype[methodName] = null;
	      }
	    }

	    return Constructor;
	  }

	  return createClass;
	}

	module.exports = factory;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 5 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 6 */
/***/ function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/

	'use strict';
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

	var emptyObject = {};

	if (process.env.NODE_ENV !== 'production') {
	  Object.freeze(emptyObject);
	}

	module.exports = emptyObject;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var validateFormat = function validateFormat(format) {};

	if (process.env.NODE_ENV !== 'production') {
	  validateFormat = function validateFormat(format) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  };
	}

	function invariant(condition, format, a, b, c, d, e, f) {
	  validateFormat(format);

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}

	module.exports = invariant;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

	var emptyFunction = __webpack_require__(10);

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = emptyFunction;

	if (process.env.NODE_ENV !== 'production') {
	  var printWarning = function printWarning(format) {
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }

	    var argIndex = 0;
	    var message = 'Warning: ' + format.replace(/%s/g, function () {
	      return args[argIndex++];
	    });
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };

	  warning = function warning(condition, format) {
	    if (format === undefined) {
	      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
	    }

	    if (format.indexOf('Failed Composite propType: ') === 0) {
	      return; // Ignore CompositeComponent proptype check.
	    }

	    if (!condition) {
	      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	        args[_key2 - 2] = arguments[_key2];
	      }

	      printWarning.apply(undefined, [format].concat(args));
	    }
	  };
	}

	module.exports = warning;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}

	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	var emptyFunction = function emptyFunction() {};

	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};

	module.exports = emptyFunction;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	if (process.env.NODE_ENV !== 'production') {
	  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
	    Symbol.for &&
	    Symbol.for('react.element')) ||
	    0xeac7;

	  var isValidElement = function(object) {
	    return typeof object === 'object' &&
	      object !== null &&
	      object.$$typeof === REACT_ELEMENT_TYPE;
	  };

	  // By explicitly using `prop-types` you are opting into new development behavior.
	  // http://fb.me/prop-types-in-prod
	  var throwOnDirectAccess = true;
	  module.exports = __webpack_require__(12)(isValidElement, throwOnDirectAccess);
	} else {
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  module.exports = __webpack_require__(16)();
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var emptyFunction = __webpack_require__(10);
	var invariant = __webpack_require__(8);
	var warning = __webpack_require__(9);
	var assign = __webpack_require__(13);

	var ReactPropTypesSecret = __webpack_require__(14);
	var checkPropTypes = __webpack_require__(15);

	module.exports = function(isValidElement, throwOnDirectAccess) {
	  /* global Symbol */
	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

	  /**
	   * Returns the iterator method function contained on the iterable object.
	   *
	   * Be sure to invoke the function with the iterable as context:
	   *
	   *     var iteratorFn = getIteratorFn(myIterable);
	   *     if (iteratorFn) {
	   *       var iterator = iteratorFn.call(myIterable);
	   *       ...
	   *     }
	   *
	   * @param {?object} maybeIterable
	   * @return {?function}
	   */
	  function getIteratorFn(maybeIterable) {
	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }

	  /**
	   * Collection of methods that allow declaration and validation of props that are
	   * supplied to React components. Example usage:
	   *
	   *   var Props = require('ReactPropTypes');
	   *   var MyArticle = React.createClass({
	   *     propTypes: {
	   *       // An optional string prop named "description".
	   *       description: Props.string,
	   *
	   *       // A required enum prop named "category".
	   *       category: Props.oneOf(['News','Photos']).isRequired,
	   *
	   *       // A prop named "dialog" that requires an instance of Dialog.
	   *       dialog: Props.instanceOf(Dialog).isRequired
	   *     },
	   *     render: function() { ... }
	   *   });
	   *
	   * A more formal specification of how these methods are used:
	   *
	   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	   *   decl := ReactPropTypes.{type}(.isRequired)?
	   *
	   * Each and every declaration produces a function with the same signature. This
	   * allows the creation of custom validation functions. For example:
	   *
	   *  var MyLink = React.createClass({
	   *    propTypes: {
	   *      // An optional string or URI prop named "href".
	   *      href: function(props, propName, componentName) {
	   *        var propValue = props[propName];
	   *        if (propValue != null && typeof propValue !== 'string' &&
	   *            !(propValue instanceof URI)) {
	   *          return new Error(
	   *            'Expected a string or an URI for ' + propName + ' in ' +
	   *            componentName
	   *          );
	   *        }
	   *      }
	   *    },
	   *    render: function() {...}
	   *  });
	   *
	   * @internal
	   */

	  var ANONYMOUS = '<<anonymous>>';

	  // Important!
	  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
	  var ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),
	    symbol: createPrimitiveTypeChecker('symbol'),

	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker,
	    exact: createStrictShapeTypeChecker,
	  };

	  /**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   */
	  /*eslint-disable no-self-compare*/
	  function is(x, y) {
	    // SameValue algorithm
	    if (x === y) {
	      // Steps 1-5, 7-10
	      // Steps 6.b-6.e: +0 != -0
	      return x !== 0 || 1 / x === 1 / y;
	    } else {
	      // Step 6.a: NaN == NaN
	      return x !== x && y !== y;
	    }
	  }
	  /*eslint-enable no-self-compare*/

	  /**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */
	  function PropTypeError(message) {
	    this.message = message;
	    this.stack = '';
	  }
	  // Make `instanceof Error` still work for returned errors.
	  PropTypeError.prototype = Error.prototype;

	  function createChainableTypeChecker(validate) {
	    if (process.env.NODE_ENV !== 'production') {
	      var manualPropTypeCallCache = {};
	      var manualPropTypeWarningCount = 0;
	    }
	    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;

	      if (secret !== ReactPropTypesSecret) {
	        if (throwOnDirectAccess) {
	          // New behavior only for users of `prop-types` package
	          invariant(
	            false,
	            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	            'Use `PropTypes.checkPropTypes()` to call them. ' +
	            'Read more at http://fb.me/use-check-prop-types'
	          );
	        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
	          // Old behavior for people using React.PropTypes
	          var cacheKey = componentName + ':' + propName;
	          if (
	            !manualPropTypeCallCache[cacheKey] &&
	            // Avoid spamming the console because they are often not actionable except for lib authors
	            manualPropTypeWarningCount < 3
	          ) {
	            warning(
	              false,
	              'You are manually calling a React.PropTypes validation ' +
	              'function for the `%s` prop on `%s`. This is deprecated ' +
	              'and will throw in the standalone `prop-types` package. ' +
	              'You may be seeing this warning due to a third-party PropTypes ' +
	              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
	              propFullName,
	              componentName
	            );
	            manualPropTypeCallCache[cacheKey] = true;
	            manualPropTypeWarningCount++;
	          }
	        }
	      }
	      if (props[propName] == null) {
	        if (isRequired) {
	          if (props[propName] === null) {
	            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	          }
	          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	        }
	        return null;
	      } else {
	        return validate(props, propName, componentName, location, propFullName);
	      }
	    }

	    var chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);

	    return chainedCheckType;
	  }

	  function createPrimitiveTypeChecker(expectedType) {
	    function validate(props, propName, componentName, location, propFullName, secret) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== expectedType) {
	        // `propValue` being instance of, say, date/regexp, pass the 'object'
	        // check, but we can offer a more precise error message here rather than
	        // 'of type `object`'.
	        var preciseType = getPreciseType(propValue);

	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createAnyTypeChecker() {
	    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
	  }

	  function createArrayOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	      }
	      var propValue = props[propName];
	      if (!Array.isArray(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	      }
	      for (var i = 0; i < propValue.length; i++) {
	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!isValidElement(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createInstanceTypeChecker(expectedClass) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!(props[propName] instanceof expectedClass)) {
	        var expectedClassName = expectedClass.name || ANONYMOUS;
	        var actualClassName = getClassName(props[propName]);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createEnumTypeChecker(expectedValues) {
	    if (!Array.isArray(expectedValues)) {
	      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
	      return emptyFunction.thatReturnsNull;
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      for (var i = 0; i < expectedValues.length; i++) {
	        if (is(propValue, expectedValues[i])) {
	          return null;
	        }
	      }

	      var valuesString = JSON.stringify(expectedValues);
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createObjectOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	      }
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	      }
	      for (var key in propValue) {
	        if (propValue.hasOwnProperty(key)) {
	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	          if (error instanceof Error) {
	            return error;
	          }
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createUnionTypeChecker(arrayOfTypeCheckers) {
	    if (!Array.isArray(arrayOfTypeCheckers)) {
	      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
	      return emptyFunction.thatReturnsNull;
	    }

	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (typeof checker !== 'function') {
	        warning(
	          false,
	          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
	          'received %s at index %s.',
	          getPostfixForTypeWarning(checker),
	          i
	        );
	        return emptyFunction.thatReturnsNull;
	      }
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	        var checker = arrayOfTypeCheckers[i];
	        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
	          return null;
	        }
	      }

	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createNodeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!isNode(props[propName])) {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      for (var key in shapeTypes) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          continue;
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createStrictShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      // We need to check all keys in case some are required but missing from
	      // props.
	      var allKeys = assign({}, props[propName], shapeTypes);
	      for (var key in allKeys) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          return new PropTypeError(
	            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
	            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
	            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
	          );
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }

	    return createChainableTypeChecker(validate);
	  }

	  function isNode(propValue) {
	    switch (typeof propValue) {
	      case 'number':
	      case 'string':
	      case 'undefined':
	        return true;
	      case 'boolean':
	        return !propValue;
	      case 'object':
	        if (Array.isArray(propValue)) {
	          return propValue.every(isNode);
	        }
	        if (propValue === null || isValidElement(propValue)) {
	          return true;
	        }

	        var iteratorFn = getIteratorFn(propValue);
	        if (iteratorFn) {
	          var iterator = iteratorFn.call(propValue);
	          var step;
	          if (iteratorFn !== propValue.entries) {
	            while (!(step = iterator.next()).done) {
	              if (!isNode(step.value)) {
	                return false;
	              }
	            }
	          } else {
	            // Iterator will provide entry [k,v] tuples rather than values.
	            while (!(step = iterator.next()).done) {
	              var entry = step.value;
	              if (entry) {
	                if (!isNode(entry[1])) {
	                  return false;
	                }
	              }
	            }
	          }
	        } else {
	          return false;
	        }

	        return true;
	      default:
	        return false;
	    }
	  }

	  function isSymbol(propType, propValue) {
	    // Native Symbol.
	    if (propType === 'symbol') {
	      return true;
	    }

	    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	    if (propValue['@@toStringTag'] === 'Symbol') {
	      return true;
	    }

	    // Fallback for non-spec compliant Symbols which are polyfilled.
	    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	      return true;
	    }

	    return false;
	  }

	  // Equivalent of `typeof` but with special handling for array and regexp.
	  function getPropType(propValue) {
	    var propType = typeof propValue;
	    if (Array.isArray(propValue)) {
	      return 'array';
	    }
	    if (propValue instanceof RegExp) {
	      // Old webkits (at least until Android 4.0) return 'function' rather than
	      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	      // passes PropTypes.object.
	      return 'object';
	    }
	    if (isSymbol(propType, propValue)) {
	      return 'symbol';
	    }
	    return propType;
	  }

	  // This handles more types than `getPropType`. Only used for error messages.
	  // See `createPrimitiveTypeChecker`.
	  function getPreciseType(propValue) {
	    if (typeof propValue === 'undefined' || propValue === null) {
	      return '' + propValue;
	    }
	    var propType = getPropType(propValue);
	    if (propType === 'object') {
	      if (propValue instanceof Date) {
	        return 'date';
	      } else if (propValue instanceof RegExp) {
	        return 'regexp';
	      }
	    }
	    return propType;
	  }

	  // Returns a string that is postfixed to a warning about an invalid type.
	  // For example, "undefined" or "of type array"
	  function getPostfixForTypeWarning(value) {
	    var type = getPreciseType(value);
	    switch (type) {
	      case 'array':
	      case 'object':
	        return 'an ' + type;
	      case 'boolean':
	      case 'date':
	      case 'regexp':
	        return 'a ' + type;
	      default:
	        return type;
	    }
	  }

	  // Returns class name of the object, if any.
	  function getClassName(propValue) {
	    if (!propValue.constructor || !propValue.constructor.name) {
	      return ANONYMOUS;
	    }
	    return propValue.constructor.name;
	  }

	  ReactPropTypes.checkPropTypes = checkPropTypes;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 13 */
/***/ function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/

	'use strict';
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};


/***/ },
/* 14 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	module.exports = ReactPropTypesSecret;


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	if (process.env.NODE_ENV !== 'production') {
	  var invariant = __webpack_require__(8);
	  var warning = __webpack_require__(9);
	  var ReactPropTypesSecret = __webpack_require__(14);
	  var loggedTypeFailures = {};
	}

	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
	  if (process.env.NODE_ENV !== 'production') {
	    for (var typeSpecName in typeSpecs) {
	      if (typeSpecs.hasOwnProperty(typeSpecName)) {
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	        } catch (ex) {
	          error = ex;
	        }
	        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;

	          var stack = getStack ? getStack() : '';

	          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
	        }
	      }
	    }
	  }
	}

	module.exports = checkPropTypes;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var emptyFunction = __webpack_require__(10);
	var invariant = __webpack_require__(8);
	var ReactPropTypesSecret = __webpack_require__(14);

	module.exports = function() {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret) {
	      // It is still safe when called from React.
	      return;
	    }
	    invariant(
	      false,
	      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	      'Use PropTypes.checkPropTypes() to call them. ' +
	      'Read more at http://fb.me/use-check-prop-types'
	    );
	  };
	  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  };
	  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  var ReactPropTypes = {
	    array: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,

	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim,
	    exact: getShim
	  };

	  ReactPropTypes.checkPropTypes = emptyFunction;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var constants = __webpack_require__(19);
	var nsPrefix = constants.NAMESPACE ? constants.NAMESPACE + '-' : '';

	module.exports = {
	  getClassSet: function getClassSet(ignorePrefix) {
	    var classNames = {};
	    // uses `.am-` as prefix if `classPrefix` is not defined
	    var prefix = nsPrefix;

	    if (this.props.classPrefix) {
	      var classPrefix = this.setClassNamespace();

	      prefix = classPrefix + '-';

	      // don't return prefix if flag set
	      !ignorePrefix && (classNames[classPrefix] = true);
	    }

	    var amSize = this.props.amSize;
	    var amStyle = this.props.amStyle;

	    if (amSize) {
	      classNames[prefix + amSize] = true;
	    }

	    if (amStyle) {
	      classNames[prefix + amStyle] = true;
	    }

	    // add theme className for widgets
	    if (this.props.theme) {
	      classNames[prefix + this.props.theme] = true;
	    }

	    // states
	    classNames[constants.CLASSES.active] = this.props.active;
	    classNames[constants.CLASSES.disabled] = this.props.disabled;

	    // shape
	    classNames[constants.CLASSES.radius] = this.props.radius;
	    classNames[constants.CLASSES.round] = this.props.round;

	    // clearfix
	    classNames[constants.CLASSES.cf] = this.props.cf;

	    // am-divider
	    if (this.props.classPrefix !== 'divider') {
	      classNames[constants.CLASSES.divider] = this.props.divider;
	    }

	    return classNames;
	  },

	  // add namespace to classPrefix
	  setClassNamespace: function setClassNamespace(classPrefix) {
	    var prefix = classPrefix || this.props.classPrefix || '';

	    return nsPrefix + prefix;
	  },

	  prefixClass: function prefixClass(subClass) {
	    return this.setClassNamespace() + '-' + subClass;
	  }
	};

/***/ },
/* 19 */
/***/ function(module, exports) {

	'use strict';

	var NAMESPACE = 'am';
	var setNamespace = function setNamespace(className) {
	  return (NAMESPACE ? NAMESPACE + '-' : '') + className;
	};

	module.exports = {
	  NAMESPACE: NAMESPACE,

	  CLASSES: {
	    active: setNamespace('active'),
	    disabled: setNamespace('disabled'),
	    round: setNamespace('round'),
	    radius: setNamespace('radius'),
	    square: setNamespace('square'),
	    circle: setNamespace('circle'),
	    divider: setNamespace('divider'),
	    cf: setNamespace('cf'),
	    fl: setNamespace('fl'),
	    fr: setNamespace('fr')
	  },

	  STYLES: {
	    default: 'default',
	    primary: 'primary',
	    secondary: 'secondary',
	    success: 'success',
	    warning: 'warning',
	    danger: 'danger'
	  },

	  SIZES: {}
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var React = __webpack_require__(1);
	var createReactClass = __webpack_require__(3);
	var PropTypes = __webpack_require__(11);
	var classNames = __webpack_require__(17);
	var ClassNameMixin = __webpack_require__(18);

	var Col = createReactClass({
	  mixins: [ClassNameMixin],

	  propTypes: {
	    sm: PropTypes.number,
	    md: PropTypes.number,
	    lg: PropTypes.number,
	    smOffset: PropTypes.number,
	    mdOffset: PropTypes.number,
	    lgOffset: PropTypes.number,
	    smPush: PropTypes.number,
	    mdPush: PropTypes.number,
	    lgPush: PropTypes.number,
	    smPull: PropTypes.number,
	    mdPull: PropTypes.number,
	    lgPull: PropTypes.number,
	    classPrefix: PropTypes.string.isRequired,
	    component: PropTypes.node.isRequired,
	    end: PropTypes.bool
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'u',
	      component: 'div'
	    };
	  },

	  render: function render() {
	    var Component = this.props.component;
	    var classSet = {};
	    var props = this.props;
	    var prefixClass = this.prefixClass;

	    ['sm', 'md', 'lg'].forEach(function (size) {
	      var prop = size;

	      if (props[size]) {
	        classSet[prefixClass(size + '-' + props[prop])] = true;
	      }

	      prop = size + 'Offset';
	      if (props[prop] >= 0) {
	        classSet[prefixClass(size + '-offset-') + props[prop]] = true;
	      }

	      prop = size + 'Push';
	      if (props[prop] >= 0) {
	        classSet[prefixClass(size + '-push-') + props[prop]] = true;
	      }

	      prop = size + 'Pull';
	      if (props[prop] >= 0) {
	        classSet[prefixClass(size + '-pull-') + props[prop]] = true;
	      }

	      // `xxResetOrder` prop
	      // - smResetOrder
	      // - mdResetOrder
	      // - lgResetOrder
	      if (props[size + 'ResetOrder']) {
	        classSet[prefixClass(size + '-reset-order')] = true;
	      }

	      // `xxCentered` prop
	      // - smCentered
	      // - mdCentered
	      // - lgCentered
	      if (props[size + 'Centered']) {
	        classSet[prefixClass(size + '-centered')] = true;
	      }

	      // `xxUnCentered` prop
	      // - smUnCentered
	      // - mdUnCentered
	      // - lgUnCentered
	      if (props[size + 'UnCentered']) {
	        classSet[prefixClass(size + '-uncentered')] = true;
	      }
	    });

	    // `end` prop - end column
	    classSet[prefixClass('end')] = props.end;

	    return React.createElement(
	      Component,
	      _extends({}, this.props, {
	        className: classNames(this.props.className, classSet)
	      }),
	      this.props.children
	    );
	  }
	});

	module.exports = Col;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var React = __webpack_require__(1);
	var createReactClass = __webpack_require__(3);
	var PropTypes = __webpack_require__(11);
	var classNames = __webpack_require__(17);
	var ClassNameMixin = __webpack_require__(18);

	var Container = createReactClass({
	  mixins: [ClassNameMixin],

	  propTypes: {
	    classPrefix: PropTypes.string.isRequired,
	    component: PropTypes.node.isRequired
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'container',
	      component: 'div'
	    };
	  },

	  render: function render() {
	    var Component = this.props.component;
	    var classSet = this.getClassSet();

	    return React.createElement(
	      Component,
	      _extends({}, this.props, {
	        className: classNames(this.props.className, classSet)
	      }),
	      this.props.children
	    );
	  }
	});

	module.exports = Container;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var React = __webpack_require__(1);
	var createReactClass = __webpack_require__(3);
	var PropTypes = __webpack_require__(11);
	var classNames = __webpack_require__(17);
	var ClassNameMixin = __webpack_require__(18);

	var AvgGrid = createReactClass({
	  mixins: [ClassNameMixin],

	  propTypes: {
	    classPrefix: PropTypes.string.isRequired,
	    component: PropTypes.node,
	    sm: PropTypes.number,
	    md: PropTypes.number,
	    lg: PropTypes.number
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'avg',
	      component: 'ul'
	    };
	  },

	  render: function render() {
	    var Component = this.props.component;
	    var classSet = {};
	    var prefixClass = this.prefixClass;
	    var props = this.props;

	    ['sm', 'md', 'lg'].forEach(function (size) {
	      if (props[size]) {
	        classSet[prefixClass(size + '-' + props[size])] = true;
	      }
	    });

	    return React.createElement(
	      Component,
	      _extends({}, this.props, {
	        className: classNames(this.props.className, classSet)
	      }),
	      this.props.children
	    );
	  }
	});

	module.exports = AvgGrid;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var React = __webpack_require__(1);
	var createReactClass = __webpack_require__(3);
	var PropTypes = __webpack_require__(11);
	var classNames = __webpack_require__(17);
	var ClassNameMixin = __webpack_require__(18);
	var omit = __webpack_require__(24);

	var Button = createReactClass({
	  mixins: [ClassNameMixin],

	  propTypes: {
	    classPrefix: PropTypes.string.isRequired,
	    active: PropTypes.bool,
	    block: PropTypes.bool,
	    disabled: PropTypes.bool,
	    radius: PropTypes.bool,
	    round: PropTypes.bool,
	    component: PropTypes.node,
	    href: PropTypes.string,
	    target: PropTypes.string
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'btn',
	      type: 'button',
	      amStyle: 'default'
	    };
	  },

	  renderAnchor: function renderAnchor(classSet) {
	    var Component = this.props.component || 'a';
	    var href = this.props.href || '#';
	    var props = omit(this.props, 'type');

	    return React.createElement(
	      Component,
	      _extends({}, props, {
	        href: href,
	        className: classNames(this.props.className, classSet),
	        role: 'button'
	      }),
	      this.props.children
	    );
	  },

	  renderButton: function renderButton(classSet) {
	    var Component = this.props.component || 'button';

	    return React.createElement(
	      Component,
	      _extends({}, this.props, {
	        className: classNames(this.props.className, classSet)
	      }),
	      this.props.children
	    );
	  },

	  render: function render() {
	    var classSet = this.getClassSet();
	    var renderType = this.props.href || this.props.target ? 'renderAnchor' : 'renderButton';

	    // block button
	    classSet[this.prefixClass('block')] = this.props.block;

	    return this[renderType](classSet);
	  }
	});

	module.exports = Button;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * object.omit <https://github.com/jonschlinkert/object.omit>
	 *
	 * Copyright (c) 2014-2015, Jon Schlinkert.
	 * Licensed under the MIT License.
	 */

	'use strict';

	var isObject = __webpack_require__(25);
	var forOwn = __webpack_require__(26);

	module.exports = function omit(obj, keys) {
	  if (!isObject(obj)) return {};

	  keys = [].concat.apply([], [].slice.call(arguments, 1));
	  var last = keys[keys.length - 1];
	  var res = {}, fn;

	  if (typeof last === 'function') {
	    fn = keys.pop();
	  }

	  var isFunction = typeof fn === 'function';
	  if (!keys.length && !isFunction) {
	    return obj;
	  }

	  forOwn(obj, function(value, key) {
	    if (keys.indexOf(key) === -1) {

	      if (!isFunction) {
	        res[key] = value;
	      } else if (fn(value, key, obj)) {
	        res[key] = value;
	      }
	    }
	  });
	  return res;
	};


/***/ },
/* 25 */
/***/ function(module, exports) {

	/*!
	 * is-extendable <https://github.com/jonschlinkert/is-extendable>
	 *
	 * Copyright (c) 2015, Jon Schlinkert.
	 * Licensed under the MIT License.
	 */

	'use strict';

	module.exports = function isExtendable(val) {
	  return typeof val !== 'undefined' && val !== null
	    && (typeof val === 'object' || typeof val === 'function');
	};


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * for-own <https://github.com/jonschlinkert/for-own>
	 *
	 * Copyright (c) 2014-2016, Jon Schlinkert.
	 * Licensed under the MIT License.
	 */

	'use strict';

	var forIn = __webpack_require__(27);
	var hasOwn = Object.prototype.hasOwnProperty;

	module.exports = function forOwn(o, fn, thisArg) {
	  forIn(o, function(val, key) {
	    if (hasOwn.call(o, key)) {
	      return fn.call(thisArg, o[key], key, o);
	    }
	  });
	};


/***/ },
/* 27 */
/***/ function(module, exports) {

	/*!
	 * for-in <https://github.com/jonschlinkert/for-in>
	 *
	 * Copyright (c) 2014-2016, Jon Schlinkert.
	 * Licensed under the MIT License.
	 */

	'use strict';

	module.exports = function forIn(o, fn, thisArg) {
	  for (var key in o) {
	    if (fn.call(thisArg, o[key], key, o) === false) {
	      break;
	    }
	  }
	};


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var React = __webpack_require__(1);
	var createReactClass = __webpack_require__(3);
	var PropTypes = __webpack_require__(11);
	var classNames = __webpack_require__(17);
	var ClassNameMixin = __webpack_require__(18);

	var ButtonToolbar = createReactClass({
	  mixins: [ClassNameMixin],

	  propTypes: {
	    classPrefix: PropTypes.string.isRequired
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'btn-toolbar'
	    };
	  },

	  render: function render() {
	    var classSet = this.getClassSet();

	    return React.createElement(
	      'div',
	      _extends({}, this.props, {
	        className: classNames(this.props.className, classSet)
	      }),
	      this.props.children
	    );
	  }
	});

	module.exports = ButtonToolbar;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var React = __webpack_require__(1);
	var createReactClass = __webpack_require__(3);
	var PropTypes = __webpack_require__(11);
	var CSSCore = __webpack_require__(30);
	var ClassNameMixin = __webpack_require__(18);
	var ButtonGroup = __webpack_require__(31);
	var constants = __webpack_require__(19);

	var ButtonCheck = createReactClass({
	  mixins: [ClassNameMixin],

	  propTypes: {
	    clickHandler: PropTypes.func
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      clickHandler: function clickHandler() {}
	    };
	  },

	  handleClick: function handleClick(e) {
	    var changed = true;
	    var target = e.target;
	    var activeClassName = constants.CLASSES.active;

	    if (target && target.nodeName === 'INPUT') {
	      var parent = target.parentNode;

	      if (target.type === 'radio') {
	        if (target.checked && CSSCore.hasClass(parent, activeClassName)) {
	          changed = false;
	        } else {
	          var siblings = parent.parentNode.children;

	          // remove siblings activeClassName
	          for (var i = 0; i < siblings.length; i++) {
	            siblings[i] !== parent && CSSCore.removeClass(siblings[i], activeClassName);
	          }
	        }
	      }

	      if (changed) {
	        CSSCore.toggleClass(parent, activeClassName);
	      }
	    }

	    this.props.clickHandler.call(this);
	  },

	  render: function render() {
	    return React.createElement(
	      ButtonGroup,
	      _extends({}, this.props, {
	        onClick: this.handleClick,
	        className: this.setClassNamespace('btn-group-check')
	      }),
	      this.props.children
	    );
	  }
	});

	module.exports = ButtonCheck;

/***/ },
/* 30 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @via https://github.com/facebook/react/blob/master/src/vendor/core/CSSCore.js
	 */

	'use strict';

	var CSSCore = {

	  /**
	   * Adds the class passed in to the element if it doesn't already have it.
	   *
	   * @param {DOMElement} element the element to set the class on
	   * @param {string} className the CSS className
	   * @return {DOMElement} the element passed in
	   */
	  addClass: function addClass(element, className) {
	    if (className) {
	      if (element.classList) {
	        element.classList.add(className);
	      } else if (!CSSCore.hasClass(element, className)) {
	        element.className = element.className + ' ' + className;
	      }
	    }
	    return element;
	  },

	  /**
	   * Removes the class passed in from the element
	   *
	   * @param {DOMElement} element the element to set the class on
	   * @param {string} className the CSS className
	   * @return {DOMElement} the element passed in
	   */
	  removeClass: function removeClass(element, className) {
	    if (className) {
	      if (element.classList) {
	        element.classList.remove(className);
	      } else if (CSSCore.hasClass(element, className)) {
	        element.className = element.className.replace(new RegExp('(^|\\s)' + className + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ') // multiple spaces to one
	        .replace(/^\s*|\s*$/g, ''); // trim the ends
	      }
	    }
	    return element;
	  },

	  /**
	   * Helper to add or remove a class from an element based on a condition.
	   *
	   * @param {DOMElement} element the element to set the class on
	   * @param {string} className the CSS className
	   * @param {*} bool condition to whether to add or remove the class
	   * @return {DOMElement} the element passed in
	   */
	  conditionClass: function conditionClass(element, className, bool) {
	    return (bool ? CSSCore.addClass : CSSCore.removeClass)(element, className);
	  },

	  /**
	   * Tests whether the element has the class specified.
	   *
	   * @param {DOMNode|DOMWindow} element the element to set the class on
	   * @param {string} className the CSS className
	   * @return {boolean} true if the element has the class, false if not
	   */
	  hasClass: function hasClass(element, className) {
	    if (element.classList) {
	      return !!className && element.classList.contains(className);
	    }
	    return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
	  },

	  toggleClass: function toggleClass(element, className) {
	    return CSSCore.hasClass(element, className) ? CSSCore.removeClass(element, className) : CSSCore.addClass(element, className);
	  }
	};

	module.exports = CSSCore;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var React = __webpack_require__(1);
	var PropTypes = __webpack_require__(11);
	var createReactClass = __webpack_require__(3);
	var classNames = __webpack_require__(17);
	var ClassNameMixin = __webpack_require__(18);

	var ButtonGroup = createReactClass({
	  mixins: [ClassNameMixin],

	  propTypes: {
	    classPrefix: PropTypes.string.isRequired,
	    stacked: PropTypes.bool,
	    justify: PropTypes.bool
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'btn-group'
	    };
	  },

	  render: function render() {
	    var classSet = this.getClassSet();

	    classSet[this.prefixClass('stacked')] = this.props.stacked;
	    classSet[this.prefixClass('justify')] = this.props.justify;

	    return React.createElement(
	      'div',
	      _extends({}, this.props, {
	        className: classNames(this.props.className, classSet)
	      }),
	      this.props.children
	    );
	  }
	});

	module.exports = ButtonGroup;

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var React = __webpack_require__(1);
	var createReactClass = __webpack_require__(3);
	var PropTypes = __webpack_require__(11);
	var classNames = __webpack_require__(17);
	var ClassNameMixin = __webpack_require__(18);

	var Form = createReactClass({
	  mixins: [ClassNameMixin],

	  propTypes: {
	    classPrefix: PropTypes.string.isRequired,
	    horizontal: PropTypes.bool,
	    inline: PropTypes.bool
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'form'
	    };
	  },

	  render: function render() {
	    var classSet = this.getClassSet();

	    classSet[this.prefixClass('horizontal')] = this.props.horizontal;
	    classSet[this.prefixClass('inline')] = this.props.inline;

	    return React.createElement(
	      'form',
	      _extends({}, this.props, {
	        className: classNames(classSet, this.props.className)
	      }),
	      this.props.children
	    );
	  }
	});

	module.exports = Form;

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var createReactClass = __webpack_require__(3);
	var PropTypes = __webpack_require__(11);
	var classNames = __webpack_require__(17);
	var ClassNameMixin = __webpack_require__(18);

	var FormGroup = createReactClass({
	  mixins: [ClassNameMixin],

	  propTypes: {
	    validation: PropTypes.string,
	    amSize: PropTypes.oneOf(['sm', 'lg']),
	    hasFeedback: PropTypes.bool
	  },

	  render: function render() {
	    var classSet = {};

	    classSet[this.setClassNamespace('form-group')] = true;
	    this.props.validation && (classSet[this.setClassNamespace('form-' + this.props.validation)] = true);
	    classSet[this.setClassNamespace('form-feedback')] = this.props.hasFeedback;
	    classSet[this.setClassNamespace('form-icon')] = this.props.hasFeedback;

	    if (this.props.amSize) {
	      classSet[this.setClassNamespace('form-group-' + this.props.amSize)] = true;
	    }

	    return React.createElement(
	      'div',
	      { className: classNames(classSet, this.props.className) },
	      this.props.children
	    );
	  }
	});

	module.exports = FormGroup;

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var createReactClass = __webpack_require__(3);
	var classNames = __webpack_require__(17);
	var ClassNameMixin = __webpack_require__(18);
	var Button = __webpack_require__(23);
	var Input = __webpack_require__(35);

	var FormFile = createReactClass({
	  mixins: [ClassNameMixin],

	  propTypes: {},

	  getDefaultProps: function getDefaultProps() {
	    return {};
	  },

	  render: function render() {
	    return React.createElement(
	      FormGroup,
	      {
	        className: this.setClassNamespace('form-file')
	      },
	      React.createElement(Input, { type: 'file', standalone: true })
	    );
	  }
	});

	module.exports = FormFile;

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Inputs Components
	 * @desc includes input, input-group
	 */

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(36);
	var createReactClass = __webpack_require__(3);
	var PropTypes = __webpack_require__(11);
	var classNames = __webpack_require__(17);
	var ClassNameMixin = __webpack_require__(18);
	var FormGroup = __webpack_require__(33);
	var Button = __webpack_require__(23);
	var Icon = __webpack_require__(37);
	var constants = __webpack_require__(19);

	var Input = createReactClass({
	  mixins: [ClassNameMixin],

	  propTypes: {
	    type: PropTypes.string,
	    disabled: PropTypes.bool,
	    radius: PropTypes.bool,
	    round: PropTypes.bool,
	    amSize: PropTypes.oneOf(['sm', 'lg']),
	    amStyle: PropTypes.string,
	    validation: PropTypes.oneOf(['default', 'success', 'warning', 'error']),
	    label: PropTypes.node,
	    help: PropTypes.node,
	    addonBefore: PropTypes.node,
	    addonAfter: PropTypes.node,
	    btnBefore: PropTypes.node,
	    btnAfter: PropTypes.node,
	    id: PropTypes.string,
	    groupClassName: PropTypes.string,
	    wrapperClassName: PropTypes.string,
	    labelClassName: PropTypes.string,
	    helpClassName: PropTypes.string,
	    icon: PropTypes.string,
	    standalone: PropTypes.bool,
	    inline: PropTypes.bool,
	    hasFeedback: PropTypes.bool
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      type: 'text'
	    };
	  },

	  getFieldDOMNode: function getFieldDOMNode() {
	    return ReactDOM.findDOMNode(this.refs.field);
	  },

	  getValue: function getValue() {
	    if (this.props.type === 'select' && this.props.multiple) {
	      return this.getSelectedOptions();
	    } else {
	      return this.getFieldDOMNode().value;
	    }
	  },

	  getChecked: function getChecked() {
	    return this.getFieldDOMNode().checked;
	  },

	  getSelectedOptions: function getSelectedOptions() {
	    var values = [];
	    var options = this.getFieldDOMNode().getElementsByTagName('option');

	    options.forEach(function (option) {
	      if (option.selected) {
	        var value = option.getAttribute('value') || option.innerHtml;

	        values.push(value);
	      }
	    });

	    return values;
	  },

	  isCheckboxOrRadio: function isCheckboxOrRadio() {
	    return this.props.type === 'radio' || this.props.type === 'checkbox';
	  },

	  isFile: function isFile() {
	    return this.props.type === 'file';
	  },

	  renderInput: function renderInput() {
	    var input = null;
	    var fieldClassName = this.isCheckboxOrRadio() || this.isFile() ? '' : this.setClassNamespace('form-field');
	    var classSet = {};

	    classSet[constants.CLASSES.round] = this.props.round;
	    classSet[constants.CLASSES.radius] = this.props.radius;

	    if (this.props.amSize && !this.props.standalone) {
	      classSet[this.setClassNamespace('input-' + this.props.amSize)] = true;
	    }

	    var classes = classNames(this.props.className, fieldClassName, classSet);

	    switch (this.props.type) {
	      case 'select':
	        input = React.createElement(
	          'select',
	          _extends({}, this.props, {
	            className: classes,
	            ref: 'field',
	            key: 'field'
	          }),
	          this.props.children
	        );
	        break;
	      case 'textarea':
	        input = React.createElement('textarea', _extends({}, this.props, {
	          className: classes,
	          ref: 'field',
	          key: 'field'
	        }));
	        break;
	      case 'submit':
	      case 'reset':
	        input = React.createElement(Button, _extends({}, this.props, {
	          component: 'input',
	          ref: 'field',
	          key: 'field'
	        }));
	        break;
	      default:
	        input = React.createElement('input', _extends({}, this.props, {
	          className: classes,
	          ref: 'field',
	          key: 'field'
	        }));
	    }

	    return input;
	  },

	  // Input wrapper if wrapperClassName set
	  renderWrapper: function renderWrapper(children) {
	    return this.props.wrapperClassName ? React.createElement(
	      'div',
	      {
	        className: this.props.wrapperClassName,
	        key: 'wrapper'
	      },
	      children
	    ) : children;
	  },

	  // Wrap block checkbox/radio
	  renderCheckboxAndRadioWrapper: function renderCheckboxAndRadioWrapper(children) {
	    // Don't wrap inline checkbox/radio
	    return this.props.inline ? children : React.createElement(
	      'div',
	      {
	        className: this.setClassNamespace(this.props.type),
	        key: 'checkboxAndRadioWrapper'
	      },
	      children
	    );
	  },

	  renderLabel: function renderLabel(children) {
	    // label doesn't work with icon
	    /*if (this.props.icon) {
	      return null;
	    }*/

	    var classSet = {};

	    if (this.isCheckboxOrRadio()) {
	      // inline checkbox and radio
	      classSet[this.setClassNamespace(this.props.type + '-inline')] = this.props.inline;
	    } else {
	      // normal form label
	      classSet[this.setClassNamespace('form-label')] = true;
	    }

	    return this.props.label ? React.createElement(
	      'label',
	      {
	        htmlFor: this.props.id,
	        className: classNames(this.props.labelClassName, classSet),
	        key: 'label'
	      },
	      children,
	      this.props.label
	    ) : children;
	  },

	  renderInputGroup: function renderInputGroup(children) {
	    var groupPrefix = this.setClassNamespace('input-group');
	    var addonClassName = groupPrefix + '-label';
	    var btnClassName = groupPrefix + '-btn';
	    var addonBefore = this.props.addonBefore ? React.createElement(
	      'span',
	      { className: addonClassName, key: 'addonBefore' },
	      this.props.addonBefore
	    ) : null;
	    var addonAfter = this.props.addonAfter ? React.createElement(
	      'span',
	      { className: addonClassName, key: 'addonAfter' },
	      this.props.addonAfter
	    ) : null;
	    var btnBefore = this.props.btnBefore ? React.createElement(
	      'span',
	      { className: btnClassName, key: 'btnBefore' },
	      this.props.btnBefore
	    ) : null;
	    var btnAfter = this.props.btnAfter ? React.createElement(
	      'span',
	      { className: btnClassName, key: 'btnAfter' },
	      this.props.btnAfter
	    ) : null;
	    var classSet = {};

	    if (this.props.amSize) {
	      classSet[groupPrefix + '-' + this.props.amSize] = true;
	    }

	    if (this.props.amStyle) {
	      classSet[groupPrefix + '-' + this.props.amStyle] = true;
	    }

	    return addonBefore || addonAfter || btnBefore || btnAfter ? React.createElement(
	      'div',
	      {
	        className: classNames(groupPrefix, classSet),
	        key: 'inputGroup'
	      },
	      addonBefore,
	      btnBefore,
	      children,
	      addonAfter,
	      btnAfter
	    ) : children;
	  },

	  // form help
	  renderHelp: function renderHelp() {
	    return this.props.help ? React.createElement(
	      'p',
	      {
	        className: classNames(this.setClassNamespace('form-help'), this.props.helpClassName),
	        key: 'help'
	      },
	      this.props.help
	    ) : '';
	  },

	  renderIcon: function renderIcon() {
	    var props = this.props;
	    var feedbackIcon = {
	      success: 'check',
	      warning: 'warning',
	      error: 'times'
	    };
	    var icon = props.icon || props.hasFeedback && props.validation && feedbackIcon[props.validation];

	    return icon ? React.createElement(Icon, { icon: icon, key: 'icon' }) : null;
	  },

	  render: function render() {
	    // standalone mode
	    if (this.props.standalone) {
	      return this.renderInput();
	    }

	    // render checkbox and radio, without FormGroup wrapper
	    if (this.isCheckboxOrRadio()) {
	      return this.renderWrapper(this.renderCheckboxAndRadioWrapper(this.renderLabel(this.renderInput())));
	    }

	    var groupClassName = classNames(this.props.type === 'select' ? this.setClassNamespace('form-select') : null, this.props.icon && this.setClassNamespace('form-icon'), this.props.groupClassName);

	    return React.createElement(
	      FormGroup,
	      {
	        className: groupClassName,
	        validation: this.props.validation,
	        amSize: this.props.amSize,
	        hasFeedback: this.props.hasFeedback
	      },
	      [this.renderLabel(), this.renderWrapper(this.renderInputGroup(this.renderInput())), this.renderIcon(), this.renderHelp()]
	    );
	  }
	});

	module.exports = Input;

/***/ },
/* 36 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_36__;

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var React = __webpack_require__(1);
	var PropTypes = __webpack_require__(11);
	var createReactClass = __webpack_require__(3);
	var classNames = __webpack_require__(17);
	var ClassNameMixin = __webpack_require__(18);

	var Icon = createReactClass({
	  mixins: [ClassNameMixin],

	  propTypes: {
	    amStyle: PropTypes.string,
	    fw: PropTypes.bool,
	    spin: PropTypes.bool,
	    button: PropTypes.bool,
	    size: PropTypes.string,
	    href: PropTypes.string,
	    component: PropTypes.node.isRequired,
	    icon: PropTypes.string.isRequired
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'icon',
	      component: 'span'
	    };
	  },

	  render: function render() {
	    var classes = this.getClassSet(true);
	    var props = this.props;
	    var Component = props.href ? 'a' : props.component;
	    var prefixClass = this.prefixClass;
	    var setClassNamespace = this.setClassNamespace;

	    // am-icon-[iconName]
	    classes[prefixClass(props.icon)] = true;

	    // am-icon-btn
	    classes[prefixClass('btn')] = props.button;

	    // button style
	    props.button && props.amStyle && (classes[setClassNamespace(props.amStyle)] = true);

	    // am-icon-fw
	    classes[prefixClass('fw')] = props.fw;

	    // am-icon-spin
	    classes[prefixClass('spin')] = props.spin;

	    return React.createElement(
	      Component,
	      _extends({}, props, {
	        className: classNames(classes, this.props.className)
	      }),
	      this.props.children
	    );
	  }
	});

	module.exports = Icon;

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Custom radio/checkbox style
	 */

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var React = __webpack_require__(1);
	var createReactClass = __webpack_require__(3);
	var PropTypes = __webpack_require__(11);
	var classNames = __webpack_require__(17);
	var ClassNameMixin = __webpack_require__(18);
	var Input = __webpack_require__(35);
	var Icon = __webpack_require__(37);
	var constants = __webpack_require__(19);

	var UCheck = createReactClass({
	  mixins: [ClassNameMixin],

	  propTypes: {
	    type: PropTypes.oneOf(['radio', 'checkbox']),
	    disabled: PropTypes.bool,
	    amStyle: PropTypes.oneOf(['secondary', 'success', 'warning', 'danger']),
	    inline: PropTypes.bool,
	    hasFeedback: PropTypes.bool
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      type: 'checkbox'
	    };
	  },

	  render: function render() {
	    var classSet = {};

	    classSet[this.setClassNamespace(this.props.type)] = !this.props.inline;
	    classSet[this.setClassNamespace(this.props.type + '-inline')] = this.props.inline;

	    if (this.props.amStyle) {
	      classSet[this.setClassNamespace(this.props.amStyle)] = true;
	    }

	    return React.createElement(
	      'label',
	      { className: classNames(this.props.className, classSet) },
	      React.createElement(Input, _extends({}, this.props, {
	        ref: 'field',
	        className: this.setClassNamespace('ucheck-checkbox'),
	        standalone: true
	      })),
	      React.createElement(
	        'span',
	        { className: this.setClassNamespace('ucheck-icons') },
	        React.createElement(Icon, { icon: 'unchecked' }),
	        React.createElement(Icon, { icon: 'checked' })
	      ),
	      this.props.label
	    );
	  }
	});

	module.exports = UCheck;

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var React = __webpack_require__(1);
	var PropTypes = __webpack_require__(11);
	var createReactClass = __webpack_require__(3);
	var classNames = __webpack_require__(17);
	var ClassNameMixin = __webpack_require__(18);
	var constants = __webpack_require__(19);

	var Image = createReactClass({
	  mixins: [ClassNameMixin],

	  propTypes: {
	    src: PropTypes.string.isRequired,
	    circle: PropTypes.bool,
	    radius: PropTypes.bool,
	    round: PropTypes.bool,
	    responsive: PropTypes.bool,
	    thumbnail: PropTypes.bool,
	    placeholder: PropTypes.string,
	    threshold: PropTypes.number,
	    callback: PropTypes.func,
	    asBgImage: PropTypes.bool
	  },

	  render: function render() {
	    var classSet = {};

	    classSet[constants.CLASSES.radius] = this.props.radius;
	    classSet[constants.CLASSES.round] = this.props.round;
	    classSet[constants.CLASSES.circle] = this.props.circle;
	    classSet[this.setClassNamespace('img-responsive')] = this.props.responsive;
	    classSet[this.setClassNamespace('img-thumbnail')] = this.props.thumbnail;

	    return React.createElement('img', _extends({}, this.props, {
	      className: classNames(this.props.className, classSet)
	    }));
	  }
	});

	module.exports = Image;

	/*
	TODO:
	- srcset/sizes 支持
	  - http://caniuse.com/#feat=srcset
	  - http://www.w3.org/html/wg/drafts/html/master/semantics.html#attr-img-srcset
	  - https://css-tricks.com/responsive-images-youre-just-changing-resolutions-use-srcset/
	- lazyload
	- asBackground ?
	*/
	/*
	 http://odin.s0.no/web/srcset/polyfill.htm
	 https://github.com/borismus/srcset-polyfill
	 https://github.com/JimBobSquarePants/srcset-polyfill
	 http://www.html5rocks.com/en/mobile/high-dpi/
	 http://www.html5rocks.com/en/tutorials/responsive/picture-element/
	 https://ericportis.com/posts/2014/srcset-sizes/

	 gif 占位符
	 http://proger.i-forge.net/The_smallest_transparent_pixel/eBQ
	 http://stackoverflow.com/questions/9126105/blank-image-encoded-as-data-uri
	*/

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var React = __webpack_require__(1);
	var createReactClass = __webpack_require__(3);
	var PropTypes = __webpack_require__(11);
	var classNames = __webpack_require__(17);
	var ClassNameMixin = __webpack_require__(18);
	var omit = __webpack_require__(24);

	var Thumbnail = createReactClass({
	  mixins: [ClassNameMixin],

	  propTypes: {
	    classPrefix: PropTypes.string,
	    standalone: PropTypes.bool,
	    caption: PropTypes.node,
	    component: PropTypes.node
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'thumbnail',
	      component: 'figure'
	    };
	  },

	  renderImg: function renderImg(classes, props) {
	    props = props || {};

	    return props.src ? React.createElement('img', _extends({}, props, {
	      className: classes
	    })) : null;
	  },

	  render: function render() {
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

	    return React.createElement(
	      Component,
	      _extends({}, props, {
	        className: classes
	      }),
	      this.renderImg(null, imgProps),
	      caption || this.props.children ? React.createElement(
	        Thumbnail.Caption,
	        {
	          component: typeof caption === 'string' ? 'figcaption' : 'div'
	        },
	        this.props.caption || this.props.children
	      ) : null
	    );
	  }
	});

	Thumbnail.Caption = createReactClass({
	  mixins: [ClassNameMixin],

	  propTypes: {
	    component: PropTypes.node
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      component: 'div'
	    };
	  },

	  render: function render() {
	    var Component = this.props.component;
	    var classes = classNames(this.props.className, this.setClassNamespace('thumbnail-caption'));

	    return React.createElement(
	      Component,
	      _extends({}, this.props, {
	        className: classes
	      }),
	      this.props.children
	    );
	  }
	});

	module.exports = Thumbnail;

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var React = __webpack_require__(1);
	var createReactClass = __webpack_require__(3);
	var PropTypes = __webpack_require__(11);
	var classNames = __webpack_require__(17);
	var ClassNameMixin = __webpack_require__(18);
	var AvgGrid = __webpack_require__(22);
	var omit = __webpack_require__(24);

	var Thumbnails = createReactClass({
	  mixins: [ClassNameMixin],

	  propTypes: {
	    classPrefix: PropTypes.string
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'thumbnails'
	    };
	  },

	  render: function render() {
	    var classes = classNames(this.getClassSet(), this.props.className);
	    var props = omit(this.props, 'classPrefix');

	    return React.createElement(
	      AvgGrid,
	      _extends({}, props, {
	        className: classes
	      }),
	      React.Children.map(this.props.children, function (child, i) {
	        return React.createElement(
	          'li',
	          { key: i },
	          child
	        );
	      })
	    );
	  }
	});

	module.exports = Thumbnails;

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var React = __webpack_require__(1);
	var createReactClass = __webpack_require__(3);
	var PropTypes = __webpack_require__(11);
	var classNames = __webpack_require__(17);
	var ClassNameMixin = __webpack_require__(18);

	var Table = createReactClass({
	  mixins: [ClassNameMixin],

	  propTypes: {
	    classPrefix: PropTypes.string.isRequired,
	    bordered: PropTypes.bool,
	    compact: PropTypes.bool,
	    hover: PropTypes.bool,
	    striped: PropTypes.bool,
	    radius: PropTypes.bool,
	    responsive: PropTypes.bool
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'table'
	    };
	  },

	  render: function render() {
	    var classSet = this.getClassSet();
	    var responsive = this.props.responsive;

	    classSet[this.prefixClass('bordered')] = this.props.bordered;
	    classSet[this.prefixClass('compact')] = this.props.compact;
	    classSet[this.prefixClass('hover')] = this.props.hover;
	    classSet[this.prefixClass('striped')] = this.props.striped;
	    classSet[this.prefixClass('radius')] = this.props.radius;

	    // add `.am-text-nowrap` to responsive table
	    classSet[this.setClassNamespace('text-nowrap')] = responsive;

	    var table = React.createElement(
	      'table',
	      _extends({}, this.props, {
	        className: classNames(this.props.className, classSet)
	      }),
	      this.props.children
	    );

	    return responsive ? React.createElement(
	      'div',
	      { className: this.setClassNamespace('scrollable-horizontal') },
	      table
	    ) : table;
	  }
	});

	module.exports = Table;

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var React = __webpack_require__(1);
	var PropTypes = __webpack_require__(11);
	var createReactClass = __webpack_require__(3);
	var classNames = __webpack_require__(17);
	var ClassNameMixin = __webpack_require__(18);

	var Nav = createReactClass({
	  mixins: [ClassNameMixin],

	  propTypes: {
	    justify: PropTypes.bool,
	    pills: PropTypes.bool,
	    tabs: PropTypes.bool,
	    component: PropTypes.node.isRequired
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'nav',
	      component: 'ul'
	    };
	  },

	  render: function render() {
	    var classes = this.getClassSet();
	    var Component = this.props.component;

	    // set classes
	    classes[this.prefixClass('pills')] = this.props.pills || this.props.topbar;
	    classes[this.prefixClass('tabs')] = this.props.tabs;
	    classes[this.prefixClass('justify')] = this.props.justify;

	    // topbar class
	    classes[this.setClassNamespace('topbar-nav')] = this.props.topbar;

	    return React.createElement(
	      Component,
	      _extends({}, this.props, {
	        className: classNames(classes, this.props.className)
	      }),
	      this.props.children
	    );
	  }
	});

	module.exports = Nav;

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var React = __webpack_require__(1);
	var PropTypes = __webpack_require__(11);
	var createReactClass = __webpack_require__(3);
	var classNames = __webpack_require__(17);
	var assign = __webpack_require__(45);
	var omit = __webpack_require__(24);
	var ClassNameMixin = __webpack_require__(18);

	var NavItem = createReactClass({
	  mixins: [ClassNameMixin],

	  propTypes: {
	    active: PropTypes.bool,
	    disabled: PropTypes.bool,
	    header: PropTypes.bool,
	    divider: PropTypes.bool,
	    href: PropTypes.any,
	    component: PropTypes.any,
	    linkComponent: PropTypes.any,
	    linkProps: PropTypes.object
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'nav',
	      component: 'li'
	    };
	  },

	  render: function render() {
	    var classes = this.getClassSet();
	    var props = this.props;
	    var Component = props.component;

	    // del am-nav
	    classes[this.setClassNamespace(props.classPrefix)] = false;

	    // set classes
	    classes[this.prefixClass('header')] = props.header;
	    classes[this.prefixClass('divider')] = props.divider;

	    if (props.href || props.linkComponent) {
	      return this.renderAnchor(classes);
	    }

	    return React.createElement(
	      Component,
	      _extends({}, props, {
	        className: classNames(classes, props.className)
	      }),
	      this.props.children
	    );
	  },

	  renderAnchor: function renderAnchor(classes) {
	    var Component = this.props.component;
	    var linkComponent = this.props.linkComponent || 'a';
	    var style = {};

	    this.props.disabled && (style.pointerEvents = 'none');

	    var linkProps = {
	      href: this.props.href,
	      title: this.props.tilte,
	      target: this.props.target,
	      style: style
	    };

	    return React.createElement(
	      Component,
	      _extends({}, omit(this.props, ['href', 'target', 'title', 'disabled']), {
	        className: classNames(classes, this.props.className)
	      }),
	      React.createElement(linkComponent, assign(linkProps, this.props.linkProps), this.props.children)
	    );
	  }
	});

	module.exports = NavItem;

	// TODO: DropDown Tab 处理

/***/ },
/* 45 */
/***/ function(module, exports) {

	'use strict';
	/* eslint-disable no-unused-vars */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (e) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (Object.getOwnPropertySymbols) {
				symbols = Object.getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var React = __webpack_require__(1);
	var createReactClass = __webpack_require__(3);
	var PropTypes = __webpack_require__(11);
	var classNames = __webpack_require__(17);
	var assign = __webpack_require__(45);
	var ClassNameMixin = __webpack_require__(18);

	var Breadcrumb = createReactClass({
	  mixins: [ClassNameMixin],

	  propTypes: {
	    slash: PropTypes.bool,
	    component: PropTypes.node.isRequired
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'breadcrumb',
	      component: 'ul'
	    };
	  },

	  render: function render() {
	    var classes = this.getClassSet();
	    var Component = this.props.component;

	    classes[this.prefixClass('slash')] = this.props.slash;

	    return React.createElement(
	      Component,
	      _extends({}, this.props, {
	        className: classNames(classes, this.props.className)
	      }),
	      this.props.children
	    );
	  }
	});

	Breadcrumb.Item = createReactClass({
	  mixins: [ClassNameMixin],

	  propTypes: {
	    active: PropTypes.bool,
	    href: PropTypes.string,
	    title: PropTypes.string,
	    target: PropTypes.string,
	    component: PropTypes.any,
	    linkComponent: PropTypes.any,
	    linkProps: PropTypes.object
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      component: 'li'
	    };
	  },


	  renderAnchor: function renderAnchor(classes) {
	    var Component = this.props.component;
	    var linkComponent = this.props.linkComponent || 'a';

	    return React.createElement(
	      Component,
	      _extends({}, this.props, {
	        className: classes
	      }),
	      React.createElement(linkComponent, assign({
	        href: this.props.href,
	        title: this.props.title,
	        target: this.props.target
	      }, this.props.linkProps), this.props.children)
	    );
	  },

	  render: function render() {
	    var classes = classNames(this.props.className);
	    var Component = this.props.component;

	    if (this.props.href || this.props.linkComponent) {
	      return this.renderAnchor(classes);
	    }

	    return React.createElement(
	      Component,
	      _extends({}, this.props, {
	        className: classes
	      }),
	      this.props.children
	    );
	  }
	});

	module.exports = Breadcrumb;

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(36);
	var createReactClass = __webpack_require__(3);
	var PropTypes = __webpack_require__(11);
	var classNames = __webpack_require__(17);
	var assign = __webpack_require__(45);
	var omit = __webpack_require__(24);
	var ClassNameMixin = __webpack_require__(18);

	var Pagination = createReactClass({
	  mixins: [ClassNameMixin],

	  PropTypes: {
	    component: PropTypes.node.isRequired,
	    centered: PropTypes.bool,
	    right: PropTypes.bool,
	    theme: PropTypes.oneOf(['default', 'select']),
	    data: PropTypes.object,
	    onSelect: PropTypes.func
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'pagination',
	      component: 'ul'
	    };
	  },

	  renderItem: function renderItem(type) {
	    var data = this.props.data;

	    return data && data[type + 'Title'] && data[type + 'Link'] ? React.createElement(
	      Pagination.Item,
	      {
	        onClick: this.props.onSelect && this.props.onSelect.bind(this, data[type + 'Link']),
	        key: type,
	        href: data[type + 'Link'],
	        className: this.prefixClass(type)
	      },
	      data[type + 'Title']
	    ) : null;
	  },

	  handleChange: function handleChange(e) {
	    if (this.props.onSelect) {
	      var select = ReactDOM.findDOMNode(this.refs.select);

	      this.props.onSelect.call(this, select && select.value, e);
	    }
	  },

	  renderPages: function renderPages() {
	    var data = this.props.data;

	    if (data.pages) {
	      return this.props.theme === 'select' ? React.createElement(
	        'li',
	        { className: this.prefixClass('select') },
	        React.createElement(
	          'select',
	          {
	            onChange: this.handleChange,
	            ref: 'select'
	          },
	          data.pages.map(function (page, i) {
	            return React.createElement(
	              'option',
	              { value: page.link, key: i },
	              page.title,
	              ' / ',
	              data.pages.length
	            );
	          })
	        )
	      ) : data.pages.map(function (page, i) {
	        return React.createElement(
	          Pagination.Item,
	          {
	            key: i,
	            onClick: this.props.onSelect && this.props.onSelect.bind(this, page.link),
	            active: page.active,
	            disabled: page.disabled,
	            href: page.link
	          },
	          page.title
	        );
	      }.bind(this));
	    }
	  },

	  render: function render() {
	    var props = this.props;
	    var Component = props.component;
	    var classSet = this.getClassSet();
	    var notSelect = props.theme !== 'select';

	    // .am-pagination-right
	    classSet[this.prefixClass('right')] = props.right;

	    // .am-pagination-centered
	    classSet[this.prefixClass('centered')] = props.centered;

	    return props.data ? React.createElement(
	      Component,
	      _extends({}, props, {
	        className: classNames(classSet, props.className)
	      }),
	      notSelect && this.renderItem('first'),
	      this.renderItem('prev'),
	      this.renderPages(),
	      this.renderItem('next'),
	      notSelect && this.renderItem('last')
	    ) : React.createElement(
	      Component,
	      _extends({}, props, {
	        className: classNames(classSet, props.className)
	      }),
	      this.props.children
	    );
	  }
	});

	Pagination.Item = createReactClass({
	  mixins: [ClassNameMixin],

	  propTypes: {
	    active: PropTypes.bool,
	    disabled: PropTypes.bool,
	    prev: PropTypes.bool,
	    next: PropTypes.bool,
	    href: PropTypes.string,
	    component: PropTypes.any,
	    linkComponent: PropTypes.any,
	    linkProps: PropTypes.object
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'pagination',
	      component: 'li'
	    };
	  },

	  render: function render() {
	    var Component = this.props.component;
	    var classSet = this.getClassSet(true);
	    var props = this.props;
	    var linkComponent = this.props.linkComponent || (this.props.href ? 'a' : null);

	    // .am-pagination-prev
	    classSet[this.prefixClass('prev')] = props.prev;

	    // .am-pagination-next
	    classSet[this.prefixClass('next')] = props.next;

	    return React.createElement(
	      Component,
	      _extends({}, omit(this.props, ['href', 'title', 'target']), {
	        className: classNames(classSet, this.props.className)
	      }),
	      linkComponent ? React.createElement(linkComponent, assign({
	        href: this.props.href,
	        title: this.props.title,
	        target: this.props.target,
	        ref: 'anchor'
	      }, this.props.linkProps), this.props.children) : this.props.children
	    );
	  }
	});

	module.exports = Pagination;

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var React = __webpack_require__(1);
	var createReactClass = __webpack_require__(3);
	var PropTypes = __webpack_require__(11);
	var classNames = __webpack_require__(17);
	var assign = __webpack_require__(45);
	var ClassNameMixin = __webpack_require__(18);
	var createChainedFunction = __webpack_require__(49);
	var Icon = __webpack_require__(37);
	var Button = __webpack_require__(23);

	var Topbar = createReactClass({
	  mixins: [ClassNameMixin],

	  propTypes: {
	    component: PropTypes.node,
	    brand: PropTypes.node,
	    brandLink: PropTypes.string,
	    inverse: PropTypes.bool,
	    fixedTop: PropTypes.bool,
	    fixedBottom: PropTypes.bool,
	    toggleBtn: PropTypes.node,
	    toggleNavKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	    onToggle: PropTypes.func,
	    navExpanded: PropTypes.bool,
	    defaultNavExpanded: PropTypes.bool,
	    fluid: PropTypes.bool
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'topbar',
	      component: 'header'
	    };
	  },

	  getInitialState: function getInitialState() {
	    return {
	      navExpanded: this.props.defaultNavExpanded
	    };
	  },

	  shouldComponentUpdate: function shouldComponentUpdate() {
	    // Defer any updates to this component during the `onSelect` handler.
	    return !this._isChanging;
	  },

	  handleToggle: function handleToggle() {
	    if (this.props.onToggle) {
	      this._isChanging = true;
	      this.props.onToggle();
	      this._isChanging = false;
	    }

	    this.setState({
	      navExpanded: !this.state.navExpanded
	    });
	  },

	  isNavExpanded: function isNavExpanded() {
	    return this.props.navExpanded != null ? this.props.navExpanded : this.state.navExpanded;
	  },

	  renderBrand: function renderBrand() {
	    var brand = this.props.brand;
	    var brandClassName = this.prefixClass('brand');

	    if (React.isValidElement(brand)) {
	      return React.cloneElement(brand, assign({}, brand.props, {
	        className: classNames(brand.props.className, brandClassName),
	        onClick: createChainedFunction(this.handleToggle, brand.props.onClick)
	      }));
	    }

	    return brand ? React.createElement(
	      'h1',
	      { className: brandClassName },
	      this.props.brandLink ? React.createElement(
	        'a',
	        { href: this.props.brandLink },
	        this.props.brand
	      ) : this.props.brand
	    ) : null;
	  },

	  renderToggleButton: function renderToggleButton() {
	    var toggleBtn = this.props.toggleBtn;
	    var toggleBtnClassName = this.prefixClass('toggle');

	    if (React.isValidElement(toggleBtn)) {
	      return React.cloneElement(toggleBtn, assign({}, toggleBtn.props, {
	        className: classNames(toggleBtn.props.className, toggleBtnClassName),
	        onClick: createChainedFunction(this.handleToggle, toggleBtn.props.onClick)
	      }));
	    }

	    return React.createElement(
	      Button,
	      {
	        amSize: 'sm',
	        onClick: this.handleToggle,
	        className: classNames(this.prefixClass('btn'), this.prefixClass('toggle'), this.setClassNamespace('show-sm-only'))
	      },
	      React.createElement(
	        'span',
	        { className: this.setClassNamespace('sr-only') },
	        '\u5BFC\u822A\u5207\u6362'
	      ),
	      React.createElement(Icon, { icon: 'bars' })
	    );
	  },

	  renderChild: function renderChild(child, i) {
	    return React.cloneElement(child, assign({}, child.props, {
	      topbar: true,
	      collapsible: this.props.toggleNavKey != null && this.props.toggleNavKey === child.props.eventKey,
	      expanded: this.props.toggleNavKey != null && this.props.toggleNavKey === child.props.eventKey && this.isNavExpanded(),
	      key: child.key ? child.key : i,
	      className: classNames(child.props.className, child.props.right ? this.prefixClass('right') : null)
	    }));
	  },

	  render: function render() {
	    var classes = this.getClassSet();
	    var Component = this.props.component;

	    // set classes
	    classes[this.prefixClass('inverse')] = this.props.inverse;
	    classes[this.prefixClass('fixed-top')] = this.props.fixedTop;
	    classes[this.prefixClass('fixed-bottom')] = this.props.fixedBottom;

	    return React.createElement(
	      Component,
	      _extends({}, this.props, {
	        className: classNames(classes, this.props.className)
	      }),
	      React.createElement(
	        'div',
	        {
	          className: !this.props.fluid ? this.setClassNamespace('container') : null
	        },
	        this.renderBrand(),
	        this.renderToggleButton(),
	        React.Children.map(this.props.children, this.renderChild)
	      )
	    );
	  }
	});

	module.exports = Topbar;

/***/ },
/* 49 */
/***/ function(module, exports) {

	/**
	 * modified version of:
	 * https://github.com/react-bootstrap/react-bootstrap/blob/master/src/utils/createChainedFunction.js
	 */

	'use strict';

	/**
	 * Safe chained function
	 *
	 * Will only create a new function if needed,
	 * otherwise will pass back existing functions or null.
	 *
	 * @param {function} one
	 * @param {function} two
	 * @returns {function|null}
	 */

	function createChainedFunction(one, two) {
	  var hasOne = typeof one === 'function';
	  var hasTwo = typeof two === 'function';

	  if (!hasOne && !hasTwo) {
	    return null;
	  }

	  if (!hasOne) {
	    return two;
	  }

	  if (!hasTwo) {
	    return one;
	  }

	  return function chainedFunction() {
	    one.apply(this, arguments) === false || two.apply(this, arguments);
	  };
	}

	module.exports = createChainedFunction;

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var React = __webpack_require__(1);
	var createReactClass = __webpack_require__(3);
	var PropTypes = __webpack_require__(11);
	// var flattenChildren = require('react/lib/flattenChildren');
	var classNames = __webpack_require__(17);
	var omit = __webpack_require__(24);
	var ClassNameMixin = __webpack_require__(18);
	var Nav = __webpack_require__(43);
	var NavItem = __webpack_require__(44);

	var Tabs = createReactClass({
	  mixins: [ClassNameMixin],

	  propTypes: {
	    theme: PropTypes.oneOf(['default', 'd2']),
	    onSelect: PropTypes.func,
	    animation: PropTypes.oneOf(['slide', 'fade']),
	    defaultActiveKey: PropTypes.any,
	    justify: PropTypes.bool,
	    data: PropTypes.array
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'tabs',
	      animation: 'fade'
	    };
	  },

	  getInitialState: function getInitialState() {
	    var defaultActiveKey = this.props.defaultActiveKey != null ? this.props.defaultActiveKey : this.getDefaultActiveKey(this.props.children);

	    return {
	      activeKey: defaultActiveKey,
	      previousActiveKey: null
	    };
	  },

	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    if (nextProps.activeKey != null && nextProps.activeKey !== this.props.activeKey) {
	      this.setState({
	        activeKey: nextProps.activeKey,
	        previousActiveKey: this.props.activeKey
	      });
	    }
	  },

	  getDefaultActiveKey: function getDefaultActiveKey(children) {
	    var defaultActiveKey = null;

	    if (this.props.data) {
	      this.props.data.every(function (item, i) {
	        if (item.active) {
	          defaultActiveKey = i;
	          return false;
	        }

	        return true;
	      });

	      return defaultActiveKey == null ? 0 : defaultActiveKey;
	    }

	    React.Children.forEach(children, function (child) {
	      if (defaultActiveKey == null) {
	        defaultActiveKey = child.props.eventKey;
	      }
	    });

	    return defaultActiveKey;
	  },

	  handleClick: function handleClick(key, disabled, e) {
	    e.preventDefault();
	    var activeKey = this.state.activeKey;

	    if (disabled) {
	      return null;
	    }

	    if (this.props.onSelect && !this.props.onSelect(key)) {
	      //增加onSelect 返回false 可以控制Tab切换的能力
	      return null;
	    }

	    if (activeKey !== key) {
	      this.setState({
	        activeKey: key,
	        previousActiveKey: activeKey
	      });
	    }
	  },

	  renderNav: function renderNav() {
	    var _this = this;

	    var activeKey = this.state.activeKey;
	    var children = React.Children.toArray(this.props.children).filter(function (child) {
	      return child != null;
	    });
	    return children.map(function (child, index) {
	      var key = child.props.eventKey || index;
	      var disabled = child.props.disabled;

	      return React.createElement(
	        NavItem,
	        {
	          href: '#',
	          ref: 'ref' + key,
	          key: key,
	          onClick: _this.handleClick.bind(_this, key, disabled),
	          active: child.props.eventKey === activeKey,
	          disabled: disabled
	        },
	        child.props.title
	      );
	    });
	  },

	  renderTabPanels: function renderTabPanels() {
	    var activeKey = this.state.activeKey;
	    var children = React.Children.toArray(this.props.children).filter(function (child) {
	      return child != null;
	    });
	    return children.map(function (child, index) {
	      return React.createElement(
	        Tabs.Item,
	        {
	          active: child.props.eventKey === activeKey,
	          key: index
	        },
	        child.props.children
	      );
	    });
	  },

	  // for Amaze UI tabs widget
	  renderData: function renderData() {
	    var activeKey = this.state.activeKey;
	    var navs = [];
	    var panels = [];

	    this.props.data.forEach(function (item, key) {
	      navs.push(React.createElement(
	        NavItem,
	        {
	          href: '#',
	          ref: 'ref' + key,
	          key: key,
	          onClick: this.handleClick.bind(this, key, item.disabled),
	          active: key === activeKey,
	          disabled: item.disabled
	        },
	        item.title
	      ));

	      panels.push(React.createElement(
	        Tabs.Item,
	        {
	          eventKey: key
	          // active={item.active}
	          , active: key === activeKey,
	          key: key },
	        item.content
	      ));
	    }.bind(this));

	    return {
	      navs: navs,
	      panels: panels
	    };
	  },

	  renderWrapper: function renderWrapper(children) {
	    var classSet = this.getClassSet();
	    var props = omit(this.props, 'data');

	    return React.createElement(
	      'div',
	      _extends({}, props, {
	        'data-am-widget': this.props.theme ? this.props.classPrefix : null,
	        className: classNames(classSet, this.props.className)
	      }),
	      children
	    );
	  },

	  renderNavWrapper: function renderNavWrapper(children) {
	    var TabsNav = this.props.theme ? 'ul' : Nav;

	    return React.createElement(
	      TabsNav,
	      {
	        key: 'tabsNav',
	        tabs: true,
	        className: classNames(this.prefixClass('nav'), this.setClassNamespace('cf')),
	        justify: this.props.justify
	      },
	      children
	    );
	  },

	  renderBodyWrapper: function renderBodyWrapper(children) {
	    var animationClass = this.prefixClass(this.props.animation);

	    return React.createElement(
	      'div',
	      {
	        key: 'tabsBody',
	        className: classNames(this.prefixClass('bd'), animationClass)
	      },
	      children
	    );
	  },

	  render: function render() {
	    var children = this.props.data ? this.renderData() : {};

	    return this.renderWrapper([this.renderNavWrapper(children.navs || this.renderNav()), this.renderBodyWrapper(children.panels || this.renderTabPanels())]);
	  }
	});

	Tabs.Item = createReactClass({
	  mixins: [ClassNameMixin],

	  propTypes: {
	    title: PropTypes.string,
	    disabled: PropTypes.bool,
	    eventKey: PropTypes.any,
	    active: PropTypes.bool
	  },

	  render: function render() {
	    var classSet = {};

	    classSet[this.setClassNamespace('tab-panel')] = true;
	    classSet[this.setClassNamespace('fade')] = true;
	    classSet[this.setClassNamespace('active')] = this.props.active;
	    classSet[this.setClassNamespace('in')] = this.props.active;

	    return React.createElement(
	      'div',
	      { className: classNames(classSet) },
	      this.props.children
	    );
	  }
	});

	module.exports = Tabs;

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/*
	* https://github.com/react-bootstrap/react-bootstrap/blob/master/src/CollapsibleNav.js
	* */

	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(36);
	var createReactClass = __webpack_require__(3);
	var PropTypes = __webpack_require__(11);
	var classNames = __webpack_require__(17);
	var ClassNameMixin = __webpack_require__(18);
	var CollapseMixin = __webpack_require__(52);
	var createChainedFunction = __webpack_require__(49);

	var CollapsibleNav = createReactClass({
	  mixins: [ClassNameMixin, CollapseMixin],

	  propTypes: {
	    collapsible: PropTypes.bool,
	    onSelect: PropTypes.func,
	    activeHref: PropTypes.string,
	    activeKey: PropTypes.any,
	    expanded: PropTypes.bool,
	    eventKey: PropTypes.any
	  },

	  handleToggle: function handleToggle() {
	    this.setState({ expanded: !this.state.expanded });
	  },

	  getCollapsibleDimensionValue: function getCollapsibleDimensionValue() {
	    var height = 0;
	    var nodes = this.refs;

	    for (var key in nodes) {
	      if (nodes.hasOwnProperty(key)) {
	        var n = ReactDOM.findDOMNode(nodes[key]);
	        var h = n.offsetHeight;
	        var computedStyles = getComputedStyle(n, null);

	        height += h + parseInt(computedStyles.marginTop, 10) + parseInt(computedStyles.marginBottom, 10);
	      }
	    }

	    return height;
	  },

	  getCollapsibleDOMNode: function getCollapsibleDOMNode() {
	    return ReactDOM.findDOMNode(this);
	  },

	  getChildActiveProp: function getChildActiveProp(child) {
	    if (child.props.active) {
	      return true;
	    }

	    if (this.props.activeKey != null) {
	      if (child.props.eventKey === this.props.activeKey) {
	        return true;
	      }
	    }

	    if (this.props.activeHref != null) {
	      if (child.props.href === this.props.activeHref) {
	        return true;
	      }
	    }

	    return child.props.active;
	  },

	  renderChildren: function renderChildren(child, index) {
	    var key = child.key ? child.key : index;

	    return React.cloneElement(child, {
	      activeKey: this.props.activeKey,
	      activeHref: this.props.activeHref,
	      ref: 'nocollapse_' + key,
	      key: key,
	      navItem: true
	    });
	  },

	  renderCollapsibleNavChildren: function renderCollapsibleNavChildren(child, index) {
	    var key = child.key ? child.key : index;

	    return React.cloneElement(child, {
	      active: this.getChildActiveProp(child),
	      activeKey: this.props.activeKey,
	      activeHref: this.props.activeHref,
	      onSelect: createChainedFunction(child.props.onSelect, this.props.onSelect),
	      ref: 'collapsible_' + key,
	      key: key
	    });
	  },

	  render: function render() {
	    var collapsible = this.props.collapsible;
	    var classSet = collapsible ? this.getCollapsibleClassSet() : {};

	    classSet[this.setClassNamespace('topbar-collapse')] = this.props.topbar;

	    return React.createElement(
	      'div',
	      {
	        eventKey: this.props.eventKey,
	        className: classNames(classSet, this.props.className)
	      },
	      React.Children.map(this.props.children, collapsible ? this.renderCollapsibleNavChildren : this.renderChildren)
	    );
	  }
	});

	module.exports = CollapsibleNav;

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * modified version of:
	 * https://github.com/react-bootstrap/react-bootstrap/blob/master/src/CollapsibleMixin.js
	 */

	'use strict';

	var React = __webpack_require__(1);
	var PropTypes = __webpack_require__(11);
	var TransitionEvents = __webpack_require__(53);

	var CollapseMixin = {
	  propTypes: {
	    defaultExpanded: PropTypes.bool,
	    expanded: PropTypes.bool
	  },

	  getInitialState: function getInitialState() {
	    var defaultExpanded = this.props.defaultExpanded != null ? this.props.defaultExpanded : this.props.expanded != null ? this.props.expanded : false;

	    return {
	      expanded: defaultExpanded,
	      collapsing: false
	    };
	  },

	  componentWillUpdate: function componentWillUpdate(nextProps, nextState) {
	    var willExpanded = nextProps.expanded != null ? nextProps.expanded : nextState.expanded;

	    if (willExpanded === this.isExpanded()) {
	      return;
	    }

	    // if the expanded state is being toggled, ensure node has a dimension value
	    // this is needed for the animation to work and needs to be set before
	    // the collapsing class is applied (after collapsing is applied the in class
	    // is removed and the node's dimension will be wrong)

	    var node = this.getCollapsibleDOMNode();
	    var dimension = this.dimension();
	    var value = '0';

	    if (!willExpanded) {
	      // get height
	      value = this.getCollapsibleDimensionValue();
	    }

	    node.style[dimension] = value + 'px';

	    this._afterWillUpdate();
	  },

	  componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
	    // check if expanded is being toggled; if so, set collapsing
	    this._checkToggleCollapsing(prevProps, prevState);

	    // check if collapsing was turned on; if so, start animation
	    this._checkStartAnimation();
	  },

	  // helps enable test stubs
	  _afterWillUpdate: function _afterWillUpdate() {},

	  _checkStartAnimation: function _checkStartAnimation() {
	    if (!this.state.collapsing) {
	      return;
	    }

	    var node = this.getCollapsibleDOMNode();
	    var dimension = this.dimension();
	    var value = this.getCollapsibleDimensionValue();

	    // setting the dimension here starts the transition animation
	    var result;

	    if (this.isExpanded()) {
	      result = value + 'px';
	    } else {
	      result = '0px';
	    }
	    node.style[dimension] = result;
	  },

	  _checkToggleCollapsing: function _checkToggleCollapsing(prevProps, prevState) {
	    var wasExpanded = prevProps.expanded != null ? prevProps.expanded : prevState.expanded;
	    var isExpanded = this.isExpanded();

	    if (wasExpanded !== isExpanded) {
	      if (wasExpanded) {
	        this._handleCollapse();
	      } else {
	        this._handleExpand();
	      }
	    }
	  },

	  _handleExpand: function _handleExpand() {
	    var node = this.getCollapsibleDOMNode();
	    var dimension = this.dimension();

	    var complete = function () {
	      this._removeEndEventListener(node, complete);
	      // remove dimension value - this ensures the collapsible item can grow
	      // in dimension after initial display (such as an image loading)
	      node.style[dimension] = '';
	      this.setState({
	        collapsing: false
	      });
	    }.bind(this);

	    this._addEndEventListener(node, complete);

	    this.setState({
	      collapsing: true
	    });
	  },

	  _handleCollapse: function _handleCollapse() {
	    var node = this.getCollapsibleDOMNode();
	    var _this = this;
	    var complete = function complete() {
	      _this._removeEndEventListener(node, complete);
	      _this.setState({
	        collapsing: false
	      });
	    };

	    this._addEndEventListener(node, complete);

	    this.setState({
	      collapsing: true
	    });
	  },

	  // helps enable test stubs
	  _addEndEventListener: function _addEndEventListener(node, complete) {
	    TransitionEvents.on(node, complete);
	  },

	  // helps enable test stubs
	  _removeEndEventListener: function _removeEndEventListener(node, complete) {
	    TransitionEvents.off(node, complete);
	  },

	  dimension: function dimension() {
	    return typeof this.getCollapsibleDimension === 'function' ? this.getCollapsibleDimension() : 'height';
	  },

	  isExpanded: function isExpanded() {
	    return this.props.expanded != null ? this.props.expanded : this.state.expanded;
	  },

	  getCollapsibleClassSet: function getCollapsibleClassSet(className) {
	    var classSet = {};

	    if (typeof className === 'string') {
	      className.split(' ').forEach(function (subClass) {
	        if (subClass) {
	          classSet[subClass] = true;
	        }
	      });
	    }

	    classSet[this.setClassNamespace('collapsing')] = this.state.collapsing;
	    classSet[this.setClassNamespace('collapse')] = !this.state.collapsing;
	    classSet[this.setClassNamespace('in')] = this.isExpanded() && !this.state.collapsing;

	    return classSet;
	  }
	};

	module.exports = CollapseMixin;

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * modified version of:
	 * https://github.com/facebook/react/blob/0.13-stable/src/addons/transitions/ReactTransitionEvents.js
	 * https://github.com/facebook/react/blob/5696ccfcd72189f4fea13d8b0f084a0e3c9b8147/src/renderers/dom/client/utils/getVendorPrefixedEventName.js
	 */

	'use strict';

	var CSSCore = __webpack_require__(30);
	var canUseDOM = __webpack_require__(54);

	/**
	 * EVENT_NAME_MAP is used to determine which event fired when a
	 * transition/animation ends, based on the style property used to
	 * define that event.
	 */
	var EVENT_NAME_MAP = {
	  transitionend: {
	    'transition': 'transitionend',
	    'WebkitTransition': 'webkitTransitionEnd',
	    'MozTransition': 'mozTransitionEnd',
	    'OTransition': 'oTransitionEnd',
	    'msTransition': 'MSTransitionEnd'
	  },

	  animationend: {
	    'animation': 'animationend',
	    'WebkitAnimation': 'webkitAnimationEnd',
	    'MozAnimation': 'mozAnimationEnd',
	    'OAnimation': 'oAnimationEnd',
	    'msAnimation': 'MSAnimationEnd'
	  }
	};

	var endEvents = [];
	var support = {};

	function detectEvents() {
	  var testEl = document.createElement('div');
	  var style = testEl.style;

	  // On some platforms, in particular some releases of Android 4.x,
	  // the un-prefixed "animation" and "transition" properties are defined on the
	  // style object but the events that fire will still be prefixed, so we need
	  // to check if the un-prefixed events are useable, and if not remove them
	  // from the map
	  if (!('AnimationEvent' in window)) {
	    delete EVENT_NAME_MAP.animationend.animation;
	  }

	  if (!('TransitionEvent' in window)) {
	    delete EVENT_NAME_MAP.transitionend.transition;
	  }

	  for (var baseEventName in EVENT_NAME_MAP) {
	    var baseEvents = EVENT_NAME_MAP[baseEventName];
	    support[baseEventName] = false;

	    for (var styleName in baseEvents) {
	      if (styleName in style) {
	        support[baseEventName] = baseEvents[styleName];
	        endEvents.push(baseEvents[styleName]);
	        break;
	      }
	    }
	  }
	}

	if (canUseDOM) {
	  detectEvents();
	}

	if (support.animationend) {
	  CSSCore.addClass(document.documentElement, 'cssanimations');
	}

	// We use the raw {add|remove}EventListener() call because EventListener
	// does not know how to remove event listeners and we really should
	// clean up. Also, these events are not triggered in older browsers
	// so we should be A-OK here.

	function addEventListener(node, eventName, eventListener) {
	  node.addEventListener(eventName, eventListener, false);
	}

	function removeEventListener(node, eventName, eventListener) {
	  node.removeEventListener(eventName, eventListener, false);
	}

	var TransitionEvents = {
	  on: function on(node, eventListener) {
	    if (endEvents.length === 0) {
	      // If CSS transitions are not supported, trigger an "end animation"
	      // event immediately.
	      window.setTimeout(eventListener, 0);
	      return;
	    }
	    endEvents.forEach(function (endEvent) {
	      addEventListener(node, endEvent, eventListener);
	    });
	  },

	  off: function off(node, eventListener) {
	    if (endEvents.length === 0) {
	      return;
	    }
	    endEvents.forEach(function (endEvent) {
	      removeEventListener(node, endEvent, eventListener);
	    });
	  },

	  support: support
	};

	module.exports = TransitionEvents;

/***/ },
/* 54 */
/***/ function(module, exports) {

	'use strict';

	module.exports = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var React = __webpack_require__(1);
	var PropTypes = __webpack_require__(11);
	var classNames = __webpack_require__(17);
	var createReactClass = __webpack_require__(3);
	var ClassNameMixin = __webpack_require__(18);

	var Article = createReactClass({
	  mixins: [ClassNameMixin],

	  propTypes: {
	    classPrefix: PropTypes.string,
	    title: PropTypes.node,
	    meta: PropTypes.node,
	    lead: PropTypes.node
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'article'
	    };
	  },

	  render: function render() {
	    var classSet = this.getClassSet();

	    return React.createElement(
	      'article',
	      _extends({}, this.props, {
	        className: classNames(classSet, this.props.className)
	      }),
	      React.createElement(
	        'header',
	        { className: this.prefixClass('hd') },
	        this.props.title ? React.createElement(
	          Article.Child,
	          { role: 'title' },
	          this.props.title
	        ) : null,
	        this.props.meta ? React.createElement(
	          Article.Child,
	          { role: 'meta' },
	          this.props.meta
	        ) : null
	      ),
	      React.createElement(
	        'div',
	        { className: this.prefixClass('bd') },
	        this.props.lead ? React.createElement(
	          Article.Child,
	          { role: 'lead' },
	          this.props.lead
	        ) : null,
	        this.props.children
	      )
	    );
	  }
	});

	Article.Child = createReactClass({
	  mixins: [ClassNameMixin],

	  propTypes: {
	    role: PropTypes.string.isRequired
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      role: 'title'
	    };
	  },

	  render: function render() {
	    var role = this.props.role;
	    var Component;
	    var classes = classNames(this.props.className, this.setClassNamespace('article-' + role));

	    switch (role) {
	      case 'meta':
	      case 'lead':
	        Component = 'p';
	        break;
	      case 'title':
	        Component = 'h1';
	        break;
	      default:
	        Component = 'div';
	    }

	    return role === 'divider' ? React.createElement('hr', _extends({}, this.props, {
	      className: classes
	    })) : React.createElement(
	      Component,
	      _extends({}, this.props, {
	        className: classes
	      }),
	      this.props.children
	    );
	  }
	});

	module.exports = Article;

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var React = __webpack_require__(1);
	var PropTypes = __webpack_require__(11);
	var createReactClass = __webpack_require__(3);
	var classNames = __webpack_require__(17);
	var ClassNameMixin = __webpack_require__(18);

	var Badge = createReactClass({
	  mixins: [ClassNameMixin],

	  propTypes: {
	    component: PropTypes.node,
	    href: PropTypes.string,
	    round: PropTypes.bool,
	    radius: PropTypes.bool
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'badge',
	      component: 'span'
	    };
	  },

	  renderAnchor: function renderAnchor(classSet) {
	    var Component = this.props.component || 'a';
	    var href = this.props.href || '#';

	    return React.createElement(
	      Component,
	      _extends({}, this.props, {
	        href: href,
	        className: classNames(classSet, this.props.className),
	        role: 'badge'
	      }),
	      this.props.children
	    );
	  },

	  render: function render() {
	    var classSet = this.getClassSet();
	    var Component = this.props.component;
	    var renderAnchor = this.props.href;

	    if (renderAnchor) {
	      return this.renderAnchor(classSet);
	    }

	    return React.createElement(
	      Component,
	      _extends({}, this.props, {
	        className: classNames(classSet, this.props.className)
	      }),
	      this.props.children
	    );
	  }
	});

	module.exports = Badge;

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var React = __webpack_require__(1);
	var createReactClass = __webpack_require__(3);
	var PropTypes = __webpack_require__(11);
	var classNames = __webpack_require__(17);
	var ClassNameMixin = __webpack_require__(18);
	var Icon = __webpack_require__(37);

	var Close = createReactClass({
	  mixins: [ClassNameMixin],

	  propTypes: {
	    classPrefix: PropTypes.string.isRequired,
	    component: PropTypes.node,
	    spin: PropTypes.bool,
	    alt: PropTypes.bool,
	    icon: PropTypes.bool
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'close',
	      type: 'button'
	    };
	  },

	  render: function render() {
	    var Component = this.props.component || 'button';
	    var classSet = this.getClassSet();
	    var props = this.props;

	    // transfer type
	    if (Component !== 'button') {
	      props.type = undefined;
	    }

	    // className am-close-alt am-close-spin
	    classSet[this.prefixClass('alt')] = this.props.alt;
	    classSet[this.prefixClass('spin')] = this.props.spin;

	    return React.createElement(
	      Component,
	      _extends({}, props, {
	        className: classNames(classSet, this.props.className),
	        role: 'close'
	      }),
	      this.props.icon ? React.createElement(Icon, { icon: 'times' }) : '\xD7'
	    );
	  }
	});

	module.exports = Close;

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var React = __webpack_require__(1);
	var createReactClass = __webpack_require__(3);
	var PropTypes = __webpack_require__(11);
	var classNames = __webpack_require__(17);
	var ClassNameMixin = __webpack_require__(18);

	var List = createReactClass({
	  mixins: [ClassNameMixin],

	  propTypes: {
	    bordered: PropTypes.bool,
	    striped: PropTypes.bool,
	    static: PropTypes.bool,
	    component: PropTypes.node.isRequired
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'list',
	      component: 'ul'
	    };
	  },

	  render: function render() {
	    var classes = this.getClassSet();
	    var Component = this.props.component;
	    var props = this.props;
	    var prefixClass = this.prefixClass;

	    // am-list-border
	    classes[prefixClass('border')] = props.border || props.bordered;

	    // am-list-striped
	    classes[prefixClass('striped')] = props.striped;

	    // am-list-static
	    classes[prefixClass('static')] = props.static;

	    return React.createElement(
	      Component,
	      _extends({}, props, {
	        className: classNames(classes, props.className)
	      }),
	      props.children
	    );
	  }
	});

	module.exports = List;

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var React = __webpack_require__(1);
	var PropTypes = __webpack_require__(11);
	var createReactClass = __webpack_require__(3);
	var classNames = __webpack_require__(17);
	var assign = __webpack_require__(45);
	var ClassNameMixin = __webpack_require__(18);

	var ListItem = createReactClass({
	  mixins: [ClassNameMixin],

	  propTypes: {
	    href: PropTypes.string,
	    truncate: PropTypes.bool,
	    component: PropTypes.any.isRequired,
	    linkComponent: PropTypes.any,
	    linkProps: PropTypes.object
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      component: 'li'
	    };
	  },

	  render: function render() {
	    var classes = {};
	    var Component = this.props.component;

	    // set .am-text-truncate
	    classes['am-text-truncate'] = this.props.truncate;

	    // render Anchor
	    if (this.props.href || this.props.linkComponent) {
	      return this.renderAnchor(classes);
	    }

	    return React.createElement(
	      Component,
	      _extends({}, this.props, {
	        className: classNames(classes, this.props.className)
	      }),
	      this.props.children
	    );
	  },

	  renderAnchor: function renderAnchor(classes) {
	    var props = this.props;
	    var Component = props.component;
	    var truncate = props.truncate ? 'am-text-truncate' : '';
	    var linkComponent = this.props.linkComponent || 'a';

	    return React.createElement(
	      Component,
	      _extends({}, props, {
	        className: classNames(classes, this.props.className)
	      }),
	      React.createElement(linkComponent, assign({
	        className: truncate,
	        href: this.props.href,
	        title: this.props.title,
	        target: this.props.target
	      }, this.props.linkProps), this.props.children)
	    );
	  }
	});

	module.exports = ListItem;

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(36);
	var createReactClass = __webpack_require__(3);
	var PropTypes = __webpack_require__(11);
	var classNames = __webpack_require__(17);
	var ClassNameMixin = __webpack_require__(18);
	var CollapseMixin = __webpack_require__(52);

	var Panel = createReactClass({
	  mixins: [ClassNameMixin, CollapseMixin],

	  propTypes: {
	    collapsible: PropTypes.bool,
	    header: PropTypes.node,
	    footer: PropTypes.node,
	    id: PropTypes.string,
	    amStyle: PropTypes.string,
	    onSelect: PropTypes.func,
	    eventKey: PropTypes.any
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'panel',
	      amStyle: 'default'
	    };
	  },

	  handleClick: function handleClick(e) {
	    e.selected = true;

	    if (this.props.onSelect) {
	      this.props.onSelect(e, this.props.eventKey);
	    } else {
	      e.preventDefault();
	    }

	    if (e.selected) {
	      this.handleToggle();
	    }
	  },

	  handleToggle: function handleToggle() {
	    this.setState({ expanded: !this.state.expanded });
	  },

	  getCollapsibleDimensionValue: function getCollapsibleDimensionValue() {
	    return ReactDOM.findDOMNode(this.refs.panel).scrollHeight;
	  },

	  getCollapsibleDOMNode: function getCollapsibleDOMNode() {
	    if (!this.isMounted() || !this.refs || !this.refs.panel) {
	      return null;
	    }

	    return ReactDOM.findDOMNode(this.refs.panel);
	  },

	  renderHeader: function renderHeader() {
	    if (!this.props.header) {
	      return null;
	    }

	    var header = this.props.header;

	    return React.createElement(
	      'div',
	      { className: this.prefixClass('hd') },
	      this.props.collapsible ? React.createElement(
	        'h4',
	        {
	          'data-am-collapse': true // just for `pointer` style
	          , className: classNames(this.prefixClass('title'), this.isExpanded() ? null : this.setClassNamespace('collapsed')),
	          onClick: this.handleClick
	        },
	        header
	      ) : header
	    );
	  },

	  renderBody: function renderBody() {
	    var bodyClass = this.prefixClass('bd');
	    var bodyChildren = this.props.children;
	    var bodyElements = [];
	    var panelBodyChildren = [];

	    function getProps() {
	      return {
	        key: bodyElements.length
	      };
	    }

	    function addFillChild(child) {
	      bodyElements.push(React.cloneElement(child, getProps()));
	    }

	    function addPanelBody(child) {
	      bodyElements.push(React.createElement(
	        'div',
	        _extends({ className: bodyClass }, getProps, { key: 'panelBody' }),
	        child
	      ));
	    }

	    function maybeRenderPanelBody() {
	      if (panelBodyChildren.length === 0) {
	        return;
	      }

	      addPanelBody(panelBodyChildren);
	      panelBodyChildren = [];
	    }

	    if (Array.isArray(bodyChildren)) {
	      bodyChildren.forEach(function (child) {
	        // props fill and isValidElement
	        if (this.shouldRenderFill(child)) {
	          maybeRenderPanelBody();

	          addFillChild(child);
	        } else {
	          panelBodyChildren.push(child);
	        }
	      }.bind(this));

	      maybeRenderPanelBody();
	    } else {
	      if (this.shouldRenderFill(bodyChildren)) {
	        addFillChild(bodyChildren);
	      } else {
	        addPanelBody(bodyChildren);
	      }
	    }

	    return bodyElements;
	  },

	  renderCollapsibleBody: function renderCollapsibleBody() {
	    var collapseClass = this.prefixClass('collapse');

	    return React.createElement(
	      'div',
	      {
	        className: classNames(this.getCollapsibleClassSet(collapseClass)),
	        id: this.props.id,
	        ref: 'panel'
	      },
	      this.renderBody()
	    );
	  },

	  shouldRenderFill: function shouldRenderFill(child) {
	    return React.isValidElement(child) && child.props.fill;
	  },

	  renderFooter: function renderFooter() {
	    if (!this.props.footer) {
	      return null;
	    }

	    return React.createElement(
	      'div',
	      { className: this.prefixClass('footer') },
	      this.props.footer
	    );
	  },

	  render: function render() {
	    var classes = this.getClassSet();
	    var collapsible = this.props.collapsible;

	    return React.createElement(
	      'div',
	      _extends({}, this.props, {
	        id: collapsible ? null : this.props.id,
	        className: classNames(classes, this.props.className)
	      }),
	      this.renderHeader(),
	      collapsible ? this.renderCollapsibleBody() : this.renderBody(),
	      this.renderFooter()
	    );
	  }
	});

	module.exports = Panel;

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var React = __webpack_require__(1);
	var createReactClass = __webpack_require__(3);
	var PropTypes = __webpack_require__(11);
	var classNames = __webpack_require__(17);
	var ClassNameMixin = __webpack_require__(18);

	var PanelGroup = createReactClass({
	  mixins: [ClassNameMixin],

	  propTypes: {
	    amStyle: PropTypes.string,
	    activeKey: PropTypes.any,
	    defaultActiveKey: PropTypes.any,
	    onSelect: PropTypes.func,
	    accordion: PropTypes.bool
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'panel-group'
	    };
	  },

	  getInitialState: function getInitialState() {
	    return {
	      activeKey: this.props.defaultActiveKey
	    };
	  },

	  shouldComponentUpdate: function shouldComponentUpdate() {
	    // Defer any updates to this component during the `onSelect` handler.
	    return !this._isChanging;
	  },

	  handleSelect: function handleSelect(e, key) {
	    e.preventDefault();

	    if (this.props.onSelect) {
	      this._isChanging = true;
	      this.props.onSelect(key);
	      this._isChanging = false;
	    }

	    if (this.state.activeKey === key) {
	      key = null;
	    }

	    this.setState({
	      activeKey: key
	    });
	  },

	  renderPanel: function renderPanel(child, index) {
	    var activeKey = this.props.activeKey != null ? this.props.activeKey : this.state.activeKey;

	    var props = {
	      amStyle: child.props.amStyle || this.props.amStyle,
	      key: child.key ? child.key : index,
	      ref: child.ref
	    };

	    if (this.props.accordion) {
	      props.collapsible = true;
	      props.expanded = child.props.eventKey === activeKey;
	      props.onSelect = this.handleSelect;
	    }

	    return React.cloneElement(child, props);
	  },

	  render: function render() {
	    var classes = this.getClassSet();

	    return React.createElement(
	      'div',
	      _extends({}, this.props, {
	        className: classNames(classes, this.props.className)
	      }),
	      React.Children.map(this.props.children, this.renderPanel)
	    );
	  }
	});

	module.exports = PanelGroup;

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var React = __webpack_require__(1);
	var createReactClass = __webpack_require__(3);
	var PropTypes = __webpack_require__(11);
	var classNames = __webpack_require__(17);
	var ClassNameMixin = __webpack_require__(18);

	var Progress = createReactClass({
	  mixins: [ClassNameMixin],

	  propTypes: {
	    now: PropTypes.number,
	    label: PropTypes.string,
	    active: PropTypes.bool,
	    striped: PropTypes.bool,
	    amSize: PropTypes.string,
	    amStyle: PropTypes.string
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'progress'
	    };
	  },

	  renderProgressBar: function renderProgressBar() {
	    var styleSheet = {
	      width: this.props.now + '%'
	    };
	    var classes = {};
	    var prefix = this.prefixClass('bar');
	    var amStyle = this.props.amStyle;

	    // set am-progress-bar
	    classes[prefix] = true;

	    if (amStyle) {
	      classes[prefix + '-' + amStyle] = true;
	    }

	    return React.createElement(
	      'div',
	      {
	        className: classNames(classes),
	        style: styleSheet,
	        role: 'progressbar'
	      },
	      this.props.label
	    );
	  },

	  renderChildBar: function renderChildBar(child, index) {
	    return React.cloneElement(child, {
	      isChild: true,
	      key: child.key ? child.key : index
	    });
	  },

	  render: function render() {
	    var classes = this.getClassSet();

	    // set class
	    classes[this.prefixClass('striped')] = this.props.striped;

	    if (this.props.active) {
	      classes[this.prefixClass('striped')] = true;
	    }

	    if (!this.props.children) {
	      if (!this.props.isChild) {
	        return React.createElement(
	          'div',
	          _extends({}, this.props, {
	            className: classNames(classes, this.props.className)
	          }),
	          this.renderProgressBar()
	        );
	      } else {
	        return this.renderProgressBar();
	      }
	    } else {
	      return React.createElement(
	        'div',
	        _extends({}, this.props, {
	          className: classNames(classes, this.props.className)
	        }),
	        React.Children.map(this.props.children, this.renderChildBar)
	      );
	    }
	  }
	});

	module.exports = Progress;

	// Todo: 删除无用 class
	//     : key ref 处理问题

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var React = __webpack_require__(1);
	var createReactClass = __webpack_require__(3);
	var PropTypes = __webpack_require__(11);
	var classNames = __webpack_require__(17);
	var ClassNameMixin = __webpack_require__(18);

	var Alert = createReactClass({
	  mixins: [ClassNameMixin],

	  propTypes: {
	    classPrefix: PropTypes.string.isRequired,
	    amStyle: PropTypes.oneOf(['secondary', 'success', 'warning', 'danger']),
	    onClose: PropTypes.func
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'alert'
	    };
	  },

	  renderCloseBtn: function renderCloseBtn() {
	    return React.createElement(
	      'button',
	      {
	        type: 'button',
	        className: this.setClassNamespace('close'),
	        onClick: this.props.onClose
	      },
	      '\xD7'
	    );
	  },

	  render: function render() {
	    var classSet = this.getClassSet();
	    var isCloseable = !!this.props.onClose;

	    if (this.props.amStyle) {
	      classSet[this.prefixClass(this.props.amStyle)] = true;
	    }

	    classSet[this.prefixClass('closeable')] = isCloseable;

	    return React.createElement(
	      'div',
	      _extends({}, this.props, {
	        className: classNames(this.props.className, classSet)
	      }),
	      isCloseable ? this.renderCloseBtn() : null,
	      this.props.children
	    );
	  }
	});

	module.exports = Alert;

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {
	  DateTimeInput: __webpack_require__(65),
	  DateTimePicker: __webpack_require__(69)
	};

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(36);
	var createReactClass = __webpack_require__(3);
	var PropTypes = __webpack_require__(11);
	var fecha = __webpack_require__(66);
	var Events = __webpack_require__(67);
	var isNodeInTree = __webpack_require__(68);
	var Input = __webpack_require__(35);
	var DateTimePicker = __webpack_require__(69);

	var DateTimeInput = createReactClass({
	  propTypes: {
	    format: PropTypes.string,
	    dateTime: PropTypes.string,
	    onSelect: PropTypes.func,
	    wrapClass: PropTypes.string
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      dateTime: '',
	      format: 'YYYY-MM-DD HH:mm'
	    };
	  },

	  getInitialState: function getInitialState() {
	    return {
	      value: this.props.dateTime || fecha.format(new Date(), this.props.format),
	      showPicker: false
	    };
	  },

	  handleOuterClick: function handleOuterClick(event) {
	    var picker = ReactDOM.findDOMNode(this.refs.DateTimePicker);

	    if (!isNodeInTree(event.target, picker)) {
	      this.handleClose();
	    }
	  },

	  bindOuterHandlers: function bindOuterHandlers() {
	    Events.on(document, 'click', this.handleOuterClick);
	  },

	  unbindOuterHandlers: function unbindOuterHandlers() {
	    Events.off(document, 'click', this.handleOuterClick);
	  },

	  handleClose: function handleClose() {
	    this.unbindOuterHandlers();
	    return this.setState({
	      showPicker: false
	    });
	  },

	  handleClick: function handleClick() {
	    this.bindOuterHandlers();

	    var positionNode = ReactDOM.findDOMNode(this.refs.dateInput);
	    // fixes #57
	    // @see http://stackoverflow.com/questions/1044988/getting-offsettop-of-element-in-a-table
	    var rect = positionNode.getBoundingClientRect();
	    var offset = {
	      top: rect.top + positionNode.offsetHeight,
	      left: rect.left
	    };

	    var styles = {
	      display: 'block',
	      top: 20,
	      left: 0,
	      position: 'absolute',
	      zIndex: 1120
	    };

	    this.setState({
	      showPicker: true,
	      pickerStyle: styles
	    });
	  },

	  handleChange: function handleChange(event) {
	    this.setState({
	      value: event.target.value
	    });
	  },

	  handleSelect: function handleSelect(date) {
	    this.setState({
	      value: date
	    });

	    this.props.onSelect && this.props.onSelect.call(this, date);
	  },

	  renderPicker: function renderPicker() {
	    if (this.state.showPicker) {
	      return React.createElement(DateTimePicker, {
	        style: this.state.pickerStyle,
	        ref: 'DateTimePicker',
	        showDatePicker: this.props.showDatePicker,
	        showTimePicker: this.props.showTimePicker,
	        onSelect: this.handleSelect,
	        onClose: this.handleClose,
	        amStyle: this.props.amStyle,
	        dateTime: this.state.value,
	        viewMode: this.props.viewMode,
	        minViewMode: this.props.minViewMode,
	        daysOfWeekDisabled: this.props.daysOfWeekDisabled,
	        weekStart: this.props.weekStart,
	        format: this.props.format,
	        locale: this.props.locale,
	        maxDate: this.props.maxDate,
	        minDate: this.props.minDate
	      });
	    }
	  },

	  render: function render() {
	    return React.createElement(
	      'div',
	      { className: this.props.wrapClass || '' },
	      React.createElement(Input, _extends({}, this.props, {
	        type: 'text',
	        value: this.state.value,
	        onClick: this.handleClick,
	        onChange: this.handleChange,
	        onSelect: null,
	        ref: 'dateInput'
	      })),
	      this.renderPicker()
	    );
	  }
	});

	module.exports = DateTimeInput;

	// TODO: 动画

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;(function (main) {
	  'use strict';

	  /**
	   * Parse or format dates
	   * @class fecha
	   */
	  var fecha = {};
	  var token = /d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g;
	  var twoDigits = /\d\d?/;
	  var threeDigits = /\d{3}/;
	  var fourDigits = /\d{4}/;
	  var word = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i;
	  var literal = /\[([^]*?)\]/gm;
	  var noop = function () {
	  };

	  function shorten(arr, sLen) {
	    var newArr = [];
	    for (var i = 0, len = arr.length; i < len; i++) {
	      newArr.push(arr[i].substr(0, sLen));
	    }
	    return newArr;
	  }

	  function monthUpdate(arrName) {
	    return function (d, v, i18n) {
	      var index = i18n[arrName].indexOf(v.charAt(0).toUpperCase() + v.substr(1).toLowerCase());
	      if (~index) {
	        d.month = index;
	      }
	    };
	  }

	  function pad(val, len) {
	    val = String(val);
	    len = len || 2;
	    while (val.length < len) {
	      val = '0' + val;
	    }
	    return val;
	  }

	  var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	  var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	  var monthNamesShort = shorten(monthNames, 3);
	  var dayNamesShort = shorten(dayNames, 3);
	  fecha.i18n = {
	    dayNamesShort: dayNamesShort,
	    dayNames: dayNames,
	    monthNamesShort: monthNamesShort,
	    monthNames: monthNames,
	    amPm: ['am', 'pm'],
	    DoFn: function DoFn(D) {
	      return D + ['th', 'st', 'nd', 'rd'][D % 10 > 3 ? 0 : (D - D % 10 !== 10) * D % 10];
	    }
	  };

	  var formatFlags = {
	    D: function(dateObj) {
	      return dateObj.getDate();
	    },
	    DD: function(dateObj) {
	      return pad(dateObj.getDate());
	    },
	    Do: function(dateObj, i18n) {
	      return i18n.DoFn(dateObj.getDate());
	    },
	    d: function(dateObj) {
	      return dateObj.getDay();
	    },
	    dd: function(dateObj) {
	      return pad(dateObj.getDay());
	    },
	    ddd: function(dateObj, i18n) {
	      return i18n.dayNamesShort[dateObj.getDay()];
	    },
	    dddd: function(dateObj, i18n) {
	      return i18n.dayNames[dateObj.getDay()];
	    },
	    M: function(dateObj) {
	      return dateObj.getMonth() + 1;
	    },
	    MM: function(dateObj) {
	      return pad(dateObj.getMonth() + 1);
	    },
	    MMM: function(dateObj, i18n) {
	      return i18n.monthNamesShort[dateObj.getMonth()];
	    },
	    MMMM: function(dateObj, i18n) {
	      return i18n.monthNames[dateObj.getMonth()];
	    },
	    YY: function(dateObj) {
	      return String(dateObj.getFullYear()).substr(2);
	    },
	    YYYY: function(dateObj) {
	      return dateObj.getFullYear();
	    },
	    h: function(dateObj) {
	      return dateObj.getHours() % 12 || 12;
	    },
	    hh: function(dateObj) {
	      return pad(dateObj.getHours() % 12 || 12);
	    },
	    H: function(dateObj) {
	      return dateObj.getHours();
	    },
	    HH: function(dateObj) {
	      return pad(dateObj.getHours());
	    },
	    m: function(dateObj) {
	      return dateObj.getMinutes();
	    },
	    mm: function(dateObj) {
	      return pad(dateObj.getMinutes());
	    },
	    s: function(dateObj) {
	      return dateObj.getSeconds();
	    },
	    ss: function(dateObj) {
	      return pad(dateObj.getSeconds());
	    },
	    S: function(dateObj) {
	      return Math.round(dateObj.getMilliseconds() / 100);
	    },
	    SS: function(dateObj) {
	      return pad(Math.round(dateObj.getMilliseconds() / 10), 2);
	    },
	    SSS: function(dateObj) {
	      return pad(dateObj.getMilliseconds(), 3);
	    },
	    a: function(dateObj, i18n) {
	      return dateObj.getHours() < 12 ? i18n.amPm[0] : i18n.amPm[1];
	    },
	    A: function(dateObj, i18n) {
	      return dateObj.getHours() < 12 ? i18n.amPm[0].toUpperCase() : i18n.amPm[1].toUpperCase();
	    },
	    ZZ: function(dateObj) {
	      var o = dateObj.getTimezoneOffset();
	      return (o > 0 ? '-' : '+') + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4);
	    }
	  };

	  var parseFlags = {
	    D: [twoDigits, function (d, v) {
	      d.day = v;
	    }],
	    Do: [new RegExp(twoDigits.source + word.source), function (d, v) {
	      d.day = parseInt(v, 10);
	    }],
	    M: [twoDigits, function (d, v) {
	      d.month = v - 1;
	    }],
	    YY: [twoDigits, function (d, v) {
	      var da = new Date(), cent = +('' + da.getFullYear()).substr(0, 2);
	      d.year = '' + (v > 68 ? cent - 1 : cent) + v;
	    }],
	    h: [twoDigits, function (d, v) {
	      d.hour = v;
	    }],
	    m: [twoDigits, function (d, v) {
	      d.minute = v;
	    }],
	    s: [twoDigits, function (d, v) {
	      d.second = v;
	    }],
	    YYYY: [fourDigits, function (d, v) {
	      d.year = v;
	    }],
	    S: [/\d/, function (d, v) {
	      d.millisecond = v * 100;
	    }],
	    SS: [/\d{2}/, function (d, v) {
	      d.millisecond = v * 10;
	    }],
	    SSS: [threeDigits, function (d, v) {
	      d.millisecond = v;
	    }],
	    d: [twoDigits, noop],
	    ddd: [word, noop],
	    MMM: [word, monthUpdate('monthNamesShort')],
	    MMMM: [word, monthUpdate('monthNames')],
	    a: [word, function (d, v, i18n) {
	      var val = v.toLowerCase();
	      if (val === i18n.amPm[0]) {
	        d.isPm = false;
	      } else if (val === i18n.amPm[1]) {
	        d.isPm = true;
	      }
	    }],
	    ZZ: [/[\+\-]\d\d:?\d\d/, function (d, v) {
	      var parts = (v + '').match(/([\+\-]|\d\d)/gi), minutes;

	      if (parts) {
	        minutes = +(parts[1] * 60) + parseInt(parts[2], 10);
	        d.timezoneOffset = parts[0] === '+' ? minutes : -minutes;
	      }
	    }]
	  };
	  parseFlags.dd = parseFlags.d;
	  parseFlags.dddd = parseFlags.ddd;
	  parseFlags.DD = parseFlags.D;
	  parseFlags.mm = parseFlags.m;
	  parseFlags.hh = parseFlags.H = parseFlags.HH = parseFlags.h;
	  parseFlags.MM = parseFlags.M;
	  parseFlags.ss = parseFlags.s;
	  parseFlags.A = parseFlags.a;


	  // Some common format strings
	  fecha.masks = {
	    'default': 'ddd MMM DD YYYY HH:mm:ss',
	    shortDate: 'M/D/YY',
	    mediumDate: 'MMM D, YYYY',
	    longDate: 'MMMM D, YYYY',
	    fullDate: 'dddd, MMMM D, YYYY',
	    shortTime: 'HH:mm',
	    mediumTime: 'HH:mm:ss',
	    longTime: 'HH:mm:ss.SSS'
	  };

	  /***
	   * Format a date
	   * @method format
	   * @param {Date|number} dateObj
	   * @param {string} mask Format of the date, i.e. 'mm-dd-yy' or 'shortDate'
	   */
	  fecha.format = function (dateObj, mask, i18nSettings) {
	    var i18n = i18nSettings || fecha.i18n;

	    if (typeof dateObj === 'number') {
	      dateObj = new Date(dateObj);
	    }

	    if (Object.prototype.toString.call(dateObj) !== '[object Date]' || isNaN(dateObj.getTime())) {
	      throw new Error('Invalid Date in fecha.format');
	    }

	    mask = fecha.masks[mask] || mask || fecha.masks['default'];

	    var literals = [];

	    // Make literals inactive by replacing them with ??
	    mask = mask.replace(literal, function($0, $1) {
	      literals.push($1);
	      return '??';
	    });
	    // Apply formatting rules
	    mask = mask.replace(token, function ($0) {
	      return $0 in formatFlags ? formatFlags[$0](dateObj, i18n) : $0.slice(1, $0.length - 1);
	    });
	    // Inline literal values back into the formatted value
	    return mask.replace(/\?\?/g, function() {
	      return literals.shift();
	    });
	  };

	  /**
	   * Parse a date string into an object, changes - into /
	   * @method parse
	   * @param {string} dateStr Date string
	   * @param {string} format Date parse format
	   * @returns {Date|boolean}
	   */
	  fecha.parse = function (dateStr, format, i18nSettings) {
	    var i18n = i18nSettings || fecha.i18n;

	    if (typeof format !== 'string') {
	      throw new Error('Invalid format in fecha.parse');
	    }

	    format = fecha.masks[format] || format;

	    // Avoid regular expression denial of service, fail early for really long strings
	    // https://www.owasp.org/index.php/Regular_expression_Denial_of_Service_-_ReDoS
	    if (dateStr.length > 1000) {
	      return false;
	    }

	    var isValid = true;
	    var dateInfo = {};
	    format.replace(token, function ($0) {
	      if (parseFlags[$0]) {
	        var info = parseFlags[$0];
	        var index = dateStr.search(info[0]);
	        if (!~index) {
	          isValid = false;
	        } else {
	          dateStr.replace(info[0], function (result) {
	            info[1](dateInfo, result, i18n);
	            dateStr = dateStr.substr(index + result.length);
	            return result;
	          });
	        }
	      }

	      return parseFlags[$0] ? '' : $0.slice(1, $0.length - 1);
	    });

	    if (!isValid) {
	      return false;
	    }

	    var today = new Date();
	    if (dateInfo.isPm === true && dateInfo.hour != null && +dateInfo.hour !== 12) {
	      dateInfo.hour = +dateInfo.hour + 12;
	    } else if (dateInfo.isPm === false && +dateInfo.hour === 12) {
	      dateInfo.hour = 0;
	    }

	    var date;
	    if (dateInfo.timezoneOffset != null) {
	      dateInfo.minute = +(dateInfo.minute || 0) - +dateInfo.timezoneOffset;
	      date = new Date(Date.UTC(dateInfo.year || today.getFullYear(), dateInfo.month || 0, dateInfo.day || 1,
	        dateInfo.hour || 0, dateInfo.minute || 0, dateInfo.second || 0, dateInfo.millisecond || 0));
	    } else {
	      date = new Date(dateInfo.year || today.getFullYear(), dateInfo.month || 0, dateInfo.day || 1,
	        dateInfo.hour || 0, dateInfo.minute || 0, dateInfo.second || 0, dateInfo.millisecond || 0);
	    }
	    return date;
	  };

	  /* istanbul ignore next */
	  if (typeof module !== 'undefined' && module.exports) {
	    module.exports = fecha;
	  } else if (true) {
	    !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	      return fecha;
	    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else {
	    main.fecha = fecha;
	  }
	})(this);


/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var canUseDOM = __webpack_require__(54);
	var one = function one() {};
	var on = function on() {};
	var off = function off() {};

	if (canUseDOM) {
	  var bind = window.addEventListener ? 'addEventListener' : 'attachEvent';
	  var unbind = window.removeEventListener ? 'removeEventListener' : 'detachEvent';
	  var prefix = bind !== 'addEventListener' ? 'on' : '';

	  one = function one(node, eventNames, eventListener) {
	    var typeArray = eventNames.split(' ');
	    var recursiveFunction = function recursiveFunction(e) {
	      e.target.removeEventListener(e.type, recursiveFunction);
	      return eventListener(e);
	    };

	    for (var i = typeArray.length - 1; i >= 0; i--) {
	      this.on(node, typeArray[i], recursiveFunction);
	    }
	  };

	  /**
	   * Bind `node` event `eventName` to `eventListener`.
	   *
	   * @param {Element} node
	   * @param {String} eventName
	   * @param {Function} eventListener
	   * @param {Boolean} capture
	   * @return {Obejct}
	   * @api public
	   */

	  on = function on(node, eventName, eventListener, capture) {
	    node[bind](prefix + eventName, eventListener, capture || false);

	    return {
	      off: function off() {
	        node[unbind](prefix + eventName, eventListener, capture || false);
	      }
	    };
	  };

	  /**
	   * Unbind `node` event `eventName`'s callback `eventListener`.
	   *
	   * @param {Element} node
	   * @param {String} eventName
	   * @param {Function} eventListener
	   * @param {Boolean} capture
	   * @return {Function}
	   * @api public
	   */

	  off = function off(node, eventName, eventListener, capture) {
	    node[unbind](prefix + eventName, eventListener, capture || false);
	    return eventListener;
	  };
	}

	module.exports = {
	  one: one,
	  on: on,
	  off: off
	};

/***/ },
/* 68 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function (node, tree) {
	  while (node) {
	    if (node === tree) {
	      return true;
	    }
	    node = node.parentNode;
	  }

	  return false;
	};

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var React = __webpack_require__(1);
	var PropTypes = __webpack_require__(11);
	var classNames = __webpack_require__(17);
	var createReactClass = __webpack_require__(3);
	var fecha = __webpack_require__(66);
	var ClassNameMixin = __webpack_require__(18);
	var Icon = __webpack_require__(37);
	var DatePicker = __webpack_require__(70);
	var TimePicker = __webpack_require__(72);

	var DateTimePicker = createReactClass({
	  mixins: [ClassNameMixin],

	  propTypes: {
	    showTimePicker: PropTypes.bool,
	    showDatePicker: PropTypes.bool,
	    caretDisplayed: PropTypes.bool,
	    amStyle: PropTypes.oneOf(['success', 'danger', 'warning']),
	    viewMode: PropTypes.string,
	    minViewMode: PropTypes.string,
	    onSelect: PropTypes.func.isRequired,
	    onClose: PropTypes.func,
	    daysOfWeekDisabled: PropTypes.array,
	    format: PropTypes.string,
	    dateTime: PropTypes.string,
	    locale: PropTypes.string,
	    weekStart: PropTypes.number,
	    minDate: PropTypes.string,
	    maxDate: PropTypes.string
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'datepicker',
	      dateTime: '',
	      format: 'YYYY-MM-DD HH:mm',
	      showTimePicker: true,
	      showDatePicker: true,
	      caretDisplayed: true
	    };
	  },

	  getInitialState: function getInitialState() {
	    var showToggle;
	    var showTimePicker;

	    if (this.props.showTimePicker && this.props.showDatePicker) {
	      showToggle = true;
	      showTimePicker = false;
	    }

	    if (!showToggle && !this.props.showDatePicker) {
	      showTimePicker = true;
	    }

	    return {
	      showTimePicker: showTimePicker,
	      showDatePicker: this.props.showDatePicker,
	      caretDisplayed: this.props.caretDisplayed,
	      showToggle: showToggle,
	      date: fecha.parse(this.props.dateTime, this.props.format),
	      toggleDisplay: {
	        toggleTime: {
	          display: 'block'
	        },
	        toggleDate: {
	          display: 'none'
	        }
	      }
	    };
	  },

	  handleToggleTime: function handleToggleTime() {
	    this.setState({
	      showDatePicker: false,
	      showTimePicker: true,
	      toggleDisplay: {
	        toggleTime: {
	          display: 'none'
	        },
	        toggleDate: {
	          display: 'block'
	        }
	      }
	    });
	  },

	  handleToggleDate: function handleToggleDate() {
	    this.setState({
	      showDatePicker: true,
	      showTimePicker: false,
	      toggleDisplay: {
	        toggleTime: {
	          display: 'block'
	        },
	        toggleDate: {
	          display: 'none'
	        }
	      }
	    });
	  },

	  handleSelect: function handleSelect(date) {
	    this.setState({
	      date: date
	    });
	    this.props.onSelect(fecha.format(date, this.props.format));
	  },

	  renderToggleTime: function renderToggleTime() {
	    if (this.state.showToggle) {
	      return React.createElement(
	        'div',
	        {
	          style: this.state.toggleDisplay.toggleTime,
	          className: this.prefixClass('toggle'),
	          onClick: this.handleToggleTime
	        },
	        React.createElement(Icon, { icon: 'clock-o' })
	      );
	    }
	  },

	  renderToggleDate: function renderToggleDate() {
	    if (this.state.showToggle) {
	      return React.createElement(
	        'div',
	        {
	          style: this.state.toggleDisplay.toggleDate,
	          className: this.prefixClass('toggle'),
	          onClick: this.handleToggleDate
	        },
	        React.createElement(Icon, { icon: 'calendar' })
	      );
	    }
	  },

	  renderDatePicker: function renderDatePicker() {
	    if (this.state.showDatePicker) {
	      return React.createElement(DatePicker, {
	        onSelect: this.handleSelect,
	        onClose: this.props.onClose,
	        weekStart: this.props.weekStart,
	        viewMode: this.props.viewMode,
	        minViewMode: this.props.minViewMode,
	        daysOfWeekDisabled: this.props.daysOfWeekDisabled,
	        format: this.props.format,
	        date: this.state.date,
	        locale: this.props.locale,
	        minDate: this.props.minDate,
	        maxDate: this.props.maxDate
	      });
	    }
	  },

	  renderTimePicker: function renderTimePicker() {
	    if (this.state.showTimePicker) {
	      return React.createElement(TimePicker, {
	        onSelect: this.handleSelect,
	        date: this.state.date,
	        format: this.props.format
	      });
	    }
	  },

	  renderCaret: function renderCaret() {
	    if (this.state.caretDisplayed) {
	      return React.createElement('div', { className: this.prefixClass('caret') });
	    }
	  },

	  render: function render() {
	    var classSet = this.getClassSet();

	    this.props.amStyle && (classSet[this.prefixClass(this.props.amStyle)] = true);

	    return React.createElement(
	      'div',
	      _extends({}, this.props, {
	        className: classNames(classSet, this.props.className)
	      }),
	      this.renderCaret(),
	      React.createElement(
	        'div',
	        { className: this.prefixClass('date') },
	        this.renderDatePicker()
	      ),
	      React.createElement(
	        'div',
	        { className: this.prefixClass('time') },
	        this.renderTimePicker()
	      ),
	      this.renderToggleTime(),
	      this.renderToggleDate()
	    );
	  }
	});

	module.exports = DateTimePicker;

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var createReactClass = __webpack_require__(3);
	var PropTypes = __webpack_require__(11);
	var classNames = __webpack_require__(17);
	var fecha = __webpack_require__(66);
	var ClassNameMixin = __webpack_require__(18);
	var dateUtils = __webpack_require__(71);

	var DatePicker = createReactClass({
	  mixins: [ClassNameMixin],

	  propTypes: {
	    onSelect: PropTypes.func.isRequired,
	    onClose: PropTypes.func,
	    viewMode: PropTypes.string,
	    minViewMode: PropTypes.string,
	    daysOfWeekDisabled: PropTypes.array,
	    format: PropTypes.string,
	    date: PropTypes.object,
	    weekStart: PropTypes.number,
	    minDate: PropTypes.string,
	    maxDate: PropTypes.string,
	    locale: PropTypes.string
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'datepicker',
	      date: new Date(),
	      daysOfWeekDisabled: [],
	      viewMode: 'days',
	      minViewMode: 'days',
	      format: 'YYYY-MM-DD',
	      displayed: {
	        days: { display: 'block' },
	        months: { display: 'none' },
	        years: { display: 'none' }
	      }
	    };
	  },

	  getInitialState: function getInitialState() {
	    var displayed;

	    switch (this.props.viewMode) {
	      case 'days':
	        displayed = {
	          days: { display: 'block' },
	          months: { display: 'none' },
	          years: { display: 'none' }
	        };
	        break;

	      case 'months':
	        displayed = {
	          days: { display: 'none' },
	          months: { display: 'block' },
	          years: { display: 'none' }
	        };
	        break;

	      case 'years':
	        displayed = {
	          days: { display: 'none' },
	          months: { display: 'none' },
	          years: { display: 'block' }
	        };
	        break;
	    }

	    return {
	      locale: dateUtils.getLocale(this.props.locale),
	      viewDate: this.props.date,
	      selectedDate: this.props.date,
	      displayed: displayed
	    };
	  },

	  // DaysPicker props function

	  subtractMonth: function subtractMonth() {
	    var viewDate = this.state.viewDate;
	    var newDate = new Date(viewDate.valueOf());

	    newDate.setMonth(viewDate.getMonth() - 1);
	    this.setState({
	      viewDate: newDate
	    });
	  },

	  addMonth: function addMonth() {
	    var viewDate = this.state.viewDate;
	    var newDate = new Date(viewDate.valueOf());

	    newDate.setMonth(viewDate.getMonth() + 1);
	    this.setState({
	      viewDate: newDate
	    });
	  },

	  setSelectedDate: function setSelectedDate(event) {
	    if (/disabled/ig.test(event.target.className)) {
	      return;
	    }

	    var viewDate = this.state.viewDate;

	    if (/new/ig.test(event.target.className)) {
	      viewDate.setMonth(viewDate.getMonth() + 1);
	    } else if (/old/ig.test(event.target.className)) {
	      viewDate.setMonth(viewDate.getMonth() - 1);
	    }

	    viewDate.setDate(event.target.innerHTML);

	    this.setViewDate(viewDate);
	  },

	  setViewDate: function setViewDate(viewDate) {
	    this.setState({
	      viewDate: viewDate,
	      selectedDate: new Date(viewDate.valueOf())
	    }, function () {
	      this.props.onSelect(this.state.selectedDate);
	      this.props.onClose && this.props.onClose();
	    });
	  },

	  showMonths: function showMonths() {
	    return this.setState({
	      displayed: {
	        days: { display: 'none' },
	        months: { display: 'block' },
	        years: { display: 'none' }
	      }
	    });
	  },

	  // MonthsPicker props function

	  subtractYear: function subtractYear() {
	    var viewDate = this.state.viewDate;
	    var newDate = new Date(viewDate.valueOf());

	    newDate.setFullYear(viewDate.getFullYear() - 1);

	    return this.setState({
	      viewDate: newDate
	    });
	  },

	  addYear: function addYear() {
	    var viewDate = this.state.viewDate;
	    var newDate = new Date(viewDate.valueOf());

	    newDate.setFullYear(viewDate.getFullYear() + 1);
	    return this.setState({
	      viewDate: newDate
	    });
	  },

	  showYears: function showYears() {
	    return this.setState({
	      displayed: {
	        days: { display: 'none' },
	        months: { display: 'none' },
	        years: { display: 'block' }
	      }
	    });
	  },

	  setViewMonth: function setViewMonth(event) {
	    var viewDate = this.state.viewDate;
	    var month = event.target.innerHTML;
	    var months = this.state.locale.monthsShort;
	    var i = 0;
	    var len = months.length;

	    for (; i < len; i++) {
	      if (month === months[i]) {
	        viewDate.setMonth(i);
	      }
	    }

	    if (this.props.minViewMode === 'months') {
	      this.setViewDate(viewDate);
	    }

	    this.setState({
	      viewDate: viewDate,
	      displayed: {
	        days: { display: 'block' },
	        months: { display: 'none' },
	        years: { display: 'none' }
	      }
	    });
	  },

	  // YearsPicker props function

	  setViewYear: function setViewYear(event) {
	    var year = event.target.innerHTML;
	    var viewDate = this.state.viewDate;

	    viewDate.setFullYear(year);

	    if (this.props.minViewMode === 'years') {
	      this.setViewDate(viewDate);
	    }

	    this.setState({
	      viewDate: viewDate,
	      displayed: {
	        days: { display: 'none' },
	        months: { display: 'block' },
	        years: { display: 'none' }
	      }
	    });
	  },

	  addDecade: function addDecade() {
	    var viewDate = this.state.viewDate;
	    var newDate = new Date(viewDate.valueOf());

	    newDate.setFullYear(viewDate.getFullYear() + 10);
	    this.setState({
	      viewDate: newDate
	    });
	  },

	  subtractDecade: function subtractDecade() {
	    var viewDate = this.state.viewDate;
	    var newDate = new Date(viewDate.valueOf());

	    newDate.setFullYear(viewDate.getFullYear() - 10);

	    this.setState({
	      viewDate: newDate
	    });
	  },

	  // render children
	  renderDays: function renderDays() {
	    return React.createElement(DaysPicker, {
	      style: this.state.displayed.days,
	      selectedDate: this.state.selectedDate,
	      viewDate: this.state.viewDate,

	      subtractMonth: this.subtractMonth,
	      addMonth: this.addMonth,
	      setSelectedDate: this.setSelectedDate,
	      showMonths: this.showMonths,

	      format: this.props.format,
	      locale: this.state.locale,
	      weekStart: this.props.weekStart,
	      daysOfWeekDisabled: this.props.daysOfWeekDisabled,
	      minDate: this.props.minDate,
	      maxDate: this.props.maxDate
	    });
	  },

	  renderMonths: function renderMonths() {
	    return React.createElement(MonthsPicker, {
	      style: this.state.displayed.months,
	      locale: this.state.locale,
	      addYear: this.addYear,
	      subtractYear: this.subtractYear,
	      viewDate: this.state.viewDate,
	      selectedDate: this.state.selectedDate,
	      showYears: this.showYears,
	      setViewMonth: this.setViewMonth });
	  },

	  renderYears: function renderYears() {
	    return React.createElement(YearsPicker, {
	      style: this.state.displayed.years,
	      viewDate: this.state.viewDate,
	      selectDate: this.state.selectedDate,
	      setViewYear: this.setViewYear,
	      addDecade: this.addDecade,
	      subtractDecade: this.subtractDecade });
	  },

	  render: function render() {
	    return React.createElement(
	      'div',
	      { className: this.prefixClass('body') },
	      this.renderDays(),
	      this.renderMonths(),
	      this.renderYears()
	    );
	  }
	});

	var DaysPicker = createReactClass({
	  mixins: [ClassNameMixin],

	  propTypes: {
	    subtractMonth: PropTypes.func.isRequired,
	    addMonth: PropTypes.func.isRequired,

	    setSelectedDate: PropTypes.func.isRequired,
	    selectedDate: PropTypes.object.isRequired,

	    viewDate: PropTypes.object.isRequired,
	    showMonths: PropTypes.func.isRequired,

	    locale: PropTypes.object,
	    weekStart: PropTypes.number,
	    daysOfWeekDisabled: PropTypes.array,
	    minDate: PropTypes.string,
	    maxDate: PropTypes.string
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'datepicker'
	    };
	  },

	  renderDays: function renderDays() {
	    var row;
	    var i;
	    var _ref;
	    var _i;
	    var _len;
	    var prevY;
	    var prevM;
	    var classes = {};
	    var html = [];
	    var cells = [];
	    var weekStart = this.props.weekStart || this.props.locale.weekStart;

	    var weekEnd = (weekStart + 6) % 7;

	    var d = this.props.viewDate;
	    var year = d.getFullYear();
	    var month = d.getMonth();
	    var selectedDate = this.props.selectedDate;

	    var currentDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate(), 0, 0, 0, 0).valueOf();

	    var prevMonth = new Date(year, month - 1, 28, 0, 0, 0, 0);
	    var day = dateUtils.getDaysInMonth(prevMonth.getFullYear(), prevMonth.getMonth());

	    prevMonth.setDate(day);
	    prevMonth.setDate(day - (prevMonth.getDay() - weekStart + 7) % 7);

	    var nextMonth = new Date(prevMonth);

	    nextMonth.setDate(nextMonth.getDate() + 42);
	    nextMonth = nextMonth.valueOf();

	    var minDate = this.props.minDate && fecha.parse(this.props.minDate);
	    var maxDate = this.props.maxDate && fecha.parse(this.props.maxDate);

	    while (prevMonth.valueOf() < nextMonth) {
	      classes[this.prefixClass('day')] = true;

	      prevY = prevMonth.getFullYear();
	      prevM = prevMonth.getMonth();

	      // set className old new
	      if (prevM < month && prevY === year || prevY < year) {
	        classes[this.prefixClass('old')] = true;
	      } else if (prevM > month && prevY === year || prevY > year) {
	        classes[this.prefixClass('new')] = true;
	      }

	      // set className active
	      if (prevMonth.valueOf() === currentDate) {
	        classes[this.setClassNamespace('active')] = true;
	      }

	      // set className disabled
	      if (minDate && prevMonth.valueOf() < minDate || maxDate && prevMonth.valueOf() > maxDate) {
	        classes[this.setClassNamespace('disabled')] = true;
	      }

	      // week disabled
	      if (this.props.daysOfWeekDisabled) {
	        _ref = this.props.daysOfWeekDisabled;
	        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	          i = _ref[_i];
	          if (prevMonth.getDay() === this.props.daysOfWeekDisabled[i]) {
	            classes[this.setClassNamespace('disabled')] = true;
	            break;
	          }
	        }
	      }

	      cells.push(React.createElement(
	        'td',
	        {
	          key: prevMonth.getMonth() + '-' + prevMonth.getDate(),
	          className: classNames(classes),
	          onClick: this.props.setSelectedDate
	        },
	        prevMonth.getDate()
	      ));

	      // add tr
	      if (prevMonth.getDay() === weekEnd) {
	        row = React.createElement(
	          'tr',
	          { key: prevMonth.getMonth() + '-' + prevMonth.getDate() },
	          cells
	        );
	        html.push(row);
	        cells = [];
	      }

	      classes = {};
	      prevMonth.setDate(prevMonth.getDate() + 1);
	    }

	    return html;
	  },

	  renderWeek: function renderWeek() {
	    var ths = [];
	    var locale = this.props.locale;
	    var weekStart = this.props.weekStart || this.props.locale.weekStart;
	    var weekEnd = weekStart + 7;

	    while (weekStart < weekEnd) {
	      ths.push(React.createElement(
	        'th',
	        { key: weekStart, className: this.prefixClass('dow') },
	        locale.daysMin[weekStart++ % 7]
	      ));
	    }

	    return React.createElement(
	      'tr',
	      null,
	      ths
	    );
	  },

	  render: function render() {
	    var viewDate = this.props.viewDate;
	    var prefixClass = this.prefixClass;
	    var locale = this.props.locale;

	    return React.createElement(
	      'div',
	      {
	        className: prefixClass('days'),
	        style: this.props.style },
	      React.createElement(
	        'table',
	        { className: prefixClass('table') },
	        React.createElement(
	          'thead',
	          null,
	          React.createElement(
	            'tr',
	            { className: prefixClass('header') },
	            React.createElement(
	              'th',
	              { className: prefixClass('prev'), onClick: this.props.subtractMonth },
	              React.createElement('i', { className: prefixClass('prev-icon') })
	            ),
	            React.createElement(
	              'th',
	              {
	                className: prefixClass('switch'),
	                colSpan: '5',
	                onClick: this.props.showMonths },
	              React.createElement(
	                'div',
	                { className: this.prefixClass('select') },
	                locale.monthsShort[viewDate.getMonth()],
	                viewDate.getFullYear()
	              )
	            ),
	            React.createElement(
	              'th',
	              { className: prefixClass('next'), onClick: this.props.addMonth },
	              React.createElement('i', { className: prefixClass('next-icon') })
	            )
	          ),
	          this.renderWeek()
	        ),
	        React.createElement(
	          'tbody',
	          null,
	          this.renderDays()
	        )
	      )
	    );
	  }
	});

	var MonthsPicker = createReactClass({
	  mixins: [ClassNameMixin],

	  propTypes: {
	    locale: PropTypes.object,
	    subtractYear: PropTypes.func.isRequired,
	    addYear: PropTypes.func.isRequired,
	    viewDate: PropTypes.object.isRequired,
	    selectedDate: PropTypes.object.isRequired,
	    showYears: PropTypes.func.isRequired,
	    setViewMonth: PropTypes.func.isRequired,
	    minDate: PropTypes.string,
	    maxDate: PropTypes.string
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'datepicker'
	    };
	  },

	  renderMonths: function renderMonths() {
	    var classes = {};
	    var month = this.props.selectedDate.getMonth();
	    var year = this.props.selectedDate.getFullYear();
	    var i = 0;
	    var months = [];
	    var minDate = this.props.minDate && fecha.parse(this.props.minDate);
	    var maxDate = this.props.maxDate && fecha.parse(this.props.maxDate);
	    var prevMonth = new Date(year, month);

	    // TODO: minDate maxDate months
	    while (i < 12) {
	      classes[this.prefixClass('month')] = true;

	      if (this.props.viewDate.getFullYear() === this.props.selectedDate.getFullYear() && i === month) {
	        classes[this.setClassNamespace('active')] = true;
	      }

	      // set className disabled
	      if (minDate && prevMonth.valueOf() < minDate || maxDate && prevMonth.valueOf() > maxDate) {
	        classes[this.setClassNamespace('disabled')] = true;
	      }

	      months.push(React.createElement(
	        'span',
	        {
	          className: classNames(classes),
	          onClick: this.props.setViewMonth,
	          key: i },
	        this.props.locale.monthsShort[i]
	      ));

	      classes = {};
	      i++;
	    }

	    return months;
	  },

	  render: function render() {
	    return React.createElement(SubPicker, {
	      displayName: 'months',
	      style: this.props.style,
	      subtract: this.props.subtractYear,
	      add: this.props.addYear,
	      showFunc: this.props.showYears,
	      showText: this.props.viewDate.getFullYear(),
	      body: this.renderMonths() });
	  }
	});

	var YearsPicker = createReactClass({
	  mixins: [ClassNameMixin],

	  propTypes: {
	    viewDate: PropTypes.object.isRequired,
	    selectDate: PropTypes.object.isRequired,
	    subtractDecade: PropTypes.func.isRequired,
	    addDecade: PropTypes.func.isRequired,
	    setViewYear: PropTypes.func.isRequired
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'datepicker'
	    };
	  },

	  renderYears: function renderYears() {
	    var classes = {};
	    var years = [];
	    var i = -1;
	    var year = parseInt(this.props.viewDate.getFullYear() / 10, 10) * 10;

	    year--;

	    while (i < 11) {
	      classes[this.prefixClass('year')] = true;

	      if (i === -1 || i === 10) {
	        classes[this.prefixClass('old')] = true;
	      }

	      if (this.props.selectDate.getFullYear() === year) {
	        classes[this.setClassNamespace('active')] = true;
	      }

	      years.push(React.createElement(
	        'span',
	        {
	          className: classNames(classes),
	          onClick: this.props.setViewYear,
	          key: year },
	        year
	      ));

	      classes = {};
	      year++;
	      i++;
	    }

	    return years;
	  },

	  render: function render() {
	    var year = parseInt(this.props.viewDate.getFullYear() / 10, 10) * 10;
	    var addYear = year + 9;
	    var showYear = year + '-' + addYear;

	    return React.createElement(SubPicker, {
	      displayName: 'years',
	      style: this.props.style,
	      subtract: this.props.subtractDecade,
	      add: this.props.addDecade,
	      showText: showYear,
	      body: this.renderYears() });
	  }
	});

	var SubPicker = createReactClass({
	  mixins: [ClassNameMixin],

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'datepicker'
	    };
	  },

	  render: function render() {
	    var prefixClass = this.prefixClass;

	    return React.createElement(
	      'div',
	      {
	        className: prefixClass(this.props.displayName),
	        style: this.props.style },
	      React.createElement(
	        'table',
	        { className: prefixClass('table') },
	        React.createElement(
	          'thead',
	          null,
	          React.createElement(
	            'tr',
	            { className: prefixClass('header') },
	            React.createElement(
	              'th',
	              { className: prefixClass('prev'), onClick: this.props.subtract },
	              React.createElement('i', { className: prefixClass('prev-icon') })
	            ),
	            React.createElement(
	              'th',
	              {
	                className: prefixClass('switch'),
	                colSpan: '5',
	                onClick: this.props.showFunc },
	              React.createElement(
	                'div',
	                { className: this.prefixClass('select') },
	                this.props.showText
	              )
	            ),
	            React.createElement(
	              'th',
	              { className: prefixClass('next'), onClick: this.props.add },
	              React.createElement('i', { className: prefixClass('next-icon') })
	            )
	          )
	        ),
	        React.createElement(
	          'tbody',
	          null,
	          React.createElement(
	            'tr',
	            null,
	            React.createElement(
	              'td',
	              { colSpan: '7' },
	              this.props.body
	            )
	          )
	        )
	      )
	    );
	  }
	});

	module.exports = DatePicker;

/***/ },
/* 71 */
/***/ function(module, exports) {

	'use strict';

	var locales = {
	  'en_US': {
	    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
	    daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
	    daysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
	    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
	    monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
	    today: 'Today',
	    weekStart: 0
	  },
	  'zh_CN': {
	    days: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
	    daysShort: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
	    daysMin: ['日', '一', '二', '三', '四', '五', '六'],
	    months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
	    monthsShort: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
	    today: '今天',
	    weekStart: 0
	  }
	};

	var dateUtils = {
	  isLeapYear: function isLeapYear(year) {
	    return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
	  },

	  getDaysInMonth: function getDaysInMonth(year, month) {
	    return [31, this.isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
	  },

	  getLocale: function getLocale(locale) {
	    if (!locale && navigator && navigator.language) {
	      locale = navigator.language.split('-');
	      locale[1] = locale[1].toUpperCase();
	      locale = locale.join('_');
	    }

	    return locales[locale] || locales['zh_CN'];
	  }
	};

	module.exports = dateUtils;

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var PropTypes = __webpack_require__(11);
	var createReactClass = __webpack_require__(3);
	var classNames = __webpack_require__(17);
	var ClassNameMixin = __webpack_require__(18);

	var TimePicker = createReactClass({
	  mixins: [ClassNameMixin],

	  propTypes: {
	    onSelect: PropTypes.func.isRequired,
	    date: PropTypes.object,
	    format: PropTypes.string
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'datepicker',
	      format: 'HH:mm'
	    };
	  },

	  getInitialState: function getInitialState() {
	    return {
	      viewDate: this.props.date,
	      selectedDate: this.props.date,
	      displayed: {
	        times: { display: 'block' },
	        minutes: { display: 'none' },
	        hours: { display: 'none' }
	      }
	    };
	  },

	  // Minutes
	  addMinute: function addMinute() {
	    var viewDate = this.state.viewDate;

	    viewDate.setMinutes(viewDate.getMinutes() + 1);

	    this.setTime(viewDate);
	  },

	  subtractMinute: function subtractMinute() {
	    var viewDate = this.state.viewDate;

	    viewDate.setMinutes(viewDate.getMinutes() - 1);

	    this.setTime(viewDate);
	  },

	  setTime: function setTime(viewDate) {
	    this.setState({
	      viewDate: viewDate,
	      selectedDate: new Date(viewDate.valueOf())
	    }, function () {
	      this.props.onSelect(this.state.selectedDate);
	    });
	  },

	  // set Minutes
	  setSelectedMinute: function setSelectedMinute(event) {
	    var viewDate = this.state.viewDate;
	    var minute = parseInt(event.target.innerHTML.split(':')[1]);

	    viewDate.setMinutes(minute);
	    this.setTime(viewDate);

	    this.setState({
	      displayed: {
	        times: { display: 'block' },
	        minutes: { display: 'none' },
	        hours: { display: 'none' }
	      }
	    });
	  },

	  showMinutes: function showMinutes() {
	    this.setState({
	      displayed: {
	        times: { display: 'none' },
	        minutes: { display: 'block' },
	        hours: { display: 'none' }
	      }
	    });
	  },

	  // Hours
	  showHours: function showHours() {
	    this.setState({
	      displayed: {
	        times: { display: 'none' },
	        minutes: { display: 'none' },
	        hours: { display: 'block' }
	      }
	    });
	  },

	  setSelectedHour: function setSelectedHour(event) {
	    var viewDate = this.state.viewDate;
	    var hour = parseInt(event.target.innerHTML);

	    viewDate.setHours(hour);
	    this.setTime(viewDate);

	    this.setState({
	      displayed: {
	        times: { display: 'block' },
	        minutes: { display: 'none' },
	        hours: { display: 'none' }
	      }
	    });
	  },

	  addHour: function addHour() {
	    var viewDate = this.state.viewDate;

	    viewDate.setHours(viewDate.getHours() + 1);

	    this.setTime(viewDate);
	  },

	  subtractHour: function subtractHour() {
	    var viewDate = this.state.viewDate;

	    viewDate.setHours(viewDate.getHours() - 1);

	    this.setTime(viewDate);
	  },

	  showTimeText: function showTimeText() {
	    var hour = this.state.viewDate.getHours();
	    var minute = this.state.viewDate.getMinutes();

	    if (minute < 10) {
	      minute = '0' + minute;
	    }

	    if (hour < 10) {
	      hour = '0' + hour;
	    }

	    return {
	      hour: hour,
	      minute: minute
	    };
	  },

	  renderHours: function renderHours() {
	    var time = this.showTimeText().hour + ':' + this.showTimeText().minute;

	    return React.createElement(HoursPicker, {
	      style: this.state.displayed.hours,
	      setSelectedHour: this.setSelectedHour,
	      selectedDate: this.state.selectedDate,
	      addHour: this.addHour,
	      subtractHour: this.subtractHour,
	      showTime: time
	    });
	  },

	  renderMinutes: function renderMinutes() {
	    var time = this.showTimeText().hour + ':' + this.showTimeText().minute;

	    return React.createElement(MinutesPicker, {
	      style: this.state.displayed.minutes,
	      setSelectedMinute: this.setSelectedMinute,
	      selectedDate: this.state.selectedDate,
	      addMinute: this.addMinute,
	      subtractMinute: this.subtractMinute,
	      showTime: time
	    });
	  },

	  render: function render() {
	    var time = this.showTimeText();

	    var content = React.createElement(
	      'div',
	      { className: this.prefixClass('time-box') },
	      React.createElement(
	        'strong',
	        { onClick: this.showHours },
	        time.hour
	      ),
	      React.createElement(
	        'em',
	        null,
	        ':'
	      ),
	      React.createElement(
	        'strong',
	        { onClick: this.showMinutes },
	        time.minute
	      )
	    );

	    return React.createElement(
	      'div',
	      { className: this.prefixClass('body') },
	      React.createElement(SubPicker, {
	        style: this.state.displayed.times,
	        displayName: 'time-wrapper',
	        body: content,
	        add: this.addMinute,
	        subtract: this.subtractMinute,
	        showFunc: this.props.showDate,
	        showText: 'today'
	      }),
	      this.renderHours(),
	      this.renderMinutes()
	    );
	  }
	});

	var HoursPicker = createReactClass({
	  mixins: [ClassNameMixin],

	  propTypes: {
	    setSelectedHour: PropTypes.func.isRequired,
	    selectedDate: PropTypes.object.isRequired
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'datepicker'
	    };
	  },

	  renderHour: function renderHour() {
	    var classes;
	    var hour = this.props.selectedDate.getHours();
	    var i = 0;
	    var hours = [];

	    while (i < 24) {
	      classes = {};
	      classes[this.prefixClass('hour')] = true;

	      if (i === hour) {
	        classes[this.setClassNamespace('active')] = true;
	      }

	      hours.push(React.createElement(
	        'span',
	        {
	          className: classNames(classes),
	          onClick: this.props.setSelectedHour,
	          key: i
	        },
	        i < 10 ? '0' + i + ':00' : i + ':00'
	      ));

	      i++;
	    }

	    return hours;
	  },

	  render: function render() {
	    return React.createElement(SubPicker, {
	      displayName: 'hours',
	      style: this.props.style,
	      subtract: this.props.subtractHour,
	      add: this.props.addHour,
	      showText: this.props.showTime,
	      body: this.renderHour()
	    });
	  }
	});

	var MinutesPicker = createReactClass({
	  mixins: [ClassNameMixin],

	  propTypes: {
	    setSelectedMinute: PropTypes.func.isRequired,
	    selectedDate: PropTypes.object.isRequired
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'datepicker'
	    };
	  },

	  renderMinute: function renderMinute() {
	    var classes;
	    var minute = this.props.selectedDate.getMinutes();
	    var hour = this.props.selectedDate.getHours();
	    var i = 0;
	    var minutes = [];

	    while (i < 60) {
	      classes = {};
	      classes[this.prefixClass('minute')] = true;

	      if (i === minute) {
	        classes[this.setClassNamespace('active')] = true;
	      }

	      if (i % 5 === 0) {
	        minutes.push(React.createElement(
	          'span',
	          {
	            className: classNames(classes),
	            onClick: this.props.setSelectedMinute,
	            key: i
	          },
	          i < 10 ? hour + ':0' + i : hour + ':' + i
	        ));
	      }

	      i++;
	    }

	    return minutes;
	  },

	  render: function render() {
	    return React.createElement(SubPicker, {
	      displayName: 'minutes',
	      style: this.props.style,
	      subtract: this.props.subtractMinute,
	      add: this.props.addMinute,
	      showText: this.props.showTime,
	      body: this.renderMinute()
	    });
	  }
	});

	var SubPicker = createReactClass({
	  mixins: [ClassNameMixin],

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'datepicker'
	    };
	  },

	  render: function render() {
	    var prefixClass = this.prefixClass;

	    return React.createElement(
	      'div',
	      {
	        className: prefixClass(this.props.displayName),
	        style: this.props.style },
	      React.createElement(
	        'table',
	        { className: prefixClass('table') },
	        React.createElement(
	          'thead',
	          null,
	          React.createElement(
	            'tr',
	            { className: prefixClass('header') },
	            React.createElement(
	              'th',
	              { className: prefixClass('prev'), onClick: this.props.subtract },
	              React.createElement('i', { className: prefixClass('prev-icon') })
	            ),
	            React.createElement(
	              'th',
	              {
	                className: prefixClass('switch'),
	                colSpan: '5',
	                onClick: this.props.showFunc
	              },
	              React.createElement(
	                'div',
	                { className: this.prefixClass('select') },
	                this.props.showText
	              )
	            ),
	            React.createElement(
	              'th',
	              { className: prefixClass('next'), onClick: this.props.add },
	              React.createElement('i', { className: prefixClass('next-icon') })
	            )
	          )
	        ),
	        React.createElement(
	          'tbody',
	          null,
	          React.createElement(
	            'tr',
	            null,
	            React.createElement(
	              'td',
	              { colSpan: '7' },
	              this.props.body
	            )
	          )
	        )
	      )
	    );
	  }
	});

	module.exports = TimePicker;

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(36);
	var createReactClass = __webpack_require__(3);
	var PropTypes = __webpack_require__(11);
	var classNames = __webpack_require__(17);
	var assign = __webpack_require__(45);
	var ClassNameMixin = __webpack_require__(18);
	var constants = __webpack_require__(19);
	var Button = __webpack_require__(23);
	var Icon = __webpack_require__(37);
	var Events = __webpack_require__(67);
	var isNodeInTree = __webpack_require__(68);
	var createChainedFunction = __webpack_require__(49);
	var canUseDOM = __webpack_require__(54);

	var Dropdown = createReactClass({
	  mixins: [ClassNameMixin],

	  propTypes: {
	    title: PropTypes.node.isRequired,
	    dropup: PropTypes.bool,
	    navItem: PropTypes.bool,
	    btnStyle: PropTypes.string,
	    btnSize: PropTypes.string,
	    btnInlineStyle: PropTypes.object,
	    contentInlineStyle: PropTypes.object,
	    contentComponent: PropTypes.node,
	    toggleClassName: PropTypes.string,
	    caretClassName: PropTypes.string,
	    contentClassName: PropTypes.string,
	    onOpen: PropTypes.func, // open callback
	    onClose: PropTypes.func // close callback
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'dropdown',
	      contentComponent: 'ul'
	    };
	  },

	  getInitialState: function getInitialState() {
	    return {
	      open: false
	    };
	  },

	  componentWillMount: function componentWillMount() {
	    this.unbindOuterHandlers();
	  },

	  componentWillUnmount: function componentWillUnmount() {
	    this.unbindOuterHandlers();
	  },

	  /**
	   * setDropdown
	   * @param {bool} isOpen - Dropdown state, `true` -> open, `close` -> false
	   * @param {function} [callback]
	   */
	  setDropdown: function setDropdown(isOpen, callback) {
	    if (isOpen) {
	      this.bindOuterHandlers();
	    } else {
	      this.unbindOuterHandlers();
	    }

	    this.setState({
	      open: isOpen
	    }, function () {
	      callback && callback();

	      isOpen && this.props.onOpen && this.props.onOpen();
	      !isOpen && this.props.onClose && this.props.onClose();
	    });
	  },

	  // close dropdown on `esc` keyup
	  handleKeyup: function handleKeyup(e) {
	    e.keyCode === 27 && this.setDropdown(false);
	  },

	  // close dropdown when click outer dropdown
	  handleOuterClick: function handleOuterClick(e) {
	    if (isNodeInTree(e.target, ReactDOM.findDOMNode(this))) {
	      return false;
	    }

	    this.setDropdown(false);
	  },

	  bindOuterHandlers: function bindOuterHandlers() {
	    if (canUseDOM) {
	      Events.on(document, 'click', this.handleOuterClick);
	      Events.on(document, 'keyup', this.handleKeyup);
	    }
	  },

	  unbindOuterHandlers: function unbindOuterHandlers() {
	    if (canUseDOM) {
	      Events.off(document, 'click', this.handleOuterClick);
	      Events.off(document, 'keyup', this.handleKeyup);
	    }
	  },

	  handleDropdownClick: function handleDropdownClick(e) {
	    e.preventDefault();

	    this.setDropdown(!this.state.open);
	  },

	  renderChildren: function renderChildren() {
	    var _this = this;

	    return React.Children.map(this.props.children, function (child, index) {
	      if (React.isValidElement(child)) {
	        var closeOnClick = child.props.closeOnClick;
	        var onClick = child.props.onClick;
	        var handleClick = closeOnClick ? createChainedFunction(onClick, function () {
	          _this.setDropdown(false);
	        }) : onClick;

	        return React.cloneElement(child, assign({}, child.props, {
	          key: 'dropdownItem-' + index,
	          onClick: handleClick
	        }));
	      }
	    });
	  },

	  render: function render() {
	    var classSet = this.getClassSet();
	    var Component = this.props.navItem ? 'li' : 'div';
	    var btnClassPrefix = this.props.navItem ? '' : 'btn';
	    var btnComponent = this.props.navItem ? 'a' : null;
	    var caret = React.createElement(Icon, {
	      className: this.props.caretClassName,
	      icon: 'caret-' + (this.props.dropup ? 'up' : 'down')
	    });
	    var animation = this.state.open ? this.setClassNamespace('animation-slide-top-fixed') : this.setClassNamespace('dropdown-animation');
	    var ContentComponent = this.props.contentComponent;

	    classSet[constants.CLASSES.active] = this.state.open;
	    classSet[this.prefixClass('up')] = this.props.dropup;

	    return React.createElement(
	      Component,
	      {
	        btnStyle: null,
	        className: classNames(this.props.className, classSet)
	      },
	      React.createElement(
	        Button,
	        {
	          onClick: this.handleDropdownClick,
	          amStyle: this.props.btnStyle,
	          amSize: this.props.btnSize,
	          style: this.props.btnInlineStyle,
	          className: classNames(this.prefixClass('toggle'), this.props.toggleClassName),
	          classPrefix: btnClassPrefix,
	          component: btnComponent,
	          ref: 'dropdownToggle'
	        },
	        this.props.title,
	        ' ',
	        caret
	      ),
	      React.createElement(
	        ContentComponent,
	        {
	          ref: 'dropdownContent',
	          style: this.props.contentInlineStyle,
	          className: classNames(this.prefixClass('content'), animation, this.props.contentClassName)
	        },
	        this.renderChildren()
	      )
	    );
	  }
	});

	Dropdown.Item = createReactClass({
	  mixins: [ClassNameMixin],

	  propTypes: {
	    closeOnClick: PropTypes.bool,
	    href: PropTypes.string,
	    target: PropTypes.string,
	    title: PropTypes.string,
	    header: PropTypes.bool,
	    divider: PropTypes.bool,
	    linkComponent: PropTypes.any,
	    linkProps: PropTypes.object
	  },

	  render: function render() {
	    var classSet = this.getClassSet();
	    var children = null;

	    classSet[this.setClassNamespace('dropdown-header')] = this.props.header;

	    if (this.props.header) {
	      children = this.props.children;
	    } else if (!this.props.divider) {
	      var Component = this.props.linkComponent || 'a';

	      children = React.createElement(
	        Component,
	        _extends({
	          onClick: this.handleClick,
	          href: this.props.href,
	          target: this.props.target,
	          title: this.props.title
	        }, this.props.linkProps),
	        this.props.children
	      );
	    }

	    return React.createElement(
	      'li',
	      _extends({}, this.props, {
	        title: null,
	        href: null,
	        className: classNames(this.props.className, classSet)
	      }),
	      children
	    );
	  }
	});

	module.exports = Dropdown;

	/*
	* TODO:
	*   1. 关闭动画
	*   2. 位置检测/宽度适应
	* */

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(36);
	var createReactClass = __webpack_require__(3);
	var PropTypes = __webpack_require__(11);
	var classNames = __webpack_require__(17);
	var ClassNameMixin = __webpack_require__(18);
	var DimmerMixin = __webpack_require__(75);
	var Events = __webpack_require__(67);
	var Close = __webpack_require__(57);
	var Icon = __webpack_require__(37);

	var Modal = createReactClass({
	  mixins: [ClassNameMixin, DimmerMixin],

	  propTypes: {
	    classPrefix: PropTypes.string.isRequired,
	    type: PropTypes.oneOf(['alert', 'confirm', 'prompt', 'loading', 'actions', 'popup']),
	    title: PropTypes.node,
	    confirmText: PropTypes.string,
	    cancelText: PropTypes.string,
	    closeIcon: PropTypes.bool,
	    closeViaDimmer: PropTypes.bool,
	    onRequestClose: PropTypes.func,
	    modalWidth: PropTypes.string
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'modal',
	      closeIcon: true,
	      confirmText: '确定',
	      cancelText: '取消',
	      onRequestClose: function onRequestClose() {}
	    };
	  },

	  getInitialState: function getInitialState() {
	    return {
	      transitioning: false
	    };
	  },

	  componentDidMount: function componentDidMount() {
	    this._documentKeyupListener = Events.on(document, 'keyup', this.handleDocumentKeyUp, false);

	    this.setDimmerContainer();

	    // TODO: 何为添加动画效果的最佳时机？ render 完成以后添加动画 Class？
	    this.setState({
	      transitioning: true
	    });
	  },

	  componentWillUnmount: function componentWillUnmount() {
	    this._documentKeyupListener.off();
	    this.resetDimmerContainer();
	  },

	  handleDimmerClick: function handleDimmerClick() {
	    if (this.props.closeViaDimmer) {
	      this.props.onRequestClose();
	    }
	  },

	  handleBackdropClick: function handleBackdropClick(e) {
	    if (e.target !== e.currentTarget) {
	      return;
	    }

	    this.props.onRequestClose();
	  },

	  handleDocumentKeyUp: function handleDocumentKeyUp(e) {
	    if (!this.props.keyboard && e.keyCode === 27) {
	      this.props.onRequestClose();
	      //当调用时，用show属性控制modal时，需要在这里reset show属性，escCallback 和 onCancel 是一样的
	      this.props.escCallback && this.props.escCallback();
	    }
	  },

	  isPopup: function isPopup() {
	    return this.props.type === 'popup';
	  },

	  isActions: function isActions() {
	    return this.props.type === 'actions';
	  },

	  // Get input data for prompt modal
	  getPromptData: function getPromptData() {
	    var data = [],
	        dom = ReactDOM.findDOMNode(this),
	        inputs = dom.querySelectorAll('input'),
	        textarea = dom.querySelectorAll('textarea');

	    function getData(arr, data) {
	      if (arr) {
	        var i = 0;

	        for (; i < arr.length; i++) {
	          data.push(arr[i].value);
	        }
	      }
	    }

	    getData(inputs, data);
	    getData(textarea, data);

	    return data.length === 0 ? null : data.length === 1 ? data[0] : data;
	  },

	  handleConfirm: function handleConfirm(e) {
	    var data = e;

	    if (this.props.type === 'prompt' || this.props.type === 'confirm') {
	      data = this.getPromptData();
	    }

	    this.props.onConfirm(data);
	  },

	  renderActions: function renderActions() {
	    return React.createElement(
	      'div',
	      {
	        style: { display: 'block' },
	        className: classNames(this.props.className, this.setClassNamespace('modal-actions'), this.setClassNamespace('modal-active'))
	      },
	      this.props.children
	    );
	  },

	  renderPopup: function renderPopup() {
	    var _this = this;

	    return React.createElement(
	      'div',
	      {
	        style: { display: 'block' },
	        className: classNames(this.props.className, this.setClassNamespace('popup'), this.setClassNamespace('modal-active'))
	      },
	      React.createElement(
	        'div',
	        { className: this.setClassNamespace('popup-inner') },
	        React.createElement(
	          'div',
	          { className: this.setClassNamespace('popup-hd') },
	          this.props.title ? React.createElement(
	            'h4',
	            { className: this.setClassNamespace('popup-title') },
	            this.props.title
	          ) : null,
	          React.createElement(Close, { onClick: function onClick() {
	              console.log('close popover');_this.props.onRequestClose();
	            } })
	        ),
	        React.createElement(
	          'div',
	          { className: this.setClassNamespace('popup-bd') },
	          this.props.children
	        )
	      )
	    );
	  },

	  renderHeader: function renderHeader() {
	    var title = this.props.title;
	    var closeIcon = this.props.closeIcon && !this.props.type ? React.createElement(Close, {
	      onClick: this.props.onRequestClose
	    }) : null;

	    return this.props.title || closeIcon ? React.createElement(
	      'div',
	      { className: this.prefixClass('hd') },
	      title ? React.createElement(
	        'h4',
	        {
	          className: this.setClassNamespace('margin-bottom-sm') + ' modal-header'
	        },
	        title
	      ) : null,
	      closeIcon
	    ) : null;
	  },

	  // Render alert/confirm/prompt buttons
	  renderFooter: function renderFooter() {
	    var buttons;
	    var btnClass = this.prefixClass('btn');
	    var props = this.props;

	    switch (this.props.type) {
	      case 'alert':
	        buttons = React.createElement(
	          'span',
	          {
	            onClick: this.props.onConfirm,
	            className: btnClass
	          },
	          this.props.confirmText
	        );
	        break;
	      case 'confirm':
	      case 'prompt':
	        buttons = [props.cancelText, props.confirmText].map(function (text, i) {
	          return React.createElement(
	            'span',
	            {
	              key: i,
	              onClick: i === 0 ? this.props.onCancel : this.handleConfirm,
	              className: btnClass
	            },
	            text
	          );
	        }.bind(this));
	        break;
	      default:
	        buttons = null;
	    }

	    return buttons ? React.createElement(
	      'div',
	      { className: this.prefixClass('footer') },
	      buttons
	    ) : null;
	  },

	  render: function render() {
	    if (this.isActions()) {
	      return this.renderDimmer(this.renderActions());
	    }

	    if (this.isPopup()) {
	      return this.renderDimmer(this.renderPopup());
	    }

	    var classSet = this.getClassSet();
	    var props = this.props;
	    var footer = this.renderFooter();
	    var style = {
	      display: 'block'
	    };
	    var dialogDimension = {
	      width: props.modalWidth,
	      height: props.modalHeight
	    };

	    classSet[this.prefixClass('active')] = this.state.transitioning;

	    // .am-modal-no-btn -> refactor this style using `~` selector
	    classSet[this.prefixClass('no-btn')] = !footer;
	    props.type && (classSet[this.prefixClass(props.type)] = true);

	    var modal = React.createElement(
	      'div',
	      _extends({}, props, {
	        style: style,
	        ref: 'modal',
	        title: null,
	        className: classNames(classSet, props.className)
	      }),
	      React.createElement(
	        'div',
	        {
	          className: this.prefixClass('dialog'),
	          style: dialogDimension
	        },
	        this.renderHeader(),
	        React.createElement(
	          'div',
	          {
	            className: this.prefixClass('bd'),
	            ref: 'modalBody'
	          },
	          props.type === 'loading' ? props.children ? props.children : React.createElement(Icon, { icon: 'spinner', spin: true }) : props.children
	        ),
	        footer
	      )
	    );

	    return this.renderDimmer(modal);
	  }
	});

	module.exports = Modal;

	// TODO: Modal 动画效果实现
	// -> 如何关闭 Loading Modal?
	// -> 关闭 Modal 以后窗口滚动会原来滚动条所在位置

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(36);
	var PropTypes = __webpack_require__(11);
	var classNames = __webpack_require__(17);
	var getScrollbarWidth = __webpack_require__(76);
	var ownerDocument = __webpack_require__(77).ownerDocument;
	var CSSCore = __webpack_require__(30);

	module.exports = {
	  propTypes: {
	    container: PropTypes.node
	  },

	  _getContainer: function _getContainer() {
	    var node = this.refs.modal;
	    var doc = ownerDocument(node);

	    return this.props.container && ReactDOM.findDOMNode(this.props.container) || doc.body;
	  },

	  _getDimmerActiveClassName: function _getDimmerActiveClassName() {
	    return this.setClassNamespace('dimmer-active');
	  },

	  setDimmerContainer: function setDimmerContainer() {
	    var container = this._getContainer();
	    var bodyPaddingRight = parseInt(container.style.paddingRight || 0, 10);
	    var barWidth = getScrollbarWidth();

	    if (barWidth) {
	      container.style.paddingRight = bodyPaddingRight + barWidth + 'px';
	    }

	    CSSCore.addClass(container, this._getDimmerActiveClassName());
	  },

	  resetDimmerContainer: function resetDimmerContainer(nextProps, nextState) {
	    var container = this._getContainer();

	    CSSCore.removeClass(container, this._getDimmerActiveClassName());

	    container.style.paddingRight = '';
	  },

	  renderDimmer: function renderDimmer(children) {
	    var onClick = this.handleDimmerClick || null;
	    var classSet = {};

	    classSet[this.setClassNamespace('dimmer')] = true;
	    classSet[this.setClassNamespace('active')] = true;

	    return React.createElement(
	      'div',
	      null,
	      React.createElement('div', {
	        onClick: onClick,
	        ref: 'dimmer',
	        style: { display: 'block' },
	        className: classNames(classSet)
	      }),
	      children
	    );
	  }
	};

/***/ },
/* 76 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * getScrollbarWidth
	 *
	 * @desc via http://davidwalsh.name/detect-scrollbar-width
	 * @returns {number}
	 */

	function getScrollbarWidth() {
	  if (document.body.clientWidth >= window.innerWidth) {
	    return 0;
	  }

	  // Create the measurement node
	  var measure = document.createElement('div');

	  measure.className = 'am-scrollbar-measure';
	  document.body.appendChild(measure);

	  // Get the scrollbar width
	  var scrollbarWidth = measure.offsetWidth - measure.clientWidth;

	  // Delete the DIV
	  document.body.removeChild(measure);

	  return scrollbarWidth;
	}

	module.exports = getScrollbarWidth;

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(36);

	/**
	 * Get ownerDocument
	 * @param {ReactComponent|HTMLElement} componentOrElement
	 * @returns {HTMLDocument}
	 */
	function ownerDocument(componentOrElement) {
	  var element = ReactDOM.findDOMNode(componentOrElement);

	  return element && element.ownerDocument || document;
	}

	/**
	 * Get ownerWindow
	 * @param {HTMLElement} element
	 * @returns {DocumentView|Window}
	 * @refer https://github.com/jquery/jquery/blob/6df669f0fb87cd9975a18bf6bbe3c3548afa4fee/src/event.js#L294-L297
	 */
	function ownerWindow(element) {
	  var doc = ownerDocument(element);

	  return doc.defaultView || doc.parentWindow || window;
	}

	module.exports = {
	  ownerDocument: ownerDocument,

	  ownerWindow: ownerWindow,

	  scrollTop: function scrollTop(element, value) {
	    if (!element) {
	      return;
	    }

	    var hasScrollTop = 'scrollTop' in element;

	    if (value === undefined) {
	      return hasScrollTop ? element.scrollTop : element.pageYOffset;
	    }

	    hasScrollTop ? element.scrollTop = value : element.scrollTo(element.scrollX, value);
	  },

	  offset: function offset(element) {
	    if (element) {
	      var rect = element.getBoundingClientRect();
	      var body = document.body;
	      var clientTop = element.clientTop || body.clientTop || 0;
	      var clientLeft = element.clientLeft || body.clientLeft || 0;
	      var scrollTop = window.pageYOffset || element.scrollTop;
	      var scrollLeft = window.pageXOffset || element.scrollLeft;

	      return {
	        top: rect.top + scrollTop - clientTop,
	        left: rect.left + scrollLeft - clientLeft
	      };
	    }

	    return null;
	  },

	  position: function position(element) {
	    return {
	      left: element.offsetLeft,
	      top: element.offsetTop
	    };
	  }
	};

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var PropTypes = __webpack_require__(11);
	var cloneElement = React.cloneElement;
	var createReactClass = __webpack_require__(3);
	var OverlayMixin = __webpack_require__(79);
	var DimmerMixin = __webpack_require__(75);
	var createChainedFunction = __webpack_require__(49);

	var ModalTrigger = createReactClass({
	  mixins: [OverlayMixin, DimmerMixin],

	  propTypes: {
	    modal: PropTypes.node.isRequired,
	    onConfirm: PropTypes.func,
	    onCancel: PropTypes.func,
	    title: PropTypes.string,
	    show: PropTypes.bool,
	    onClose: PropTypes.func
	  },

	  getInitialState: function getInitialState() {
	    return {
	      isModalActive: false,
	      modalWidth: null,
	      modalMarginLeft: null,
	      modalHeight: null,
	      modalMarginTop: null
	    };
	  },

	  componentDidMount: function componentDidMount() {
	    if (this.props.show) {
	      this.open();
	    }
	  },

	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    if (nextProps.show !== this.props.show) {
	      nextProps.show ? this.open() : this.close();
	    }
	  },

	  open: function open() {
	    this.setState({
	      isModalActive: true
	    }, this.setModalStyle);
	  },

	  close: function close() {
	    this.setState({
	      isModalActive: false
	    });

	    if (this.props.onClose) {
	      this.props.onClose();
	    }
	  },

	  toggle: function toggle(event) {
	    event.stopPropagation();

	    if (this.state.isModalActive) {
	      this.close();
	    } else {
	      this.open();
	    }
	  },

	  setModalStyle: function setModalStyle() {
	    if (!this.isMounted()) {
	      return;
	    }

	    // TODO: selector
	    var modal = this.getOverlayDOMNode().querySelector('.am-modal');

	    if (!modal) {
	      return;
	    }

	    var style = {};

	    if (this.props.modalHeight) {
	      style.modalHeight = this.props.modalHeight;
	      // @since 1.1.0, requires Amaze UI 2.6.0+
	      // style.modalMarginTop = -this.props.height / 2;
	    }
	    /*
	    else {
	      style.modalMarginTop = -modal.offsetHeight / 2;
	    }
	    */

	    if (this.props.modalWidth) {
	      style.modalWidth = this.props.modalWidth;
	      // style.modalMarginLeft = -this.props.modalWidth / 2;
	    }

	    this.setState(style);
	  },

	  // overlay is the modal
	  renderOverlay: function renderOverlay() {
	    if (!this.state.isModalActive) {
	      return React.createElement('span', null);
	    }

	    return cloneElement(this.props.modal, {
	      onRequestClose: this.close,
	      marginTop: this.state.modalMarginTop,
	      marginLeft: this.state.modalMarginLeft,
	      modalWidth: this.state.modalWidth,
	      modalHeight: this.state.modalHeight,
	      title: this.props.modal.props.title || this.props.title,
	      onConfirm: createChainedFunction(this.props.onConfirm, this.close),
	      onCancel: createChainedFunction(this.props.onCancel, this.close)
	    });
	  },

	  render: function render() {
	    // if "show" is defined, use "show" to control the modal
	    if (typeof this.props.show !== 'undefined') {
	      return React.createElement(
	        'div',
	        { className: this.props.className },
	        ' ',
	        this.props.children,
	        ' '
	      );
	    }

	    var child = React.Children.only(this.props.children);
	    var props = {};

	    props.onClick = createChainedFunction(child.props.onClick, this.toggle);
	    props.onMouseOver = createChainedFunction(child.props.onMouseOver, this.props.onMouseOver);
	    props.onMouseOut = createChainedFunction(child.props.onMouseOut, this.props.onMouseOut);
	    props.onFocus = createChainedFunction(child.props.onFocus, this.props.onFocus);
	    props.onBlur = createChainedFunction(child.props.onBlur, this.props.onBlur);

	    return cloneElement(child, props);
	  }
	});

	module.exports = ModalTrigger;

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(36);
	var PropTypes = __webpack_require__(11);

	/**
	 * Overlay Mixin
	 *
	 * @desc `overlay` is something like Popover, Modal, etc.
	 * */

	module.exports = {
	  propTypes: {
	    container: PropTypes.node
	  },

	  componentDidMount: function componentDidMount() {
	    this._renderOverlay();
	  },

	  componentDidUpdate: function componentDidUpdate() {
	    this._renderOverlay();
	  },

	  // Remove Overlay related DOM node
	  componentWillUnmount: function componentWillUnmount() {
	    this._unmountOverlay();

	    if (this._overlayWrapper) {
	      this.getContainerDOMNode().removeChild(this._overlayWrapper);
	      this._overlayWrapper = null;
	    }
	  },

	  // Create Overlay wrapper
	  _mountOverlayWrapper: function _mountOverlayWrapper() {
	    this._overlayWrapper = document.createElement('div');
	    this.getContainerDOMNode().appendChild(this._overlayWrapper);
	  },

	  // Render Overlay to wrapper
	  _renderOverlay: function _renderOverlay() {
	    if (!this._overlayWrapper) {
	      this._mountOverlayWrapper();
	    }

	    var overlay = this.renderOverlay();

	    if (overlay !== null) {
	      this._overlayInstance = ReactDOM.render(overlay, this._overlayWrapper);
	    } else {
	      // Unmount if the component is null for transitions to null
	      this._unmountOverlay();
	    }
	  },

	  // Remove a mounted Overlay from wrapper
	  _unmountOverlay: function _unmountOverlay() {
	    ReactDOM.unmountComponentAtNode(this._overlayWrapper);
	    this._overlayInstance = null;
	  },

	  getOverlayDOMNode: function getOverlayDOMNode() {
	    if (!this.isMounted()) {
	      throw new Error('getOverlayDOMNode(): A component must be mounted to' + ' have a DOM node.');
	    }

	    if (this._overlayInstance) {
	      return ReactDOM.findDOMNode(this._overlayInstance);
	    }

	    return null;
	  },

	  getContainerDOMNode: function getContainerDOMNode() {
	    return ReactDOM.findDOMNode(this.props.container) || document.body;
	  }
	};

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var React = __webpack_require__(1);
	var createReactClass = __webpack_require__(3);
	var PropTypes = __webpack_require__(11);
	var classNames = __webpack_require__(17);
	var ClassNameMixin = __webpack_require__(18);

	var Popover = createReactClass({
	  mixins: [ClassNameMixin],

	  propTypes: {
	    classPrefix: PropTypes.string.isRequired,
	    placement: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
	    positionLeft: PropTypes.number,
	    positionTop: PropTypes.number,
	    amSize: PropTypes.oneOf(['sm', 'lg']),
	    amStyle: PropTypes.string,
	    disableCaret: PropTypes.bool
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'popover'
	    };
	  },

	  render: function render() {
	    var classSet = this.getClassSet();
	    var style = {
	      left: this.props.positionLeft,
	      top: this.props.positionTop,
	      display: 'block'
	    };

	    classSet[this.setClassNamespace('active')] = true;
	    classSet[this.prefixClass(this.props.placement)] = true;

	    return React.createElement(
	      'div',
	      _extends({}, this.props, {
	        style: style,
	        className: classNames(classSet, this.props.className)
	      }),
	      React.createElement(
	        'div',
	        { className: this.prefixClass('inner') },
	        this.props.children
	      ),
	      !this.props.disableCaret && React.createElement('div', { className: this.prefixClass('caret') })
	    );
	  }
	});

	module.exports = Popover;

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(36);
	var createReactClass = __webpack_require__(3);
	var PropTypes = __webpack_require__(11);
	var cloneElement = React.cloneElement;
	var OverlayMixin = __webpack_require__(79);
	var assign = __webpack_require__(45);
	var dom = __webpack_require__(77);
	var createChainedFunction = __webpack_require__(49);

	function isOneOf(one, of) {
	  if (Array.isArray(of)) {
	    return of.indexOf(one) >= 0;
	  }
	  return one === of;
	}

	var PopoverTrigger = createReactClass({
	  mixins: [OverlayMixin],

	  propTypes: {
	    trigger: PropTypes.oneOfType([PropTypes.oneOf(['click', 'hover', 'focus']), PropTypes.arrayOf(PropTypes.oneOf(['click', 'hover', 'focus']))]),
	    placement: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
	    delay: PropTypes.number,
	    delayOpen: PropTypes.number,
	    delayClose: PropTypes.number,
	    defaultPopoverActive: PropTypes.bool,
	    popover: PropTypes.node.isRequired
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      placement: 'right',
	      trigger: ['hover', 'focus']
	    };
	  },

	  getInitialState: function getInitialState() {
	    return {
	      isPopoverActive: this.props.defaultPopoverActive == null ? false : this.props.defaultPopoverActive,
	      popoverLeft: null,
	      popoverTop: null
	    };
	  },

	  componentDidMount: function componentDidMount() {
	    if (this.props.defaultPopoverActive) {
	      this.updatePopoverPosition();
	    }
	  },

	  componentWillUnmount: function componentWillUnmount() {
	    clearTimeout(this._hoverDelay);
	  },

	  open: function open() {
	    this.setState({
	      isPopoverActive: true
	    }, function () {
	      this.updatePopoverPosition();
	    });
	  },

	  close: function close() {
	    this.setState({
	      isPopoverActive: false
	    });
	  },

	  toggle: function toggle() {
	    this.state.isPopoverActive ? this.close() : this.open();
	  },

	  handleDelayedOpen: function handleDelayedOpen() {
	    if (this._hoverDelay != null) {
	      clearTimeout(this._hoverDelay);
	      this._hoverDelay = null;
	      return;
	    }

	    var delay = this.props.delayOpen != null ? this.props.delayOpen : this.props.delay;

	    if (!delay) {
	      this.open();
	      return;
	    }

	    this._hoverDelay = setTimeout(function () {
	      this._hoverDelay = null;
	      this.open();
	    }.bind(this), delay);
	  },

	  handleDelayedClose: function handleDelayedClose() {
	    if (this._hoverDelay != null) {
	      clearTimeout(this._hoverDelay);
	      this._hoverDelay = null;
	      return;
	    }

	    var delay = this.props.delayClose != null ? this.props.delayClose : this.props.delay;

	    if (!delay) {
	      this.close();
	      return;
	    }

	    this._hoverDelay = setTimeout(function () {
	      this._hoverDelay = null;
	      this.close();
	    }.bind(this), delay);
	  },

	  updatePopoverPosition: function updatePopoverPosition() {
	    if (!this.isMounted()) {
	      return;
	    }

	    var position = this.calcPopoverPosition();

	    this.setState({
	      popoverLeft: position.left,
	      popoverTop: position.top
	    });
	  },

	  calcPopoverPosition: function calcPopoverPosition() {
	    var childOffset = this.getPosition();
	    var popoverNode = this.getOverlayDOMNode();
	    var popoverHeight = popoverNode.offsetHeight;
	    var popoverWidth = popoverNode.offsetWidth;
	    var caretSize = 8;

	    switch (this.props.placement) {
	      case 'right':
	        return {
	          top: childOffset.top + childOffset.height / 2 - popoverHeight / 2,
	          left: childOffset.left + childOffset.width + caretSize
	        };
	      case 'left':
	        return {
	          top: childOffset.top + childOffset.height / 2 - popoverHeight / 2,
	          left: childOffset.left - popoverWidth - caretSize
	        };
	      case 'top':
	        return {
	          top: childOffset.top - popoverHeight - caretSize,
	          left: childOffset.left + childOffset.width / 2 - popoverWidth / 2
	        };
	      case 'bottom':
	        return {
	          top: childOffset.top + childOffset.height + caretSize,
	          left: childOffset.left + childOffset.width / 2 - popoverWidth / 2
	        };
	      default:
	        throw new Error('calcPopoverPosition(): No such placement of [' + this.props.placement + '] found.');
	    }
	  },

	  getPosition: function getPosition() {
	    var node = ReactDOM.findDOMNode(this);
	    var container = this.getContainerDOMNode();

	    var offset = container.tagName === 'BODY' ? dom.offset(node) : dom.position(node, container);

	    return assign({}, offset, {
	      height: node.offsetHeight,
	      width: node.offsetWidth
	    });
	  },

	  // used by Mixin
	  renderOverlay: function renderOverlay() {
	    if (!this.state.isPopoverActive) {
	      return React.createElement('span', null);
	    }

	    var popover = this.props.popover;

	    return cloneElement(this.props.popover, {
	      onRequestHide: this.close,
	      placement: this.props.placement,
	      positionLeft: this.state.popoverLeft,
	      positionTop: this.state.popoverTop,
	      amStyle: popover.props.amStyle || this.props.amStyle,
	      amSize: popover.props.amSize || this.props.amSize
	    });
	  },

	  render: function render() {
	    var child = React.Children.only(this.props.children);

	    var props = {};

	    props.onClick = createChainedFunction(child.props.onClick, this.props.onClick);

	    if (isOneOf('click', this.props.trigger)) {
	      props.onClick = createChainedFunction(this.toggle, props.onClick);
	    }

	    if (isOneOf('hover', this.props.trigger)) {
	      props.onMouseOver = createChainedFunction(this.handleDelayedOpen, this.props.onMouseOver);
	      props.onMouseOut = createChainedFunction(this.handleDelayedClose, this.props.onMouseOut);
	    }

	    if (isOneOf('focus', this.props.trigger)) {
	      props.onFocus = createChainedFunction(this.handleDelayedOpen, this.props.onFocus);
	      props.onBlur = createChainedFunction(this.handleDelayedClose, this.props.onBlur);
	    }

	    return cloneElement(child, props);
	  }
	});

	module.exports = PopoverTrigger;

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * React version of NProgress
	 * https://github.com/rstacruz/nprogress/
	 */

	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(36);
	var createReactClass = __webpack_require__(3);
	var PropTypes = __webpack_require__(11);
	var ClassNameMixin = __webpack_require__(18);

	function clamp(n, min, max) {
	  if (n < min) {
	    return min;
	  }

	  if (n > max) {
	    return max;
	  }

	  return n;
	}

	function toBarPercentage(n) {
	  return (-1 + n) * 100;
	}

	var NProgress = createReactClass({
	  mixins: [ClassNameMixin],

	  propTypes: {
	    minimum: PropTypes.number,
	    easing: PropTypes.string,
	    speed: PropTypes.number,
	    spinner: PropTypes.bool,
	    trickle: PropTypes.bool,
	    trickleRate: PropTypes.number,
	    trickleSpeed: PropTypes.number
	  },

	  getInitialState: function getInitialState() {
	    return {
	      status: null
	    };
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      minimum: 0.08,
	      easing: 'ease',
	      speed: 200,
	      trickle: true,
	      trickleRate: 0.02,
	      trickleSpeed: 800
	    };
	  },

	  start: function start() {
	    var _this = this;
	    var n = this.state.status; // this.set() is not sync to affected this.state.status

	    if (!this.state.status) {
	      this.set(this.props.minimum);
	      n = this.props.minimum;
	    }

	    var work = function work() {
	      setTimeout(function () {
	        if (!n || n === 1) {
	          return;
	        }

	        _this.trickle();
	        work();
	      }, _this.props.trickleSpeed);
	    };

	    this.props.trickle && work();
	  },

	  set: function set(n) {
	    var _this = this;

	    n = clamp(n, this.props.minimum, 1);
	    this.setState({
	      status: n
	    });

	    if (n === 1) {
	      var progress = ReactDOM.findDOMNode(this.refs.progress);

	      progress.style.opacity = 1;
	      progress.style.transition = 'none';
	      progress.offsetWidth;

	      setTimeout(function () {
	        progress.style.opacity = 0;
	        progress.style.transition = 'all ' + _this.props.speed + 'ms linear';

	        setTimeout(function () {
	          _this.reset();
	        }, _this.props.speed + 100);
	      }, _this.props.speed);
	    }
	  },

	  reset: function reset() {
	    this.setState({
	      status: null
	    });
	  },

	  done: function done() {
	    if (this.state.status) {
	      this.inc(0.3 + 0.5 * Math.random());
	      this.set(1);
	    }
	  },

	  inc: function inc(amount) {
	    var n = this.state.status;

	    if (!n) {
	      return this.start();
	    } else {
	      if (typeof amount !== 'number') {
	        amount = (1 - n) * clamp(Math.random() * n, 0.1, 0.95);
	      }

	      n = clamp(n + amount, 0, 0.994);
	      return this.set(n);
	    }
	  },

	  trickle: function trickle() {
	    if (this.state.status < 1) {
	      this.inc(Math.random() * this.props.trickleRate);
	    }
	  },

	  render: function render() {
	    var props = this.props;
	    var percent = this.state.status === null ? '-100' : toBarPercentage(this.state.status);
	    var barStyle = {
	      transition: 'all ' + props.speed + 'ms ' + props.easing,
	      transform: 'translate(' + percent + '%,0)'
	    };
	    var spinner = props.spinner ? React.createElement(
	      'div',
	      { className: 'nprogress-spinner', ref: 'spinner' },
	      React.createElement('div', { className: 'nprogress-spinner-icon' })
	    ) : null;

	    return this.state.status ? React.createElement(
	      'div',
	      { id: 'nprogress', ref: 'progress' },
	      React.createElement(
	        'div',
	        { className: 'nprogress-bar', ref: 'bar', style: barStyle },
	        React.createElement('div', { className: 'nprogress-peg' })
	      ),
	      spinner
	    ) : null;
	  }
	});

	module.exports = NProgress;

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(36);
	var createReactClass = __webpack_require__(3);
	var PropTypes = __webpack_require__(11);
	var cloneElement = React.cloneElement;
	var assign = __webpack_require__(45);
	var classNames = __webpack_require__(17);
	var ClassNameMixin = __webpack_require__(18);
	var isInViewport = __webpack_require__(84);
	var Events = __webpack_require__(67);
	var TransitionEvents = __webpack_require__(53);
	var requestAnimationFrame = __webpack_require__(85);
	var debounce = __webpack_require__(86);
	var canUseDOM = __webpack_require__(54);
	var domUtils = __webpack_require__(77);

	var ScrollSpy = createReactClass({
	  mixins: [ClassNameMixin],

	  propTypes: {
	    animation: PropTypes.string,
	    delay: PropTypes.number,
	    repeat: PropTypes.bool,
	    // container which has scrollbar
	    container: PropTypes.any
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      animation: 'fade',
	      delay: 0,
	      repeat: false
	    };
	  },

	  getInitialState: function getInitialState() {
	    return {
	      inViewport: false
	    };
	  },

	  componentDidMount: function componentDidMount() {
	    if (canUseDOM) {
	      this.checkRAF();

	      var node = ReactDOM.findDOMNode(this);
	      var doc = domUtils.ownerDocument(node);
	      // var scrollContainer = ReactDOM.findDOMNode(this.props.container || doc.body);
	      var debounced = debounce(this.checkRAF, 100).bind(this);

	      this._scrollListener = Events.on(doc, 'scroll', debounced);
	      this._resizeListener = Events.on(window, 'resize', debounced);
	      this._orientationListener = Events.on(window, 'orientationchange', debounced);
	    }
	  },

	  componentWillUnmount: function componentWillUnmount() {
	    this._removeEventLister();
	  },

	  _removeEventLister: function _removeEventLister() {
	    this._scrollListener && this._scrollListener.off();
	    this._resizeListener && this._resizeListener.off();
	    this._orientationListener && this._orientationListener.off();
	    clearTimeout(this._timer);
	  },

	  checkIsInView: function checkIsInView() {
	    if (!TransitionEvents.support.animationend) {
	      return;
	    }

	    if (this.isMounted()) {
	      var isInView = isInViewport(ReactDOM.findDOMNode(this));

	      if (isInView && !this.state.inViewport) {
	        if (this._timer) {
	          clearTimeout(this._timer);
	        }

	        this._timer = setTimeout(function () {
	          this.setState({
	            inViewport: true
	          });
	        }.bind(this), this.props.delay);
	      }

	      if (this.props.repeat && !isInView) {
	        this.setState({
	          inViewport: false
	        });
	      }
	    }
	  },

	  checkRAF: function checkRAF() {
	    requestAnimationFrame(this.checkIsInView);
	  },

	  render: function render() {
	    var animation = this.state.inViewport ? this.setClassNamespace('animation-' + this.props.animation) : null;
	    var child = React.Children.only(this.props.children);

	    // transfer child's props to cloned element
	    return cloneElement(child, assign({}, child.props, {
	      className: classNames(child.props.className, animation),
	      'data-am-scrollspy': 'animation', // style helper
	      delay: this.props.delay,
	      componentWillMount: this._removeEventLister
	    }));
	  }
	});

	module.exports = ScrollSpy;

/***/ },
/* 84 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * isInViewport
	 *
	 * @desc determine if any part of the element is visible in the viewport
	 * @reference https://github.com/Josh-Miller/isInViewport
	 * @see http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
	 * @param {HTMLElement} element
	 * @returns {boolean}
	 */

	function isInViewport(element) {
	  var top = element.offsetTop;
	  var left = element.offsetLeft;
	  var width = element.offsetWidth;
	  var height = element.offsetHeight;

	  while (element.offsetParent) {
	    element = element.offsetParent;
	    top += element.offsetTop;
	    left += element.offsetLeft;
	  }

	  return top < window.pageYOffset + window.innerHeight && left < window.pageXOffset + window.innerWidth && top + height > window.pageYOffset && left + width > window.pageXOffset;
	}

	module.exports = isInViewport;

	// TODO: 考虑滚动条不在窗口上的情形

/***/ },
/* 85 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * modified version of:
	 * https://github.com/facebook/react/blob/0.13-stable/src/vendor/core/requestAnimationFrame.js
	 */

	'use strict';

	global = global || {};
	var nativeRAF = global.requestAnimationFrame || global.webkitRequestAnimationFrame || global.mozRequestAnimationFrame;

	var lastTime = 0;

	var requestAnimationFrame = nativeRAF || function (callback) {
	  var currTime = Date.now();
	  var timeDelay = Math.max(0, 16 - (currTime - lastTime));

	  lastTime = currTime + timeDelay;
	  return setTimeout(function () {
	    callback(Date.now());
	  }, timeDelay);
	};

	// Works around a rare bug in Safari 6 where the first request is never invoked.
	requestAnimationFrame(function () {});

	module.exports = requestAnimationFrame;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 86 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Debounce function
	 * @param {function} fn  Function to be debounced
	 * @param {number} wait Function execution threshold in milliseconds
	 * @param {bool} immediate  Whether the function should be called at
	 *                          the beginning of the delay instead of the
	 *                          end. Default is false.
	 * @desc Executes a function when it stops being invoked for n seconds
	 * @via  _.debounce() http://underscorejs.org
	 */

	module.exports = function (fn, wait, immediate) {
	  var timeout;

	  return function () {
	    var context = this;
	    var args = arguments;
	    var later = function later() {
	      timeout = null;
	      if (!immediate) {
	        fn.apply(context, args);
	      }
	    };
	    var callNow = immediate && !timeout;

	    clearTimeout(timeout);
	    timeout = setTimeout(later, wait);

	    if (callNow) {
	      fn.apply(context, args);
	    }
	  };
	};

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(36);
	var createReactClass = __webpack_require__(3);
	var PropTypes = __webpack_require__(11);
	var cloneElement = React.cloneElement;
	var assign = __webpack_require__(45);
	var classNames = __webpack_require__(17);
	var SmoothScrollMixin = __webpack_require__(88);
	var isInViewport = __webpack_require__(84);
	var Events = __webpack_require__(67);
	var requestAnimationFrame = __webpack_require__(85);
	var debounce = __webpack_require__(86);
	var CSSCore = __webpack_require__(30);
	var domUtils = __webpack_require__(77);
	var createChainedFunction = __webpack_require__(49);
	var canUseDOM = __webpack_require__(54);
	var constants = __webpack_require__(19);

	var ScrollSpyNav = createReactClass({
	  mixins: [SmoothScrollMixin],

	  propTypes: {
	    activeClass: PropTypes.string,
	    offsetTop: PropTypes.number,
	    container: PropTypes.any
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      activeClass: constants.CLASSES.active
	    };
	  },

	  componentDidMount: function componentDidMount() {
	    if (canUseDOM) {
	      this._init();
	      this.checkRAF();

	      var debounced = debounce(this.checkRAF, 100).bind(this);

	      this._scrollListener = Events.on(window, 'scroll', this.checkRAF);
	      this._resizeListener = Events.on(window, 'resize', debounced);
	      this._orientationListener = Events.on(window, 'orientationchange', debounced);
	    }
	  },

	  componentWillUnmount: function componentWillUnmount() {
	    this._scrollListener && this._scrollListener.off();
	    this._resizeListener && this._resizeListener.off();
	    this._orientationListener && this._orientationListener.off();
	  },

	  _init: function _init() {
	    this._linkNodes = ReactDOM.findDOMNode(this).querySelectorAll('a[href^="#"]');
	    this._anchorNodes = [];

	    Array.prototype.forEach.call(this._linkNodes, function (link) {
	      var anchor = document.getElementById(link.getAttribute('href').substr(1));

	      if (anchor) {
	        this._anchorNodes.push(anchor);
	      }
	    }.bind(this));
	  },

	  checkIsInView: function checkIsInView() {
	    if (this.isMounted()) {
	      var inViewsNodes = [];

	      this._anchorNodes.forEach(function (anchor) {
	        if (isInViewport(anchor)) {
	          inViewsNodes.push(anchor);
	        }
	      });

	      if (inViewsNodes.length) {
	        var targetNode;

	        inViewsNodes.every(function (node) {
	          if (domUtils.offset(node).top >= domUtils.scrollTop(window)) {
	            targetNode = node;
	            return false; // break loop
	          }
	          return true;
	        });

	        if (!targetNode) {
	          return;
	        }

	        Array.prototype.forEach.call(this._linkNodes, function (link) {
	          CSSCore.removeClass(link, this.props.activeClass);
	        }.bind(this));

	        var targetLink = ReactDOM.findDOMNode(this).querySelector('a[href="#' + targetNode.id + '"]');

	        targetLink && CSSCore.addClass(targetLink, this.props.activeClass);
	      }
	    }
	  },

	  checkRAF: function checkRAF() {
	    requestAnimationFrame(this.checkIsInView);
	  },

	  // Smooth scroll
	  handleClick: function handleClick(e) {
	    e.preventDefault();

	    if (e.target && e.target.nodeName === 'A') {
	      var targetNode = document.getElementById(e.target.getAttribute('href').substr(1));

	      // TODO: set scroll element if `container` prop set
	      targetNode && this.smoothScroll(window, {
	        position: domUtils.offset(targetNode).top - this.props.offsetTop || 0
	      });
	    }
	  },

	  render: function render() {
	    var child = React.Children.only(this.props.children);

	    // transfer child's props to cloned element
	    return cloneElement(child, assign({}, this.props, child.props, {
	      onClick: createChainedFunction(this.handleClick, child.props.onClick),
	      className: classNames(this.props.className, child.props.className)
	    }));
	  }
	});

	module.exports = ScrollSpyNav;

	// TODO: improve in view logic

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * modified version of:
	 * http://mir.aculo.us/2014/01/19/scrolling-dom-elements-to-the-top-a-zepto-plugin/
	 */

	'use strict';

	var React = __webpack_require__(1);
	var Events = __webpack_require__(67);
	var dom = __webpack_require__(77);
	var rAF = __webpack_require__(85);
	var scrollInProgress = false;

	var SmoothScrollMixin = {
	  smoothScroll: function smoothScroll(element, options) {
	    options = options || {};
	    var scrollTarget = element || window;
	    var targetY = options.position && parseInt(options.position, 10) || 0;
	    var initialY = dom.scrollTop(scrollTarget);
	    var lastY = initialY;
	    var delta = targetY - initialY;
	    // duration in ms, make it a bit shorter for short distances
	    // this is not scientific and you might want to adjust this for
	    // your preferences
	    var speed = options.speed || Math.min(750, Math.min(1500, Math.abs(initialY - targetY)));
	    // temp variables (t will be a position between 0 and 1, y is the calculated scrollTop)
	    var start;
	    var t;
	    var y;
	    var cancelScroll = function cancelScroll() {
	      abort();
	    };

	    // abort if already in progress or nothing to scroll
	    if (scrollInProgress) {
	      // console.log(scrollInProgress);
	      return;
	    }

	    if (delta === 0) {
	      return;
	    }

	    // quint ease-in-out smoothing, from
	    // https://github.com/madrobby/scripty2/blob/master/src/effects/transitions/penner.js#L127-L136
	    function smooth(pos) {
	      if ((pos /= 0.5) < 1) {
	        return 0.5 * Math.pow(pos, 5);
	      }

	      return 0.5 * (Math.pow(pos - 2, 5) + 2);
	    }

	    function abort() {
	      Events.off(scrollTarget, 'touchstart', cancelScroll);
	      scrollInProgress = false;
	    }

	    // when there's a touch detected while scrolling is in progress, abort
	    // the scrolling (emulates native scrolling behavior)
	    Events.on(scrollTarget, 'touchstart', cancelScroll);
	    scrollInProgress = true;

	    // start rendering away! note the function given to frame
	    // is named "render" so we can reference it again further down
	    rAF(function render(now) {
	      if (!scrollInProgress) {
	        return;
	      }

	      if (!start) {
	        start = now;
	      }

	      // calculate t, position of animation in [0..1]
	      t = Math.min(1, Math.max((now - start) / speed, 0));
	      // calculate the new scrollTop position (don't forget to smooth)
	      y = Math.round(initialY + delta * smooth(t));
	      // bracket scrollTop so we're never over-scrolling
	      if (delta > 0 && y > targetY) {
	        y = targetY;
	      }

	      if (delta < 0 && y < targetY) {
	        y = targetY;
	      }
	      // only actually set scrollTop if there was a change front he last frame
	      if (lastY !== y) {
	        dom.scrollTop(scrollTarget, y);
	      }

	      lastY = y;
	      // if we're not done yet, queue up an other frame to render,
	      // or clean up
	      if (y !== targetY) {
	        rAF(render);
	      } else {
	        abort();
	      }
	    });
	  }
	};

	module.exports = SmoothScrollMixin;

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(36);
	var createReactClass = __webpack_require__(3);
	var PropTypes = __webpack_require__(11);
	var classNames = __webpack_require__(17);
	var ClassNameMixin = __webpack_require__(18);
	var Dropdown = __webpack_require__(73);
	var Icon = __webpack_require__(37);
	var Input = __webpack_require__(35);
	var cloneDeep = __webpack_require__(90);
	var Selected = createReactClass({
	  mixins: [ClassNameMixin],

	  propTypes: {
	    classPrefix: PropTypes.string,
	    data: PropTypes.array.isRequired,
	    placeholder: PropTypes.string,
	    value: PropTypes.string,
	    multiple: PropTypes.bool,
	    searchBox: PropTypes.bool,
	    name: PropTypes.string,
	    onChange: PropTypes.func,
	    optionFilter: PropTypes.func, // (filterText, option) => {}
	    dropup: PropTypes.bool,
	    btnWidth: PropTypes.number,
	    btnStyle: PropTypes.string,
	    btnSize: PropTypes.string,
	    maxHeight: PropTypes.number,
	    sortSelected: PropTypes.bool,
	    limit: PropTypes.number,
	    onValidateValue: PropTypes.func, // 判断value是否有效
	    // delimiter to use to join multiple values
	    delimiter: PropTypes.string
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      sortSelected: true,
	      classPrefix: 'selected',
	      placeholder: '点击选择...',
	      onChange: function onChange() {},
	      onValidateValue: function onValidateValue(value) {
	        return true;
	      },
	      value: '',
	      delimiter: ',',
	      optionFilter: function optionFilter(filterText, option) {
	        return filterText ? option.label.toLowerCase().indexOf(filterText) > -1 : true;
	      }
	    };
	  },

	  getInitialState: function getInitialState() {
	    return {
	      value: this.props.value,
	      dropdownWidth: null,
	      filterText: null
	    };
	  },

	  componentDidMount: function componentDidMount() {
	    this.setDropdownWidth();
	  },

	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    this.setState({
	      value: nextProps.value
	    });
	  },

	  setDropdownWidth: function setDropdownWidth() {
	    if (this.isMounted()) {
	      var toggleButton = ReactDOM.findDOMNode(this.refs.dropdown.refs.dropdownToggle);

	      toggleButton && this.setState({ dropdownWidth: toggleButton.offsetWidth });
	    }
	  },

	  getValueArray: function getValueArray() {
	    return this.state.value ? this.state.value.split(this.props.delimiter) : [];
	  },

	  hasValue: function hasValue(value) {
	    return this.getValueArray().indexOf(value) > -1;
	  },

	  setValue: function setValue(value, callback) {
	    if (this.props.onValidateValue(value)) {
	      this.setState({
	        value: value
	      }, function () {
	        this.props.onChange(value);
	        callback && callback();
	      });
	    }
	  },

	  handleCheck: function handleCheck(option, e) {
	    e.preventDefault();

	    var clickedValue = option.value;

	    // multiple select
	    if (this.props.multiple) {
	      var values = this.getValueArray();

	      if (this.hasValue(clickedValue)) {
	        values.splice(values.indexOf(clickedValue), 1);
	      } else if (!this.props.limit || values.length < this.props.limit) {
	        values.push(clickedValue);
	      }

	      this.setValue(values.join(this.props.delimiter));
	    } else {
	      this.setValue(clickedValue);
	      this.refs.dropdown.setDropdown(false);
	    }
	  },

	  handleUserInput: function handleUserInput(e) {
	    e.preventDefault();

	    this.setState({
	      filterText: ReactDOM.findDOMNode(this.refs.filterInput).value
	    });
	  },

	  // clear filter
	  clearFilterInput: function clearFilterInput() {
	    if (this.props.multiple && this.props.searchBox) {
	      this.setState({
	        filterText: null
	      });
	      ReactDOM.findDOMNode(this.refs.filterInput).value = null;
	    }
	  },

	  // API for getting component value
	  getValue: function getValue() {
	    return this.state.value;
	  },

	  showSelectedFirst: function showSelectedFirst(value, data) {

	    var that = this;

	    if (Object.prototype.toString.call(data) != '[object Array]' || data.length == 0) {
	      return [];
	    }

	    var arr = value && value.split(',') || [],
	        temp = [];

	    arr.forEach(function (_value) {
	      //从data中找到_value, 并弹出
	      var index = that.findIndex(data, _value);
	      if (index == -1) {
	        return;
	      }
	      temp = temp.concat(data.splice(index, 1));
	    });

	    return temp.concat(data);
	  },
	  findIndex: function findIndex(data, value) {
	    // var value = '4.0.0.195(4.0.0.195)';
	    for (var i = 0, l = data.length; i < l; i++) {
	      if (data[i].value == value) {
	        return i;
	      }
	    }
	    return -1;
	  },


	  render: function render() {
	    var classSet = this.getClassSet();
	    var selectedLabel = [];
	    var items = [];
	    var filterText = this.state.filterText;
	    var groupHeader;

	    //处理this.props.data, 把选中的值放到数组前面来
	    // var _data = this.props.showSelectedFirst
	    //   ? this.props.showSelectedFirst(this.state.value, this.props.data)
	    //   : this.props.data;

	    var _data = this.props.sortSelected ? this.showSelectedFirst(this.getValue(), cloneDeep(this.props.data)) : this.props.data;

	    _data.forEach(function (option, i) {
	      var checked = this.hasValue(option.value);
	      var checkedClass = checked ? this.setClassNamespace('checked') : null;
	      var checkedIcon = checked ? React.createElement(Icon, { icon: 'check' }) : null;

	      checked && selectedLabel.push(option.label);

	      // add group header
	      if (option.group && groupHeader !== option.group) {
	        groupHeader = option.group;
	        items.push(React.createElement(
	          'li',
	          {
	            className: this.prefixClass('list-header'),
	            key: 'header' + i
	          },
	          groupHeader
	        ));
	      }

	      if (!this.props.optionFilter(filterText, option)) {
	        return;
	      }

	      items.push(React.createElement(
	        'li',
	        {
	          className: checkedClass,
	          onClick: this.handleCheck.bind(this, option),
	          key: i
	        },
	        React.createElement(
	          'span',
	          { className: this.prefixClass('text') },
	          option.label
	        ),
	        checkedIcon
	      ));
	    }.bind(this));

	    var status = React.createElement(
	      'span',
	      {
	        className: classNames(this.prefixClass('status'), this.setClassNamespace('fl'))
	      },
	      selectedLabel.length ? selectedLabel.join(', ') : React.createElement(
	        'span',
	        { className: this.prefixClass('placeholder ') },
	        this.props.placeholder
	      )
	    );
	    var optionsStyle = {};

	    if (this.props.maxHeight) {
	      optionsStyle = {
	        maxHeight: this.props.maxHeight,
	        overflowY: 'scroll'
	      };
	    }

	    var searchTip = this.props.searchBox && this.props.searchTip || null;

	    return React.createElement(
	      Dropdown,
	      {
	        className: classNames(this.props.className, classSet),
	        title: status,
	        onClose: this.clearFilterInput,
	        btnStyle: this.props.btnStyle,
	        btnSize: this.props.btnSize,
	        btnInlineStyle: { width: this.props.btnWidth },
	        contentInlineStyle: { minWidth: this.state.dropdownWidth },
	        toggleClassName: this.prefixClass('btn'),
	        caretClassName: this.prefixClass('icon'),
	        contentClassName: this.prefixClass('content'),
	        contentTag: 'div',
	        dropup: this.props.dropup,
	        ref: 'dropdown'
	      },
	      searchTip,
	      this.props.searchBox ? React.createElement(
	        'div',
	        { className: this.prefixClass('search') },
	        React.createElement('i', { className: 'icon-search' }),
	        React.createElement(Input, {
	          onChange: this.handleUserInput,
	          autoComplete: 'off',
	          standalone: true,
	          ref: 'filterInput'
	        })
	      ) : null,
	      React.createElement(
	        'ul',
	        {
	          style: optionsStyle,
	          className: this.prefixClass('list')
	        },
	        items
	      ),
	      React.createElement('input', {
	        name: this.props.name,
	        type: 'hidden',
	        ref: 'selectedField',
	        value: this.state.value
	      })
	    );
	  }
	});

	module.exports = Selected;

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, module) {/**
	 * lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */

	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    promiseTag = '[object Promise]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]',
	    weakMapTag = '[object WeakMap]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

	/** Used to match `RegExp` flags from their coerced string values. */
	var reFlags = /\w*$/;

	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;

	/** Used to identify `toStringTag` values supported by `_.clone`. */
	var cloneableTags = {};
	cloneableTags[argsTag] = cloneableTags[arrayTag] =
	cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
	cloneableTags[boolTag] = cloneableTags[dateTag] =
	cloneableTags[float32Tag] = cloneableTags[float64Tag] =
	cloneableTags[int8Tag] = cloneableTags[int16Tag] =
	cloneableTags[int32Tag] = cloneableTags[mapTag] =
	cloneableTags[numberTag] = cloneableTags[objectTag] =
	cloneableTags[regexpTag] = cloneableTags[setTag] =
	cloneableTags[stringTag] = cloneableTags[symbolTag] =
	cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
	cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
	cloneableTags[errorTag] = cloneableTags[funcTag] =
	cloneableTags[weakMapTag] = false;

	/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/**
	 * Adds the key-value `pair` to `map`.
	 *
	 * @private
	 * @param {Object} map The map to modify.
	 * @param {Array} pair The key-value pair to add.
	 * @returns {Object} Returns `map`.
	 */
	function addMapEntry(map, pair) {
	  // Don't return `map.set` because it's not chainable in IE 11.
	  map.set(pair[0], pair[1]);
	  return map;
	}

	/**
	 * Adds `value` to `set`.
	 *
	 * @private
	 * @param {Object} set The set to modify.
	 * @param {*} value The value to add.
	 * @returns {Object} Returns `set`.
	 */
	function addSetEntry(set, value) {
	  // Don't return `set.add` because it's not chainable in IE 11.
	  set.add(value);
	  return set;
	}

	/**
	 * A specialized version of `_.forEach` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns `array`.
	 */
	function arrayEach(array, iteratee) {
	  var index = -1,
	      length = array ? array.length : 0;

	  while (++index < length) {
	    if (iteratee(array[index], index, array) === false) {
	      break;
	    }
	  }
	  return array;
	}

	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
	function arrayPush(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;

	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}

	/**
	 * A specialized version of `_.reduce` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {*} [accumulator] The initial value.
	 * @param {boolean} [initAccum] Specify using the first element of `array` as
	 *  the initial value.
	 * @returns {*} Returns the accumulated value.
	 */
	function arrayReduce(array, iteratee, accumulator, initAccum) {
	  var index = -1,
	      length = array ? array.length : 0;

	  if (initAccum && length) {
	    accumulator = array[++index];
	  }
	  while (++index < length) {
	    accumulator = iteratee(accumulator, array[index], index, array);
	  }
	  return accumulator;
	}

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);

	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}

	/**
	 * Checks if `value` is a host object in IE < 9.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
	 */
	function isHostObject(value) {
	  // Many host objects are `Object` objects that can coerce to strings
	  // despite having improperly defined `toString` methods.
	  var result = false;
	  if (value != null && typeof value.toString != 'function') {
	    try {
	      result = !!(value + '');
	    } catch (e) {}
	  }
	  return result;
	}

	/**
	 * Converts `map` to its key-value pairs.
	 *
	 * @private
	 * @param {Object} map The map to convert.
	 * @returns {Array} Returns the key-value pairs.
	 */
	function mapToArray(map) {
	  var index = -1,
	      result = Array(map.size);

	  map.forEach(function(value, key) {
	    result[++index] = [key, value];
	  });
	  return result;
	}

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}

	/**
	 * Converts `set` to an array of its values.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the values.
	 */
	function setToArray(set) {
	  var index = -1,
	      result = Array(set.size);

	  set.forEach(function(value) {
	    result[++index] = value;
	  });
	  return result;
	}

	/** Used for built-in method references. */
	var arrayProto = Array.prototype,
	    funcProto = Function.prototype,
	    objectProto = Object.prototype;

	/** Used to detect overreaching core-js shims. */
	var coreJsData = root['__core-js_shared__'];

	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : undefined,
	    Symbol = root.Symbol,
	    Uint8Array = root.Uint8Array,
	    getPrototype = overArg(Object.getPrototypeOf, Object),
	    objectCreate = Object.create,
	    propertyIsEnumerable = objectProto.propertyIsEnumerable,
	    splice = arrayProto.splice;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetSymbols = Object.getOwnPropertySymbols,
	    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
	    nativeKeys = overArg(Object.keys, Object);

	/* Built-in method references that are verified to be native. */
	var DataView = getNative(root, 'DataView'),
	    Map = getNative(root, 'Map'),
	    Promise = getNative(root, 'Promise'),
	    Set = getNative(root, 'Set'),
	    WeakMap = getNative(root, 'WeakMap'),
	    nativeCreate = getNative(Object, 'create');

	/** Used to detect maps, sets, and weakmaps. */
	var dataViewCtorString = toSource(DataView),
	    mapCtorString = toSource(Map),
	    promiseCtorString = toSource(Promise),
	    setCtorString = toSource(Set),
	    weakMapCtorString = toSource(WeakMap);

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = nativeCreate ? nativeCreate(null) : {};
	}

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  return this.has(key) && delete this.__data__[key];
	}

	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty.call(data, key) ? data[key] : undefined;
	}

	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
	}

	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
	  return this;
	}

	// Add methods to `Hash`.
	Hash.prototype.clear = hashClear;
	Hash.prototype['delete'] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;

	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	}

	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  return true;
	}

	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  return index < 0 ? undefined : data[index][1];
	}

	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return assocIndexOf(this.__data__, key) > -1;
	}

	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}

	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;

	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.__data__ = {
	    'hash': new Hash,
	    'map': new (Map || ListCache),
	    'string': new Hash
	  };
	}

	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  return getMapData(this, key)['delete'](key);
	}

	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return getMapData(this, key).get(key);
	}

	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return getMapData(this, key).has(key);
	}

	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  getMapData(this, key).set(key, value);
	  return this;
	}

	// Add methods to `MapCache`.
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype['delete'] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;

	/**
	 * Creates a stack cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Stack(entries) {
	  this.__data__ = new ListCache(entries);
	}

	/**
	 * Removes all key-value entries from the stack.
	 *
	 * @private
	 * @name clear
	 * @memberOf Stack
	 */
	function stackClear() {
	  this.__data__ = new ListCache;
	}

	/**
	 * Removes `key` and its value from the stack.
	 *
	 * @private
	 * @name delete
	 * @memberOf Stack
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function stackDelete(key) {
	  return this.__data__['delete'](key);
	}

	/**
	 * Gets the stack value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Stack
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function stackGet(key) {
	  return this.__data__.get(key);
	}

	/**
	 * Checks if a stack value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Stack
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function stackHas(key) {
	  return this.__data__.has(key);
	}

	/**
	 * Sets the stack `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Stack
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the stack cache instance.
	 */
	function stackSet(key, value) {
	  var cache = this.__data__;
	  if (cache instanceof ListCache) {
	    var pairs = cache.__data__;
	    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
	      pairs.push([key, value]);
	      return this;
	    }
	    cache = this.__data__ = new MapCache(pairs);
	  }
	  cache.set(key, value);
	  return this;
	}

	// Add methods to `Stack`.
	Stack.prototype.clear = stackClear;
	Stack.prototype['delete'] = stackDelete;
	Stack.prototype.get = stackGet;
	Stack.prototype.has = stackHas;
	Stack.prototype.set = stackSet;

	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
	function arrayLikeKeys(value, inherited) {
	  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
	  // Safari 9 makes `arguments.length` enumerable in strict mode.
	  var result = (isArray(value) || isArguments(value))
	    ? baseTimes(value.length, String)
	    : [];

	  var length = result.length,
	      skipIndexes = !!length;

	  for (var key in value) {
	    if ((inherited || hasOwnProperty.call(value, key)) &&
	        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	/**
	 * Assigns `value` to `key` of `object` if the existing value is not equivalent
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignValue(object, key, value) {
	  var objValue = object[key];
	  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
	      (value === undefined && !(key in object))) {
	    object[key] = value;
	  }
	}

	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}

	/**
	 * The base implementation of `_.assign` without support for multiple sources
	 * or `customizer` functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @returns {Object} Returns `object`.
	 */
	function baseAssign(object, source) {
	  return object && copyObject(source, keys(source), object);
	}

	/**
	 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
	 * traversed objects.
	 *
	 * @private
	 * @param {*} value The value to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @param {boolean} [isFull] Specify a clone including symbols.
	 * @param {Function} [customizer] The function to customize cloning.
	 * @param {string} [key] The key of `value`.
	 * @param {Object} [object] The parent object of `value`.
	 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
	 * @returns {*} Returns the cloned value.
	 */
	function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
	  var result;
	  if (customizer) {
	    result = object ? customizer(value, key, object, stack) : customizer(value);
	  }
	  if (result !== undefined) {
	    return result;
	  }
	  if (!isObject(value)) {
	    return value;
	  }
	  var isArr = isArray(value);
	  if (isArr) {
	    result = initCloneArray(value);
	    if (!isDeep) {
	      return copyArray(value, result);
	    }
	  } else {
	    var tag = getTag(value),
	        isFunc = tag == funcTag || tag == genTag;

	    if (isBuffer(value)) {
	      return cloneBuffer(value, isDeep);
	    }
	    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
	      if (isHostObject(value)) {
	        return object ? value : {};
	      }
	      result = initCloneObject(isFunc ? {} : value);
	      if (!isDeep) {
	        return copySymbols(value, baseAssign(result, value));
	      }
	    } else {
	      if (!cloneableTags[tag]) {
	        return object ? value : {};
	      }
	      result = initCloneByTag(value, tag, baseClone, isDeep);
	    }
	  }
	  // Check for circular references and return its corresponding clone.
	  stack || (stack = new Stack);
	  var stacked = stack.get(value);
	  if (stacked) {
	    return stacked;
	  }
	  stack.set(value, result);

	  if (!isArr) {
	    var props = isFull ? getAllKeys(value) : keys(value);
	  }
	  arrayEach(props || value, function(subValue, key) {
	    if (props) {
	      key = subValue;
	      subValue = value[key];
	    }
	    // Recursively populate clone (susceptible to call stack limits).
	    assignValue(result, key, baseClone(subValue, isDeep, isFull, customizer, key, value, stack));
	  });
	  return result;
	}

	/**
	 * The base implementation of `_.create` without support for assigning
	 * properties to the created object.
	 *
	 * @private
	 * @param {Object} prototype The object to inherit from.
	 * @returns {Object} Returns the new object.
	 */
	function baseCreate(proto) {
	  return isObject(proto) ? objectCreate(proto) : {};
	}

	/**
	 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
	 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
	 * symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @param {Function} symbolsFunc The function to get the symbols of `object`.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function baseGetAllKeys(object, keysFunc, symbolsFunc) {
	  var result = keysFunc(object);
	  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
	}

	/**
	 * The base implementation of `getTag`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  return objectToString.call(value);
	}

	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}

	/**
	 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  if (!isPrototype(object)) {
	    return nativeKeys(object);
	  }
	  var result = [];
	  for (var key in Object(object)) {
	    if (hasOwnProperty.call(object, key) && key != 'constructor') {
	      result.push(key);
	    }
	  }
	  return result;
	}

	/**
	 * Creates a clone of  `buffer`.
	 *
	 * @private
	 * @param {Buffer} buffer The buffer to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Buffer} Returns the cloned buffer.
	 */
	function cloneBuffer(buffer, isDeep) {
	  if (isDeep) {
	    return buffer.slice();
	  }
	  var result = new buffer.constructor(buffer.length);
	  buffer.copy(result);
	  return result;
	}

	/**
	 * Creates a clone of `arrayBuffer`.
	 *
	 * @private
	 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
	 * @returns {ArrayBuffer} Returns the cloned array buffer.
	 */
	function cloneArrayBuffer(arrayBuffer) {
	  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
	  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
	  return result;
	}

	/**
	 * Creates a clone of `dataView`.
	 *
	 * @private
	 * @param {Object} dataView The data view to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned data view.
	 */
	function cloneDataView(dataView, isDeep) {
	  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
	  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
	}

	/**
	 * Creates a clone of `map`.
	 *
	 * @private
	 * @param {Object} map The map to clone.
	 * @param {Function} cloneFunc The function to clone values.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned map.
	 */
	function cloneMap(map, isDeep, cloneFunc) {
	  var array = isDeep ? cloneFunc(mapToArray(map), true) : mapToArray(map);
	  return arrayReduce(array, addMapEntry, new map.constructor);
	}

	/**
	 * Creates a clone of `regexp`.
	 *
	 * @private
	 * @param {Object} regexp The regexp to clone.
	 * @returns {Object} Returns the cloned regexp.
	 */
	function cloneRegExp(regexp) {
	  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
	  result.lastIndex = regexp.lastIndex;
	  return result;
	}

	/**
	 * Creates a clone of `set`.
	 *
	 * @private
	 * @param {Object} set The set to clone.
	 * @param {Function} cloneFunc The function to clone values.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned set.
	 */
	function cloneSet(set, isDeep, cloneFunc) {
	  var array = isDeep ? cloneFunc(setToArray(set), true) : setToArray(set);
	  return arrayReduce(array, addSetEntry, new set.constructor);
	}

	/**
	 * Creates a clone of the `symbol` object.
	 *
	 * @private
	 * @param {Object} symbol The symbol object to clone.
	 * @returns {Object} Returns the cloned symbol object.
	 */
	function cloneSymbol(symbol) {
	  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
	}

	/**
	 * Creates a clone of `typedArray`.
	 *
	 * @private
	 * @param {Object} typedArray The typed array to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned typed array.
	 */
	function cloneTypedArray(typedArray, isDeep) {
	  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
	  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
	}

	/**
	 * Copies the values of `source` to `array`.
	 *
	 * @private
	 * @param {Array} source The array to copy values from.
	 * @param {Array} [array=[]] The array to copy values to.
	 * @returns {Array} Returns `array`.
	 */
	function copyArray(source, array) {
	  var index = -1,
	      length = source.length;

	  array || (array = Array(length));
	  while (++index < length) {
	    array[index] = source[index];
	  }
	  return array;
	}

	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property identifiers to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @param {Function} [customizer] The function to customize copied values.
	 * @returns {Object} Returns `object`.
	 */
	function copyObject(source, props, object, customizer) {
	  object || (object = {});

	  var index = -1,
	      length = props.length;

	  while (++index < length) {
	    var key = props[index];

	    var newValue = customizer
	      ? customizer(object[key], source[key], key, object, source)
	      : undefined;

	    assignValue(object, key, newValue === undefined ? source[key] : newValue);
	  }
	  return object;
	}

	/**
	 * Copies own symbol properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy symbols from.
	 * @param {Object} [object={}] The object to copy symbols to.
	 * @returns {Object} Returns `object`.
	 */
	function copySymbols(source, object) {
	  return copyObject(source, getSymbols(source), object);
	}

	/**
	 * Creates an array of own enumerable property names and symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function getAllKeys(object) {
	  return baseGetAllKeys(object, keys, getSymbols);
	}

	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = getValue(object, key);
	  return baseIsNative(value) ? value : undefined;
	}

	/**
	 * Creates an array of the own enumerable symbol properties of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of symbols.
	 */
	var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;

	/**
	 * Gets the `toStringTag` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	var getTag = baseGetTag;

	// Fallback for data views, maps, sets, and weak maps in IE 11,
	// for data views in Edge < 14, and promises in Node.js.
	if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
	    (Map && getTag(new Map) != mapTag) ||
	    (Promise && getTag(Promise.resolve()) != promiseTag) ||
	    (Set && getTag(new Set) != setTag) ||
	    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
	  getTag = function(value) {
	    var result = objectToString.call(value),
	        Ctor = result == objectTag ? value.constructor : undefined,
	        ctorString = Ctor ? toSource(Ctor) : undefined;

	    if (ctorString) {
	      switch (ctorString) {
	        case dataViewCtorString: return dataViewTag;
	        case mapCtorString: return mapTag;
	        case promiseCtorString: return promiseTag;
	        case setCtorString: return setTag;
	        case weakMapCtorString: return weakMapTag;
	      }
	    }
	    return result;
	  };
	}

	/**
	 * Initializes an array clone.
	 *
	 * @private
	 * @param {Array} array The array to clone.
	 * @returns {Array} Returns the initialized clone.
	 */
	function initCloneArray(array) {
	  var length = array.length,
	      result = array.constructor(length);

	  // Add properties assigned by `RegExp#exec`.
	  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
	    result.index = array.index;
	    result.input = array.input;
	  }
	  return result;
	}

	/**
	 * Initializes an object clone.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneObject(object) {
	  return (typeof object.constructor == 'function' && !isPrototype(object))
	    ? baseCreate(getPrototype(object))
	    : {};
	}

	/**
	 * Initializes an object clone based on its `toStringTag`.
	 *
	 * **Note:** This function only supports cloning values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @param {string} tag The `toStringTag` of the object to clone.
	 * @param {Function} cloneFunc The function to clone values.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneByTag(object, tag, cloneFunc, isDeep) {
	  var Ctor = object.constructor;
	  switch (tag) {
	    case arrayBufferTag:
	      return cloneArrayBuffer(object);

	    case boolTag:
	    case dateTag:
	      return new Ctor(+object);

	    case dataViewTag:
	      return cloneDataView(object, isDeep);

	    case float32Tag: case float64Tag:
	    case int8Tag: case int16Tag: case int32Tag:
	    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
	      return cloneTypedArray(object, isDeep);

	    case mapTag:
	      return cloneMap(object, isDeep, cloneFunc);

	    case numberTag:
	    case stringTag:
	      return new Ctor(object);

	    case regexpTag:
	      return cloneRegExp(object);

	    case setTag:
	      return cloneSet(object, isDeep, cloneFunc);

	    case symbolTag:
	      return cloneSymbol(object);
	  }
	}

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return !!length &&
	    (typeof value == 'number' || reIsUint.test(value)) &&
	    (value > -1 && value % 1 == 0 && value < length);
	}

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}

	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}

	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

	  return value === proto;
	}

	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to process.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}

	/**
	 * This method is like `_.clone` except that it recursively clones `value`.
	 *
	 * @static
	 * @memberOf _
	 * @since 1.0.0
	 * @category Lang
	 * @param {*} value The value to recursively clone.
	 * @returns {*} Returns the deep cloned value.
	 * @see _.clone
	 * @example
	 *
	 * var objects = [{ 'a': 1 }, { 'b': 2 }];
	 *
	 * var deep = _.cloneDeep(objects);
	 * console.log(deep[0] === objects[0]);
	 * // => false
	 */
	function cloneDeep(value) {
	  return baseClone(value, true, true);
	}

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}

	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
	  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
	    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
	}

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}

	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}

	/**
	 * Checks if `value` is a buffer.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	 * @example
	 *
	 * _.isBuffer(new Buffer(2));
	 * // => true
	 *
	 * _.isBuffer(new Uint8Array(2));
	 * // => false
	 */
	var isBuffer = nativeIsBuffer || stubFalse;

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8-9 which returns 'object' for typed array and other constructors.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
	}

	/**
	 * This method returns a new empty array.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {Array} Returns the new empty array.
	 * @example
	 *
	 * var arrays = _.times(2, _.stubArray);
	 *
	 * console.log(arrays);
	 * // => [[], []]
	 *
	 * console.log(arrays[0] === arrays[1]);
	 * // => false
	 */
	function stubArray() {
	  return [];
	}

	/**
	 * This method returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {boolean} Returns `false`.
	 * @example
	 *
	 * _.times(2, _.stubFalse);
	 * // => [false, false]
	 */
	function stubFalse() {
	  return false;
	}

	module.exports = cloneDeep;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(91)(module)))

/***/ },
/* 91 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(36);
	var createReactClass = __webpack_require__(3);
	var PropTypes = __webpack_require__(11);
	var Infinite = __webpack_require__(93);
	var classNames = __webpack_require__(17);
	var ClassNameMixin = __webpack_require__(18);
	var Dropdown = __webpack_require__(73);
	var Icon = __webpack_require__(37);
	var Input = __webpack_require__(35);
	var cloneDeep = __webpack_require__(106);
	var InfiniteSelected = createReactClass({
	  mixins: [ClassNameMixin],

	  propTypes: {
	    classPrefix: PropTypes.string,
	    data: PropTypes.array.isRequired,
	    placeholder: PropTypes.string,
	    value: PropTypes.string,
	    multiple: PropTypes.bool,
	    searchBox: PropTypes.bool,
	    name: PropTypes.string,
	    onChange: PropTypes.func,
	    optionFilter: PropTypes.func, // (filterText, option) => {}
	    dropup: PropTypes.bool,
	    btnWidth: PropTypes.number,
	    btnStyle: PropTypes.string,
	    btnSize: PropTypes.string,
	    maxHeight: PropTypes.number,
	    sortSelected: PropTypes.bool,
	    limit: PropTypes.number,
	    onValidateValue: PropTypes.func, // 判断value是否有效
	    // delimiter to use to join multiple values
	    delimiter: PropTypes.string
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      sortSelected: true,
	      classPrefix: 'selected',
	      placeholder: '点击选择...',
	      onChange: function onChange() {},
	      onValidateValue: function onValidateValue(value) {
	        return true;
	      },
	      value: '',
	      delimiter: ',',
	      optionFilter: function optionFilter(filterText, option) {
	        return filterText ? option.label.toLowerCase().indexOf(filterText) > -1 : true;
	      }
	    };
	  },

	  getInitialState: function getInitialState() {
	    return {
	      value: this.props.value,
	      dropdownWidth: null,
	      filterText: null,
	      selectedLabel: [],
	      isInfiniteLoading: false,
	      items: [],
	      data: [],
	      loadNum: 50
	    };
	  },

	  componentDidMount: function componentDidMount() {
	    this.setDropdownWidth();
	  },

	  componentWillUpdate: function componentWillUpdate(nextProps, nextState) {
	    if (nextState.filterText !== this.state.filterText) {
	      this.setItems(nextState.data, nextState.filterText);
	    }
	  },

	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    var sortedData = this.showSelectedFirst(nextProps.value, cloneDeep(nextProps.data));
	    this.setState({
	      value: nextProps.value,
	      data: sortedData,
	      selectedLabel: this.getSelectedLabel(nextProps.value, sortedData),
	      lastSearchTime: new Date().getTime()
	    });
	    this.setItems(sortedData, this.state.filterText);
	  },

	  setItems: function setItems(sortedData, filterText) {
	    var filterData = filterText ? this.getFilterData(filterText) : sortedData;

	    var items = this.buildElements(filterData, 0, this.state.loadNum);
	    this.setState({
	      items: items,
	      itemsLength: items.length,
	      filterData: filterData,
	      filterText: filterText
	    });
	  },

	  buildElements: function buildElements(data, start, end) {
	    var groupHeader;
	    var items = [];
	    var temp = new Date().getTime();
	    data.slice(start, end).forEach(function (option, i) {
	      var checked = this.hasValue(option.value);
	      var checkedClass = checked ? this.setClassNamespace('checked') : null;
	      var checkedIcon = checked ? React.createElement(Icon, { icon: 'check' }) : null;

	      // add group header
	      if (option.group && groupHeader !== option.group) {
	        groupHeader = option.group;
	        items.push(React.createElement(
	          'li',
	          {
	            className: this.prefixClass('list-header'),
	            key: 'header' + i + temp
	          },
	          groupHeader
	        ));
	      }

	      items.push(React.createElement(
	        'li',
	        {
	          className: checkedClass,
	          onClick: this.handleCheck.bind(this, option),
	          key: i + temp,
	          title: option.label
	        },
	        React.createElement(
	          'span',
	          { className: this.prefixClass('text') },
	          option.label
	        ),
	        checkedIcon
	      ));
	    }.bind(this));

	    return items;
	  },

	  handleInfiniteLoad: function handleInfiniteLoad() {
	    var that = this;
	    this.setState({
	      isInfiniteLoading: true
	    });
	    setTimeout(function () {
	      var elemLength = that.state.itemsLength;
	      var dataLength = that.state.data.length;

	      if (elemLength >= dataLength) {
	        that.setState({
	          isInfiniteLoading: false
	        });
	        return false;
	      }
	      var newElements = that.buildElements(that.state.filterData, elemLength, elemLength + that.state.loadNum >= dataLength ? dataLength : elemLength + that.state.loadNum);
	      that.setState({
	        isInfiniteLoading: false,
	        items: that.state.items.concat(newElements),
	        itemsLength: newElements.length + elemLength
	      });
	    }, 2500);
	  },

	  elementInfiniteLoad: function elementInfiniteLoad() {
	    return React.createElement(
	      'li',
	      { className: 'infinite-list-item' },
	      'Loading...'
	    );
	  },

	  getSelectedLabel: function getSelectedLabel(value, data) {
	    if (!data || data.length <= 0) {
	      return [];
	    }
	    var label = [];
	    var valueArr = value ? value.split(this.props.delimiter) : [];
	    data.forEach(function (option, i) {
	      if (valueArr.indexOf(option.value) > -1) {
	        label.push(option.label);
	      } else {
	        return;
	      }
	    });
	    return label;
	  },

	  getFilterData: function getFilterData(filterText) {
	    if (!filterText) {
	      return [];
	    }
	    var data = [];
	    var that = this;
	    this.state.data.forEach(function (option, i) {
	      if (that.props.optionFilter(filterText, option)) {
	        data.push(option);
	      }
	    });
	    return data;
	  },

	  setDropdownWidth: function setDropdownWidth() {
	    if (this.isMounted()) {
	      var toggleButton = ReactDOM.findDOMNode(this.refs.dropdown.refs.dropdownToggle);

	      toggleButton && this.setState({ dropdownWidth: toggleButton.offsetWidth });
	    }
	  },

	  getValueArray: function getValueArray() {
	    return this.state.value ? this.state.value.split(this.props.delimiter) : [];
	  },

	  hasValue: function hasValue(value) {
	    return this.getValueArray().indexOf(value) > -1;
	  },

	  setValue: function setValue(value, callback) {
	    if (this.props.onValidateValue(value)) {
	      this.setState({
	        value: value
	      }, function () {
	        this.props.onChange(value);
	        callback && callback();
	      });
	    }
	  },

	  handleCheck: function handleCheck(option, e) {
	    e.preventDefault();

	    var clickedValue = option.value;

	    // multiple select
	    if (this.props.multiple) {
	      var values = this.getValueArray();

	      if (this.hasValue(clickedValue)) {
	        values.splice(values.indexOf(clickedValue), 1);
	      } else if (!this.props.limit || values.length < this.props.limit) {
	        values.push(clickedValue);
	      }

	      this.setValue(values.join(this.props.delimiter));
	    } else {
	      this.setValue(clickedValue);
	      this.refs.dropdown.setDropdown(false);
	    }
	  },

	  handleUserInput: function handleUserInput(e) {
	    e.preventDefault();
	    var now = new Date().getTime();
	    var change = { lastSearchTime: now };

	    if (now - this.state.lastSearchTime > 300) {
	      change = Object.assign(change, {
	        filterText: ReactDOM.findDOMNode(this.refs.filterInput).value,
	        timeout: this.getTimeout(this.handleTimeout)
	      });
	    }
	    this.setState(change);
	  },

	  getTimeout: function getTimeout(callback) {
	    if (this.state.timeout) {
	      clearTimeout(this.state.timeout);
	    }
	    return setTimeout(callback, 300);
	  },

	  handleTimeout: function handleTimeout() {
	    //clear timeout and check filterText
	    if (this.state.timeout) {
	      clearTimeout(this.state.timeout);
	    }
	    var _filterText = ReactDOM.findDOMNode(this.refs.filterInput).value;
	    if (_filterText !== this.state.filterText) {
	      this.setItems(this.state.data, _filterText);
	    }
	  },

	  // clear filter
	  clearFilterInput: function clearFilterInput() {
	    if (this.props.multiple && this.props.searchBox) {
	      this.setState({
	        filterText: null
	      });
	      ReactDOM.findDOMNode(this.refs.filterInput).value = null;
	    }
	  },

	  // API for getting component value
	  getValue: function getValue() {
	    return this.state.value;
	  },

	  showSelectedFirst: function showSelectedFirst(value, data) {

	    var that = this;

	    if (Object.prototype.toString.call(data) != '[object Array]' || data.length == 0) {
	      return [];
	    }

	    var arr = value && value.split(',') || [],
	        temp = [];

	    arr.forEach(function (_value) {
	      //从data中找到_value, 并弹出
	      var index = that.findIndex(data, _value);
	      if (index == -1) {
	        return;
	      }
	      temp = temp.concat(data.splice(index, 1));
	    });

	    return temp.concat(data);
	  },
	  findIndex: function findIndex(data, value) {
	    // var value = '4.0.0.195(4.0.0.195)';
	    for (var i = 0, l = data.length; i < l; i++) {
	      if (data[i].value == value) {
	        return i;
	      }
	    }
	    return -1;
	  },


	  render: function render() {
	    var classSet = this.getClassSet();
	    var status = React.createElement(
	      'span',
	      {
	        className: classNames(this.prefixClass('status'), this.setClassNamespace('fl'))
	      },
	      this.state.selectedLabel.length ? this.state.selectedLabel.join(', ') : React.createElement(
	        'span',
	        { className: this.prefixClass('placeholder ') },
	        this.props.placeholder
	      )
	    );
	    var optionsStyle = {};

	    if (this.props.maxHeight) {
	      optionsStyle = {
	        maxHeight: this.props.maxHeight,
	        overflowY: 'scroll'
	      };
	    }

	    var searchTip = this.props.searchBox && this.props.searchTip || null;

	    return React.createElement(
	      Dropdown,
	      {
	        className: classNames(this.props.className, classSet),
	        title: status,
	        onClose: this.clearFilterInput,
	        btnStyle: this.props.btnStyle,
	        btnSize: this.props.btnSize,
	        btnInlineStyle: { width: this.props.btnWidth },
	        contentInlineStyle: { minWidth: this.state.dropdownWidth },
	        toggleClassName: this.prefixClass('btn'),
	        caretClassName: this.prefixClass('icon'),
	        contentClassName: this.prefixClass('content'),
	        contentTag: 'div',
	        dropup: this.props.dropup,
	        ref: 'dropdown'
	      },
	      searchTip,
	      this.props.searchBox ? React.createElement(
	        'div',
	        { className: this.prefixClass('search') },
	        React.createElement('i', { className: 'icon-search' }),
	        React.createElement(Input, {
	          onChange: this.handleUserInput,
	          autoComplete: 'off',
	          standalone: true,
	          ref: 'filterInput'
	        })
	      ) : null,
	      React.createElement(
	        Infinite,
	        {
	          elementHeight: 36,
	          containerHeight: 200,
	          loadingSpinnerDelegate: this.elementInfiniteLoad(),
	          isInfiniteLoading: this.state.isInfiniteLoading,
	          infiniteLoadBeginEdgeOffset: 200,
	          onInfiniteLoad: this.handleInfiniteLoad
	        },
	        this.state.items
	      ),
	      React.createElement('input', {
	        name: this.props.name,
	        type: 'hidden',
	        ref: 'selectedField',
	        value: this.state.value
	      })
	    );
	  }
	});

	module.exports = InfiniteSelected;

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var React = global.React || __webpack_require__(1);

	__webpack_require__(94);
	var scaleEnum = __webpack_require__(97);
	var infiniteHelpers = __webpack_require__(98);
	var _isFinite = __webpack_require__(103);

	var preloadType = __webpack_require__(104).preloadType;
	var checkProps = checkProps = __webpack_require__(105);

	var Infinite = React.createClass({
	  displayName: 'Infinite',

	  propTypes: {
	    children: React.PropTypes.any,

	    handleScroll: React.PropTypes.func,

	    // preloadBatchSize causes updates only to
	    // happen each preloadBatchSize pixels of scrolling.
	    // Set a larger number to cause fewer updates to the
	    // element list.
	    preloadBatchSize: preloadType,
	    // preloadAdditionalHeight determines how much of the
	    // list above and below the container is preloaded even
	    // when it is not currently visible to the user. In the
	    // regular scroll implementation, preloadAdditionalHeight
	    // is equal to the entire height of the list.
	    preloadAdditionalHeight: preloadType, // page to screen ratio

	    // The provided elementHeight can be either
	    //  1. a constant: all elements are the same height
	    //  2. an array containing the height of each element
	    elementHeight: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.arrayOf(React.PropTypes.number)]).isRequired,
	    // This is the total height of the visible window. One
	    // of
	    containerHeight: React.PropTypes.number,
	    useWindowAsScrollContainer: React.PropTypes.bool,

	    displayBottomUpwards: React.PropTypes.bool.isRequired,

	    infiniteLoadBeginEdgeOffset: React.PropTypes.number,
	    onInfiniteLoad: React.PropTypes.func,
	    loadingSpinnerDelegate: React.PropTypes.node,

	    isInfiniteLoading: React.PropTypes.bool,
	    timeScrollStateLastsForAfterUserScrolls: React.PropTypes.number,

	    className: React.PropTypes.string,

	    styles: React.PropTypes.shape({
	      scrollableStyle: React.PropTypes.object
	    }).isRequired
	  },
	  statics: {
	    containerHeightScaleFactor: function containerHeightScaleFactor(factor) {
	      if (!_isFinite(factor)) {
	        throw new Error('The scale factor must be a number.');
	      }
	      return {
	        type: scaleEnum.CONTAINER_HEIGHT_SCALE_FACTOR,
	        amount: factor
	      };
	    }
	  },

	  // Properties currently used but which may be
	  // refactored away in the future.
	  computedProps: {},
	  utils: {},
	  shouldAttachToBottom: false,
	  preservedScrollState: 0,
	  loadingSpinnerHeight: 0,
	  deprecationWarned: false,

	  scrollable: null,
	  topSpacer: null,
	  bottomSpacer: null,
	  smoothScrollingWrapper: null,
	  loadingSpinner: null,

	  getDefaultProps: function getDefaultProps() {
	    return {
	      handleScroll: function handleScroll() {},

	      useWindowAsScrollContainer: false,

	      onInfiniteLoad: function onInfiniteLoad() {},
	      loadingSpinnerDelegate: React.createElement('div', null),

	      displayBottomUpwards: false,

	      isInfiniteLoading: false,
	      timeScrollStateLastsForAfterUserScrolls: 150,

	      className: '',

	      styles: {}
	    };
	  },

	  // automatic adjust to scroll direction
	  // give spinner a ReactCSSTransitionGroup
	  getInitialState: function getInitialState() {
	    var nextInternalState = this.recomputeInternalStateFromProps(this.props);

	    this.computedProps = nextInternalState.computedProps;
	    this.utils = nextInternalState.utils;
	    this.shouldAttachToBottom = this.props.displayBottomUpwards;

	    var state = nextInternalState.newState;
	    state.scrollTimeout = undefined;
	    state.isScrolling = false;

	    return state;
	  },

	  generateComputedProps: function generateComputedProps(props) {
	    // These are extracted so their type definitions do not conflict.
	    var containerHeight = props.containerHeight;
	    var preloadBatchSize = props.preloadBatchSize;
	    var preloadAdditionalHeight = props.preloadAdditionalHeight;

	    var oldProps = _objectWithoutProperties(props, ['containerHeight', 'preloadBatchSize', 'preloadAdditionalHeight']);

	    var newProps = {};
	    containerHeight = typeof containerHeight === 'number' ? containerHeight : 0;
	    newProps.containerHeight = props.useWindowAsScrollContainer ? window.innerHeight : containerHeight;

	    if (oldProps.infiniteLoadBeginBottomOffset !== undefined) {
	      newProps.infiniteLoadBeginEdgeOffset = oldProps.infiniteLoadBeginBottomOffset;
	      if (!this.deprecationWarned) {
	        console.error('Warning: React Infinite\'s infiniteLoadBeginBottomOffset prop\n        has been deprecated as of 0.6.0. Please use infiniteLoadBeginEdgeOffset.\n        Because this is a rather descriptive name, a simple find and replace\n        should suffice.');
	        this.deprecationWarned = true;
	      }
	    }

	    var defaultPreloadBatchSizeScaling = {
	      type: scaleEnum.CONTAINER_HEIGHT_SCALE_FACTOR,
	      amount: 0.5
	    };
	    var batchSize = preloadBatchSize && preloadBatchSize.type ? preloadBatchSize : defaultPreloadBatchSizeScaling;

	    if (typeof preloadBatchSize === 'number') {
	      newProps.preloadBatchSize = preloadBatchSize;
	    } else if (typeof batchSize === 'object' && batchSize.type === scaleEnum.CONTAINER_HEIGHT_SCALE_FACTOR) {
	      newProps.preloadBatchSize = newProps.containerHeight * batchSize.amount;
	    } else {
	      newProps.preloadBatchSize = 0;
	    }

	    var defaultPreloadAdditionalHeightScaling = {
	      type: scaleEnum.CONTAINER_HEIGHT_SCALE_FACTOR,
	      amount: 1
	    };
	    var additionalHeight = preloadAdditionalHeight && preloadAdditionalHeight.type ? preloadAdditionalHeight : defaultPreloadAdditionalHeightScaling;
	    if (typeof preloadAdditionalHeight === 'number') {
	      newProps.preloadAdditionalHeight = preloadAdditionalHeight;
	    } else if (typeof additionalHeight === 'object' && additionalHeight.type === scaleEnum.CONTAINER_HEIGHT_SCALE_FACTOR) {
	      newProps.preloadAdditionalHeight = newProps.containerHeight * additionalHeight.amount;
	    } else {
	      newProps.preloadAdditionalHeight = 0;
	    }

	    return Object.assign(oldProps, newProps);
	  },

	  generateComputedUtilityFunctions: function generateComputedUtilityFunctions(props) {
	    var _this = this;

	    var utilities = {};
	    utilities.getLoadingSpinnerHeight = function () {
	      var loadingSpinnerHeight = 0;
	      if (_this.loadingSpinner) {
	        loadingSpinnerHeight = _this.loadingSpinner.offsetHeight || 0;
	      }
	      return loadingSpinnerHeight;
	    };
	    if (props.useWindowAsScrollContainer) {
	      utilities.subscribeToScrollListener = function () {
	        window.addEventListener('scroll', _this.infiniteHandleScroll);
	      };
	      utilities.unsubscribeFromScrollListener = function () {
	        window.removeEventListener('scroll', _this.infiniteHandleScroll);
	      };
	      utilities.nodeScrollListener = function () {};
	      utilities.getScrollTop = function () {
	        return window.pageYOffset;
	      };
	      utilities.setScrollTop = function (top) {
	        window.scroll(window.pageXOffset, top);
	      };
	      utilities.scrollShouldBeIgnored = function () {
	        return false;
	      };
	      utilities.buildScrollableStyle = function () {
	        return {};
	      };
	    } else {
	      utilities.subscribeToScrollListener = function () {};
	      utilities.unsubscribeFromScrollListener = function () {};
	      utilities.nodeScrollListener = this.infiniteHandleScroll;
	      utilities.getScrollTop = function () {
	        return _this.scrollable ? _this.scrollable.scrollTop : 0;
	      };

	      utilities.setScrollTop = function (top) {
	        if (_this.scrollable) {
	          _this.scrollable.scrollTop = top;
	        }
	      };
	      utilities.scrollShouldBeIgnored = function (event) {
	        return event.target !== _this.scrollable;
	      };

	      utilities.buildScrollableStyle = function () {
	        return Object.assign({}, {
	          height: _this.computedProps.containerHeight,
	          overflowX: 'hidden',
	          overflowY: 'scroll',
	          WebkitOverflowScrolling: 'touch'
	        }, _this.computedProps.styles.scrollableStyle || {});
	      };
	    }
	    return utilities;
	  },

	  recomputeInternalStateFromProps: function recomputeInternalStateFromProps(props) {
	    checkProps(props);
	    var computedProps = this.generateComputedProps(props);
	    var utils = this.generateComputedUtilityFunctions(props);

	    var newState = {};

	    newState.numberOfChildren = React.Children.count(computedProps.children);
	    newState.infiniteComputer = infiniteHelpers.createInfiniteComputer(computedProps.elementHeight, computedProps.children, computedProps.displayBottomUpwards);

	    if (computedProps.isInfiniteLoading !== undefined) {
	      newState.isInfiniteLoading = computedProps.isInfiniteLoading;
	    }

	    newState.preloadBatchSize = computedProps.preloadBatchSize;
	    newState.preloadAdditionalHeight = computedProps.preloadAdditionalHeight;

	    newState = Object.assign(newState, infiniteHelpers.recomputeApertureStateFromOptionsAndScrollTop(newState, utils.getScrollTop()));

	    return {
	      computedProps: computedProps,
	      utils: utils,
	      newState: newState
	    };
	  },

	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    var nextInternalState = this.recomputeInternalStateFromProps(nextProps);

	    this.computedProps = nextInternalState.computedProps;
	    this.utils = nextInternalState.utils;

	    this.setState(nextInternalState.newState);
	  },

	  componentWillUpdate: function componentWillUpdate() {
	    if (this.props.displayBottomUpwards) {
	      this.preservedScrollState = this.utils.getScrollTop() - this.loadingSpinnerHeight;
	    }
	  },

	  componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
	    this.loadingSpinnerHeight = this.utils.getLoadingSpinnerHeight();

	    if (this.props.displayBottomUpwards) {
	      var lowestScrollTop = this.getLowestPossibleScrollTop();
	      if (this.shouldAttachToBottom && this.utils.getScrollTop() < lowestScrollTop) {
	        this.utils.setScrollTop(lowestScrollTop);
	      } else if (prevProps.isInfiniteLoading && !this.props.isInfiniteLoading) {
	        this.utils.setScrollTop(this.state.infiniteComputer.getTotalScrollableHeight() - prevState.infiniteComputer.getTotalScrollableHeight() + this.preservedScrollState);
	      }
	    }

	    var hasLoadedMoreChildren = this.state.numberOfChildren !== prevState.numberOfChildren;
	    if (hasLoadedMoreChildren) {
	      var newApertureState = infiniteHelpers.recomputeApertureStateFromOptionsAndScrollTop(this.state, this.utils.getScrollTop());
	      this.setState(newApertureState);
	    }

	    var isMissingVisibleRows = hasLoadedMoreChildren && !this.hasAllVisibleItems() && !this.state.isInfiniteLoading;
	    if (isMissingVisibleRows) {
	      this.onInfiniteLoad();
	    }
	  },

	  componentDidMount: function componentDidMount() {
	    this.utils.subscribeToScrollListener();

	    if (!this.hasAllVisibleItems()) {
	      this.onInfiniteLoad();
	    }

	    if (this.props.displayBottomUpwards) {
	      var lowestScrollTop = this.getLowestPossibleScrollTop();
	      if (this.shouldAttachToBottom && this.utils.getScrollTop() < lowestScrollTop) {
	        this.utils.setScrollTop(lowestScrollTop);
	      }
	    }
	  },

	  componentWillUnmount: function componentWillUnmount() {
	    this.utils.unsubscribeFromScrollListener();
	  },

	  infiniteHandleScroll: function infiniteHandleScroll(e) {
	    if (this.utils.scrollShouldBeIgnored(e)) {
	      return;
	    }
	    this.computedProps.handleScroll(this.scrollable);
	    this.handleScroll(this.utils.getScrollTop());
	  },

	  manageScrollTimeouts: function manageScrollTimeouts() {
	    // Maintains a series of timeouts to set this.state.isScrolling
	    // to be true when the element is scrolling.

	    if (this.state.scrollTimeout) {
	      clearTimeout(this.state.scrollTimeout);
	    }

	    var that = this,
	        scrollTimeout = setTimeout(function () {
	      that.setState({
	        isScrolling: false,
	        scrollTimeout: undefined
	      });
	    }, this.computedProps.timeScrollStateLastsForAfterUserScrolls);

	    this.setState({
	      isScrolling: true,
	      scrollTimeout: scrollTimeout
	    });
	  },

	  getLowestPossibleScrollTop: function getLowestPossibleScrollTop() {
	    return this.state.infiniteComputer.getTotalScrollableHeight() - this.computedProps.containerHeight;
	  },

	  hasAllVisibleItems: function hasAllVisibleItems() {
	    return !(_isFinite(this.computedProps.infiniteLoadBeginEdgeOffset) && this.state.infiniteComputer.getTotalScrollableHeight() < this.computedProps.containerHeight);
	  },

	  passedEdgeForInfiniteScroll: function passedEdgeForInfiniteScroll(scrollTop) {
	    if (this.computedProps.displayBottomUpwards) {
	      return !this.shouldAttachToBottom && scrollTop < this.computedProps.infiniteLoadBeginEdgeOffset;
	    } else {
	      return scrollTop > this.state.infiniteComputer.getTotalScrollableHeight() - this.computedProps.containerHeight - this.computedProps.infiniteLoadBeginEdgeOffset;
	    }
	  },

	  onInfiniteLoad: function onInfiniteLoad() {
	    this.setState({ isInfiniteLoading: true });
	    this.computedProps.onInfiniteLoad();
	  },

	  handleScroll: function handleScroll(scrollTop) {
	    this.shouldAttachToBottom = this.computedProps.displayBottomUpwards && scrollTop >= this.getLowestPossibleScrollTop();

	    this.manageScrollTimeouts();

	    var newApertureState = infiniteHelpers.recomputeApertureStateFromOptionsAndScrollTop(this.state, scrollTop);

	    if (this.passedEdgeForInfiniteScroll(scrollTop) && !this.state.isInfiniteLoading) {
	      this.setState(Object.assign({}, newApertureState));
	      this.onInfiniteLoad();
	    } else {
	      this.setState(newApertureState);
	    }
	  },

	  buildHeightStyle: function buildHeightStyle(height) {
	    return {
	      width: '100%',
	      height: Math.ceil(height)
	    };
	  },

	  render: function render() {
	    var _this2 = this;

	    var displayables;
	    if (this.state.numberOfChildren > 1) {
	      displayables = this.computedProps.children.slice(this.state.displayIndexStart, this.state.displayIndexEnd + 1);
	    } else {
	      displayables = this.computedProps.children;
	    }

	    var infiniteScrollStyles = {};
	    if (this.state.isScrolling) {
	      infiniteScrollStyles.pointerEvents = 'none';
	    }

	    var topSpacerHeight = this.state.infiniteComputer.getTopSpacerHeight(this.state.displayIndexStart),
	        bottomSpacerHeight = this.state.infiniteComputer.getBottomSpacerHeight(this.state.displayIndexEnd);

	    // This asymmetry is due to a reluctance to use CSS to control
	    // the bottom alignment
	    if (this.computedProps.displayBottomUpwards) {
	      var heightDifference = this.computedProps.containerHeight - this.state.infiniteComputer.getTotalScrollableHeight();
	      if (heightDifference > 0) {
	        topSpacerHeight = heightDifference - this.loadingSpinnerHeight;
	      }
	    }

	    var loadingSpinner = this.computedProps.infiniteLoadBeginEdgeOffset === undefined ? null : React.createElement(
	      'div',
	      { ref: function (c) {
	          _this2.loadingSpinner = c;
	        } },
	      this.state.isInfiniteLoading ? this.computedProps.loadingSpinnerDelegate : null
	    );

	    // topSpacer and bottomSpacer take up the amount of space that the
	    // rendered elements would have taken up otherwise
	    return React.createElement(
	      'div',
	      { className: this.computedProps.className,
	        ref: function (c) {
	          _this2.scrollable = c;
	        },
	        style: this.utils.buildScrollableStyle(),
	        onScroll: this.utils.nodeScrollListener },
	      React.createElement(
	        'div',
	        { ref: function (c) {
	            _this2.smoothScrollingWrapper = c;
	          }, style: infiniteScrollStyles },
	        React.createElement('div', { ref: function (c) {
	            _this2.topSpacer = c;
	          },
	          style: this.buildHeightStyle(topSpacerHeight) }),
	        this.computedProps.displayBottomUpwards && loadingSpinner,
	        displayables,
	        !this.computedProps.displayBottomUpwards && loadingSpinner,
	        React.createElement('div', { ref: function (c) {
	            _this2.bottomSpacer = c;
	          },
	          style: this.buildHeightStyle(bottomSpacerHeight) })
	      )
	    );
	  }
	});

	module.exports = Infinite;
	global.Infinite = Infinite;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	/*
	  A number of polyfills for native functions are consolidated
	  here. We do this instead of using the libraries directly
	  because Flow is designed to make its type refinements
	  with these native functions.
	 */

	'use strict';

	if (!Object.assign) {
	  Object.assign = __webpack_require__(95);
	}

	if (!Array.isArray) {
	  Array.isArray = __webpack_require__(96);
	}

/***/ },
/* 95 */
/***/ function(module, exports) {

	/* eslint-disable no-unused-vars */
	'use strict';
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	module.exports = Object.assign || function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (Object.getOwnPropertySymbols) {
				symbols = Object.getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};


/***/ },
/* 96 */
/***/ function(module, exports) {

	/**
	 * lodash 3.0.4 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */

	/** `Object#toString` result references. */
	var arrayTag = '[object Array]',
	    funcTag = '[object Function]';

	/** Used to detect host constructors (Safari > 5). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/**
	 * Checks if `value` is object-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var fnToString = Function.prototype.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeIsArray = getNative(Array, 'isArray');

	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = object == null ? undefined : object[key];
	  return isNative(value) ? value : undefined;
	}

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(function() { return arguments; }());
	 * // => false
	 */
	var isArray = nativeIsArray || function(value) {
	  return isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag;
	};

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in older versions of Chrome and Safari which return 'function' for regexes
	  // and Safari 8 equivalents which return 'object' for typed array constructors.
	  return isObject(value) && objToString.call(value) == funcTag;
	}

	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	/**
	 * Checks if `value` is a native function.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
	 * @example
	 *
	 * _.isNative(Array.prototype.push);
	 * // => true
	 *
	 * _.isNative(_);
	 * // => false
	 */
	function isNative(value) {
	  if (value == null) {
	    return false;
	  }
	  if (isFunction(value)) {
	    return reIsNative.test(fnToString.call(value));
	  }
	  return isObjectLike(value) && reIsHostCtor.test(value);
	}

	module.exports = isArray;


/***/ },
/* 97 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {
	  CONTAINER_HEIGHT_SCALE_FACTOR: 'containerHeightScaleFactor'
	};

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	var ConstantInfiniteComputer = __webpack_require__(99);
	var ArrayInfiniteComputer = __webpack_require__(101);
	var React = global.React || __webpack_require__(1);

	function createInfiniteComputer(data, children) {
	  var computer;
	  var numberOfChildren = React.Children.count(children);

	  // This should be guaranteed by checkProps
	  if (Array.isArray(data)) {
	    computer = new ArrayInfiniteComputer(data, numberOfChildren);
	  } else {
	    computer = new ConstantInfiniteComputer(data, numberOfChildren);
	  }
	  return computer;
	}

	// Given the scrollTop of the container, computes the state the
	// component should be in. The goal is to abstract all of this
	// from any actual representation in the DOM.
	// The window is the block with any preloadAdditionalHeight
	// added to it.
	function recomputeApertureStateFromOptionsAndScrollTop(_ref, scrollTop) {
	  var preloadBatchSize = _ref.preloadBatchSize;
	  var preloadAdditionalHeight = _ref.preloadAdditionalHeight;
	  var infiniteComputer = _ref.infiniteComputer;
	  return (function () {
	    var blockNumber = preloadBatchSize === 0 ? 0 : Math.floor(scrollTop / preloadBatchSize),
	        blockStart = preloadBatchSize * blockNumber,
	        blockEnd = blockStart + preloadBatchSize,
	        apertureTop = Math.max(0, blockStart - preloadAdditionalHeight),
	        apertureBottom = Math.min(infiniteComputer.getTotalScrollableHeight(), blockEnd + preloadAdditionalHeight);

	    return {
	      displayIndexStart: infiniteComputer.getDisplayIndexStart(apertureTop),
	      displayIndexEnd: infiniteComputer.getDisplayIndexEnd(apertureBottom)
	    };
	  })();
	}

	module.exports = {
	  createInfiniteComputer: createInfiniteComputer,
	  recomputeApertureStateFromOptionsAndScrollTop: recomputeApertureStateFromOptionsAndScrollTop
	};
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var InfiniteComputer = __webpack_require__(100);

	var ConstantInfiniteComputer = (function (_InfiniteComputer) {
	  _inherits(ConstantInfiniteComputer, _InfiniteComputer);

	  function ConstantInfiniteComputer() {
	    _classCallCheck(this, ConstantInfiniteComputer);

	    _get(Object.getPrototypeOf(ConstantInfiniteComputer.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(ConstantInfiniteComputer, [{
	    key: 'getTotalScrollableHeight',
	    value: function getTotalScrollableHeight() {
	      return this.heightData * this.numberOfChildren;
	    }
	  }, {
	    key: 'getDisplayIndexStart',
	    value: function getDisplayIndexStart(windowTop) {
	      return Math.floor(windowTop / this.heightData);
	    }
	  }, {
	    key: 'getDisplayIndexEnd',
	    value: function getDisplayIndexEnd(windowBottom) {
	      var nonZeroIndex = Math.ceil(windowBottom / this.heightData);
	      if (nonZeroIndex > 0) {
	        return nonZeroIndex - 1;
	      }
	      return nonZeroIndex;
	    }
	  }, {
	    key: 'getTopSpacerHeight',
	    value: function getTopSpacerHeight(displayIndexStart) {
	      return displayIndexStart * this.heightData;
	    }
	  }, {
	    key: 'getBottomSpacerHeight',
	    value: function getBottomSpacerHeight(displayIndexEnd) {
	      var nonZeroIndex = displayIndexEnd + 1;
	      return Math.max(0, (this.numberOfChildren - nonZeroIndex) * this.heightData);
	    }
	  }]);

	  return ConstantInfiniteComputer;
	})(InfiniteComputer);

	module.exports = ConstantInfiniteComputer;

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {// An infinite computer must be able to do the following things:
	//  1. getTotalScrollableHeight()
	//  2. getDisplayIndexStart()
	//  3. getDisplayIndexEnd()

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var InfiniteComputer = (function () {
	  function InfiniteComputer(heightData, numberOfChildren) {
	    _classCallCheck(this, InfiniteComputer);

	    this.heightData = heightData;
	    this.numberOfChildren = numberOfChildren;
	  }

	  _createClass(InfiniteComputer, [{
	    key: 'getTotalScrollableHeight',
	    value: function getTotalScrollableHeight() {
	      if (process.env.NODE_ENV === 'development') {
	        throw new Error('getTotalScrollableHeight not implemented.');
	      }
	    }

	    /* eslint-disable no-unused-vars */
	  }, {
	    key: 'getDisplayIndexStart',
	    value: function getDisplayIndexStart(windowTop) {
	      /* eslint-enable no-unused-vars */
	      if (process.env.NODE_ENV === 'development') {
	        throw new Error('getDisplayIndexStart not implemented.');
	      }
	    }

	    /* eslint-disable no-unused-vars */
	  }, {
	    key: 'getDisplayIndexEnd',
	    value: function getDisplayIndexEnd(windowBottom) {
	      /* eslint-enable no-unused-vars */
	      if (process.env.NODE_ENV === 'development') {
	        throw new Error('getDisplayIndexEnd not implemented.');
	      }
	    }

	    // These are helper methods, and can be calculated from
	    // the above details.
	    /* eslint-disable no-unused-vars */
	  }, {
	    key: 'getTopSpacerHeight',
	    value: function getTopSpacerHeight(displayIndexStart) {
	      /* eslint-enable no-unused-vars */
	      if (process.env.NODE_ENV === 'development') {
	        throw new Error('getTopSpacerHeight not implemented.');
	      }
	    }

	    /* eslint-disable no-unused-vars */
	  }, {
	    key: 'getBottomSpacerHeight',
	    value: function getBottomSpacerHeight(displayIndexEnd) {
	      /* eslint-enable no-unused-vars */
	      if (process.env.NODE_ENV === 'development') {
	        throw new Error('getBottomSpacerHeight not implemented.');
	      }
	    }
	  }]);

	  return InfiniteComputer;
	})();

	module.exports = InfiniteComputer;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var InfiniteComputer = __webpack_require__(100),
	    bs = __webpack_require__(102);

	var ArrayInfiniteComputer = (function (_InfiniteComputer) {
	  _inherits(ArrayInfiniteComputer, _InfiniteComputer);

	  function ArrayInfiniteComputer(heightData, numberOfChildren) {
	    _classCallCheck(this, ArrayInfiniteComputer);

	    _get(Object.getPrototypeOf(ArrayInfiniteComputer.prototype), 'constructor', this).call(this, heightData, numberOfChildren);
	    this.prefixHeightData = this.heightData.reduce(function (acc, next) {
	      if (acc.length === 0) {
	        return [next];
	      } else {
	        acc.push(acc[acc.length - 1] + next);
	        return acc;
	      }
	    }, []);
	  }

	  _createClass(ArrayInfiniteComputer, [{
	    key: 'maybeIndexToIndex',
	    value: function maybeIndexToIndex(index) {
	      if (typeof index === 'undefined' || index === null) {
	        return this.prefixHeightData.length - 1;
	      } else {
	        return index;
	      }
	    }
	  }, {
	    key: 'getTotalScrollableHeight',
	    value: function getTotalScrollableHeight() {
	      var length = this.prefixHeightData.length;
	      return length === 0 ? 0 : this.prefixHeightData[length - 1];
	    }
	  }, {
	    key: 'getDisplayIndexStart',
	    value: function getDisplayIndexStart(windowTop) {
	      var foundIndex = bs.binaryIndexSearch(this.prefixHeightData, windowTop, bs.opts.CLOSEST_HIGHER);
	      return this.maybeIndexToIndex(foundIndex);
	    }
	  }, {
	    key: 'getDisplayIndexEnd',
	    value: function getDisplayIndexEnd(windowBottom) {
	      var foundIndex = bs.binaryIndexSearch(this.prefixHeightData, windowBottom, bs.opts.CLOSEST_HIGHER);
	      return this.maybeIndexToIndex(foundIndex);
	    }
	  }, {
	    key: 'getTopSpacerHeight',
	    value: function getTopSpacerHeight(displayIndexStart) {
	      var previous = displayIndexStart - 1;
	      return previous < 0 ? 0 : this.prefixHeightData[previous];
	    }
	  }, {
	    key: 'getBottomSpacerHeight',
	    value: function getBottomSpacerHeight(displayIndexEnd) {
	      if (displayIndexEnd === -1) {
	        return 0;
	      }
	      return this.getTotalScrollableHeight() - this.prefixHeightData[displayIndexEnd];
	    }
	  }]);

	  return ArrayInfiniteComputer;
	})(InfiniteComputer);

	module.exports = ArrayInfiniteComputer;

/***/ },
/* 102 */
/***/ function(module, exports) {

	"use strict";

	var opts = {
	  CLOSEST_LOWER: 1,
	  CLOSEST_HIGHER: 2
	};

	var binaryIndexSearch = function binaryIndexSearch(array, /* : Array<number> */
	item, /* : number */
	opt /* : number */) /* : ?number */{
	  var index;

	  var high = array.length - 1,
	      low = 0,
	      middle,
	      middleItem;

	  while (low <= high) {
	    middle = low + Math.floor((high - low) / 2);
	    middleItem = array[middle];

	    if (middleItem === item) {
	      return middle;
	    } else if (middleItem < item) {
	      low = middle + 1;
	    } else if (middleItem > item) {
	      high = middle - 1;
	    }
	  }

	  if (opt === opts.CLOSEST_LOWER && low > 0) {
	    index = low - 1;
	  } else if (opt === opts.CLOSEST_HIGHER && high < array.length - 1) {
	    index = high + 1;
	  }

	  return index;
	};

	module.exports = {
	  binaryIndexSearch: binaryIndexSearch,
	  opts: opts
	};

/***/ },
/* 103 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * lodash 3.2.0 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */

	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeIsFinite = global.isFinite;

	/**
	 * Checks if `value` is a finite primitive number.
	 *
	 * **Note:** This method is based on [`Number.isFinite`](http://ecma-international.org/ecma-262/6.0/#sec-number.isfinite).
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a finite number, else `false`.
	 * @example
	 *
	 * _.isFinite(10);
	 * // => true
	 *
	 * _.isFinite('10');
	 * // => false
	 *
	 * _.isFinite(true);
	 * // => false
	 *
	 * _.isFinite(Object(10));
	 * // => false
	 *
	 * _.isFinite(Infinity);
	 * // => false
	 */
	function isFinite(value) {
	  return typeof value == 'number' && nativeIsFinite(value);
	}

	module.exports = isFinite;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	var React = global.React || __webpack_require__(1);

	module.exports = {
	  preloadType: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.shape({
	    type: React.PropTypes.oneOf(['containerHeightScaleFactor']).isRequired,
	    amount: React.PropTypes.number.isRequired
	  })])
	};
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {// This module provides a centralized place for
	// runtime checking that the props passed to React Infinite
	// make the minimum amount of sense.

	'use strict';

	var React = global.React || __webpack_require__(1);
	var _isFinite = __webpack_require__(103);

	module.exports = function (props) {
	  var rie = 'Invariant Violation: ';
	  if (!(props.containerHeight || props.useWindowAsScrollContainer)) {
	    throw new Error(rie + 'Either containerHeight or useWindowAsScrollContainer must be provided.');
	  }

	  if (!(_isFinite(props.elementHeight) || Array.isArray(props.elementHeight))) {
	    throw new Error(rie + 'You must provide either a number or an array of numbers as the elementHeight.');
	  }

	  if (Array.isArray(props.elementHeight)) {
	    if (React.Children.count(props.children) !== props.elementHeight.length) {
	      throw new Error(rie + 'There must be as many values provided in the elementHeight prop as there are children.');
	    }
	  }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	var baseClone = __webpack_require__(107);

	/**
	 * This method is like `_.clone` except that it recursively clones `value`.
	 *
	 * @static
	 * @memberOf _
	 * @since 1.0.0
	 * @category Lang
	 * @param {*} value The value to recursively clone.
	 * @returns {*} Returns the deep cloned value.
	 * @see _.clone
	 * @example
	 *
	 * var objects = [{ 'a': 1 }, { 'b': 2 }];
	 *
	 * var deep = _.cloneDeep(objects);
	 * console.log(deep[0] === objects[0]);
	 * // => false
	 */
	function cloneDeep(value) {
	  return baseClone(value, true, true);
	}

	module.exports = cloneDeep;


/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(108),
	    arrayEach = __webpack_require__(152),
	    assignValue = __webpack_require__(153),
	    baseAssign = __webpack_require__(156),
	    cloneBuffer = __webpack_require__(178),
	    copyArray = __webpack_require__(179),
	    copySymbols = __webpack_require__(180),
	    getAllKeys = __webpack_require__(183),
	    getTag = __webpack_require__(186),
	    initCloneArray = __webpack_require__(191),
	    initCloneByTag = __webpack_require__(192),
	    initCloneObject = __webpack_require__(206),
	    isArray = __webpack_require__(164),
	    isBuffer = __webpack_require__(165),
	    isObject = __webpack_require__(132),
	    keys = __webpack_require__(158);

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]',
	    weakMapTag = '[object WeakMap]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/** Used to identify `toStringTag` values supported by `_.clone`. */
	var cloneableTags = {};
	cloneableTags[argsTag] = cloneableTags[arrayTag] =
	cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
	cloneableTags[boolTag] = cloneableTags[dateTag] =
	cloneableTags[float32Tag] = cloneableTags[float64Tag] =
	cloneableTags[int8Tag] = cloneableTags[int16Tag] =
	cloneableTags[int32Tag] = cloneableTags[mapTag] =
	cloneableTags[numberTag] = cloneableTags[objectTag] =
	cloneableTags[regexpTag] = cloneableTags[setTag] =
	cloneableTags[stringTag] = cloneableTags[symbolTag] =
	cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
	cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
	cloneableTags[errorTag] = cloneableTags[funcTag] =
	cloneableTags[weakMapTag] = false;

	/**
	 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
	 * traversed objects.
	 *
	 * @private
	 * @param {*} value The value to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @param {boolean} [isFull] Specify a clone including symbols.
	 * @param {Function} [customizer] The function to customize cloning.
	 * @param {string} [key] The key of `value`.
	 * @param {Object} [object] The parent object of `value`.
	 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
	 * @returns {*} Returns the cloned value.
	 */
	function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
	  var result;
	  if (customizer) {
	    result = object ? customizer(value, key, object, stack) : customizer(value);
	  }
	  if (result !== undefined) {
	    return result;
	  }
	  if (!isObject(value)) {
	    return value;
	  }
	  var isArr = isArray(value);
	  if (isArr) {
	    result = initCloneArray(value);
	    if (!isDeep) {
	      return copyArray(value, result);
	    }
	  } else {
	    var tag = getTag(value),
	        isFunc = tag == funcTag || tag == genTag;

	    if (isBuffer(value)) {
	      return cloneBuffer(value, isDeep);
	    }
	    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
	      result = initCloneObject(isFunc ? {} : value);
	      if (!isDeep) {
	        return copySymbols(value, baseAssign(result, value));
	      }
	    } else {
	      if (!cloneableTags[tag]) {
	        return object ? value : {};
	      }
	      result = initCloneByTag(value, tag, baseClone, isDeep);
	    }
	  }
	  // Check for circular references and return its corresponding clone.
	  stack || (stack = new Stack);
	  var stacked = stack.get(value);
	  if (stacked) {
	    return stacked;
	  }
	  stack.set(value, result);

	  var props = isArr ? undefined : (isFull ? getAllKeys : keys)(value);
	  arrayEach(props || value, function(subValue, key) {
	    if (props) {
	      key = subValue;
	      subValue = value[key];
	    }
	    // Recursively populate clone (susceptible to call stack limits).
	    assignValue(result, key, baseClone(subValue, isDeep, isFull, customizer, key, value, stack));
	  });
	  return result;
	}

	module.exports = baseClone;


/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(109),
	    stackClear = __webpack_require__(117),
	    stackDelete = __webpack_require__(118),
	    stackGet = __webpack_require__(119),
	    stackHas = __webpack_require__(120),
	    stackSet = __webpack_require__(121);

	/**
	 * Creates a stack cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Stack(entries) {
	  var data = this.__data__ = new ListCache(entries);
	  this.size = data.size;
	}

	// Add methods to `Stack`.
	Stack.prototype.clear = stackClear;
	Stack.prototype['delete'] = stackDelete;
	Stack.prototype.get = stackGet;
	Stack.prototype.has = stackHas;
	Stack.prototype.set = stackSet;

	module.exports = Stack;


/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	var listCacheClear = __webpack_require__(110),
	    listCacheDelete = __webpack_require__(111),
	    listCacheGet = __webpack_require__(114),
	    listCacheHas = __webpack_require__(115),
	    listCacheSet = __webpack_require__(116);

	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;

	module.exports = ListCache;


/***/ },
/* 110 */
/***/ function(module, exports) {

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	  this.size = 0;
	}

	module.exports = listCacheClear;


/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(112);

	/** Used for built-in method references. */
	var arrayProto = Array.prototype;

	/** Built-in value references. */
	var splice = arrayProto.splice;

	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  --this.size;
	  return true;
	}

	module.exports = listCacheDelete;


/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(113);

	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}

	module.exports = assocIndexOf;


/***/ },
/* 113 */
/***/ function(module, exports) {

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}

	module.exports = eq;


/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(112);

	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  return index < 0 ? undefined : data[index][1];
	}

	module.exports = listCacheGet;


/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(112);

	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return assocIndexOf(this.__data__, key) > -1;
	}

	module.exports = listCacheHas;


/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(112);

	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    ++this.size;
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}

	module.exports = listCacheSet;


/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(109);

	/**
	 * Removes all key-value entries from the stack.
	 *
	 * @private
	 * @name clear
	 * @memberOf Stack
	 */
	function stackClear() {
	  this.__data__ = new ListCache;
	  this.size = 0;
	}

	module.exports = stackClear;


/***/ },
/* 118 */
/***/ function(module, exports) {

	/**
	 * Removes `key` and its value from the stack.
	 *
	 * @private
	 * @name delete
	 * @memberOf Stack
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function stackDelete(key) {
	  var data = this.__data__,
	      result = data['delete'](key);

	  this.size = data.size;
	  return result;
	}

	module.exports = stackDelete;


/***/ },
/* 119 */
/***/ function(module, exports) {

	/**
	 * Gets the stack value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Stack
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function stackGet(key) {
	  return this.__data__.get(key);
	}

	module.exports = stackGet;


/***/ },
/* 120 */
/***/ function(module, exports) {

	/**
	 * Checks if a stack value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Stack
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function stackHas(key) {
	  return this.__data__.has(key);
	}

	module.exports = stackHas;


/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(109),
	    Map = __webpack_require__(122),
	    MapCache = __webpack_require__(137);

	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;

	/**
	 * Sets the stack `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Stack
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the stack cache instance.
	 */
	function stackSet(key, value) {
	  var data = this.__data__;
	  if (data instanceof ListCache) {
	    var pairs = data.__data__;
	    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
	      pairs.push([key, value]);
	      this.size = ++data.size;
	      return this;
	    }
	    data = this.__data__ = new MapCache(pairs);
	  }
	  data.set(key, value);
	  this.size = data.size;
	  return this;
	}

	module.exports = stackSet;


/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(123),
	    root = __webpack_require__(128);

	/* Built-in method references that are verified to be native. */
	var Map = getNative(root, 'Map');

	module.exports = Map;


/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsNative = __webpack_require__(124),
	    getValue = __webpack_require__(136);

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = getValue(object, key);
	  return baseIsNative(value) ? value : undefined;
	}

	module.exports = getNative;


/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(125),
	    isMasked = __webpack_require__(133),
	    isObject = __webpack_require__(132),
	    toSource = __webpack_require__(135);

	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}

	module.exports = baseIsNative;


/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(126),
	    isObject = __webpack_require__(132);

	/** `Object#toString` result references. */
	var asyncTag = '[object AsyncFunction]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    proxyTag = '[object Proxy]';

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  if (!isObject(value)) {
	    return false;
	  }
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 9 which returns 'object' for typed arrays and other constructors.
	  var tag = baseGetTag(value);
	  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
	}

	module.exports = isFunction;


/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(127),
	    getRawTag = __webpack_require__(130),
	    objectToString = __webpack_require__(131);

	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';

	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  value = Object(value);
	  return (symToStringTag && symToStringTag in value)
	    ? getRawTag(value)
	    : objectToString(value);
	}

	module.exports = baseGetTag;


/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(128);

	/** Built-in value references. */
	var Symbol = root.Symbol;

	module.exports = Symbol;


/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	var freeGlobal = __webpack_require__(129);

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	module.exports = root;


/***/ },
/* 129 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

	module.exports = freeGlobal;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(127);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty.call(value, symToStringTag),
	      tag = value[symToStringTag];

	  try {
	    value[symToStringTag] = undefined;
	    var unmasked = true;
	  } catch (e) {}

	  var result = nativeObjectToString.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag] = tag;
	    } else {
	      delete value[symToStringTag];
	    }
	  }
	  return result;
	}

	module.exports = getRawTag;


/***/ },
/* 131 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString.call(value);
	}

	module.exports = objectToString;


/***/ },
/* 132 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return value != null && (type == 'object' || type == 'function');
	}

	module.exports = isObject;


/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	var coreJsData = __webpack_require__(134);

	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());

	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}

	module.exports = isMasked;


/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(128);

	/** Used to detect overreaching core-js shims. */
	var coreJsData = root['__core-js_shared__'];

	module.exports = coreJsData;


/***/ },
/* 135 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var funcProto = Function.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to convert.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}

	module.exports = toSource;


/***/ },
/* 136 */
/***/ function(module, exports) {

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}

	module.exports = getValue;


/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	var mapCacheClear = __webpack_require__(138),
	    mapCacheDelete = __webpack_require__(146),
	    mapCacheGet = __webpack_require__(149),
	    mapCacheHas = __webpack_require__(150),
	    mapCacheSet = __webpack_require__(151);

	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `MapCache`.
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype['delete'] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;

	module.exports = MapCache;


/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	var Hash = __webpack_require__(139),
	    ListCache = __webpack_require__(109),
	    Map = __webpack_require__(122);

	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.size = 0;
	  this.__data__ = {
	    'hash': new Hash,
	    'map': new (Map || ListCache),
	    'string': new Hash
	  };
	}

	module.exports = mapCacheClear;


/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	var hashClear = __webpack_require__(140),
	    hashDelete = __webpack_require__(142),
	    hashGet = __webpack_require__(143),
	    hashHas = __webpack_require__(144),
	    hashSet = __webpack_require__(145);

	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `Hash`.
	Hash.prototype.clear = hashClear;
	Hash.prototype['delete'] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;

	module.exports = Hash;


/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(141);

	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = nativeCreate ? nativeCreate(null) : {};
	  this.size = 0;
	}

	module.exports = hashClear;


/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(123);

	/* Built-in method references that are verified to be native. */
	var nativeCreate = getNative(Object, 'create');

	module.exports = nativeCreate;


/***/ },
/* 142 */
/***/ function(module, exports) {

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  var result = this.has(key) && delete this.__data__[key];
	  this.size -= result ? 1 : 0;
	  return result;
	}

	module.exports = hashDelete;


/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(141);

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty.call(data, key) ? data[key] : undefined;
	}

	module.exports = hashGet;


/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(141);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
	}

	module.exports = hashHas;


/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(141);

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  this.size += this.has(key) ? 0 : 1;
	  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
	  return this;
	}

	module.exports = hashSet;


/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(147);

	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  var result = getMapData(this, key)['delete'](key);
	  this.size -= result ? 1 : 0;
	  return result;
	}

	module.exports = mapCacheDelete;


/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	var isKeyable = __webpack_require__(148);

	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}

	module.exports = getMapData;


/***/ },
/* 148 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}

	module.exports = isKeyable;


/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(147);

	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return getMapData(this, key).get(key);
	}

	module.exports = mapCacheGet;


/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(147);

	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return getMapData(this, key).has(key);
	}

	module.exports = mapCacheHas;


/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(147);

	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  var data = getMapData(this, key),
	      size = data.size;

	  data.set(key, value);
	  this.size += data.size == size ? 0 : 1;
	  return this;
	}

	module.exports = mapCacheSet;


/***/ },
/* 152 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.forEach` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns `array`.
	 */
	function arrayEach(array, iteratee) {
	  var index = -1,
	      length = array == null ? 0 : array.length;

	  while (++index < length) {
	    if (iteratee(array[index], index, array) === false) {
	      break;
	    }
	  }
	  return array;
	}

	module.exports = arrayEach;


/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	var baseAssignValue = __webpack_require__(154),
	    eq = __webpack_require__(113);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Assigns `value` to `key` of `object` if the existing value is not equivalent
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignValue(object, key, value) {
	  var objValue = object[key];
	  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
	      (value === undefined && !(key in object))) {
	    baseAssignValue(object, key, value);
	  }
	}

	module.exports = assignValue;


/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	var defineProperty = __webpack_require__(155);

	/**
	 * The base implementation of `assignValue` and `assignMergeValue` without
	 * value checks.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function baseAssignValue(object, key, value) {
	  if (key == '__proto__' && defineProperty) {
	    defineProperty(object, key, {
	      'configurable': true,
	      'enumerable': true,
	      'value': value,
	      'writable': true
	    });
	  } else {
	    object[key] = value;
	  }
	}

	module.exports = baseAssignValue;


/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(123);

	var defineProperty = (function() {
	  try {
	    var func = getNative(Object, 'defineProperty');
	    func({}, '', {});
	    return func;
	  } catch (e) {}
	}());

	module.exports = defineProperty;


/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	var copyObject = __webpack_require__(157),
	    keys = __webpack_require__(158);

	/**
	 * The base implementation of `_.assign` without support for multiple sources
	 * or `customizer` functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @returns {Object} Returns `object`.
	 */
	function baseAssign(object, source) {
	  return object && copyObject(source, keys(source), object);
	}

	module.exports = baseAssign;


/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	var assignValue = __webpack_require__(153),
	    baseAssignValue = __webpack_require__(154);

	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property identifiers to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @param {Function} [customizer] The function to customize copied values.
	 * @returns {Object} Returns `object`.
	 */
	function copyObject(source, props, object, customizer) {
	  var isNew = !object;
	  object || (object = {});

	  var index = -1,
	      length = props.length;

	  while (++index < length) {
	    var key = props[index];

	    var newValue = customizer
	      ? customizer(object[key], source[key], key, object, source)
	      : undefined;

	    if (newValue === undefined) {
	      newValue = source[key];
	    }
	    if (isNew) {
	      baseAssignValue(object, key, newValue);
	    } else {
	      assignValue(object, key, newValue);
	    }
	  }
	  return object;
	}

	module.exports = copyObject;


/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	var arrayLikeKeys = __webpack_require__(159),
	    baseKeys = __webpack_require__(173),
	    isArrayLike = __webpack_require__(177);

	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
	}

	module.exports = keys;


/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	var baseTimes = __webpack_require__(160),
	    isArguments = __webpack_require__(161),
	    isArray = __webpack_require__(164),
	    isBuffer = __webpack_require__(165),
	    isIndex = __webpack_require__(167),
	    isTypedArray = __webpack_require__(168);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
	function arrayLikeKeys(value, inherited) {
	  var isArr = isArray(value),
	      isArg = !isArr && isArguments(value),
	      isBuff = !isArr && !isArg && isBuffer(value),
	      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
	      skipIndexes = isArr || isArg || isBuff || isType,
	      result = skipIndexes ? baseTimes(value.length, String) : [],
	      length = result.length;

	  for (var key in value) {
	    if ((inherited || hasOwnProperty.call(value, key)) &&
	        !(skipIndexes && (
	           // Safari 9 has enumerable `arguments.length` in strict mode.
	           key == 'length' ||
	           // Node.js 0.10 has enumerable non-index properties on buffers.
	           (isBuff && (key == 'offset' || key == 'parent')) ||
	           // PhantomJS 2 has enumerable non-index properties on typed arrays.
	           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
	           // Skip index properties.
	           isIndex(key, length)
	        ))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = arrayLikeKeys;


/***/ },
/* 160 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);

	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}

	module.exports = baseTimes;


/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsArguments = __webpack_require__(162),
	    isObjectLike = __webpack_require__(163);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;

	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
	  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
	    !propertyIsEnumerable.call(value, 'callee');
	};

	module.exports = isArguments;


/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(126),
	    isObjectLike = __webpack_require__(163);

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]';

	/**
	 * The base implementation of `_.isArguments`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 */
	function baseIsArguments(value) {
	  return isObjectLike(value) && baseGetTag(value) == argsTag;
	}

	module.exports = baseIsArguments;


/***/ },
/* 163 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}

	module.exports = isObjectLike;


/***/ },
/* 164 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;

	module.exports = isArray;


/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(128),
	    stubFalse = __webpack_require__(166);

	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : undefined;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

	/**
	 * Checks if `value` is a buffer.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	 * @example
	 *
	 * _.isBuffer(new Buffer(2));
	 * // => true
	 *
	 * _.isBuffer(new Uint8Array(2));
	 * // => false
	 */
	var isBuffer = nativeIsBuffer || stubFalse;

	module.exports = isBuffer;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(91)(module)))

/***/ },
/* 166 */
/***/ function(module, exports) {

	/**
	 * This method returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {boolean} Returns `false`.
	 * @example
	 *
	 * _.times(2, _.stubFalse);
	 * // => [false, false]
	 */
	function stubFalse() {
	  return false;
	}

	module.exports = stubFalse;


/***/ },
/* 167 */
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return !!length &&
	    (typeof value == 'number' || reIsUint.test(value)) &&
	    (value > -1 && value % 1 == 0 && value < length);
	}

	module.exports = isIndex;


/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsTypedArray = __webpack_require__(169),
	    baseUnary = __webpack_require__(171),
	    nodeUtil = __webpack_require__(172);

	/* Node.js helper references. */
	var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

	module.exports = isTypedArray;


/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(126),
	    isLength = __webpack_require__(170),
	    isObjectLike = __webpack_require__(163);

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    weakMapTag = '[object WeakMap]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
	typedArrayTags[errorTag] = typedArrayTags[funcTag] =
	typedArrayTags[mapTag] = typedArrayTags[numberTag] =
	typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
	typedArrayTags[setTag] = typedArrayTags[stringTag] =
	typedArrayTags[weakMapTag] = false;

	/**
	 * The base implementation of `_.isTypedArray` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 */
	function baseIsTypedArray(value) {
	  return isObjectLike(value) &&
	    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
	}

	module.exports = baseIsTypedArray;


/***/ },
/* 170 */
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	module.exports = isLength;


/***/ },
/* 171 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.unary` without support for storing metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */
	function baseUnary(func) {
	  return function(value) {
	    return func(value);
	  };
	}

	module.exports = baseUnary;


/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(129);

	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Detect free variable `process` from Node.js. */
	var freeProcess = moduleExports && freeGlobal.process;

	/** Used to access faster Node.js helpers. */
	var nodeUtil = (function() {
	  try {
	    return freeProcess && freeProcess.binding('util');
	  } catch (e) {}
	}());

	module.exports = nodeUtil;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(91)(module)))

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	var isPrototype = __webpack_require__(174),
	    nativeKeys = __webpack_require__(175);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  if (!isPrototype(object)) {
	    return nativeKeys(object);
	  }
	  var result = [];
	  for (var key in Object(object)) {
	    if (hasOwnProperty.call(object, key) && key != 'constructor') {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = baseKeys;


/***/ },
/* 174 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

	  return value === proto;
	}

	module.exports = isPrototype;


/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(176);

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys = overArg(Object.keys, Object);

	module.exports = nativeKeys;


/***/ },
/* 176 */
/***/ function(module, exports) {

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}

	module.exports = overArg;


/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(125),
	    isLength = __webpack_require__(170);

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}

	module.exports = isArrayLike;


/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(128);

	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : undefined,
	    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

	/**
	 * Creates a clone of  `buffer`.
	 *
	 * @private
	 * @param {Buffer} buffer The buffer to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Buffer} Returns the cloned buffer.
	 */
	function cloneBuffer(buffer, isDeep) {
	  if (isDeep) {
	    return buffer.slice();
	  }
	  var length = buffer.length,
	      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

	  buffer.copy(result);
	  return result;
	}

	module.exports = cloneBuffer;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(91)(module)))

/***/ },
/* 179 */
/***/ function(module, exports) {

	/**
	 * Copies the values of `source` to `array`.
	 *
	 * @private
	 * @param {Array} source The array to copy values from.
	 * @param {Array} [array=[]] The array to copy values to.
	 * @returns {Array} Returns `array`.
	 */
	function copyArray(source, array) {
	  var index = -1,
	      length = source.length;

	  array || (array = Array(length));
	  while (++index < length) {
	    array[index] = source[index];
	  }
	  return array;
	}

	module.exports = copyArray;


/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	var copyObject = __webpack_require__(157),
	    getSymbols = __webpack_require__(181);

	/**
	 * Copies own symbol properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy symbols from.
	 * @param {Object} [object={}] The object to copy symbols to.
	 * @returns {Object} Returns `object`.
	 */
	function copySymbols(source, object) {
	  return copyObject(source, getSymbols(source), object);
	}

	module.exports = copySymbols;


/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(176),
	    stubArray = __webpack_require__(182);

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetSymbols = Object.getOwnPropertySymbols;

	/**
	 * Creates an array of the own enumerable symbol properties of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of symbols.
	 */
	var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;

	module.exports = getSymbols;


/***/ },
/* 182 */
/***/ function(module, exports) {

	/**
	 * This method returns a new empty array.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {Array} Returns the new empty array.
	 * @example
	 *
	 * var arrays = _.times(2, _.stubArray);
	 *
	 * console.log(arrays);
	 * // => [[], []]
	 *
	 * console.log(arrays[0] === arrays[1]);
	 * // => false
	 */
	function stubArray() {
	  return [];
	}

	module.exports = stubArray;


/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetAllKeys = __webpack_require__(184),
	    getSymbols = __webpack_require__(181),
	    keys = __webpack_require__(158);

	/**
	 * Creates an array of own enumerable property names and symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function getAllKeys(object) {
	  return baseGetAllKeys(object, keys, getSymbols);
	}

	module.exports = getAllKeys;


/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	var arrayPush = __webpack_require__(185),
	    isArray = __webpack_require__(164);

	/**
	 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
	 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
	 * symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @param {Function} symbolsFunc The function to get the symbols of `object`.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function baseGetAllKeys(object, keysFunc, symbolsFunc) {
	  var result = keysFunc(object);
	  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
	}

	module.exports = baseGetAllKeys;


/***/ },
/* 185 */
/***/ function(module, exports) {

	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
	function arrayPush(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;

	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}

	module.exports = arrayPush;


/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	var DataView = __webpack_require__(187),
	    Map = __webpack_require__(122),
	    Promise = __webpack_require__(188),
	    Set = __webpack_require__(189),
	    WeakMap = __webpack_require__(190),
	    baseGetTag = __webpack_require__(126),
	    toSource = __webpack_require__(135);

	/** `Object#toString` result references. */
	var mapTag = '[object Map]',
	    objectTag = '[object Object]',
	    promiseTag = '[object Promise]',
	    setTag = '[object Set]',
	    weakMapTag = '[object WeakMap]';

	var dataViewTag = '[object DataView]';

	/** Used to detect maps, sets, and weakmaps. */
	var dataViewCtorString = toSource(DataView),
	    mapCtorString = toSource(Map),
	    promiseCtorString = toSource(Promise),
	    setCtorString = toSource(Set),
	    weakMapCtorString = toSource(WeakMap);

	/**
	 * Gets the `toStringTag` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	var getTag = baseGetTag;

	// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
	if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
	    (Map && getTag(new Map) != mapTag) ||
	    (Promise && getTag(Promise.resolve()) != promiseTag) ||
	    (Set && getTag(new Set) != setTag) ||
	    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
	  getTag = function(value) {
	    var result = baseGetTag(value),
	        Ctor = result == objectTag ? value.constructor : undefined,
	        ctorString = Ctor ? toSource(Ctor) : '';

	    if (ctorString) {
	      switch (ctorString) {
	        case dataViewCtorString: return dataViewTag;
	        case mapCtorString: return mapTag;
	        case promiseCtorString: return promiseTag;
	        case setCtorString: return setTag;
	        case weakMapCtorString: return weakMapTag;
	      }
	    }
	    return result;
	  };
	}

	module.exports = getTag;


/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(123),
	    root = __webpack_require__(128);

	/* Built-in method references that are verified to be native. */
	var DataView = getNative(root, 'DataView');

	module.exports = DataView;


/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(123),
	    root = __webpack_require__(128);

	/* Built-in method references that are verified to be native. */
	var Promise = getNative(root, 'Promise');

	module.exports = Promise;


/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(123),
	    root = __webpack_require__(128);

	/* Built-in method references that are verified to be native. */
	var Set = getNative(root, 'Set');

	module.exports = Set;


/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(123),
	    root = __webpack_require__(128);

	/* Built-in method references that are verified to be native. */
	var WeakMap = getNative(root, 'WeakMap');

	module.exports = WeakMap;


/***/ },
/* 191 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Initializes an array clone.
	 *
	 * @private
	 * @param {Array} array The array to clone.
	 * @returns {Array} Returns the initialized clone.
	 */
	function initCloneArray(array) {
	  var length = array.length,
	      result = array.constructor(length);

	  // Add properties assigned by `RegExp#exec`.
	  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
	    result.index = array.index;
	    result.input = array.input;
	  }
	  return result;
	}

	module.exports = initCloneArray;


/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	var cloneArrayBuffer = __webpack_require__(193),
	    cloneDataView = __webpack_require__(195),
	    cloneMap = __webpack_require__(196),
	    cloneRegExp = __webpack_require__(200),
	    cloneSet = __webpack_require__(201),
	    cloneSymbol = __webpack_require__(204),
	    cloneTypedArray = __webpack_require__(205);

	/** `Object#toString` result references. */
	var boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/**
	 * Initializes an object clone based on its `toStringTag`.
	 *
	 * **Note:** This function only supports cloning values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @param {string} tag The `toStringTag` of the object to clone.
	 * @param {Function} cloneFunc The function to clone values.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneByTag(object, tag, cloneFunc, isDeep) {
	  var Ctor = object.constructor;
	  switch (tag) {
	    case arrayBufferTag:
	      return cloneArrayBuffer(object);

	    case boolTag:
	    case dateTag:
	      return new Ctor(+object);

	    case dataViewTag:
	      return cloneDataView(object, isDeep);

	    case float32Tag: case float64Tag:
	    case int8Tag: case int16Tag: case int32Tag:
	    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
	      return cloneTypedArray(object, isDeep);

	    case mapTag:
	      return cloneMap(object, isDeep, cloneFunc);

	    case numberTag:
	    case stringTag:
	      return new Ctor(object);

	    case regexpTag:
	      return cloneRegExp(object);

	    case setTag:
	      return cloneSet(object, isDeep, cloneFunc);

	    case symbolTag:
	      return cloneSymbol(object);
	  }
	}

	module.exports = initCloneByTag;


/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	var Uint8Array = __webpack_require__(194);

	/**
	 * Creates a clone of `arrayBuffer`.
	 *
	 * @private
	 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
	 * @returns {ArrayBuffer} Returns the cloned array buffer.
	 */
	function cloneArrayBuffer(arrayBuffer) {
	  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
	  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
	  return result;
	}

	module.exports = cloneArrayBuffer;


/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(128);

	/** Built-in value references. */
	var Uint8Array = root.Uint8Array;

	module.exports = Uint8Array;


/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	var cloneArrayBuffer = __webpack_require__(193);

	/**
	 * Creates a clone of `dataView`.
	 *
	 * @private
	 * @param {Object} dataView The data view to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned data view.
	 */
	function cloneDataView(dataView, isDeep) {
	  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
	  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
	}

	module.exports = cloneDataView;


/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	var addMapEntry = __webpack_require__(197),
	    arrayReduce = __webpack_require__(198),
	    mapToArray = __webpack_require__(199);

	/**
	 * Creates a clone of `map`.
	 *
	 * @private
	 * @param {Object} map The map to clone.
	 * @param {Function} cloneFunc The function to clone values.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned map.
	 */
	function cloneMap(map, isDeep, cloneFunc) {
	  var array = isDeep ? cloneFunc(mapToArray(map), true) : mapToArray(map);
	  return arrayReduce(array, addMapEntry, new map.constructor);
	}

	module.exports = cloneMap;


/***/ },
/* 197 */
/***/ function(module, exports) {

	/**
	 * Adds the key-value `pair` to `map`.
	 *
	 * @private
	 * @param {Object} map The map to modify.
	 * @param {Array} pair The key-value pair to add.
	 * @returns {Object} Returns `map`.
	 */
	function addMapEntry(map, pair) {
	  // Don't return `map.set` because it's not chainable in IE 11.
	  map.set(pair[0], pair[1]);
	  return map;
	}

	module.exports = addMapEntry;


/***/ },
/* 198 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.reduce` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {*} [accumulator] The initial value.
	 * @param {boolean} [initAccum] Specify using the first element of `array` as
	 *  the initial value.
	 * @returns {*} Returns the accumulated value.
	 */
	function arrayReduce(array, iteratee, accumulator, initAccum) {
	  var index = -1,
	      length = array == null ? 0 : array.length;

	  if (initAccum && length) {
	    accumulator = array[++index];
	  }
	  while (++index < length) {
	    accumulator = iteratee(accumulator, array[index], index, array);
	  }
	  return accumulator;
	}

	module.exports = arrayReduce;


/***/ },
/* 199 */
/***/ function(module, exports) {

	/**
	 * Converts `map` to its key-value pairs.
	 *
	 * @private
	 * @param {Object} map The map to convert.
	 * @returns {Array} Returns the key-value pairs.
	 */
	function mapToArray(map) {
	  var index = -1,
	      result = Array(map.size);

	  map.forEach(function(value, key) {
	    result[++index] = [key, value];
	  });
	  return result;
	}

	module.exports = mapToArray;


/***/ },
/* 200 */
/***/ function(module, exports) {

	/** Used to match `RegExp` flags from their coerced string values. */
	var reFlags = /\w*$/;

	/**
	 * Creates a clone of `regexp`.
	 *
	 * @private
	 * @param {Object} regexp The regexp to clone.
	 * @returns {Object} Returns the cloned regexp.
	 */
	function cloneRegExp(regexp) {
	  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
	  result.lastIndex = regexp.lastIndex;
	  return result;
	}

	module.exports = cloneRegExp;


/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	var addSetEntry = __webpack_require__(202),
	    arrayReduce = __webpack_require__(198),
	    setToArray = __webpack_require__(203);

	/**
	 * Creates a clone of `set`.
	 *
	 * @private
	 * @param {Object} set The set to clone.
	 * @param {Function} cloneFunc The function to clone values.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned set.
	 */
	function cloneSet(set, isDeep, cloneFunc) {
	  var array = isDeep ? cloneFunc(setToArray(set), true) : setToArray(set);
	  return arrayReduce(array, addSetEntry, new set.constructor);
	}

	module.exports = cloneSet;


/***/ },
/* 202 */
/***/ function(module, exports) {

	/**
	 * Adds `value` to `set`.
	 *
	 * @private
	 * @param {Object} set The set to modify.
	 * @param {*} value The value to add.
	 * @returns {Object} Returns `set`.
	 */
	function addSetEntry(set, value) {
	  // Don't return `set.add` because it's not chainable in IE 11.
	  set.add(value);
	  return set;
	}

	module.exports = addSetEntry;


/***/ },
/* 203 */
/***/ function(module, exports) {

	/**
	 * Converts `set` to an array of its values.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the values.
	 */
	function setToArray(set) {
	  var index = -1,
	      result = Array(set.size);

	  set.forEach(function(value) {
	    result[++index] = value;
	  });
	  return result;
	}

	module.exports = setToArray;


/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(127);

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

	/**
	 * Creates a clone of the `symbol` object.
	 *
	 * @private
	 * @param {Object} symbol The symbol object to clone.
	 * @returns {Object} Returns the cloned symbol object.
	 */
	function cloneSymbol(symbol) {
	  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
	}

	module.exports = cloneSymbol;


/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	var cloneArrayBuffer = __webpack_require__(193);

	/**
	 * Creates a clone of `typedArray`.
	 *
	 * @private
	 * @param {Object} typedArray The typed array to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned typed array.
	 */
	function cloneTypedArray(typedArray, isDeep) {
	  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
	  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
	}

	module.exports = cloneTypedArray;


/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	var baseCreate = __webpack_require__(207),
	    getPrototype = __webpack_require__(208),
	    isPrototype = __webpack_require__(174);

	/**
	 * Initializes an object clone.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneObject(object) {
	  return (typeof object.constructor == 'function' && !isPrototype(object))
	    ? baseCreate(getPrototype(object))
	    : {};
	}

	module.exports = initCloneObject;


/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(132);

	/** Built-in value references. */
	var objectCreate = Object.create;

	/**
	 * The base implementation of `_.create` without support for assigning
	 * properties to the created object.
	 *
	 * @private
	 * @param {Object} proto The object to inherit from.
	 * @returns {Object} Returns the new object.
	 */
	var baseCreate = (function() {
	  function object() {}
	  return function(proto) {
	    if (!isObject(proto)) {
	      return {};
	    }
	    if (objectCreate) {
	      return objectCreate(proto);
	    }
	    object.prototype = proto;
	    var result = new object;
	    object.prototype = undefined;
	    return result;
	  };
	}());

	module.exports = baseCreate;


/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(176);

	/** Built-in value references. */
	var getPrototype = overArg(Object.getPrototypeOf, Object);

	module.exports = getPrototype;


/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(36);
	var createReactClass = __webpack_require__(3);
	var PropTypes = __webpack_require__(11);
	var classNames = __webpack_require__(17);
	var ClassNameMixin = __webpack_require__(18);
	var TransitionEvents = __webpack_require__(53);

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
	      classPrefix: 'slider',
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

/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(36);
	var createReactClass = __webpack_require__(3);
	var PropTypes = __webpack_require__(11);
	var assign = __webpack_require__(45);
	var classNames = __webpack_require__(17);
	var ClassNameMixin = __webpack_require__(18);
	var Events = __webpack_require__(67);
	var debounce = __webpack_require__(86);
	var domUtils = __webpack_require__(77);
	var canUseDOM = __webpack_require__(54);

	var Sticky = createReactClass({
	  mixins: [ClassNameMixin],

	  propTypes: {
	    classPrefix: PropTypes.string,
	    media: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	    top: PropTypes.number,
	    animation: PropTypes.string,
	    bottom: PropTypes.oneOfType([PropTypes.number, PropTypes.func])
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'sticky',
	      top: 0
	    };
	  },

	  getInitialState: function getInitialState() {
	    return {
	      sticked: false,
	      holderStyle: null,
	      initialized: false,
	      stickerStyle: null
	    };
	  },

	  componentDidMount: function componentDidMount() {
	    if (canUseDOM) {
	      this._init();
	      this.checkPosition();
	      var ownerWindow = domUtils.ownerWindow(ReactDOM.findDOMNode(this.refs.sticker));

	      this._scrollListener = Events.on(ownerWindow, 'scroll', debounce(this.checkPosition, 10).bind(this));
	      this._resizeListener = Events.on(ownerWindow, 'resize', debounce(this.checkPosition, 50).bind(this));
	    }
	  },

	  componentWillUnmount: function componentWillUnmount() {
	    this._scrollListener && this._scrollListener.off();
	    this._resizeListener && this._resizeListener.off();
	  },

	  _init: function _init() {
	    if (this.state.initialized || !this.isMounted() || !this.checkMedia()) {
	      return;
	    }

	    var sticker = ReactDOM.findDOMNode(this.refs.sticker);
	    var elStyle = getComputedStyle(sticker);
	    var outerHeight = parseInt(elStyle.height, 10) + parseInt(elStyle.marginTop, 10) + parseInt(elStyle.marginBottom, 10);
	    var style = {
	      height: elStyle.position !== 'absolute' ? outerHeight : '',
	      float: elStyle.float !== 'none' ? elStyle.float : '',
	      margin: elStyle.margin
	    };

	    this.setState({
	      initialized: true,
	      holderStyle: style,
	      stickerStyle: {
	        margin: 0
	      }
	    });
	  },

	  checkPosition: function checkPosition() {
	    if (this.isMounted) {
	      var scrollTop = domUtils.scrollTop(window);
	      var offsetTop = this.props.top;
	      var offsetBottom = this.props.bottom;
	      var holder = ReactDOM.findDOMNode(this);

	      if (typeof offsetBottom === 'function') {
	        offsetBottom = offsetBottom();
	      }

	      var checkResult = scrollTop > domUtils.offset(holder).top;

	      if (checkResult && !this.state.sticked) {
	        this.setState({
	          stickerStyle: {
	            top: offsetTop,
	            left: domUtils.offset(holder).left,
	            width: holder.offsetWidth
	          }
	        });
	      }

	      if (this.state.sticked && !checkResult) {
	        this.resetSticker();
	      }

	      this.setState({
	        sticked: checkResult
	      });
	    }
	  },

	  checkMedia: function checkMedia() {
	    // TODO: add element visible detector
	    /*if (!this.$element.is(':visible')) {
	     return false;
	     }*/

	    var media = this.props.media;

	    if (media) {
	      switch (typeof media === 'undefined' ? 'undefined' : _typeof(media)) {
	        case 'number':
	          if (window.innerWidth < media) {
	            return false;
	          }
	          break;

	        case 'string':
	          if (window.matchMedia && !window.matchMedia(media).matches) {
	            return false;
	          }
	          break;
	      }
	    }

	    return true;
	  },

	  resetSticker: function resetSticker() {
	    this.setState({
	      stickerStyle: {
	        position: '',
	        top: '',
	        width: '',
	        left: '',
	        margin: 0
	      }
	    });
	  },

	  // Smooth scroll
	  handleClick: function handleClick(e) {
	    e.preventDefault();

	    if (e.target && e.target.nodeName === 'A') {
	      var targetNode = document.getElementById(e.target.getAttribute('href').substr(1));

	      targetNode && this.smoothScroll(window, {
	        position: domUtils.offset(targetNode).top - this.props.offsetTop || 0
	      });
	    }
	  },

	  render: function render() {
	    var stickyClass = this.getClassSet();
	    var child = React.Children.only(this.props.children);
	    var animation = this.props.animation && this.state.sticked ? this.setClassNamespace('animation-' + this.props.animation) : null;

	    // transfer child's props to cloned element
	    return React.createElement(
	      'div',
	      _extends({}, this.props, {
	        style: this.state.holderStyle,
	        className: classNames(this.props.className, this.prefixClass('placeholder'))
	      }),
	      React.cloneElement(child, assign({}, child.props, {
	        style: this.state.stickerStyle,
	        ref: 'sticker',
	        className: classNames(child.props.className, this.state.sticked ? stickyClass : null, animation)
	      }))
	    );
	  }
	});

	module.exports = Sticky;

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(36);
	var createReactClass = __webpack_require__(3);
	var PropTypes = __webpack_require__(11);
	var classNames = __webpack_require__(17);
	var ClassNameMixin = __webpack_require__(18);
	var CollapseMixin = __webpack_require__(52);

	var Accordion = createReactClass({
	  mixins: [ClassNameMixin],

	  propTypes: {
	    theme: PropTypes.oneOf(['default', 'basic', 'gapped']),
	    data: PropTypes.array,
	    activeKey: PropTypes.any,
	    defaultActiveKey: PropTypes.any
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'accordion',
	      theme: 'default'
	    };
	  },

	  getInitialState: function getInitialState() {
	    return {
	      activeKey: this.props.defaultActiveKey
	    };
	  },

	  handleSelect: function handleSelect(e, key) {
	    e.preventDefault();

	    if (this.state.activeKey === key) {
	      key = null;
	    }

	    this.setState({
	      activeKey: key
	    });
	  },

	  render: function render() {
	    var classSet = this.getClassSet();

	    classSet[this.prefixClass(this.props.theme)] = true;

	    return React.createElement(
	      'section',
	      _extends({}, this.props, {
	        'data-am-widget': this.props.classPrefix,
	        className: classNames(classSet, this.props.className)
	      }),
	      this.props.data.map(function (item, index) {
	        return React.createElement(
	          Accordion.Item,
	          {
	            title: item.title,
	            expanded: item.active && item.disabled,
	            defaultExpanded: item.active && !item.disabled,
	            eventKey: index,
	            key: index
	          },
	          item.content
	        );
	      })
	    );
	  }
	});

	Accordion.Item = createReactClass({
	  mixins: [ClassNameMixin, CollapseMixin],

	  propTypes: {
	    title: PropTypes.node,
	    expanded: PropTypes.bool
	  },

	  handleToggle: function handleToggle() {
	    this.setState({
	      expanded: !this.state.expanded
	    });
	  },

	  getCollapsibleDimensionValue: function getCollapsibleDimensionValue() {
	    return ReactDOM.findDOMNode(this.refs.panel).scrollHeight;
	  },

	  getCollapsibleDOMNode: function getCollapsibleDOMNode() {
	    if (!this.isMounted() || !this.refs || !this.refs.panel) {
	      return null;
	    }

	    return ReactDOM.findDOMNode(this.refs.panel);
	  },

	  render: function render() {
	    return React.createElement(
	      'dl',
	      {
	        className: classNames(this.setClassNamespace('accordion-item'), this.isExpanded() ? this.setClassNamespace('active') : null, this.props.expanded ? this.setClassNamespace('disabled') : null)
	      },
	      React.createElement(
	        'dt',
	        {
	          onClick: this.handleToggle,
	          className: this.setClassNamespace('accordion-title')
	        },
	        this.props.title
	      ),
	      React.createElement(
	        'dd',
	        {
	          className: classNames(this.getCollapsibleClassSet()),
	          ref: 'panel' },
	        React.createElement('div', {
	          className: this.setClassNamespace('accordion-content'),
	          dangerouslySetInnerHTML: { __html: this.props.children }
	        })
	      )
	    );
	  }
	});

	module.exports = Accordion;

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var React = __webpack_require__(1);
	var createReactClass = __webpack_require__(3);
	var PropTypes = __webpack_require__(11);
	var classNames = __webpack_require__(17);
	var ClassNameMixin = __webpack_require__(18);

	var Divider = createReactClass({
	  mixins: [ClassNameMixin],

	  propTypes: {
	    theme: PropTypes.oneOf(['default', 'dotted', 'dashed']),
	    classPrefix: PropTypes.string
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'divider',
	      theme: 'default'
	    };
	  },

	  render: function render() {
	    var classSet = this.getClassSet();

	    return React.createElement('hr', _extends({}, this.props, {
	      'data-am-widget': this.props.classPrefix,
	      className: classNames(this.props.className, classSet)
	    }));
	  }
	});

	module.exports = Divider;

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var React = __webpack_require__(1);
	var createReactClass = __webpack_require__(3);
	var PropTypes = __webpack_require__(11);
	var classNames = __webpack_require__(17);
	var ClassNameMixin = __webpack_require__(18);

	var Footer = createReactClass({
	  mixins: [ClassNameMixin],

	  propTypes: {
	    theme: PropTypes.oneOf(['default']),
	    classPrefix: PropTypes.string,
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
	      classPrefix: 'footer',
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
	        'data-am-widget': this.props.classPrefix,
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

/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var React = __webpack_require__(1);
	var createReactClass = __webpack_require__(3);
	var PropTypes = __webpack_require__(11);
	var classNames = __webpack_require__(17);
	var ClassNameMixin = __webpack_require__(18);
	var AvgGrid = __webpack_require__(22);
	var omit = __webpack_require__(24);

	var Gallery = createReactClass({
	  mixins: [ClassNameMixin],

	  propTypes: {
	    classPrefix: PropTypes.string,
	    theme: PropTypes.oneOf(['default', 'overlay', 'bordered', 'imgbordered']),
	    data: PropTypes.array,
	    sm: PropTypes.number,
	    md: PropTypes.number,
	    lg: PropTypes.number
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'gallery',
	      theme: 'default',
	      data: []
	    };
	  },

	  renderItem: function renderItem(item) {
	    var img = item.img ? React.createElement('img', {
	      src: item.img,
	      key: 'galeryImg',
	      alt: item.alt || item.title || null
	    }) : null;
	    var title = item.title ? React.createElement(
	      'h3',
	      {
	        key: 'galleryTitle',
	        className: this.prefixClass('title')
	      },
	      item.title
	    ) : null;
	    var desc = item.desc ? React.createElement(
	      'div',
	      {
	        key: 'galleryDesc',
	        className: this.prefixClass('desc')
	      },
	      item.desc
	    ) : null;
	    var galleryItem = item.link ? React.createElement(
	      'a',
	      { href: item.link },
	      img,
	      title,
	      desc
	    ) : [img, title, desc];

	    return React.createElement(
	      'div',
	      {
	        className: classNames(this.props.className, this.prefixClass('item'))
	      },
	      galleryItem
	    );
	  },

	  render: function render() {
	    var classSet = this.getClassSet();
	    var props = omit(this.props, ['classPrefix', 'data', 'theme']);

	    return React.createElement(
	      AvgGrid,
	      _extends({}, props, {
	        sm: this.props.sm || 2,
	        md: this.props.md || 3,
	        lg: this.props.lg || 4,
	        'data-am-widget': this.props.classPrefix,
	        className: classNames(this.props.className, classSet)
	      }),
	      this.props.data.map(function (item, i) {
	        return React.createElement(
	          'li',
	          { key: i },
	          this.renderItem(item)
	        );
	      }.bind(this))
	    );
	  }
	});

	module.exports = Gallery;

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var React = __webpack_require__(1);
	var PropTypes = __webpack_require__(11);
	var createReactClass = __webpack_require__(3);
	var ReactDOM = __webpack_require__(36);
	var classNames = __webpack_require__(17);
	var ClassNameMixin = __webpack_require__(18);
	var SmoothScrollMixin = __webpack_require__(88);
	var Events = __webpack_require__(67);
	var debounce = __webpack_require__(86);
	var dom = __webpack_require__(77);
	var CSSCore = __webpack_require__(30);
	var Icon = __webpack_require__(37);

	var GoTop = createReactClass({
	  mixins: [ClassNameMixin, SmoothScrollMixin],

	  propTypes: {
	    classPrefix: PropTypes.string.isRequired,
	    theme: PropTypes.oneOf(['default', 'fixed']),
	    title: PropTypes.string,
	    src: PropTypes.string,
	    icon: PropTypes.string,
	    autoHide: PropTypes.bool
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'gotop',
	      theme: 'default'
	    };
	  },

	  componentDidMount: function componentDidMount() {
	    if (this.isAutoHide()) {
	      var check = this.checkPosition;

	      check();

	      this._listener = Events.on(window, 'scroll', debounce(check, 100));
	    }
	  },

	  componentWillUnmount: function componentWillUnmount() {
	    this._listener && this._listener.off();
	  },

	  checkPosition: function checkPosition() {
	    var action = (dom.scrollTop(window) > 50 ? 'add' : 'remove') + 'Class';

	    CSSCore[action](ReactDOM.findDOMNode(this), this.setClassNamespace('active'));
	  },

	  isAutoHide: function isAutoHide() {
	    return this.props.theme === 'fixed' && this.props.autoHide;
	  },

	  handleClick: function handleClick(e) {
	    e.preventDefault();
	    this.smoothScroll();
	  },

	  renderIcon: function renderIcon() {
	    return this.props.src ? React.createElement('img', {
	      className: this.prefixClass('icon-custom'),
	      src: this.props.src,
	      alt: this.props.title
	    }) : React.createElement(Icon, {
	      className: this.prefixClass('icon'),
	      icon: this.props.icon || 'chevron-up'
	    });
	  },

	  render: function render() {
	    var classSet = this.getClassSet();

	    classSet[this.prefixClass(this.props.theme)] = true;
	    classSet[this.setClassNamespace('active')] = !this.isAutoHide();

	    return React.createElement(
	      'div',
	      _extends({}, this.props, {
	        'data-am-widget': this.props.classPrefix,
	        className: classNames(classSet, this.props.className)
	      }),
	      React.createElement(
	        'a',
	        {
	          href: '#top',
	          onClick: this.handleClick,
	          title: this.props.title
	        },
	        this.props.title ? React.createElement(
	          'span',
	          { className: this.prefixClass('title') },
	          this.props.title
	        ) : null,
	        this.renderIcon()
	      )
	    );
	  }
	});

	module.exports = GoTop;

/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var React = __webpack_require__(1);
	var createReactClass = __webpack_require__(3);
	var PropTypes = __webpack_require__(11);
	var classNames = __webpack_require__(17);
	var ClassNameMixin = __webpack_require__(18);
	var Icon = __webpack_require__(37);
	var omit = __webpack_require__(24);

	var Header = createReactClass({
	  mixins: [ClassNameMixin],

	  propTypes: {
	    classPrefix: PropTypes.string,
	    theme: PropTypes.oneOf(['default']),
	    data: PropTypes.object,
	    fixed: PropTypes.bool,
	    title: PropTypes.node,
	    link: PropTypes.string,
	    onSelect: PropTypes.func
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'header',
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
	        'data-am-widget': this.props.classPrefix,
	        className: classNames(this.props.className, classSet)
	      }),
	      this.renderNav('left'),
	      this.renderTitle(),
	      this.renderNav('right')
	    );
	  }
	});

	module.exports = Header;

/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var React = __webpack_require__(1);
	var PropTypes = __webpack_require__(11);
	var createReactClass = __webpack_require__(3);
	var classNames = __webpack_require__(17);
	var ClassNameMixin = __webpack_require__(18);
	var Button = __webpack_require__(23);
	var Col = __webpack_require__(20);

	var ListNews = createReactClass({
	  mixins: [ClassNameMixin],

	  propTypes: {
	    classPrefix: PropTypes.string,
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
	      classPrefix: 'list-news',
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
	        'data-am-widget': this.props.classPrefix,
	        className: classNames(this.props.className, classSet)
	      }),
	      this.props.header || this.renderHeader(),
	      this.renderBody(this.renderList()),
	      this.props.footer || this.renderFooter()
	    );
	  }
	});

	module.exports = ListNews;

/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var React = __webpack_require__(1);
	var PropTypes = __webpack_require__(11);
	var classNames = __webpack_require__(17);
	var createReactClass = __webpack_require__(3);
	var omit = __webpack_require__(24);
	var ClassNameMixin = __webpack_require__(18);
	var Icon = __webpack_require__(37);
	var AvgGrid = __webpack_require__(22);

	var Menu = createReactClass({
	  mixins: [ClassNameMixin],

	  propTypes: {
	    classPrefix: PropTypes.string,
	    theme: PropTypes.oneOf(['default', 'dropdown1', 'dropdown2', 'slide1', 'stack']),
	    data: PropTypes.array,
	    onSelect: PropTypes.func,
	    toggleTitle: PropTypes.string,
	    toggleCustomIcon: PropTypes.string,
	    toggleIcon: PropTypes.string,
	    cols: PropTypes.number
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'menu',
	      theme: 'default',
	      data: [],
	      onSelect: function onSelect() {}
	    };
	  },

	  getInitialState: function getInitialState() {
	    return {
	      data: this.props.data,
	      expanded: !this.isDropdown()
	    };
	  },

	  handleClick: function handleClick(nav, index, closeAll, e) {
	    if (nav && nav.subMenu) {
	      this.handleParentClick(nav, index, closeAll, e);
	    }

	    this.props.onSelect.call(this, nav, index, e);
	  },

	  /**
	   * handle nav with subMenu click
	   * @param {object} nav - clicked nav
	   * @param {number} index - clicked nav index
	   * @param {bool} closeAll - close all submenu
	   * @param {object} e
	   */
	  handleParentClick: function handleParentClick(nav, index, closeAll, e) {
	    e && e.preventDefault();

	    var data = this.state.data.map(function (item, i) {
	      item.subActive = closeAll ? false : index === i ? !item.subActive : false;
	      return item;
	    });

	    this.setState({
	      data: data
	    });
	  },

	  closeAll: function closeAll() {
	    this.handleParentClick(null, null, true, undefined);
	  },

	  // handle toggle button click for dropdown/slide theme
	  handleToggle: function handleToggle(e) {
	    e && e.preventDefault();
	    this.setState({
	      expanded: !this.state.expanded
	    }, function () {
	      !this.state.expanded && this.closeAll();
	    }.bind(this));
	  },

	  isDropdown: function isDropdown() {
	    return ['dropdown1', 'dropdown2', 'slide1'].indexOf(this.props.theme) > -1;
	  },

	  renderMenuToggle: function renderMenuToggle() {
	    var title = this.props.toggleTitle ? React.createElement(
	      'span',
	      {
	        className: this.prefixClass('toggle-title')
	      },
	      this.props.toggleTitle
	    ) : null;
	    var icon = this.props.toggleCustomIcon ? React.createElement('img', {
	      src: this.props.toggleCustomIcon,
	      alt: 'Menu Toggle'
	    }) : React.createElement(Icon, {
	      className: this.prefixClass('toggle-icon'),
	      icon: this.props.toggleIcon || 'bars'
	    });

	    return React.createElement(
	      'a',
	      {
	        href: '#',
	        onClick: this.handleToggle,
	        className: classNames(this.prefixClass('toggle'), this.state.expanded ? this.setClassNamespace('active') : null)
	      },
	      title,
	      icon
	    );
	  },

	  renderNavs: function renderNavs() {
	    var _this = this;
	    var openClassName = this.setClassNamespace('open');
	    var inClassName = this.setClassNamespace('in');

	    return this.state.data.map(function (nav, i) {
	      var Link = nav.component || 'a';
	      var LinkProps = nav.props || {};

	      return React.createElement(
	        'li',
	        {
	          key: i,
	          className: classNames(nav.subMenu ? _this.setClassNamespace('parent') : null, nav.subActive ? openClassName : null)
	        },
	        React.createElement(
	          Link,
	          _extends({
	            onClick: _this.handleClick.bind(_this, nav, i, false),
	            href: nav.link
	          }, LinkProps),
	          nav.title
	        ),
	        nav.subMenu ? React.createElement(
	          AvgGrid,
	          {
	            sm: nav.subCols || 1,
	            className: classNames(_this.prefixClass('sub'), _this.setClassNamespace('collapse'), nav.subActive ? inClassName : null)
	          },
	          nav.subMenu.map(function (subNav, index) {
	            var SubLink = subNav.component || 'a';
	            var SubLinkProps = subNav.props || {};

	            return React.createElement(
	              'li',
	              { key: index },
	              React.createElement(
	                SubLink,
	                _extends({
	                  onClick: _this.handleClick.bind(_this, subNav, [i, index], false),
	                  target: subNav.target,
	                  href: subNav.link
	                }, SubLinkProps),
	                subNav.title
	              )
	            );
	          })
	        ) : null
	      );
	    });
	  },

	  render: function render() {
	    var classSet = this.getClassSet();
	    var props = omit(this.props, 'data');
	    var hideTopLevel = !this.state.expanded ? this.setClassNamespace('collapse') : null;

	    return React.createElement(
	      'nav',
	      _extends({}, props, {
	        'data-am-widget': this.props.classPrefix,
	        className: classNames(this.props.className, classSet)
	      }),
	      this.renderMenuToggle(),
	      React.createElement(
	        AvgGrid,
	        {
	          sm: this.props.cols,
	          className: classNames(this.prefixClass('nav'), hideTopLevel)
	        },
	        this.renderNavs()
	      )
	    );
	  }
	});

	module.exports = Menu;

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var React = __webpack_require__(1);
	var createReactClass = __webpack_require__(3);
	var PropTypes = __webpack_require__(11);
	var classNames = __webpack_require__(17);
	var ClassNameMixin = __webpack_require__(18);
	var Icon = __webpack_require__(37);
	var omit = __webpack_require__(24);

	var Navbar = createReactClass({
	  mixins: [ClassNameMixin],

	  propTypes: {
	    classPrefix: PropTypes.string,
	    theme: PropTypes.oneOf(['default']),
	    data: PropTypes.array,
	    onSelect: PropTypes.func
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'navbar',
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
	        'data-am-widget': this.props.classPrefix,
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

/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var React = __webpack_require__(1);
	var createReactClass = __webpack_require__(3);
	var PropTypes = __webpack_require__(11);
	var classNames = __webpack_require__(17);
	var ClassNameMixin = __webpack_require__(18);
	var AvgGrid = __webpack_require__(22);
	var omit = __webpack_require__(24);

	var Titlebar = createReactClass({
	  mixins: [ClassNameMixin],

	  propTypes: {
	    classPrefix: PropTypes.string,
	    theme: PropTypes.oneOf(['default', 'multi', 'cols']),
	    nav: PropTypes.array,
	    title: PropTypes.node
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'titlebar',
	      theme: 'default',
	      data: []
	    };
	  },

	  render: function render() {
	    var classSet = this.getClassSet();
	    var props = omit(this.props, ['classPrefix', 'nav', 'theme']);

	    return React.createElement(
	      'div',
	      _extends({}, props, {
	        'data-am-widget': this.props.classPrefix,
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

/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {
	  ClassNameMixin: __webpack_require__(18),
	  CollapseMixin: __webpack_require__(52),
	  DimmerMixin: __webpack_require__(75),
	  OverlayMixin: __webpack_require__(79),
	  SmoothScrollMixin: __webpack_require__(88)
	};

/***/ }
/******/ ])
});
;
'use strict';

var React = require('react');
var constants = require('../constants');
var nsPrefix = constants.NAMESPACE ? constants.NAMESPACE + '-' : '';

module.exports = {
  getClassSet: function getClassSet(ignorePrefix) {
    var classNames = {};
    // uses `.am-` as prefix if `classprefix` is not defined
    var prefix = nsPrefix;

    if (this.props.classprefix) {
      var classprefix = this.setClassNamespace();

      prefix = classprefix + '-';

      // don't return prefix if flag set
      !ignorePrefix && (classNames[classprefix] = true);
    }

    var amsize = this.props.amsize;
    var amstyle = this.props.amstyle;

    if (amsize) {
      classNames[prefix + amsize] = true;
    }

    if (amstyle) {
      classNames[prefix + amstyle] = true;
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
    if (this.props.classprefix !== 'divider') {
      classNames[constants.CLASSES.divider] = this.props.divider;
    }

    return classNames;
  },

  // add namespace to classprefix
  setClassNamespace: function setClassNamespace(classprefix) {
    var prefix = classprefix || this.props.classprefix || '';

    return nsPrefix + prefix;
  },

  prefixClass: function prefixClass(subClass) {
    return this.setClassNamespace() + '-' + subClass;
  }
};
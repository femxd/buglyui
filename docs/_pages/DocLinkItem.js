'use strict';

var React = require('react');
var createReactClass = require('create-react-class');
var PropTypes = require('prop-types');
var Link = require('react-router').Link;

var LinkItem = createReactClass({
  contextTypes: {
    router: PropTypes.object.isRequired
  },

  render: function() {
    var isActive = this.context.router.isActive(this.props.to, this.props.query);
    var activeClassName = isActive ? 'am-active' : '';
    var link = (
      <Link {...this.props} />
    );

    return <li className={activeClassName}>{link}</li>;
  }
});

module.exports = LinkItem;

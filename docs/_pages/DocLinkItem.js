'use strict';

var React = require('react');
var Link = require('react-router').Link;

var LinkItem = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
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

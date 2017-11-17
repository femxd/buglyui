// TODO: add spinner

var LoadingButton = createReactClass({
  getInitialState: function() {
    return {
      isLoading: false
    };
  },

  propTypes: {
    loadingText: PropTypes.string.isRequired,
    clickHandler: PropTypes.func
  },

  getDefaultProps: function() {
    return {
      loadingText: 'Loading',
      clickHandler: function() {}
    };
  },

  handleClick: function() {
    this.setState({isLoading: true});
    this.props.clickHandler.call(this);
  },

  render: function() {
    var isLoading = this.state.isLoading;

    return (
      <Button
        {...this.props}
        disabled={isLoading}
        onClick={!isLoading ? this.handleClick : null}>
        {isLoading ? this.props.loadingText : this.props.children}
      </Button>
    );
  }
});

var handler = function() {
  // do something...
  setTimeout(function() {
    // done
    this.setState({isLoading: false});
  }.bind(this), 2000);
};

ReactDOM.render((
    <LoadingButton
      clickHandler={handler}
      loadingText="正在加载..."
      amStyle="secondary">
      获取信息
    </LoadingButton>
  ), mountNode);

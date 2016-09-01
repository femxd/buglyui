const Example = React.createClass({
  getInitialState() {
    // 将 false 改为 true 默认显示打开 modal
    return {showModal: false};
  },

  close() {
    this.setState({showModal: false});
  },

  open() {
    this.setState({showModal: true});
  },

  render() {
    const modal = (
      <Modal title="Amaze UI Modal">
        通过ModalTrigger的props打开Modal
      </Modal>);

    return (
      <div>
        <Button amStyle="primary" onClick={this.open}>
          Launch modal
        </Button>
        <ModalTrigger
          modal={modal}
          show={this.state.showModal}
          onClose={this.close}
        />
      </div>
    );
  }
});

ReactDOM.render(<Example />, mountNode);

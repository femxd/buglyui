var progressInstance = (
  <div>
    <Progress now={40} />
    <Progress now={40} label="40%" />
  </div>
);

ReactDOM.render(progressInstance, mountNode);

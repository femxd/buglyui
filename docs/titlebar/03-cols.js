var nav = [
  {
    title: '手机',
    link: '#more-1'
  },
  {
    title: '数码',
    link: '#more-2'
  },
  {
    title: '影音',
    link: '#more-3'
  }
];

ReactDOM.render(<Titlebar
  theme="cols"
  title="科技频道"
  nav={nav} />, mountNode);

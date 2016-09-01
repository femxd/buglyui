var props = {
  title: 'Amaze UI',
  data: {
    left: [
      {
        link: '#left-link',
        title: '首页',
        icon: 'home'
      }
    ],
    right: [
      {
        link: '#right-link',
        icon: 'bars',
        title: '菜单'
      }
    ]
  },
  onSelect: function(nav, e) {
    e.preventDefault();
    console.log('你点击了', nav);
    // do something
  }
};

ReactDOM.render(<Header {...props} />, mountNode);

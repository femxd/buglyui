var props = {
  title: 'Amaze UI',
  data: {
    left: [
      {
        link: '#left-link',
        icon: 'home'
      },
      {
        link: '#phone-link',
        icon: 'phone'
      }
    ],
    right: [
      {
        link: '#user-link',
        icon: 'user'
      },
      {
        link: '#cart-link',
        icon: 'shopping-cart'
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

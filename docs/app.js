import React from 'react';
import ReactDOM from 'react-dom';
var createReactClass = require('create-react-class');
import {
  Router,
  Route,
  IndexRoute,
  hashHistory,
} from 'react-router';
import {
  createHistory,
  useBasename,
} from 'history';

const history = useBasename(createHistory)({
  basename: '/react'
});

// style
import '../less/amazeui.less';
import './docs.less';

// img
import './assets/i/app-icon72x72@2x.png';
import './assets/i/favicon.png';
import './assets/i/mascot-react.png';

import GoTop from '../src/GoTop';
import {
  isProduction as production,
} from './utils';
import DocHeader from './_pages/DocHeader';
import DocFooter from './_pages/DocFooter';

const App = createReactClass({
  render: function() {
    return (
      <div className="amr-page">
        <DocHeader />
        {this.props.children}
        <DocFooter />
        <GoTop theme="fixed" autoHide icon="arrow-up" />
      </div>
    );
  }
});

// Pages
import PageIndex from './_pages/PageIndex';
import PageGettingStarted from './_pages/PageGettingStarted';
import PageComponents from './_pages/PageComponents';
import PageComponentsIndex from './_pages/PageComponentsIndex';
import PageComponentsDoc from './_pages/PageComponentsDoc';

const routes = (
  <Router history={production ? history : hashHistory}>
    <Route path="/" component={App}>
      <Route path="getting-started" component={PageGettingStarted} />
      <Route path="components" component={PageComponents}>
        <Route path=":component" component={PageComponentsDoc} />
        <IndexRoute component={PageComponentsIndex} />
      </Route>
      <IndexRoute component={PageIndex} />
    </Route>
  </Router>
);

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(routes, document.getElementById('root'));
});

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from 'Utils/reducers';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';

const store = createStore(todoApp);

const Root = ({ store }: { store: any }): JSX.Element => (
  <Provider store={store}>
    <Router>
      <Route path="/:filter?" component={App} />
    </Router>
  </Provider>
);

render(<Root store={store} />, document.getElementById('root'));

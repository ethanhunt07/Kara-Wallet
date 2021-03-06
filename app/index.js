import React from 'react';
import { render } from 'react-dom';
import { ipcRenderer } from 'electron';
import { AppContainer } from 'react-hot-loader';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import Root from './containers/Root';
import { history } from './store/configureStore';
import getStore from './store/appStore';
import './app.global.css';

import { toggleClientExec } from './actions/dashboard';

const store = getStore();

ipcRenderer.on('full-node-channel', (event, arg) => {
  if (arg === 'TOGGLE') {
    store.dispatch(toggleClientExec());
  }
});

const alertOptions = {
  position: 'bottom center',
  timeout: 5000,
  offset: '30px',
  transition: 'scale'
};

render(
  <AppContainer>
    <AlertProvider template={AlertTemplate} {...alertOptions}>
      <Root store={store} history={history} />
    </AlertProvider>
  </AppContainer>,
  document.getElementById('root'),
);

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    const NextRoot = require('./containers/Root'); // eslint-disable-line global-require
    render(
      <AppContainer>
        <NextRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById('root'),
    );
  });
}

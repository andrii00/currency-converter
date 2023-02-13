import { Provider } from 'react-redux';
import React from 'react';

import { ErrorBoundary, Home } from './components';
import store from './store';

export default (
  <Provider store={store}>
    <ErrorBoundary>
      <Home />
    </ErrorBoundary>
  </Provider>
);

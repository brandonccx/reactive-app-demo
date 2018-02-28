import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import './index.css';
import Main from './Main';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers';
import rootSaga from './sagas';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage
};

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  persistReducer(persistConfig, reducers),
  applyMiddleware(sagaMiddleware)
);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={'loading'} persistor={persistor}>
      <Main />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();

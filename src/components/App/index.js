import React from 'react';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import Header from '../Header';
import Tabs from '../Tabs';

export default function App() {
  return (
    <Provider store={store}>
      <Header />
      <Tabs />
    </Provider>
  );
};

import React from 'react';
import { Provider } from 'react-redux';

import { TipCalculator } from './components/TipCalculator';
import { store } from './store';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <TipCalculator />
    </Provider>
  );
};

export default App;

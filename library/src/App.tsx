import React from 'react';
import './styles/App.css';
import { BrowserRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';
import { State } from './types/types';
import Header from './components/Header/Header';
import AppRouter from 'components/AppRouter';

export default function App() {
  const stateValues = useSelector<RootState, State>((state) => state);
  console.log(stateValues);
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

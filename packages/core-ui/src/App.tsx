import React, { Suspense } from 'react';
import { Router } from 'react-router-dom';
import { history } from './config/routes';
import { Routes } from './Routes';
import Header from './components/Header';

export const App: React.FC = () => {
  return (
    <Router history={history}>
      <div className="App">
        <Header />
      </div>
      <Suspense fallback={<span>Loading...</span>}>
        <Routes />
      </Suspense>
    </Router>
  );
};

export default App;

import React, { Suspense } from 'react';
import { Router } from 'react-router-dom';
import { history } from './config/routes';
import { Routes } from './Routes';
import Header from './components/Header';
import Counter from './components/Counter';
import ErrorBoundary from './components/ErrorBoundary';

export const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <Router history={history}>
        <div className="App">
          <Header />
        </div>
        <Counter />
        <Suspense fallback={<span>Loading...</span>}>
          <Routes />
        </Suspense>
      </Router>
    </ErrorBoundary>
  );
};

export default App;

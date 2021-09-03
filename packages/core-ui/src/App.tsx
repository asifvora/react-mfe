import React, { Suspense } from 'react';
import { Router } from 'react-router-dom';
import { history } from './config/routes';
import { Routes } from './Routes';
import { Loader } from './components/Loader';
import { Footer } from './components/Footer';
import Header from './components/Header';
import ErrorBoundary from './components/ErrorBoundary';

export const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <Router history={history}>
        <Header />
        <Suspense fallback={Loader}>
          <Routes />
        </Suspense>
        <Footer />
      </Router>
    </ErrorBoundary>
  );
};

export default App;

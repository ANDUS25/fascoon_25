import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppHeader from './components/AppHeader/Index';
import AppBody from './components/AppBody';
import AppFooter from './components/AppFooter/Index';

function App() {
  return (
    <div className="App">
      <AppHeader/>
      <AppBody/>
      <AppFooter/>
    </div>
  );
}

export default App;

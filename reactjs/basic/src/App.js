import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppHeader from './components/AppHeader/Index';
import AppBody from './components/AppBody';
import AppFooter from './components/AppFooter/Index';

function App() {
  const  user={
    "name":"Andy",
    "location":"Pune"
  }
  return (
    <div className="App">
      <AppHeader name={user.name} location={user.location}/>
      <AppBody/>
      <AppFooter/>
    </div>
  );
}

export default App;

import './App.css';
import React from 'react';
import { Route } from 'react-router-dom'
import App from './App';
import about from './components/about';
import contact from './components/contact';
import gallery from './components/gallery';
import Navigation from './components/navi';


function Router() {
  return (
      <div>
        <Navigation/>
      <switch>
        {/* <Route path="/" component={App}></Route> */}
        <Route path="/about" component={about}></Route>
        <Route path="/contact" component={contact}></Route>
        <Route path="/gallery" component={gallery}></Route>
      </switch>
      </div>
  );
}

export default Router;

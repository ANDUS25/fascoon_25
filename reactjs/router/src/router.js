import './App.css';
import React from 'react';
import { Route, Switch} from 'react-router-dom'
import App from './App';
import about from './components/about';
import contact from './components/contact';
import gallery from './components/gallery';
import Navigation from './components/navi';


function Router() {
  return (
    <switch>
      <Route path="/" component={App}></Route>
      <Route path="/about" component={about}></Route>
      <Route path="/contact" component={contact}></Route>
      <Route path="/gallery" component={gallery}></Route>
    </switch>
  );
}

export default Router;

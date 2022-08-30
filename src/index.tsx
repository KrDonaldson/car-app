import React from 'react';
import ReactDOM from 'react-dom';
import { FirebaseAppProvider, AuthCheck } from 'reactfire';
import { firebaseConfig } from './firebaseConfig'
import 'firebase/auth';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Home, Inventory, About, ContactUs, SignIn } from './components';
import './style.css'
import { store } from './redux/store'

let title = 'Car Inventory'


ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig} suspense={true}>
    <Provider store={store}>

    <Router>
      <Switch>

        <Route exact path='/'>
          <Home title={title}/>
        </Route>
        <Route path='/Inventory'>
          <Inventory></Inventory>
        </Route>
        <Route path='/ContactUs'>
          <ContactUs></ContactUs>
        </Route>
        <Route path='/About'>
          <About></About>
        </Route>
        <Route path='/SignIn'>
          <SignIn></SignIn>
        </Route>

      </Switch>
    </Router>
    </Provider>
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

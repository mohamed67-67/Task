import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Store from './store'
import {Provider} from 'react-redux'
import App2 from './App2';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import LogIn from './LayOut/LogIn';



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store ={Store}>
      <Switch>
        <Route exact path='/' > <App /> </Route>
        <Route path='/personal/:id' > <App2/> </Route>
        <Route path='/login'><LogIn/></Route>
      </Switch>
      </Provider>
    </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

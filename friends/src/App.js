import React from 'react';
import { Link, Route, Redirect } from 'react-router-dom';
import './App.css';
import { Public, Login, Protected } from './components';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => localStorage.getItem('token') ? (
    <Component {...props} />
  ) : (
    <Redirect to="/login" />
  )} />
)

function App() {
  return (
    <div className="App">
      <ul>
        <li><Link to="/public">Public Page</Link></li>
        <li><Link to="/login">Login Page</Link></li>
        <li><Link to="/protected">Friends List</Link></li>
      </ul>
      <Route path="/public" component={Public} />
      <Route path="/login" component={Login} />
      <PrivateRoute path="/protected" component={Protected} />
    </div>
  );
}

export default App;

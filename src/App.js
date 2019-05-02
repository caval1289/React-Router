import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom';
import './App.css'
import Home from './Component/Home/index';
import History from './Component/History/index';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
              <div>
                <NavLink activeClassName="selected" exact to="/"> Home </NavLink>
                <NavLink activeClassName="selected" to="/notre-history/"> History </NavLink>

                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/notre-history" component={History} />
                </Switch>
              </div>
            </BrowserRouter>
        );
    }
}

export default App;
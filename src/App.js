import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './common/header';
import Home from './pages/home';
import Detail from './pages/detail';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div>
            <Header></Header>
            <Route path="/" exact component={Home}></Route>
            <Route path="/detail" exact component={Detail}></Route>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;

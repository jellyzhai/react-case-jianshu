import React, { PureComponent, Fragment } from 'react';
import store from './store';
import Header from './common/header';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home';
import Detail from './pages/detail/loadable';
import Login from './pages/login/loadable';

class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
          <BrowserRouter>
            <Fragment>
              <Header />
              <Route path='/' exact component={Home}></Route>
              <Route path='/detail/:id' exact component={Detail}></Route>
              <Route path='/login' exact component={Login}></Route>
            </Fragment>
          </BrowserRouter>
      </Provider>
    );
  }
}

export default App;

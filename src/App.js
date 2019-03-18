import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Nav from './nav';
import './App.css';
import Home from './home';
import Auth from './auth';
import User from './user';
import About from './about';
import NoFound from './noFound';

// ConnectedRouter 包裹的组件，不可是个高阶组件，如果是高阶组件历史记录部分会出错。
// 也就是 App这一层不能用高阶组件

const App = () => (
  <div>
    <Nav/>
    <Switch>
      <Route path={'/'} exact component={Home}/>
      <Route path={'/auth'} exact component={Auth}/>
      <Route path={'/user'} exact component={User}/>
      <Route path={'/about'} exact component={About}/>
      <Route component={NoFound}/>
    </Switch>
  </div>
);

export default App;

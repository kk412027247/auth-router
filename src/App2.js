import React from 'react'
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom'
// import Home from './components/Home'
import Hello from './components/Hello'
// import Counter from './components/Counter'
import NoMatch from './components/NoMatch'
import NavBar from './components/NavBar'


const Home = () => <div>Home</div>;
const Auth = () => <div>Auth</div>;
const User = () => <div>User</div>;
const About = () => <div>About</div>;


const Routes = () =>(
  <div>
    {/*<NavBar />*/}
    {/*<Switch>*/}
      {/*<Route exact path="/" component={Home} />*/}
      {/*<Route path="/hello" component={Hello} />*/}
      {/*/!*<Route path="/counter" component={Counter} />*!/*/}
      {/*<Route component={NoMatch} />*/}
    {/*</Switch>*/}


    <div>
      <div><Link to="/">Home</Link> <Link to="/auth">auth</Link> <Link to="/user">user</Link></div>
    </div>


    <Switch>
      <Route path={'/'} exact component={Home}/>
      <Route path={'/auth'} exact component={Auth}/>
      <Route path={'/user'} exact component={User}/>
      <Route path={'/about'} exact component={About}/>
    </Switch>
  </div>
);

export default Routes

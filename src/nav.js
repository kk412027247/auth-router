import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {handleNav} from './actions/navAction';

const Nav = ({handleNav, login}) => (
  <nav>
    <ul>
      <li onClick={handleNav.bind(null, '/')}>Home</li>
      {
        login
        ? <li onClick={handleNav.bind(null, '/user')}>User</li>
        : <li onClick={handleNav.bind(null, '/auth')}>Auth</li>
      }
      <li onClick={handleNav.bind(null, '/about')}>About</li>
    </ul>
  </nav>
);

const mapStateToProps = state => ({
  login: state.authReducer.login,
});

const mapDispatchToProps = dispatch => bindActionCreators({handleNav}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Nav);

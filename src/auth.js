import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {handleLogin} from './actions/authAction';

const Auth = ({handleLogin}) => (
  <div className={'page'}>
    Auth
    <br/>
    <button onClick={handleLogin.bind(null, true)}>login</button>
  </div>
);

const mapDispatchToProps = dispatch => bindActionCreators({handleLogin}, dispatch);

export default connect(null, mapDispatchToProps)(Auth);

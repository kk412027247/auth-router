import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {handleLogin} from "./actions/authAction";

const User = ({handleLogin}) => (
  <div className={'page'}>
    User
    <br/>
    <button onClick={handleLogin.bind(null, false)}>logout</button>
  </div>
);

const mapDispatchToProps = dispatch => bindActionCreators({handleLogin}, dispatch);


export default connect(null, mapDispatchToProps)(User);

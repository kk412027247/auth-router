import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import {bindActionCreators} from 'redux';
import { push, replace } from 'connected-react-router'
import {store} from '../index';
import {handleNav} from '../actions/navAction';

const HelloChild = ({ pathname, search, hash, handleNav }) => (
  <div>
    Hello-Child
    <ul>
      {/*<li><Link to="/hello?color=Blue&size=40">with query string</Link></li>*/}
      {/*<li onClick={()=>store.dispatch(push('/hello?color=Blue&size=40'))}>with query string</li>*/}
      <li onClick={handleNav.bind(null,'/hello?color=Blue&size=40')}>with query string</li>

      {/*<li onClick={()=>store.dispatch(replace('/hello#lovelove'))}>with query string</li>*/}
      <li onClick={handleNav.bind(null,'/hello#lovelove')}>with query string</li>
      {/*<li><Link to="/hello#lovelove">with hash</Link></li>*/}
    </ul>
    <div>
      pathname: {pathname}
    </div>
    <div>
      search: {search}
    </div>
    <div>
      hash: {hash}
    </div>
  </div>
)

HelloChild.propTypes = {
  pathname: PropTypes.string,
  search: PropTypes.string,
  hash: PropTypes.string,
}

const mapStateToProps = state => ({
  pathname: state.router.location.pathname,
  search: state.router.location.search,
  hash: state.router.location.hash,
});

const mapDispatchToProps = dispatch =>bindActionCreators({handleNav},dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HelloChild)

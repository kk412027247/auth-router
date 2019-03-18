import { replace} from 'connected-react-router';

export const handleLogin = (login) => (dispatch) => {
  dispatch({
    type:'HANDLE_LOGIN',
    login
  });

  if(login){
    dispatch(replace('/user'))
  }else{
    dispatch(replace('/'))
  }
};

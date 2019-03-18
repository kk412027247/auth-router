import {push} from 'connected-react-router';

export const handleNav = nav => (dispatch, getState) => {
  const {router} = getState();
  const pathname = router.location.pathname;
  if(pathname === nav){
    return;
  }
  dispatch(push(nav))
};




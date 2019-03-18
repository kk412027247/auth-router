export default (state={}, action) => {
  switch(action.type){
    case 'HANDLE_LOGIN':{
      return{
        ...state,
        login: action.login
      };
    }

    default : return state;
  }
}

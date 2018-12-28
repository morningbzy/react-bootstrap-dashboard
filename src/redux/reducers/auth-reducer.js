import { SIGN_IN, SIGN_OUT } from "../actions/signin-action";

export default function (state = {isAuthenticated: false, username: '',}, action) {
  console.log('called with:'); console.log(action);
  switch (action.type) {
    case SIGN_IN: {
      return {
        isAuthenticated: true,
        username: action.username,
      }
    }
    case SIGN_OUT: {
      return {
        isAuthenticated: false,
        username: '',
      }
    }
    default:
      return state;
  }
}
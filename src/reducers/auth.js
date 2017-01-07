import {
  LOGIN_SUCCESS,
  LOGOUT,
} from '../actions/index';

const INITIAL_STATE = {
  authenticated: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, authenticated: true };
    case LOGOUT:
      return { ...state, authenticated: false };
    default:
      return state;
  }
};

import { GET_POSTS } from '../actions/index';

const INITIAL_STATE = {
  messages: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_POSTS:
      return { ...state, messages: action.payload };
    default:
      return state;
  }
};

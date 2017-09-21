import { FETCH_TODOS, FETCH_TODO, ADD_TODO, EDIT_TODO } from '../actions/types';

const DEFAULT_STATE = [];

export default function(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case FETCH_TODOS:
      return { ...state, todos: action.payload };
    default:
      return state;
  }
}

import axios from 'axios';
import { FETCH_TODOS, FETCH_TODO, ADD_TODO, EDIT_TODO } from './types';

export const fetchTodos = () => async dispatch => {
  const result = await axios.get('/api/todos');

  dispatch({
    type: FETCH_TODOS,
    payload: result.data
  });
};

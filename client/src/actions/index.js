import axios from 'axios';
import {
  FETCH_TODOS,
  FETCH_TODO,
  ADD_TODO,
  EDIT_TODO,
  DELETE_TODO,
  DELETE_COMPLETED
} from './types';

export const fetchTodos = () => async dispatch => {
  const result = await axios.get('/api/todos');

  dispatch({
    type: FETCH_TODOS,
    payload: result.data
  });
};

export const addTodo = todo => async dispatch => {
  const result = await axios.post('/api/todos', todo);

  dispatch({
    type: ADD_TODO,
    payload: result.data
  });
};

export const editTodo = todo => async dispatch => {
  const editedTodo = await {
    title: todo.title,
    date: new Date().toLocaleString(),
    completed: todo.completed
  };
  const result = await axios.patch(`/api/todos/${todo._id}`, todo);

  dispatch({
    type: EDIT_TODO,
    payload: result.data
  });
};

export const deleteTodo = id => async dispatch => {
  const result = await axios.delete(`/api/todos/${id}`);

  dispatch({
    type: DELETE_TODO,
    payload: result.data
  });
};

export const deleteCompleted = () => async dispatch => {
  const result = await axios.delete('/api/todos/completed');

  dispatch({
    type: DELETE_COMPLETED,
    payload: result.data
  });
};

import {
  ADD_TODO,
  COMPLETE_TODO,
  DELETE_TODO,
} from '../types';

const addTodo = text => ({
  type: ADD_TODO,
  payload: text,
});

const completeTodo = id => ({
  type: COMPLETE_TODO,
  payload: id,
});

const deleteTodo = id => ({
  type: DELETE_TODO,
  payload: id,
});


export const add = text => (dispatch) => {
}	

export const complete = id => (dispatch) => {
}	

export const delete = id => (dispatch) => {
}	

import axios from "axios";
import {
  ADD_NEW_TODO,
  GET_ALL_TODOS,
  TOGGLE_TODO_COMPLETED,
  UPDATE_TODO,
  DELETE_TODO,
} from "./type";

const API_URL = "http://localhost:4000/";

export const addNewTodo = (data: string) => async (dispatch: any) => {
  try {
    const response = await axios.post(`${API_URL}todos`, { data });
    dispatch({ type: ADD_NEW_TODO, payload: response.data });
  } catch (err: any) {
    console.log("Error while calling addNewTodo: " + err.message);
    throw err;
  }
};

export const getAllTodos = () => async (dispatch: any) => {
  try {
    const response = await axios.get(`${API_URL}todos`);
    dispatch({ type: GET_ALL_TODOS, payload: response.data });
  } catch (err: any) {
    console.log("Error while calling getAllTodos: " + err.message);
  }
};

export const toggleTodoCompleted = (id: any) => async (dispatch: any) => {
  try {
    const response = await axios.get(`${API_URL}todos/${id}`);
    dispatch({ type: TOGGLE_TODO_COMPLETED, payload: response.data });
  } catch (err: any) {
    console.log("Error while calling toggleTodoCompleted: " + err.message);
  }
};

export const updateTodo = (id: any, data: string) => async (dispatch: any) => {
  try {
    const response = await axios.put(`${API_URL}todos/${id}`, { data });
    dispatch({ type: UPDATE_TODO, payload: response.data });
  } catch (error: any) {
    console.log("Error while calling updateTodo API ", error.message);
  }
};

export const deleteTodo = (id: any) => async (dispatch: any) => {
  try {
    const response = await axios.delete(`${API_URL}todos/${id}`);
    dispatch({ type: DELETE_TODO, payload: response.data });
  } catch (error: any) {
    console.log("Error while calling deleteTodo API ", error.message);
  }
};


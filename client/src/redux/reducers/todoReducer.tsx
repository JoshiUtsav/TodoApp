import * as ActionTypes from "../actions/type";

export const todoReducers = (state: any = [], action: any) => {
  switch (action.type) {
    case ActionTypes.ADD_NEW_TODO:
      return [action.payload, ...state];

    case ActionTypes.GET_ALL_TODOS:
      return action.payload;

    case ActionTypes.TOGGLE_TODO_COMPLETED:
      return state.map((todo: any) =>
        todo._id === action.payload._id ? { ...todo, done: !todo.done } : todo
      );

    case ActionTypes.UPDATE_TODO:
      return state.map((todo: any) =>
        todo._id === action.payload._id
          ? { ...todo, data: action.payload.data }
          : todo
      );

    case ActionTypes.DELETE_TODO:
      return state.filter((todo: any) => todo._id !== action.payload._id);

    default:
      return state;
  }
};

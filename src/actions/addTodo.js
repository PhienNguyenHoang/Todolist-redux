import { ADD_TODO_ITEM } from "./types";
export const addTodo = (item) => {
  return (dispatch) => {
    console.log(item);
    dispatch({
      type: ADD_TODO_ITEM,
      payload: item,
    });
  };
};

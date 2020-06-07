import { REMOVE_TODO_ITEM } from './types';
export const removeTodo = (index) => {
  return (dispatch) => {
    console.log(index);
    dispatch({
      type: REMOVE_TODO_ITEM,
      payload: index
    });
  };
};



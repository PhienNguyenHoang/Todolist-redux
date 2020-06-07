import { ADD_TODO_ITEM } from "../actions/types";
import { REMOVE_TODO_ITEM } from "../actions/types";

const initialState = {
  numberOfItem: 0,
  todoItem: [],
};
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO_ITEM: {
      return {
        ...state,
        numberOfItem: state.numberOfItem + 1,
        todoItem: [...state.todoItem, action.payload],
      };
    }
    case REMOVE_TODO_ITEM: {
      const filterTodo = state.todoItem.filter((_, index) => {
        return index !== action.payload;
      });
      return {
        ...state,
        numberOfItem: state.numberOfItem - 1,
        todoItem: filterTodo,
      };
    }
    default:
      return state;
  }
};

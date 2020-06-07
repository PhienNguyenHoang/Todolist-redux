import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../../actions/addTodo";
import TodoList from "../TodoList/TodoList";

function Home(props) {
  const { addTodo } = props;
  const [userInput, setUserInput] = useState("");
  const onChange = (e) => {
    setUserInput(e.target.value);
  };
  return (
    <div>
      <input
        value={userInput}
        type="text"
        placeholder="todos.."
        onChange={onChange}
      ></input>
      <button onClick={() => addTodo(userInput)}>pin</button>
      <TodoList />
    </div>
  );
}
export default connect(null, { addTodo })(Home);

import React from 'react';
import { connect } from 'react-redux';
import TodoItem from '../TodoItem/TodoItem';

function TodoList(props) {
    const {todoProps} = props;
    console.log(todoProps);
    const list = todoProps.todoItem.map((todo, index) => (
        <TodoItem todo = {todo} key = {index} index = {index}/>
    ));
    return(
        <div>
            <ul>
                {list}
            </ul>
        </div>
    );
}
const mapStateToProps = (state) => ({
    todoProps: state.todoState
});
export default connect(mapStateToProps)(TodoList);
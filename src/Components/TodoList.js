import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateTodo, deleteTodo } from 'Store/Actions';

class TodoList extends Component {
  render() {
    const items = this.props.todos;
    console.log(items);
    return (
      <ol className="todo-list">
        {items.length > 0 &&
          items.map((item, index) => (
            <li key={item.id + index}>
              <input type="checkbox" />
              <span className="t-tit">{item.id}</span>
              <button type="button">Del</button>
            </li>
          ))}
      </ol>
    );
  }
}

// props 로 넣어줄 스토어 상태값
const mapStateToProps = state => ({
  todos: state.todo.todos
});

// props 로 넣어줄 액션 생성함수
const mapDispatchToProps = dispatch => ({
  updateTodo: obj => dispatch(updateTodo(obj)),
  deleteTodo: obj => dispatch(deleteTodo(obj))
});

// 컴포넌트에 리덕스 스토어를 연동해줄 때에는 connect 함수 사용
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

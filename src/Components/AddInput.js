import React, { Component } from "react";
import { connect } from "react-redux";

class AddInput extends Component {
  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <div className="todo-input">
        <input type="text" />
        <button type="button" className="add-todo">
          Add
        </button>
      </div>
    );
  }
}

// props 로 넣어줄 스토어 상태값
const mapStateToProps = state => ({
  todos: state.todo.todos
});

// props 로 넣어줄 액션 생성함수
const mapDispatchToProps = dispatch => ({
  // addTodo: color => dispatch(changeColor(color))
});

// 컴포넌트에 리덕스 스토어를 연동해줄 때에는 connect 함수 사용
export default connect(mapStateToProps, mapDispatchToProps)(AddInput);

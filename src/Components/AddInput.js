import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from 'Store/Actions';

class AddInput extends Component {
  state = {
    inputText: ''
  };

  onChange = e => {
    this.setState({
      inputText: e.target.value
    });
  };

  addTodoItem = () => {
    const id = this.state.inputText;
    if (id !== '') this.props.addTodo(id);
  };

  render() {
    return (
      <div className="todo-input">
        <input
          type="text"
          value={this.state.inputText}
          onChange={this.onChange}
        />
        <button type="button" className="add-todo" onClick={this.addTodoItem}>
          Add
        </button>
      </div>
    );
  }
}

// props 로 넣어줄 액션 생성함수
const mapDispatchToProps = dispatch => ({
  addTodo: id => dispatch(addTodo(id))
});

// 컴포넌트에 리덕스 스토어를 연동해줄 때에는 connect 함수 사용
export default connect(null, mapDispatchToProps)(AddInput);

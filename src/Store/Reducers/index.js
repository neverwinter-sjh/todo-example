const initialState = {
  todos: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    // 할일 추가
    case 'ADD_TODO':
      return {
        ...state,
        todos: state.todos.concat({
          id: action.payload,
          done: false
        })
      };

    // 할일 체크 업데이트
    case 'UPDATE_TODO':
      return {
        ...state,
        todos: state.todos.map(item =>
          item.id === action.payload.id ? { ...item, done: action.done } : item
        )
      };

    // 할일 삭제
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter(item => item.id !== action.payload)
      };
    default:
      return state;
  }
};

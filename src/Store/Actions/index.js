// 할일을 추가
export const addTodo = todo => ({
  type: 'ADD_TODO',
  payload: todo
});

// 할일 상태 업데이트
export const updateTodo = todo => ({
  type: 'UPDATE_TODO',
  payload: todo
});

// 할일 삭제
export const deleteTodo = todo => ({
  type: 'DELETE_TODO',
  payload: todo
});

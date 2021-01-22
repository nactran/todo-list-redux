/* eslint-disable indent */
import { connect } from 'react-redux';
import { toggleTodo } from 'Utils/actions';
import { TodoList } from 'Src/components/view/TodoList';
import ITodoObject from 'Src/utils/defs/ITodoObject';

const getVisibleTodos = (todos: ITodoObject[], filter: string): ITodoObject[] => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed);
  }
  return todos;
};
//如何把当前 Redux store state 映射到展示组件的 props 中
const mapStateToProps = (
  state: { todos: ITodoObject[]; visibilityFilter: string }
  //ownProps: any
): { todos: ITodoObject[] } => {
  return {
    //根据 state 中 visibilityFilter 的情况获取 todo 列表
    todos: getVisibleTodos(state.todos, state.visibilityFilter),
  };
};

const mapDispatchToProps = (
  dispatch: (action: { type: string; index: number }) => void
): { onTodoClick: (id: number) => void } => {
  return {
    onTodoClick: (id: number): void => {
      dispatch(toggleTodo(id));
    },
  };
};

export const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

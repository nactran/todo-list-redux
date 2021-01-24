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
  state: { todos: ITodoObject[]; visibilityFilter: string },
  ownProps: { filter: string }
): { todos: ITodoObject[] } => {
  return {
    //根据 state 中 visibilityFilter 的情况获取 todo 列表
    todos: getVisibleTodos(state.todos, ownProps.filter),
  };
};
//If it’s a function, it will be called once on component creation.
//It will receive dispatch as an argument,
//and should return an object full of functions
//that use dispatch to dispatch actions.
const mapDispatchToProps = (
  dispatch: (action: { type: string; index: number }) => void
): { onTodoClick: (id: number) => void } => {
  return {
    onTodoClick: (id: number): void => {
      dispatch(toggleTodo(id));
    },
  };
};
//This is what React Redux’s connect does
//— it encapsulates the logic of talking to the Redux store
// and lets you not worry about it.
// 沟通视图层和store
export const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

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

const mapStateToProps = (state: { todos: ITodoObject[]; visibilityFilter: string }): { todos: ITodoObject[] } => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter),
  };
};

const mapDispatchToProps = (
  dispatch: (arg0: { type: string; index: number }) => void
): { onTodoClick: (id: number) => void } => {
  return {
    onTodoClick: (id: number): void => {
      dispatch(toggleTodo(id));
    },
  };
};

export const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

import React from 'react';
import { Todo } from 'Src/components/view/Todo';
import ITodoObject from 'Utils/defs/ITodoObject';

export const TodoList: ({
  todos,
  onTodoClick,
}: {
  todos: ITodoObject[];
  onTodoClick: (index: number) => void;
}) => JSX.Element = ({ todos, onTodoClick }) => (
  <ul>
    {todos.map((todo, index) => (
      <Todo key={index} {...todo} onClick={(): void => onTodoClick(index)} />
    ))}
  </ul>
);

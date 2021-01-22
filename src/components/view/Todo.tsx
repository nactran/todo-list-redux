import React from 'react';

export const Todo = ({
  onClick,
  completed,
  text,
}: {
  onClick: () => void;
  completed: boolean;
  text: string;
}): JSX.Element => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none',
    }}>
    {text}
  </li>
);

//export default Todo;

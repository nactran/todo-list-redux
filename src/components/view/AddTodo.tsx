import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from 'Utils/actions';

let AddTodo = ({ dispatch }) => {
  //call back ref
  //适用于早期版本的 react 
  let input;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodo(input.value));
          input.value = '';
        }}>
        <input
          ref={node => {
            input = node;
          }}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

AddTodo = connect()(AddTodo);

export default AddTodo;

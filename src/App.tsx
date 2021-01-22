import React from 'react';
import { Footer } from 'Src/components/view/Footer';
import AddTodo from 'Src/components/view/AddTodo';
import { VisibleTodoList } from 'Components/VisibleTodoList';

const App: () => JSX.Element = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default App;

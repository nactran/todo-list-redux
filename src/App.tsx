import React from 'react';
import { Footer } from 'Src/components/view/Footer';
import AddTodo from 'Src/components/view/AddTodo';
import { VisibleTodoList } from 'Components/VisibleTodoList';

const App: ({ match: { params } }: { match: { params: { filter: string } } }) => JSX.Element = ({
  match: { params },
}: {
  match: { params: { filter: string } };
}) => (
  <div>
    <AddTodo />
    <VisibleTodoList filter={params.filter || 'SHOW_ALL'} />
    <Footer activeFilter={params.filter || 'SHOW_ALL'} />
  </div>
);

export default App;

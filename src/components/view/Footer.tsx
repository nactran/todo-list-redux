import React from 'react';
import { FilterLink } from 'Src/components/FilterLink';

export const Footer = ({ activeFilter }: { activeFilter: string }): JSX.Element => (
  <p>
    Show:{' '}
    <FilterLink activeFilter={activeFilter} filter="SHOW_ALL">
      All
    </FilterLink>
    {', '}
    <FilterLink activeFilter={activeFilter} filter="SHOW_ACTIVE">
      Active
    </FilterLink>
    {', '}
    <FilterLink activeFilter={activeFilter} filter="SHOW_COMPLETED">
      Completed
    </FilterLink>
  </p>
);

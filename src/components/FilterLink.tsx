import React, { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
export const FilterLink = ({
  filter,
  activeFilter,
  children,
}: {
  filter: string;
  activeFilter: string;
  children: ReactNode;
}): JSX.Element => (
  <NavLink
    to={filter === 'SHOW_ALL' ? '/' : `/${filter}`}
    isActive={(): boolean => filter === activeFilter}
    activeStyle={{
      textDecoration: 'none',
      color: 'black',
    }}>
    {children}
  </NavLink>
);

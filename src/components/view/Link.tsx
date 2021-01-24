import React, { ReactNode } from 'react';

export const Link = ({
  active,
  children,
  onClick,
}: //filter,
{
  active: boolean;
  children: ReactNode;
  onClick: () => void;
  //filter: string;
}): JSX.Element => {
  //Link components have property "filter" but never used in render so we just ignore it.
  //console.log(filter);
  if (active) {
    return <span>{children}</span>;
  }
  return (
    <a
      href=""
      onClick={function (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void {
        e.preventDefault();
        //console.log('Link ' + children + ' Clicked!');
        onClick();
      }}>
      {children}
    </a>
  );
};

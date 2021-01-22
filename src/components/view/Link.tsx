import React, { ReactNode } from 'react';

export const Link = ({
  active,
  children,
  onClick,
}: {
  active: boolean;
  children: ReactNode;
  onClick: (...args: any[]) => any;
}): JSX.Element => {
  if (active) {
    return <span>{children}</span>;
  }

  return (
    <a
      href=""
      onClick={function (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void {
        e.preventDefault();
        onClick();
      }}>
      {children}
    </a>
  );
};

import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { useCallback } from 'react';

export function Navigation() {
  const getLinkClass = useCallback(
    ({ isActive }: { isActive: boolean }) => classNames('navbar-item', {
      'has-background-grey-lighter': isActive,
    }),
    [],
  );

  return (
    <nav
      data-cy="nav"
      className="navbar is-fixed-top has-shadow"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink className={getLinkClass} to="/">
            Home
          </NavLink>

          <NavLink className={getLinkClass} to="/people">
            People
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
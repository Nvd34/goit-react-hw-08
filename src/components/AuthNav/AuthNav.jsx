import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';
import clsx from 'clsx';

export default function AuthNav() {
  const makeLinkClass = ({ isActive }) => {
    return clsx(css.navLink, isActive && css.isActive);
  };

  return (
    <div className={css.wrapper}>
      <NavLink to="/register" className={makeLinkClass}>
        Register
      </NavLink>
      <NavLink to="/login" className={makeLinkClass}>
        Log in
      </NavLink>
    </div>
  );
}

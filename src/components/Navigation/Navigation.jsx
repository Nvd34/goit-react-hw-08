import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import clsx from 'clsx';

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const makeLinkClass = ({ isActive }) => {
    return clsx(css.navLink, isActive && css.isActive);
  };
  return (
    <nav>
      <NavLink to="/" className={makeLinkClass}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" className={makeLinkClass}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
}

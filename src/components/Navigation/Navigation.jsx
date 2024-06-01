import { NavLink } from 'react-router-dom';

import css from './Navigation.module.css';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

export default function Navigation() {

  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <ul className={css.mainNavigation}>
      <li>
        <NavLink to='/'>Home</NavLink>
      </li>
      {isLoggedIn && (
        <li>
          <NavLink to='/contacts'>My Contacs</NavLink>
        </li>
      )}
    </ul>
  );
}
import { NavLink } from 'react-router-dom';

import css from './AuthNav.module.css';

export default function AuthNav() {
  return (
      <ul className={css.authNavigation}>
          <li>
              <NavLink to="/register">
                Register
              </NavLink>
          </li>
          <li>
              <NavLink to="/login">
                LogIn
              </NavLink>
          </li>
      </ul>
  );
}
import { useDispatch, useSelector } from 'react-redux';
import css from './UserMenu.module.css';
import { selectUser } from '../../redux/auth/selectors';
import { logout } from '../../redux/auth/operations';

export default function UserMenu() {

  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleClick = () => {
    dispatch(logout());
  }

  return (
    <div className={css.userNavigation}>
      <p>Welcome, {user.name}</p>
      <button className={css.logoutButton} onClick={handleClick}>LogOut</button>
    </div>
  );
}
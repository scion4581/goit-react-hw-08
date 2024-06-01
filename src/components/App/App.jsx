import { useSelector, useDispatch } from 'react-redux';
import { useEffect, lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from '../Layout/Layout';

import RestrictedRoute from '../Routes/RestrictedRoute';
import PrivateRoute from '../Routes/PrivateRoute';

import Loader from '../Loader/Loader';
import { selectIsRefreshing } from '../../redux/auth/selectors';
import { refreshUser } from '../../redux/auth/operations';
import { selectLoading } from '../../redux/contacts/selectors';

import './App.css';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const ContactsPage = lazy(() => import('../../pages/ContactsPage/ContactsPage'));
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('../../pages/RegisterPage/RegisterPage'));

export default function App() {

  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <p>Refreshing user please wait...</p>
  ) : (
    <Layout>
      <Suspense fallback={<Loader></Loader>}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<RestrictedRoute component={<LoginPage />} redirectTo='/contacts' />} />
          <Route path='/register' element={<RestrictedRoute component={<RegisterPage />} redirectTo='/' />} />
          <Route path='/contacts' element={<PrivateRoute component={<ContactsPage />} redirectTo='/login' />} />
        </Routes>
      </Suspense>
      {isLoading && <Loader />}
    </Layout>
  );
}

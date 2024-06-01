import css from './ErrorMessage.module.css';
import PageTitle from '../PageTitle/PageTitle';

export default function ErrorPage({ message }) {
    return (
        <div className={css.error}>
          <p>{message}</p>
        </div>
    );
}
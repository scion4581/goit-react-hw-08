import css from './PageTitle.module.css';

export default function PageTitle({ titleText }) {
    return <h1 className={css.pageTitle}>{titleText}</h1>
}
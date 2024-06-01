import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import PageTitle from '../../components/PageTitle/PageTitle';

export default function ErrorPage({message}) {
    return (
        <>
            <PageTitle titleText='Error page' />
            <ErrorMessage message={message}/>
        </>
    );
}
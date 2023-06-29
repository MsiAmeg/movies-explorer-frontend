import { useNavigate } from 'react-router-dom';
import './PageNotFound.css';

function PageNotFound () {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1, { replace: true });
    }

    return (
        <div className='not-found'>
            <h1 className='not-found___title'>404</h1>
            <span className='not-found__span'>Страница не найдена</span>
            <button className='not-found__button' onClick={goBack}>Назад</button>
        </div>
    );
};

export default PageNotFound;
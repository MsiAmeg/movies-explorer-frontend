import { Link } from 'react-router-dom';
import './UnlogginedFooter.css';

function UnlogginedFooter ({ spanTxt, linkTxt, linkUrl }) {
    return (
        <footer className='unloggined-footer'>
            <Link className='unloggined-footer__link hover' to={linkUrl}>
                <span className='unloggined-footer__span'>
                    {spanTxt}
                </span> {linkTxt}
            </Link>
        </footer>
    );
}

export default UnlogginedFooter;
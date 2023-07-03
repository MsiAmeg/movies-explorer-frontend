import { useContext } from 'react';
import { LoginContext } from "../../contexts/Login.js";
import './UnlogginedForm.css';

function UnlogginedForm({ isValid, btnText, children }) {

    const { userLoggined } = useContext(LoginContext);

    return (
        <>
            <form className='unloggined' onSubmit={userLoggined}>
                {children}
                <button type="submit" className="unloggined__button hover"
                aria-label="сохранение изменений" disabled={!isValid}>{btnText}</button>
            </form>
        </>
    );
}

export default UnlogginedForm;
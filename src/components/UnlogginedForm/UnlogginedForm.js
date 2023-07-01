import { useContext } from 'react';
import { LoginContext } from "../../contexts/LoginContext.js";
import './UnlogginedForm.css';

function UnlogginedForm({ btnText, children }) {

    const { userLoggined } = useContext(LoginContext);

    return (
        <>
            <form className='unloggined' onSubmit={userLoggined}>
                {children}
                <button type="submit" className="unloggined__button hover" aria-label="сохранение изменений">{btnText}</button>
            </form>
        </>
    );
}

export default UnlogginedForm;
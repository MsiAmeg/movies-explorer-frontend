import './UnlogginedForm.css';

function UnlogginedForm({ btnText, children }) {
    return (
        <>
            <form className='unloggined__form'>
                {children}
                <button type="submit" className="unloggined__button hover" aria-label="сохранение изменений">{btnText}</button>
            </form>
        </>
    );
}

export default UnlogginedForm;
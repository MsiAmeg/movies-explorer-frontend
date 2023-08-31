import './UnlogginedForm.css';

function UnlogginedForm({ isValid, btnText, children, handleSubmit }) {

  return (
    <>
      <form className='unloggined' onSubmit={handleSubmit}>
        {children}
        <button type="submit" className="unloggined__button hover"
          aria-label="сохранение изменений" disabled={!isValid}>{btnText}</button>
      </form>
    </>
  );
}

export default UnlogginedForm;

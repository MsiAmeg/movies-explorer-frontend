import { useState, useCallback } from 'react';

export const useFormValidation = () => {
    const [input, setInput] = useState({});
    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState(false);

    const onInputChange = (e) => {
        setInput({...input, [e.target.name]: e.target.value});
        setErrors({...errors, [e.target.name]: e.target.validationMessage});
        setIsValid(e.target.closest('form').checkValidity());
    };

    const resetForm = useCallback((newInputs = {}, newErrors = {}, newIsValid = false) => {
        setInput(newInputs);
        setErrors(newErrors);
        setIsValid(newIsValid);
    }, [setInput, setErrors, setIsValid]);

    return {input, errors, isValid, onInputChange, resetForm};
}

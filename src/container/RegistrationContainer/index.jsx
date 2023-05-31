import { useState } from "react";
import { RegistrationScreen } from "../../screens/RegistrationScreen";
import { phoneMask } from "../../core/utils/phoneMask";
import { formRegisterValidation } from "../../core/utils/validation/register";

export const RegistrationContainer = () => {
    const [currentUserType, setCurrentUserType] = useState('client');
    const [registerInputValues, setRegisterInputValues] = useState();
    
    const handleChangeInputValues = (name, event) => {
        setRegisterInputValues({
            ...registerInputValues,
            [name]: name === 'phone' ? phoneMask(event.target.value) : event.target.value
        })
    }

    const handleChangeUserType = (newUserType) => {
        setCurrentUserType(newUserType);
    }
    
    const handleRegisterSubmit = (event) => {
        event.preventDefault();

        // Validação dos campos do formulário de cadastro
        if(!formRegisterValidation(registerInputValues, currentUserType)) {
            return;
        }
    }

    return <RegistrationScreen {...{
            handleRegisterSubmit,
            handleChangeUserType,
            handleChangeInputValues,
            currentUserType,
            registerInputValues
        }}
    />
}
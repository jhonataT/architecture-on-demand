import { useState } from "react";
import { RegistrationScreen } from "../../screens/RegistrationScreen";
import { phoneMask } from "../../core/utils/phoneMask";
import { formRegisterValidation } from "../../core/utils/validation/register";
import { Api } from "../../core/services/api";
import { customToast } from "../../components/Toast";
import { useNavigate } from "react-router";

export const RegistrationContainer = () => {
    const navigate = useNavigate();
    const [currentUserType, setCurrentUserType] = useState('client');
    const [registerInputValues, setRegisterInputValues] = useState({ cau: '' });
    
    const handleChangeInputValues = (name, event) => {
        setRegisterInputValues({
            ...registerInputValues,
            [name]: name === 'phone' ? phoneMask(event.target.value) : event.target.value
        })
    }

    const handleChangeUserType = (newUserType) => {
        setCurrentUserType(newUserType);
    }
    
    const handleRegisterSubmit = async (event) => {
        event.preventDefault();

        // Validação dos campos do formulário de cadastro
        if(!formRegisterValidation(registerInputValues, currentUserType)) {
            return;
        }

        try {
            const response = await Api().post('/auth/register', {
                ...registerInputValues,
                age: Number(registerInputValues.age),
                role: currentUserType.toUpperCase()
            });

            if(response.data && response.data.status) {
                customToast(response.data.message, 'success');
                navigate('/authentication/login')
            } else {
                throw new Error('Erro ao cadastrar usuário');
            }
        } catch(error) {
            let responseMessage;

            responseMessage = Array.isArray(error.response?.data?.message[0]) ?
                error.response?.data?.message[0] : 
                error.response?.data?.message;

            responseMessage = responseMessage || error?.message;

            customToast(`Erro ao realizar cadastro: ${responseMessage}`, 'error')
            console.log("Erro ao realizar cadastro", { error })
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
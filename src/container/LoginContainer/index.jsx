import { useState } from "react";
import { LoginScreen } from "../../screens/LoginScreen";
import { formLoginValidation } from "../../core/utils/validation/login";

export const LoginContainer = () => {
    const [loginValues, setLoginValues] = useState();

    const handleChange = (inputName, event) => {
        setLoginValues({
            ...loginValues,
            [inputName]: event.target.value
        });
    }

    const handleSignInSubmit = async (event) => {
        event.preventDefault();

        // validando os dados informados (email e senha)
        if(!formLoginValidation(loginValues)) {
            return;
        }
    }

    return <LoginScreen {...{ handleChange, handleSignInSubmit }}/>
}
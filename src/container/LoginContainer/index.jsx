import { useState } from "react";
import { LoginScreen } from "../../screens/LoginScreen";
import { formLoginValidation } from "../../core/utils/validation/login";
import { useLoggedUser } from "../../core/hooks/useLoggedUser";

export const LoginContainer = () => {
    const [loginValues, setLoginValues] = useState();
    const { doLogin } = useLoggedUser()

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

        // logging in
        await doLogin(loginValues)
    }

    return <LoginScreen {...{ handleChange, handleSignInSubmit }}/>
}
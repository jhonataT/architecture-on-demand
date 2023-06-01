import { useDispatch, useSelector } from "react-redux"
import { updateApp } from "../redux/setup/setupDataSlice";
import { customToast } from "../../components/Toast";
import { useNavigate } from "react-router-dom";
import { Api } from "../services/api";

export const useLoggedUser = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const loggedUser = useSelector(state => state.app?.loggedUser);
    const token = useSelector(state => state.app?.token);

    const doLogin = async (userData) => {
        try {
            const response = await Api.post('/auth/login', userData);

            let newToken = response?.data?.token;

            if(newToken) {
                const result = await Api.get('/auth/profile', {
                    headers: { Authorization: `Bearer ${newToken}` }
                });

                dispatch(updateApp({ 
                    loggedUser: result?.data,
                    token: newToken
                }));
        
                result.data?.role === 'ARCHITECT' ? navigate('/architect/list') : navigate('/client');
            } else {
                throw new Error('Erro ao realizar login');
            }
        } catch(error) {
            let responseMessage;

            responseMessage = Array.isArray(error.response?.data?.message[0]) ?
                error.response?.data?.message[0] : 
                error.response?.data?.message;

            responseMessage = responseMessage || error?.message;

            customToast(`Erro ao realizar login: ${responseMessage}`, 'error')
            console.log("Erro ao efetuar login", { error })
        }
    }

    const logOut = () => {
        dispatch(updateApp({ 
            loggedUser: null,
            token: null
        }));

        navigate('/authentication/login');
    }

    return {
        doLogin,
        logOut,
        token,
        loggedUser
    };
}
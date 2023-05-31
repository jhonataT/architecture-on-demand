import { customToast } from "../../../components/Toast";
import { validateEmail } from "../emailValidation";

export const formLoginValidation = (values) => {
    if(!values?.email) {
        customToast('Informe o email.', 'error');
        return false;
    } else if(!validateEmail(values?.email)) {
        customToast('Informe um email válido.', 'error');
        return false;
    } else if (!values?.password) {
        customToast('Informe a senha.', 'error');
        return false;
    }

    return true;
}
import { customToast } from "../../../components/Toast";
import { validateEmail } from "../emailValidation";

export const formRegisterValidation = (values, userType = 'client') => {
    if(!values?.fullname || !values?.email || !values?.phone || !values?.gender || !values?.age || !values?.password || !values?.confirmPassword) {
        customToast('Preencha todos os campos', 'info');
        return false;
    } else if(!validateEmail(values?.email)) {
        customToast('Informe um email válido.', 'error');
        return false;
    } else if (values?.password !== values?.confirmPassword) {
        customToast('Verifique se as senhas estão iguais', 'error');
        return false;
    } else if (values?.password !== values?.confirmPassword) {
        customToast('Verifique se as senhas estão iguais', 'error');
        return false;
    } else if (Number(values?.age) <= 0 || Number(values?.age) > 120) {
        customToast('Informe a idade correta', 'error');
        return false;
    } else if (userType === 'architect' && !values?.CAU) {
        customToast('Informe o seu registo de Arquitetura e Urbanismo (CAU)', 'error');
        return false;
    }

    return true;
}
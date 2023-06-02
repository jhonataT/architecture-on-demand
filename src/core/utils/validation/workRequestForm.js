import { customToast } from "../../../components/Toast";

export const workRequestForm = (values) => {
    if(!values?.client) {
        customToast('Informe o client que solicitou.', 'error');
        return false;
    } else if (!values?.architect) {
        customToast('Informe o arquiteto selecionado.', 'error');
        return false;
    } else if(!values?.description) {
        customToast('Preencha a descrição do serviço.', 'error');
        return false;
    } else if(values.description.length > 500) {
        customToast('A descrição deve ter, no máximo, 500 caracteres.', 'error');
        return false;
    }

    return true;
}
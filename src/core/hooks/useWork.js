import { customToast } from "../../components/Toast"
import { Api } from "../services/api"
import { useDate } from "./useDate"
import { useLoggedUser } from "./useLoggedUser"
import { useTranslate } from "./useTranslate"

export const useWork = (selectedWork) => {
    const { token, loggedUser } = useLoggedUser();

    const getAllByClient = async () => {
        try {
            const response = await Api(token).get(`/work-requests/client/${loggedUser?.id}`);
            if(response.data) {
                const formattedData = response.data.map(item => ({
                    ...item,
                    client: item.client?.email,
                    architect: item.architect?.email,
                    status: useTranslate(item.status),
                    createdAt: useDate(item.createdAt)
                }));

                return formattedData;
            } else {
                throw new Error('Erro ao buscar dados')
            }
        } catch(error) {
            customToast(`Erro ao buscar dados: ${error.message}`, 'error');
        }
    }
    
    const getWaiting = async () => {
        try {
            const response = await Api(token).get(`/work-requests/architect/${loggedUser?.id}/?status=Waiting`);

            if(response.data) {
                const formattedData = response.data.map(item => ({
                    ...item,
                    architect: item.architect?.email,
                    client: item.client?.email,
                    status: useTranslate(item.status),
                    createdAt: useDate(item.createdAt)
                }));

                return formattedData;
            } else {
                throw new Error('Erro ao buscar dados')
            }
            
        } catch(error) {
            customToast(`Erro ao buscar dados: ${error.message}`, 'error');
        }
    }

    const getAccepted = async () => {
        try {
            const response = await Api(token).get(`/work-requests/architect/${loggedUser?.id}/?status=Accepted`)
            if(response.data) {
                const formattedData = response.data.map(item => ({
                    ...item,
                    architect: item.architect?.email,
                    client: item.client?.email,
                    status: useTranslate(item.status),
                    createdAt: useDate(item.createdAt)
                }));

                return formattedData;
            } else {
                throw new Error('Erro ao buscar dados')
            }
        } catch(error) {
            customToast(`Erro ao buscar dados: ${error.message}`, 'error');
        }
    }

    const getRefused = async () => {
        try {
            const response = await Api(token).get(`/work-requests/architect/${loggedUser?.id}/?status=Refused`);
            if(response.data) {
                const formattedData = response.data.map(item => ({
                    ...item,
                    architect: item.architect?.email,
                    client: item.client?.email,
                    status: useTranslate(item.status),
                    createdAt: useDate(item.createdAt)
                }));

                return formattedData;
            } else {
                throw new Error('Erro ao buscar dados')
            }
        } catch(error) {
            customToast(`Erro ao buscar dados: ${error.message}`, 'error');
        }
    }

    const getDeleted = async () => {
        try {
            const response = await Api(token).get(`/work-requests/deleted/${loggedUser?.id}`)
            if(response.data) {
                const formattedData = response.data.map(item => ({
                    ...item,
                    architect: item.architect?.email,
                    client: item.client?.email,
                    status: useTranslate(item.status),
                    createdAt: useDate(item.createdAt)
                }));
    
                return formattedData;
            } else {
                throw new Error('Erro ao buscar dados')
            }
        } catch(error) {
            customToast(`Erro ao buscar dados: ${error.message}`, 'error');
        }
    }

    const saveNewWork = async (data) => {
        try {
            const response = await Api(token).post('/work-requests', data)
            
            if(response.data && response.data?.id) {
                customToast('Serviço solicitado, aguardando resposta do arquiteto.', 'success');
                return response.data;
            } else {
                throw new Error('Erro ao solicitar novo serviço');
            }

        } catch(error) {
            let responseMessage;

            responseMessage = Array.isArray(error.response?.data?.message[0]) ?
                error.response?.data?.message[0] :
                error.response?.data?.message;

            responseMessage = responseMessage || error?.message;

            customToast(`Erro ao solicitar serviço: ${responseMessage}`, 'error')
            console.log("Erro ao solicitar serviço", { error })
        }
    }

    const updateWork = async (data) => {
        try {
            const response = await Api(token).put(`/work-requests/${selectedWork.id}`, data);

            // Caso o retorno esteja ok:
            if(response.data && response.data?.id) {
                customToast(`Serviço atualizado.`, 'success');
                
                return response.data;
            } else {
                // Caso o retorno não seja de acordo com o retorno de sucesso:
                throw new Error(`Erro ao atualizar serviço`);
            }

        } catch(error) {
            let responseMessage;

            responseMessage = Array.isArray(error.response?.data?.message[0]) ?
                error.response?.data?.message[0] :
                error.response?.data?.message;

            responseMessage = responseMessage || error?.message;

            // feedback de erro para o usuário/desenvolvedor
            customToast(`Erro ao atualizar serviço: ${responseMessage}`, 'error')
            console.log('Erro ao atualizar serviço', { error })
        }
    }

    const updateStatus = async (newStatus) => { // newStatus = 'Waiting' | 'Accepted' | 'Refused';
        try {
            const response = await Api(token).put(`/work-requests/${selectedWork.id}`, { status: newStatus });

            // Caso o retorno esteja ok:
            if(response.data && response.data?.id) {
                customToast(`Serviço ${newStatus === 'Accepted' ? 'aceito' : 'recusado'}.`, 'success');
                
                return response.data;
            } else {
                // Caso o retorno não seja de acordo com o retorno de sucesso:
                throw new Error(`Erro ao ${newStatus === 'Accepted' ? 'aceitar' : 'recusar'} serviço`);
            }

        } catch(error) {
            let responseMessage;

            responseMessage = Array.isArray(error.response?.data?.message[0]) ?
                error.response?.data?.message[0] :
                error.response?.data?.message;

            responseMessage = responseMessage || error?.message;

            // feedback de erro para o usuário/desenvolvedor
            customToast(`Erro ao atualizar serviço: ${responseMessage}`, 'error')
            console.log('Erro ao atualizar serviço', { error })
        }
    }

    const recoveryWork = async () => { // deletedAt to null
        try {
            const response = await Api(token).put(`/work-requests/${selectedWork.id}`, { deletedAt: null });

            // Caso o retorno esteja ok:
            if(response.data && response.data?.id) {
                customToast('Serviço recuperado com sucesso.', 'success');
                return response.data;
            } else {
                // Caso o retorno não seja de acordo com o retorno de sucesso:
                throw new Error(`Erro ao recuperar serviço.`);
            }

        } catch(error) {
            let responseMessage;

            responseMessage = Array.isArray(error.response?.data?.message[0]) ?
                error.response?.data?.message[0] :
                error.response?.data?.message;

            responseMessage = responseMessage || error?.message;

            // feedback de erro para o usuário/desenvolvedor
            customToast(`Erro ao recuperar serviço: ${responseMessage}`, 'error')
            console.log(`Erro ao recuperar serviço`, { error })
        }
    }

    const deleteWork = async () => {
        try {
            const response = await Api(token).delete(`/work-requests/${selectedWork?.id}`)

            if(!response.data) {
                customToast('Serviço excluído.', 'success');
            } else {
                throw new Error('Erro ao excluir serviço.');
            }

        } catch(error) {
            let responseMessage;

            responseMessage = Array.isArray(error.response?.data?.message[0]) ?
                error.response?.data?.message[0] :
                error.response?.data?.message;

            responseMessage = responseMessage || error?.message;

            customToast(`Erro ao excluir serviço: ${responseMessage}`, 'error')
            console.log("Erro ao excluir serviço:", { error })
        }
    }

    return {
        getWaiting,
        getAccepted,
        getRefused,
        getDeleted,
        recoveryWork,
        getAllByClient,
        deleteWork,
        saveNewWork,
        updateStatus,
        updateWork
    }
}
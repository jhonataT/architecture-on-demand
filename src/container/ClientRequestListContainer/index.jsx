import { useEffect, useState } from "react";
import { ClientRequestListScreen } from "../../screens/ClientRequestListScreen";
import { Api } from "../../core/services/api";
import { useLoggedUser } from "../../core/hooks/useLoggedUser";
import { customToast } from "../../components/Toast";

export const ClientRequestListContainer = () => {
    const { loggedUser, token } = useLoggedUser();
    const [reload, setReload] = useState(true);
    const [selectedWorkValues, setSelectedWorkValues] = useState(null);
    const [isActionModalOpen, setIsActionModalOpen] = useState(false);
    const [isFormModalOpen, setIsFormModalOpen] = useState(false);
    const [clientWorks, setClientWorks] = useState([]);

    useEffect(() => {
        if(reload) {
            Api(token).get(`/work-requests/client/${loggedUser?.id}`)
            .then(response => {
                if(response.data) {
                    const formattedData = response.data.map(item => ({
                        ...item,
                        client: item.client?.email,
                        architect: item.architect?.email
                    }));
 
                    setClientWorks(formattedData);
                    setReload(false);
                } else {
                    throw new Error('Erro ao buscar dados')
                }
            })
            .catch(error => {
                customToast(`Erro ao buscar dados: ${error.message}`, 'error');
                setReload(false);
            })
        }
    }, [reload]);

    const handleOpenWorkForm = () => {
        setIsFormModalOpen(true);
        setIsActionModalOpen(false);
    }

    const handleCloseNewWorkForm = () => {
        setIsFormModalOpen(false);
        setSelectedWorkValues(null);
    }

    const handleCloseActionModal = () => {
        setIsActionModalOpen(false);
        setSelectedWorkValues(null);
    }

    const handleOpenActionModal = (newSelectedWorkValues) => {
        setSelectedWorkValues(newSelectedWorkValues);
        setIsActionModalOpen(true);
    }

    const handleDeleteWork = async () => {
        try {
            const response = await Api(token).delete(`/work-requests/${selectedWorkValues?.id}`)
            console.log("response", response);

            if(!response.data) {
                customToast('Serviço cancelado.', 'success');
                handleCloseActionModal();
                setReload(true);
            } else {
                throw new Error('Erro ao cancelar serviço.');
            }

        } catch(error) {
            let responseMessage;

            responseMessage = Array.isArray(error.response?.data?.message[0]) ?
                error.response?.data?.message[0] :
                error.response?.data?.message;

            responseMessage = responseMessage || error?.message;

            customToast(`Erro ao cancelar serviço: ${responseMessage}`, 'error')
            console.log("Erro ao cancelar serviço:", { error })
        }
    }

    return <ClientRequestListScreen {...{
            handleOpenActionModal,
            handleCloseActionModal,
            handleCloseNewWorkForm,
            handleOpenWorkForm,
            handleDeleteWork,
            handleDeleteWork,
            isActionModalOpen,
            clientWorks,
            isFormModalOpen,
            selectedWorkValues
        }}
    />
}
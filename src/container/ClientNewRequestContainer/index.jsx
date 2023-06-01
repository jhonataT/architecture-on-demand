import { useEffect, useState } from 'react';
import { ClientNewRequestScreen } from '../../screens/ClientNewRequestScreen';
import { useLoggedUser } from '../../core/hooks/useLoggedUser';
import { Api } from '../../core/services/api';
import { workRequestForm } from '../../core/utils/validation/workRequestForm';
import { customToast } from '../../components/Toast';

export const ClientNewRequestContainer = () => {
    const { token, loggedUser } = useLoggedUser();
    const [reload, setReload] = useState(true);
    const [isActionModalOpen, setIsActionModalOpen] = useState(false);
    const [isFormModalOpen, setIsFormModalOpen] = useState(false);
    const [selectedArchitect, setSelectedArchitect] = useState(null);
    const [availableArchitects, setAvailableArchitects] = useState([]);
    const [newWorkValues, setNewWorkValues] = useState({
        client: loggedUser?.id,
        architect: selectedArchitect?.id,
        description: null
    });

    useEffect(() => {
        if(reload) {
            Api(token).get('/users/architects')
            .then(response => {
                if(response.data) {
                    setAvailableArchitects(response.data);
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

    const handleNewWorkValues = (name, event) => {
        setNewWorkValues({
            ...newWorkValues,
            [name]: event.target.value
        })
    }

    const handleOpenNewServiceForm = () => {
        setIsFormModalOpen(true);
        setIsActionModalOpen(false);
    }

    const handleCloseNewWorkForm = () => {
        setIsFormModalOpen(false);
    }

    const handleCloseActionModal = () => {
        setIsActionModalOpen(false);
        setSelectedArchitect(null);
        setNewWorkValues({ ...newWorkValues, architect: null });
    }

    const handleOpenActionModal = (architectValue) => {
        setIsActionModalOpen(true);
        setSelectedArchitect(architectValue);
        setNewWorkValues({ ...newWorkValues, architect: architectValue.id });
    }

    const handleSendNewWorkRequest = async () => {
        // Validando o formulário de serviços
        if(!workRequestForm(newWorkValues)) {
            return;
        }

        try {
            const response = await Api(token).post('/work-requests', newWorkValues)
            
            if(response.data && response.data?.id) {
                customToast('Serviço solicitado, aguardando resposta do arquiteto.', 'success');
                setIsFormModalOpen(false);
                setNewWorkValues({ ...newWorkValues, description: null});
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

    return <ClientNewRequestScreen {...{
            availableArchitects,
            isActionModalOpen,
            handleCloseActionModal,
            handleOpenActionModal,
            handleOpenNewServiceForm,
            handleCloseNewWorkForm,
            handleNewWorkValues,
            handleSendNewWorkRequest,
            isFormModalOpen,
            setNewWorkValues,
            architect: selectedArchitect?.email,
            client: loggedUser?.email
        }}
    />
}
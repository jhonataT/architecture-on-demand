import { useEffect, useState } from 'react';
import { ClientNewRequestScreen } from '../../screens/ClientNewRequestScreen';
import { useLoggedUser } from '../../core/hooks/useLoggedUser';
import { Api } from '../../core/services/api';
import { workRequestForm } from '../../core/utils/validation/workRequestForm';
import { customToast } from '../../components/Toast';
import { useWork } from '../../core/hooks/useWork';
import { useTranslate } from '../../core/hooks/useTranslate';
import { useDate } from '../../core/hooks/useDate';

export const ClientNewRequestContainer = () => {
    const { saveNewWork } = useWork();
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
                    const formattedData = response.data.map(item => ({
                        ...item,
                        role: useTranslate(item.role),
                        isActive: useTranslate(item.isActive.toString()),
                        createdAt: useDate(item.createdAt)
                    }))

                    setAvailableArchitects(formattedData);
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

        await saveNewWork(newWorkValues);
        setIsFormModalOpen(false);
        setNewWorkValues({ ...newWorkValues, description: null});
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
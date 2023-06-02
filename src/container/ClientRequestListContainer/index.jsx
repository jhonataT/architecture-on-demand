import { useEffect, useState } from "react";
import { ClientRequestListScreen } from "../../screens/ClientRequestListScreen";
import { useWork } from "../../core/hooks/useWork";

export const ClientRequestListContainer = () => {
    const [reload, setReload] = useState(true);
    const [selectedWorkValues, setSelectedWorkValues] = useState(null);
    const [isActionModalOpen, setIsActionModalOpen] = useState(false);
    const [isFormModalOpen, setIsFormModalOpen] = useState(false);
    const [clientWorks, setClientWorks] = useState([]);
    const [workValuesToUpdate, setWorkValuesToUpdate] = useState();
    const { deleteWork, getAllByClient, updateWork } = useWork(selectedWorkValues);

    useEffect(() => {
        if(reload) {
            getAllByClient()
            .then(result => {
                setClientWorks(result);
                setReload(false);
            })
        }
    }, [reload]);

    const handleInputChange = (name, event) => {
        setWorkValuesToUpdate({
            ...workValuesToUpdate,
            [name]: event.target.value
        });
    }

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

    const handleUpdateWork = async () => {
        await updateWork(workValuesToUpdate);
        handleCloseNewWorkForm();
        setReload(true);
    }

    const handleDeleteWork = async () => {
        await deleteWork();
        handleCloseActionModal();
        setReload(true);
    }

    return <ClientRequestListScreen {...{
            handleOpenActionModal,
            handleCloseActionModal,
            handleCloseNewWorkForm,
            handleOpenWorkForm,
            handleDeleteWork,
            handleDeleteWork,
            handleInputChange,
            isActionModalOpen,
            clientWorks,
            isFormModalOpen,
            handleUpdateWork,
            workValuesToUpdate,
            selectedWorkValues
        }}
    />
}
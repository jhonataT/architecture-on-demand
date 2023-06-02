import { useEffect, useState } from "react";
import { ArchRefusedListScreen } from "../../screens/ArchRefusedListScreen"
import { useWork } from "../../core/hooks/useWork";

export const ArchRefusedListContainer = () => {
    const [reload, setReload] = useState(true);
    const [availableServices, setAvailableServices] = useState([]);
    const [selectedWorkValues, setSelectedWorkValues] = useState(null);
    const [isActionModalOpen, setIsActionModalOpen] = useState(false);
    const [isFormModalOpen, setIsFormModalOpen] = useState(false);
    const { getRefused: getRefusedWork, deleteWork } = useWork(selectedWorkValues);

    useEffect(() => {
        if(reload) {
            getRefusedWork()
            .then(result => {
                setAvailableServices(result);
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
        await deleteWork();
        handleCloseActionModal();
        setReload(true);
    }

    return <ArchRefusedListScreen {...{
            availableServices,
            selectedWorkValues,
            handleOpenWorkForm,
            handleCloseNewWorkForm,
            handleCloseActionModal,
            handleOpenActionModal,
            isFormModalOpen,
            handleDeleteWork,
            isActionModalOpen
        }}
    />
}
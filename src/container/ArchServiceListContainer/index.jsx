import { useEffect, useState } from "react";
import { ArchServiceListScreen } from "../../screens/ArchServiceListScreen";
import { useWork } from "../../core/hooks/useWork";

export const ArchServiceListContainer = () => {
    const [reload, setReload] = useState(true);
    const [availableServices, setAvailableServices] = useState([]);
    const [selectedWorkValues, setSelectedWorkValues] = useState(null);
    const [isActionModalOpen, setIsActionModalOpen] = useState(false);
    const [isFormModalOpen, setIsFormModalOpen] = useState(false);
    const { getWaiting: getWaitingWorks, updateStatus } = useWork(selectedWorkValues);

    useEffect(() => {
        if(reload) {
            getWaitingWorks()
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

    const handleAcceptOrRefuseWork = async (newStatus = 'Accepted') => { // newStatus = 'Waiting' | 'Accepted' | 'Refused';
        await updateStatus(newStatus);

        newStatus === 'Accepted' ? 
            setIsFormModalOpen(false) :
            setIsActionModalOpen(false);

        setReload(true);
    }

    return <ArchServiceListScreen {...{
        availableServices,
        selectedWorkValues,
        handleOpenWorkForm,
        handleCloseNewWorkForm,
        handleCloseActionModal,
        handleOpenActionModal,
        handleAcceptOrRefuseWork,
        isFormModalOpen,
        isActionModalOpen
    }} />
}
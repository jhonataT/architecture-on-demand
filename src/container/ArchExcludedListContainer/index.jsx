import { useEffect, useState } from "react";
import { ArchExcludedListScreen } from "../../screens/ArchExcludedListScreen";
import { customToast } from "../../components/Toast";
import { useWork } from "../../core/hooks/useWork";

export const ArchExcludedListContainer = () => {
    const [reload, setReload] = useState(true);
    const [availableServices, setAvailableServices] = useState([]);
    const [selectedWorkValues, setSelectedWorkValues] = useState(null);
    const [isActionModalOpen, setIsActionModalOpen] = useState(false);
    const [isFormModalOpen, setIsFormModalOpen] = useState(false);
    const { getDeleted: getDeletedWork, recoveryWork } = useWork(selectedWorkValues);

    useEffect(() => {
        if(reload) {
            getDeletedWork()
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

    const handleRecoveryWork = async () => { // deletedAt to null
        await recoveryWork();
        setIsActionModalOpen(false);
        setReload(true);
    }

    return <ArchExcludedListScreen {...{
        availableServices,
        selectedWorkValues,
        handleOpenWorkForm,
        handleCloseNewWorkForm,
        handleCloseActionModal,
        handleOpenActionModal,
        handleRecoveryWork,
        isFormModalOpen,
        isActionModalOpen
    }}/>
}
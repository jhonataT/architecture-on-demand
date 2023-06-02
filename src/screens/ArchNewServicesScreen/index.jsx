import { HiDocument } from "react-icons/hi";
import { ActionButton } from "../../components/ActionButton";
import { ActionsModal } from "../../components/ActionsModal";
import { Table } from "../../components/Table";
import { WorkFormModal } from "../../components/WorkFormModal";
import { RiDeleteBin7Line } from "react-icons/ri";
import './styles.scss';

export const ArchNewServicesScreen = ({
    availableServices,
    selectedWorkValues,
    handleOpenWorkForm,
    handleCloseNewWorkForm,
    handleCloseActionModal,
    handleOpenActionModal,
    handleDeleteWork,
    isFormModalOpen,
    isActionModalOpen
}) => {
    return <main className='accepted-services__container'>
        <Table
            data={availableServices}
            title='Serviços Aceitos'
            handleClickActions={handleOpenActionModal}
        />
        <WorkFormModal
            isOpen={isFormModalOpen}
            handleClose={handleCloseNewWorkForm}
            architect={selectedWorkValues?.architect}
            client={selectedWorkValues?.client}
            description={selectedWorkValues?.description}
            isNewRequest={false}
            disabledSuccessButton
        />
        <ActionsModal isOpen={isActionModalOpen} handleClose={handleCloseActionModal}>
            <div className='actions-container'>
                <h1>Ações</h1>
                <div className='button-group__container'>
                    <ActionButton
                        label='Ver Detalhes do serviço'
                        Icon={HiDocument}
                        handleClick={handleOpenWorkForm}
                    />
                    <ActionButton
                        label='Excluir serviço'
                        variant='danger'
                        Icon={RiDeleteBin7Line}
                        handleClick={handleDeleteWork}
                    />
                </div>
            </div>
        </ActionsModal>
    </main>
}
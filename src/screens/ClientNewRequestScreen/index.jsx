import { ActionButton } from '../../components/ActionButton';
import { ActionsModal } from '../../components/ActionsModal';
import { MdMiscellaneousServices } from 'react-icons/md';
import { Table } from '../../components/Table';
import { WorkFormModal } from '../../components/WorkFormModal';
import './styles.scss';

export const ClientNewRequestScreen = ({
    availableArchitects,
    isActionModalOpen,
    handleCloseActionModal,
    handleOpenActionModal,
    handleOpenNewServiceForm,
    handleCloseNewWorkForm,
    handleNewWorkValues,
    handleSendNewWorkRequest,
    isFormModalOpen,
    client,
    architect
}) => {
    return <main className='client-request-new__container'>
        <Table
            data={availableArchitects}
            title='Arquitetos Disponíveis'
            handleClickActions={handleOpenActionModal}
        />
        <WorkFormModal
            isOpen={isFormModalOpen}
            handleClose={handleCloseNewWorkForm}
            handleInputChange={handleNewWorkValues}
            handleSuccess={handleSendNewWorkRequest}
            architect={architect}
            client={client}
            isNewRequest
        />
        <ActionsModal isOpen={isActionModalOpen} handleClose={handleCloseActionModal}>
            <div className='actions-container'>
                <h1>Ações</h1>
                <div className='button-group__container'>
                    <ActionButton
                        label='Solicitar serviço'
                        Icon={MdMiscellaneousServices}
                        handleClick={handleOpenNewServiceForm}
                    />
                </div>
            </div>
        </ActionsModal>
    </main>
}
import { HiDocument } from 'react-icons/hi';
import { ActionButton } from '../../components/ActionButton';
import { ActionsModal } from '../../components/ActionsModal';
import { Table } from '../../components/Table';
import { WorkFormModal } from '../../components/WorkFormModal';
import { MdRestore } from 'react-icons/md';
import './styles.scss';

export const ArchExcludedListScreen = ({
    availableServices,
    selectedWorkValues,
    handleOpenWorkForm,
    handleCloseNewWorkForm,
    handleCloseActionModal,
    handleOpenActionModal,
    handleRecoveryWork,
    isFormModalOpen,
    isActionModalOpen
}) => {
    return <main className='deleted-services__container'>
        <Table
            data={availableServices}
            title='Serviços Excluídos'
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
                        label='Recuperar serviço'
                        variant='danger'
                        Icon={MdRestore}
                        handleClick={handleRecoveryWork}
                    />
                </div>
            </div>
        </ActionsModal>
    </main>
}
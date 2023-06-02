import { ActionButton } from '../../components/ActionButton';
import { RiDeleteBin7Line } from 'react-icons/ri';
import { HiDocument } from 'react-icons/hi';
import { WorkFormModal } from '../../components/WorkFormModal';
import { ActionsModal } from '../../components/ActionsModal';
import { Table } from '../../components/Table';
import './styles.scss';

export const ClientRequestListScreen = ({
    clientWorks,
    handleOpenActionModal,
    handleCloseActionModal,
    handleCloseNewWorkForm,
    handleOpenWorkForm,
    handleDeleteWork,
    handleUpdateWork,
    handleInputChange,
    isFormModalOpen,
    workValuesToUpdate,
    isActionModalOpen,
    selectedWorkValues
}) => {
    return <main className='client-request-list__container'>
        <Table
            data={clientWorks}
            title='Histórico de solicitações'
            handleClickActions={handleOpenActionModal}
        />
        <WorkFormModal
            isOpen={isFormModalOpen}
            handleClose={handleCloseNewWorkForm}
            handleSuccess={handleUpdateWork}
            architect={selectedWorkValues?.architect}
            client={selectedWorkValues?.client}
            description={workValuesToUpdate?.description || selectedWorkValues?.description}
            handleInputChange={handleInputChange}
            isEdit
        />
        <ActionsModal isOpen={isActionModalOpen} handleClose={handleCloseActionModal}>
            <div className='actions-container'>
                <h1>Ações</h1>
                <div className='button-group__container'>
                    <ActionButton
                        label='Ver ou editar solicitação'
                        Icon={HiDocument}
                        handleClick={handleOpenWorkForm}
                    />
                    <ActionButton
                        label='Cancelar serviço'
                        variant='danger'
                        Icon={RiDeleteBin7Line}
                        handleClick={handleDeleteWork}
                    />
                </div>
            </div>
        </ActionsModal>
    </main>
}
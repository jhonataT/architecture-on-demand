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
    isFormModalOpen,
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
            handleSuccess={() => {}}
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
                        label='Ver Detalhes da solicitação'
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
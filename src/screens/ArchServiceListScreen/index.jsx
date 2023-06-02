import { HiDocument } from 'react-icons/hi';
import { RiDeleteBin7Line } from 'react-icons/ri';
import { ActionButton } from '../../components/ActionButton';
import { ActionsModal } from '../../components/ActionsModal';
import { Table } from '../../components/Table';
import { WorkFormModal } from '../../components/WorkFormModal';
import './styles.scss';

export const ArchServiceListScreen = ({
    availableServices,
    selectedWorkValues,
    handleOpenWorkForm,
    handleCloseNewWorkForm,
    handleCloseActionModal,
    handleOpenActionModal,
    handleAcceptOrRefuseWork,
    isFormModalOpen,
    isActionModalOpen
}) => {
    return <main className='arch-services__container'>
        <Table
            data={availableServices}
            title='Serviços disponíveis'
            handleClickActions={handleOpenActionModal}
        />
        <WorkFormModal
            isOpen={isFormModalOpen}
            handleClose={handleCloseNewWorkForm}
            handleSuccess={() => handleAcceptOrRefuseWork('Accepted')}
            architect={selectedWorkValues?.architect}
            client={selectedWorkValues?.client}
            description={selectedWorkValues?.description}
            isNewRequest={false}
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
                        label='Recusar serviço'
                        variant='danger'
                        Icon={RiDeleteBin7Line}
                        handleClick={() => handleAcceptOrRefuseWork('Refused')}
                    />
                </div>
            </div>
        </ActionsModal>
    </main>
}
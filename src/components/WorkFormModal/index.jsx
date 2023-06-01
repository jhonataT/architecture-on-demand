import Modal from 'react-modal';
import { RiSendPlaneFill } from 'react-icons/ri';
import { Input } from '../Input'; 
import { ActionButton } from '../ActionButton';
import { TextArea } from '../Textarea';
import './styles.scss';

export const WorkFormModal = ({
    isNewRequest = true,
    isOpen,
    handleClose,
    handleSuccess,
    handleInputChange,
    architect,
    client
}) => {
    return <Modal
        appElement={document.getElementById('root')}
        isOpen={isOpen}
        onRequestClose={handleClose}
        style={{ overlay: { background: "#7f8ca089" }}}
        className='new-work-modal__container'
    >
        <h1>{isNewRequest ? 'Solicitar novo serviço' : 'Detalhes do serviço'}</h1>
        <div className='modal__content'>
            <form>
                <Input
                    title='Arquiteto selecionado'
                    handleChange={() => {}}
                    value={architect}
                    disabled
                />
                <Input
                    title='Cliente'
                    handleChange={() => {}}
                    value={client}
                    disabled
                />
                <TextArea
                    title='Descrição do serviço'
                    placeholder='Informe a descrição do serviço que deseja solicitar'
                    handleChange={(e) => handleInputChange('description', e)}
                />
            </form>
        </div>
        <footer>
            <ActionButton
                label={isNewRequest ? 'Cancelar' : 'Voltar'}
                handleClick={handleClose}
                variant='danger'
                size='md'
            />
            <ActionButton
                label={isNewRequest ? 'Finalizar' : 'Aceitar'}
                Icon={RiSendPlaneFill}
                handleClick={handleSuccess}
                size='md'
            />
        </footer>
    </Modal>
}
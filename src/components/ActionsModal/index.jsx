import Modal from 'react-modal';
import './styles.scss';

export const ActionsModal = ({ children, isOpen, handleClose }) => {
    return <Modal
        appElement={document.getElementById('root')}
        isOpen={isOpen}
        onRequestClose={handleClose}
        style={{ overlay: { background: "#7f8ca089" }}}
        className='actions-modal__container'
    >
        {children}
    </Modal>
}
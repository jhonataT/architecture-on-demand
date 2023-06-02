import './styles.scss';

export const Button = ({ label, handleClick, type = 'button' }) => {
    return <button onClick={handleClick} className='button__container' type={type}>
        <span>{label}</span>
    </button>
}
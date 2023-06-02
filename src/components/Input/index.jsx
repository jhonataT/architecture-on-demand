import './styles.scss';

export const Input = ({ title, handleChange, ...props }) => {
    return <div className='input__container'>
        <small className='input-title'>{title}</small>
        <input
            {...props}
            onChange={handleChange}
            className={props.disabled ? ' disabled' : ''}
        />
    </div>
}
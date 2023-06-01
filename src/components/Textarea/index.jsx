import './styles.scss';

export const TextArea = ({ title, handleChange, ...props }) => {
    return <div className='textarea__container'>
        <small>{title}</small>
        <textarea {...props} onChange={handleChange} className={props.disabled ? 'disabled' : ''}/>
    </div>
}
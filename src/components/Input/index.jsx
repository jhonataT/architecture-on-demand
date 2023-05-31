import './styles.scss';

export const Input = ({ title, type = 'text', placeholder, handleChange }) => {
    return <div className='input__container'>
        <small className='input-title'>{title}</small>
        <input
            {...{ type, placeholder }}
            onChange={handleChange}
        />
    </div>
}
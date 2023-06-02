import './styles.scss';

export const Select = ({ title, name, handleChangeSelect, options }) => {
    return <div className='select__container'>
        <small>{title}</small>
        <select name={name} id={name} onChange={handleChangeSelect} defaultValue='0'>
            <option value='0' disabled>Selecione uma opção</option>
            {
                Array.isArray(options) && options.map(option => (
                    <option
                        key={`${option.value}${Math.random()}`}
                        value={option.value
                    }>
                        {option?.label}
                    </option>
                ))
            }
        </select>
    </div>
}
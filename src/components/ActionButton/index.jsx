import './styles.scss';

export const ActionButton = ({ label, Icon, handleClick, disabled, size = 'lg', variant = 'success' }) => {
    return <button
        className={`action-button__container${size === 'md' ? ' md' : ''} ${variant}`}
        onClick={handleClick}
        disabled={disabled}
    >
        <span>{Icon && <Icon/>}</span>
        <span>{label}</span>
    </button>
}
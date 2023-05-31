import { MdOutlineLogout } from 'react-icons/md';
import './styles.scss';

export const Header = ({ userType = 'architect', username = 'Jhonata' }) => {
    const headerContent = {
        architect: [
            { label: 'Novos Serviços', to: '/' },
            { label: 'Meus Serviços', to: '#' },
            { label: 'Recusados', to: '#' },
            { label: 'Excluídos', to: '#', hasWarning: true },
        ],
        client: [
            { label: 'Arquitetos Disponíveis', to: '#' },
            { label: 'Solicitações', to: '#' },
        ]
    };

    return <header className='header__container'>
        <nav className='header-content__container'>
            <ul>
                {
                    headerContent[userType] && headerContent[userType].map((content, index) => (
                        <li className={`${index === 0 ? 'active': ''}${content?.hasWarning ? 'warning' : ''}`}>
                            <a href={content.to}>{content.label}</a>
                        </li>
                    ))
                }
            </ul>
            <div className='profile'>
                <small>
                    <span>{username || 'Usuário'}</span>
                    <span>{userType === 'architect' ? 'Arquiteto' : 'Cliente'}</span>
                </small>
                <button>
                    <MdOutlineLogout/>
                </button>
            </div>
        </nav>
    </header>
}
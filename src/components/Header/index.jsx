import { useMatch } from 'react-router-dom';
import { MdOutlineLogout } from 'react-icons/md';
import { useLoggedUser } from '../../core/hooks/useLoggedUser';
import './styles.scss';

export const Header = ({ userType = 'architect', username = 'Jhonata' }) => {
    const { logOut } = useLoggedUser();
    
    const headerContent = {
        architect: [
            { label: 'Novos Serviços', to: '/architect/list' },
            { label: 'Meus Serviços', to: '/architect/services' },
            { label: 'Recusados', to: '/architect/services/refused' },
            { label: 'Excluídos', to: '/architect/services/excluded', hasWarning: true },
        ],
        client: [
            { label: 'Arquitetos Disponíveis', to: '/client' },
            { label: 'Solicitações', to: '/client/requests' },
        ]
    };

    return <header className='header__container'>
        <nav className='header-content__container'>
            <ul>
                {
                    headerContent[userType] && headerContent[userType].map((content, index) => (
                        <li
                            key={content.label}
                            className={`${useMatch(content.to) ? 'active': ''}${content?.hasWarning ? ' warning' : ''}`}
                        >
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
                <button onClick={logOut}>
                    <MdOutlineLogout/>
                </button>
            </div>
        </nav>
    </header>
}
import { Link } from 'react-router-dom';
import './styles.scss';

export const OutlineLink = ({ to, label }) => {
    return <Link to={to} className='outline-link__container'>{label}</Link>
}
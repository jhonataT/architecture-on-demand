import { Table } from '../../components/Table';
import './styles.scss';

export const ArchServiceListScreen = ({ data = [] }) => {
    return <main className='arch-services__container'>
        <Table data={data} title='Serviços disponíveis'/>
    </main>
}
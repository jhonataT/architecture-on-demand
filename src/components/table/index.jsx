import GridTable from '@nadavshaar/react-grid-table';
import { useTranslate } from '../../core/hooks/useTranslate';
import './styles.scss';
import { EmptyData } from '../EmptyData';

const props = {
    search: 'Buscar:',
    totalRows: 'Total de linhas:',
    rows: 'Linhas:',
    selected: 'Selecionados',
    rowsPerPage: 'Linhas por página:',
    page: 'Página:',
    of: 'de',
    prev: 'Anterior',
    next: 'Próxima',
    columnVisibility: 'Visibilidade da coluna'
}

export const Table = ({ data, title, handleClickActions }) => {
    const actionColumn = ({ data }) => {
        console.log('data', data)
        return <div
            className='actions__container'
            onClick={() => handleClickActions(data)}
        >
            Ações
        </div>
    }
    
    const getColumns = (data) => {
        const columsByKeys = Object.keys(data[0])
        .filter(item => item !== 'id' && item !== 'updatedAt' && item !== 'deletedAt')
        .map((labelColumn, id) => ({
            id,
            field: labelColumn,
            label: useTranslate(labelColumn),
            width: '190px'
        }))
        
        return [
            ...columsByKeys,
            {
                id: columsByKeys.length,
                field: 'actions',
                label: 'Ações',
                width: '120px',
                cellRenderer: actionColumn
            }
        ]
    }

    return <div className='table__container'>
    {
        (data && data.length) ? (
            <>
                <header>
                    <h1>{title}</h1>
                </header>
                <div className='table__content'>
                    <GridTable
                        texts={props}
                        columns={(data && data.length) ? getColumns(data) : []}
                        rows={data}
                    />
                </div>
            </>
        ) : <EmptyData/>
    }
    </div>
}
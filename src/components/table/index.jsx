import GridTable from '@nadavshaar/react-grid-table';
import './styles.scss';

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

export const Table = ({ data, title }) => {
    const actionColumn = ({ value, data, column }) => {
        return <div className='actions__container'>Ações</div>
    }
    
    const getColumns = (data) => {
        const columsByKeys = Object.keys(data[0]).map((labelColumn, id) => ({
            id,
            field: labelColumn,
            label: labelColumn,
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
        <header>
            <h1>{title}</h1>
        </header>
        <div className='table__content'>
            <GridTable
                texts={props}
                columns={data.length ? getColumns(data) : []}
                rows={data}
            />
        </div>
    </div>
}
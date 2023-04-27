

import { QueryBuilder, ColumnsModel} from '@syncfusion/ej2-querybuilder';

/**
 * Default querybuilder sample
 */
// tslint:disable-next-line
    let columnData: ColumnsModel[] = [
        {field: 'EmployeeID', label: 'EmployeeID', type: 'number'},
        { field: 'FirstName', label: 'FirstName', type: 'string' },
        { field: 'TitleOfCourtesy', label: 'Title Of Courtesy', type: 'boolean', values: ['Mr.', 'Mrs.'] },
        { field: 'Title', label: 'Title', type: 'string' },
        { field: 'HireDate', label: 'HireDate', type: 'date', format: 'dd/MM/yyyy' },
        { field: 'Country', label: 'Country', type: 'string' },
        { field: 'City', label: 'City', type: 'string' }
    ];
    let qryBldrObj: QueryBuilder = new QueryBuilder({
        width: '100%',
        columns: columnData,
    });
    qryBldrObj.appendTo('#querybuilder');





import { QueryBuilder, ColumnsModel, RuleModel } from '@syncfusion/ej2-querybuilder';
import { DataManager, ODataAdaptor } from '@syncfusion/ej2-data';

let data: DataManager = new DataManager({
    url: 'https://services.syncfusion.com/js/production/api/employees',
    adaptor: new ODataAdaptor()
});

    let columnData: ColumnsModel[] = [
        { field: 'EmployeeID', label: 'EmployeeID', type: 'number' },
        { field: 'FirstName', label: 'FirstName', type: 'string' },
        { field: 'Designation', label: 'Designation', type: 'string' },
        { field: 'Country', label: 'Country', type: 'string' }
    ];
    let importRules: RuleModel = {
        'condition': 'and',
        'rules': [{
            'label': 'EmployeeID',
            'field': 'EmployeeID',
            'type': 'number',
            'operator': 'equal',
            'value': 1001
        },
        {
            'label': 'Country',
            'field': 'Country',
            'type': 'string',
            'operator': 'equal',
            'value': 'USA'
        }]
    };
    let qryBldrObj: QueryBuilder = new QueryBuilder({
        width: '70%',
        dataSource: data,
        columns: columnData,
        rule: importRules,
    });
    qryBldrObj.appendTo('#querybuilder');



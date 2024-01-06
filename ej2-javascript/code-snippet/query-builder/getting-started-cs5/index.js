    /**
     * Odata querybuilder sample
     */
    var data = new ej.data.DataManager({
    url: 'https://services.syncfusion.com/js/production/api/Employees/',
    adaptor: new ej.data.ODataAdaptor(),
    crossDomain: true
});

    var columnData = [
        {
            field: 'EmployeeID', label: 'EmployeeID', type: 'number'
        },
        { field: 'FirstName', label: 'FirstName', type: 'string' },
        { field: 'TitleOfCourtesy', label: 'Title Of Courtesy', type: 'boolean', values: ['Mr.', 'Mrs.'] },
        { field: 'Title', label: 'Title', type: 'string' },
        { field: 'HireDate', label: 'HireDate', type: 'date', format: 'dd/MM/yyyy' },
        { field: 'Country', label: 'Country', type: 'string' },
        { field: 'City', label: 'City', type: 'string' }
    ];
    var importRules = {
        'condition': 'and',
        'rules': [{
            'label': 'EmployeeID',
            'field': 'EmployeeID',
            'type': 'number',
            'operator': 'equal',
            'value': 1001
        },
        {
            'label': 'Title',
            'field': 'Title',
            'type': 'string',
            'operator': 'equal',
            'value': 'Sales Manager'
        }]
    };
    var qryBldrObj = new ej.querybuilder.QueryBuilder({
        width: '100%',
        dataSource: data,
        columns: columnData,
        rule: importRules,
    });
    qryBldrObj.appendTo('#querybuilder');


    /**
     * Default querybuilder sample
     */
        var columnData = [
		    { field: 'EmployeeID', label: 'Employee ID', type: 'number' },
            { field: 'FirstName', label: 'First Name', type: 'string' },
            { field: 'TitleOfCourtesy', label: 'Title Of Courtesy', type: 'boolean', values: ['Mr.', 'Mrs.']},
            { field: 'Title', label: 'Title', type: 'string' },
            { field: 'HireDate', label: 'Hire Date', type: 'date', format: 'dd/MM/yyyy' },
            { field: 'Country', label: 'Country', type: 'string' },
            { field: 'City', label: 'City', type: 'string' }
        ];
        var importRules = {
            'condition': 'and',
            'rules': [{
                    'label': 'Employee ID',
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
                }
            ]
        };
        var employeeData = [{
      'EmployeeID': 1,
      'FirstName': 'Nancy',
      'Title': 'Sales Representative',
      'TitleOfCourtesy': 'Ms.',
      'HireDate': '22/07/2001',
      'City': 'Seattle',
      'Country': 'USA'
    },
    {
      'EmployeeID': 2,
      'FirstName': 'Andrew',
      'Title': 'Vice President',
      'TitleOfCourtesy': 'Dr.',
      'HireDate': '21/04/2003',
      'City': 'Tacoma',
      'Country': 'USA'
    },
    {
      'EmployeeID': 3,
      'FirstName': 'Janet',
      'Title': 'Sales Representative',
      'TitleOfCourtesy': 'Ms.',
      'HireDate': '22/07/2001',
      'City': 'Kirkland',
      'Country': 'USA'
    }];
        var qryBldrObj = new ej.querybuilder.QueryBuilder({
            width: '70%',
            dataSource: employeeData,
            columns: columnData,
            showButtons: { ruleDelete: true , groupInsert: true, groupDelete: true, lockGroup: true, lockRule: true},
            rule: importRules,
        });
        qryBldrObj.appendTo('#querybuilder');
    
      document.getElementById('qblockgroup').onclick = function() {
        qryBldrObj.lockGroup("querybuilder_group0");
    }
     document.getElementById('qblockrule').onclick = function() {
       qryBldrObj.lockRule("querybuilder_group0_rule0");
    }



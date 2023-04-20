    /**
     * Default querybuilder sample
     */
        var columnData = [
		    { field: 'EmployeeID', label: 'Employee ID', type: 'number', validation: { isRequired: true } },
            { field: 'FirstName', label: 'First Name', type: 'string' },
            { field: 'TitleOfCourtesy', label: 'Title Of Courtesy', type: 'boolean', values: ['Mr.', 'Mrs.']},
            { field: 'Title', label: 'Title', type: 'string',  validation: { isRequired: true } },
            { field: 'HireDate', label: 'Hire Date', type: 'date', format: 'dd/MM/yyyy' },
            { field: 'Country', label: 'Country', type: 'string',  validation: { isRequired: true } },
            { field: 'City', label: 'City', type: 'string',  validation: { isRequired: true } }
        ];
        var importRules = {
        'condition': 'and',
        'rules': [{
            'label': '',
            'field': '',
            'type': '',
            'operator': '',
            'value': ''
        }]
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
            rule: importRules,
            allowValidation: true
        });
        qryBldrObj.appendTo('#querybuilder');
         document.getElementById('qbbutton').onclick = function() {
          qryBldrObj.validateFields();
        }


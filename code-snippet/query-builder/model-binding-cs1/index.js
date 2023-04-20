    /**
     *  querybuilder template sample
     */
	 
var filter = [
    { field: 'EmployeeID', label: 'EmployeeID', type: 'number'},
    { field: 'FirstName', label: 'FirstName', type: 'string'},
    { field: 'LastName', label: 'LastName', type: 'string'},
    { field: 'Age', label: 'Age', type: 'number'},
    { field: 'City', label: 'City', type: 'string'},
    { field: 'Country', label: 'Country', type: 'string'},
];
var importRules = {
    'condition': 'and',
    'rules': [{
        'label': 'Employee ID',
        'field': 'EmployeeID',
        'type': 'number',
        'operator': 'equal',
        'value': 1001
    }]
    };
var qryBldrObj = new ej.querybuilder.QueryBuilder({ 
    columns: filter,
	dataSource: employeeData, 
	rule: importRules, 
	enableNotCondition: true,
    displayMode: "Horizontal", 
    allowValidation: true,
    fieldModel: {
        allowFiltering: true
    },
    operatorModel: {
        allowFiltering: true
    },
    valueModel: {
        numericTextBoxModel: {
            cssClass: 'e-custom'
        },
        multiSelectModel: {
            cssClass: 'e-custom'
        },
        datePickerModel: {
            cssClass: 'e-custom'
        },
        textBoxModel: {
            cssClass: 'e-custom'
        },
        radioButtonModel: {
            cssClass: 'e-custom'
        }
    }
});
qryBldrObj.appendTo('#querybuilder');
	


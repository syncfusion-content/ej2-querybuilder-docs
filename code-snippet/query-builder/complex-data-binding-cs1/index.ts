

import { QueryBuilder , RuleModel, RuleChangeEventArgs, ColumnsModel} from '@syncfusion/ej2-querybuilder';
import { addClass, removeClass, getComponent } from '@syncfusion/ej2-base';
import { RadioButton, ChangeEventArgs } from '@syncfusion/ej2-buttons';
import { MultiSelect, CheckBoxSelection } from '@syncfusion/ej2-dropdowns';

let importRules: RuleModel = {
    condition: 'and',
    rules: [{
        label: 'ID',
        field: 'Employee.ID',
        type: 'string',
        operator: 'equal',
        value: 0
    },
    {
        label: 'Last Name',
        field: 'Name.LastName',
        type: 'string',
        operator: 'contains',
        value: 'malan'
    },
    {
        condition: 'or',
        rules: [{
            label: 'City',
            field: 'Country.State.City',
            operator: 'startswith',
            type: 'string',
            value: 'U'
        },{
            label: 'Region',
            field: 'Country.Region',
            operator: 'endswith',
            type: 'string',
            value: 'c'
        },{
            label: 'Name',
            field: 'Country.Name',
            operator: 'isnotempty'
        }]
    }
]};

let columns: ColumnsModel[] = [
    {field: 'Employee', label: 'Employee', columns: [
        { field: 'ID', label: 'ID', type: 'number'},
        { field: 'DOB', label: 'Date of birth', type: 'date'},
        { field: 'HireDate', label: 'Hire Date', type: 'date'},
        { field: 'Salary', label: 'Salary', type: 'number'},
        { field: 'Age', label: 'Age', type: 'number'},
        { field: 'Title', label: 'Title', type: 'string'}
    ]},
    {field: 'Name', label: 'Name', columns: [
        { field: 'FirstName', label: 'First Name', type: 'string'},
        { field: 'LastName', label: 'Last Name', type: 'string'}
    ]},
    {field: 'Country', label: 'Country', columns : [
        { field: 'State', label: 'State', columns : [
            { field: 'City', label: 'City', type: 'string'},
            { field: 'Zipcode', label: 'Zip Code', type: 'number'}] },
        { field: 'Region', label: 'Region', type: 'string'},
        { field: 'Name', label: 'Name', type: 'string'}
    ]}
];

let qryBldrObj: QueryBuilder = new QueryBuilder({
    separator: '.',
    columns: columns,
    rule: importRules,
    enableNotCondition: true
});
qryBldrObj.appendTo('#querybuilder');
document.getElementById('rule').onclick = (e: Event) => {
    qryBldrObj.setRulesFromSql("Employee.ID = 0 AND Name.LastName LIKE ('%malan%') AND (Country.State.City LIKE ('U%') AND Country.Region LIKE ('%c') AND Country.Name IS NOT EMPTY)");
}

document.getElementById('sql').onclick = (e: Event) => {
    qryBldrObj.setRules(importRules);
}

document.getElementById('reset').onclick = (e: Event) => {
    qryBldrObj.reset();
}





import { QueryBuilder, RuleModel, ColumnsModel, ActionEventArgs} from  '@syncfusion/ej2-querybuilder'
import { closest } from '@syncfusion/ej2-base';
import { DropDownButton, ItemModel, MenuEventArgs } from '@syncfusion/ej2-splitbuttons';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { CheckBox } from '@syncfusion/ej2-buttons';

let filter: ColumnsModel [] = [
    { field: 'EmployeeID', label: 'EmployeeID', type: 'number'},
    { field: 'FirstName', label: 'FirstName', type: 'string'},
    { field: 'LastName', label: 'LastName', type: 'string'},
    { field: 'Age', label: 'Age', type: 'number'},
    { field: 'City', label: 'City', type: 'string'},
    { field: 'Country', label: 'Country', type: 'string'},
];

let importRules: RuleModel = {
    'condition': 'and', 'not': true,
    'rules': [{
        'label': 'Age',
        'field': 'Age',
        'type': 'number',
        'operator': 'equal',
        'value': 34
    },
    {
        'label': 'LastName',
        'field': 'LastName',
        'type': 'string',
        'operator': 'equal',
        'value': 'vinit'
    },
    {
    'condition': 'or',
    'rules': [{
        'label': 'Age',
        'field': 'Age',
        'type': 'number',
        'operator': 'equal',
        'value': 34
    }]
}]
};

let queryBldrObj: QueryBuilder = new QueryBuilder({
    columns: filter,
    width: '100%',
    rule: importRules,
    headerTemplate: '#headerTemplate',
    actionBegin: actionBegin,
    enableNotCondition: true
});
queryBldrObj.appendTo('#querybuilder');

    function actionBegin(args: ActionEventArgs): void {
        if (args.requestType === 'header-template-create') {
            let checkBoxObj: CheckBox = new CheckBox({
                label: 'NOT',
                checked: args.notCondition,
                change: function(e:any){
                    queryBldrObj.notifyChange(e.checked,e.event.target, 'not')
                }
             });
            checkBoxObj.appendTo('#' + args.ruleID + '_notoption');
            let ds: { [key: string]: Object }[] = [{'key': 'AND', 'value': 'and'},{'key': 'OR', 'value': 'or'}];
            let btnObj: DropDownList= new DropDownList({
                dataSource: ds,
                fields: { text: 'key', value: 'value' },
                value: args.condition,
                cssClass: 'e-custom-group-btn e-active-toggle',
                change: (e: any) => {
                    queryBldrObj.notifyChange(e.value, e.element, 'condition');
                }
            });
            btnObj.appendTo('#' + args.ruleID + '_cndtnbtn');
            let ddbitems: ItemModel[] = [
                { text: 'AddGroup', iconCss: 'e-icons e-add-icon e-addgroup' },
                { text: 'AddCondition', iconCss: 'e-icons e-add-icon e-addrule' }
            ];
            let addbtn: DropDownButton = new DropDownButton({
                items: ddbitems,
                cssClass: 'e-round e-small e-caret-hide e-addrulegroup',
                iconCss: 'e-icons e-add-icon',
                select: function(event: MenuEventArgs) {
                    let addbtn: Element = closest(event.element,'.e-dropdown-popup');  let ddb: string[]= addbtn.id.split('_');
                    if (event.item.text === 'AddGroup') {
                        queryBldrObj.addGroups([{condition: 'and', 'rules': [{}], not: false}], ddb[1]);
                    } else if (event.item.text === 'AddCondition') {
                        queryBldrObj.addRules([{}], ddb[1]);
                    }
                }
            });
            addbtn.appendTo('#' + args.ruleID + '_addbtn');
            let deleteGroup: Element =  document.getElementById(args.ruleID).querySelector('.e-delete-btn');
            if (deleteGroup) {
                (deleteGroup as HTMLElement).onclick = function (e:any) {
                    queryBldrObj.deleteGroup(closest(e.target.offsetParent, '.e-group-container'));
                }
            }
        }
    }



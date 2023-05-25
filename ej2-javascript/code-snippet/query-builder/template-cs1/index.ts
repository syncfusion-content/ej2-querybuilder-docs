

import { QueryBuilder, RuleModel, ColumnsModel, ActionEventArgs} from '@syncfusion/ej2-querybuilder';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { CheckBox } from '@syncfusion/ej2-buttons';

let filter: ColumnsModel [] = [
    { field:"Category" label:"Category" type:"string"},
    { field: 'PaymentMode', label: 'PaymentMode', type: 'string', operators: customOperators , template:"#paymentTemplate"},
    { field: 'TransactionType', label: 'TransactionType', type: 'string',  operators: customOperators, template:"#transactionTemplate"},
    { field: 'Description', label: 'Description', type: 'string' },
    { field: 'Date', label: 'Date', type: 'string'},
    { field: 'Amount', label: 'Amount', type: 'string'},
];

let customOperators: { [key: string]: Object }[] = [{value: 'equal', key: 'Equal'},
  {value: 'notequal', key: 'Not Equal'}];
let importRules: RuleModel = {
    'condition': 'and',
    'rules': [{
        'label': 'Transaction Type',
        'field': 'TransactionType',
        'type': 'string',
        'operator': 'equal',
        'value': 'Expense'
  },
  {
        'label': 'Payment Mode',
        'field': 'PaymentMode',
        'type': 'string',
        'operator': 'equal',
        'value': 'Cash'
  }]
};

let valueObj: Slider;
let queryBldrObj: QueryBuilder = new QueryBuilder({
    columns: filter,
    rule: importRules,
    width: '100%',
    actionBegin: actionBegin
});
queryBldrObj.appendTo('#querybuilder');


function actionBegin(args: ActionEventArgs): void {
    let ruleID: string = args.ruleID
    if (args.requestType === 'value-template-create') {
        let checkBoxObj: CheckBox = new CheckBox({
            label: 'Is Expense',
            checked: args.rule.value === "Expense" ? true: false,
            change: function(e:any){
                let elem: HTMLElement = document.getElementById(ruleID).querySelector('.e-rule-value');qryBldrObj.notifyChange(e.checked === true ? 'Expense' : 'Income', elem, 'value');
            }
        });
        checkBoxObj.appendTo('#' + args.ruleID + '_checkbox');
        let ds: string[] = ['Cash', 'Debit Card', 'Credit Card', 'Net Banking'];
        let btnObj: DropDownList= new DropDownList({
                dataSource: ds,
                fields: { text: 'key', value: 'value' },
                value: args.rule.value,
                change: (e: any) => {
                 let elem: HTMLElement = document.getElementById(ruleID).querySelector('.e-rule-value');qryBldrObj.notifyChange(e.value as string, elem, 'value');
                }
        });
        btnObj.appendTo('#' + args.ruleID + '_paymentlist');
    }
}



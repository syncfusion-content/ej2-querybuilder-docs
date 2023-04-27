

import { QueryBuilder, ColumnsModel, RuleModel } from '@syncfusion/ej2-querybuilder';
import { getComponent } from '@syncfusion/ej2-base';
import { TextBox } from '@syncfusion/ej2-inputs';
import { DropDownList, MultiSelect, CheckBoxSelection } from '@syncfusion/ej2-dropdowns';

let expenseData: Object[]  = [{
    'Category': 'Food',
    'PaymentMode': 'Credit Card',
    'TransactionType': 'Expense',
    'Description': 'Boiled peanuts',
    'Amount': '7',
    'Date': '06/01/2017'
  }, {

    'Category': 'Food',
    'PaymentMode': 'Cash',
    'TransactionType': 'Expense',
    'Description': 'Peanuts in Coke',
    'Amount': '8',
    'Date': '06/04/2017'
  }, {
    'Category': 'Food',
    'PaymentMode': 'Cash',
    'TransactionType': 'Expense',
    'Description': 'Palmetto Cheese, Mint julep',
    'Amount': '11',
    'Date': '06/04/2017'
  }];

    let elem: HTMLElement;
    let inOperators: string [] = ['in', 'notin'];
    let columnData: ColumnsModel[] = [
        { field: 'Category', label: 'Category', type: 'string' },
        { field: 'TransactionType', label: 'Transaction Type', type: 'boolean' },
        {
            field: 'PaymentMode', label: 'Payment Mode', type: 'string', template: {
                create: () => {
                    elem = document.createElement('input');
                    elem.setAttribute('type', 'text');
                    return elem;
                },
                destroy: (args: { elementId: string }) => {
                    let multiSelect: MultiSelect = (getComponent(document.getElementById(args.elementId), 'multiselect') as MultiSelect);
                    if (multiSelect) {
                        multiSelect.destroy();
                    }
                    let dropdown: DropDownList = (getComponent(document.getElementById(args.elementId), 'dropdownlist') as DropDownList);
                    if (dropdown) {
                        dropdown.destroy();
                    }
                },
                write: (args: { elements: Element, values: string[] | string, operator: string }) => {
                    let ds: string[] = ['Cash', 'Debit Card', 'Credit Card', 'Net Banking', 'Wallet'];
                    if (inOperators.indexOf(args.operator) > -1) {
                        let multiSelectObj: MultiSelect = new MultiSelect({
                            dataSource: ds,
                            value: args.values as string [],
                            mode: 'CheckBox',
                            placeholder: 'Select Transaction',
                            change: (e: any) => {
                                qryBldrObj.notifyChange(e.value, e.element);
                            }
                        });
                        multiSelectObj.appendTo('#' + args.elements.id);
                    } else {
                        let dropDownObj: DropDownList = new DropDownList({
                            dataSource: ds,
                            value: args.values as string,
                            change: (e: any) => {
                                qryBldrObj.notifyChange(e.itemData.value, e.element);
                            }
                        });
                        dropDownObj.appendTo('#' + args.elements.id);
                    }
                }
            },
            operators: [
                { value: 'equal', key: 'Equal' },
                { value: 'notequal', key: 'Not Equal' },
                { value: 'in', key: 'In' },
                { value: 'notin', key: 'Not In' }
            ],
        },
        { field: 'Description', label: 'Description', type: 'string' },
        { field: 'Date', label: 'Date', type: 'date' },
        { field: 'Amount', label: 'Amount', type: 'number' }
    ];

    let importRules: RuleModel = {
        'condition': 'and',
        'rules': [{
                'label': 'Payment Mode',
                'field': 'PaymentMode',
                'type': 'string',
                'operator': 'equal',
                'value': 'Cash'
            }
        ]
    };
    let qryBldrObj: QueryBuilder = new QueryBuilder({
        dataSource: expenseData,
        columns: columnData,
        width: '70%',
        rule: importRules
    });
    qryBldrObj.appendTo('#querybuilder');




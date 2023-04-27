

import { QueryBuilder, ColumnsModel, RuleModel } from '@syncfusion/ej2-querybuilder';
import { Button } from '@syncfusion/ej2-buttons';
import { DataManager, Query } from '@syncfusion/ej2-data';
import { compile } from '@syncfusion/ej2-base';

let hardwareData: Object[]  = [{
      'TaskID': 1,
      'Name': 'Lenovo Yoga',
      'Category': 'Laptop',
      'SerialNo': 'CB27932009',
      'InvoiceNo': 'INV-2878',
      'Status': 'Assigned'
  },
  {
      'TaskID': 2,
      'Name': 'Acer Aspire',
      'Category': 'Others',
      'SerialNo': 'CB35728290',
      'InvoiceNo': 'INV-3456',
      'Status': 'In-repair'
  },
  {
      'TaskID': 3,
      'Name': 'Apple MacBook',
      'Category': 'Laptop',
      'SerialNo': 'CB35628728',
      'InvoiceNo': 'INV-2763',
      'Status': 'In-repair'
  }];

    let columnData: ColumnsModel[] = [
        { field: 'TaskID', label: 'Task ID', type: 'number' },
        { field: 'Name', label: 'Name', type: 'string' },
        { field: 'Category', label: 'Category', type: 'string' },
        { field: 'SerialNo', label: 'Serial No', type: 'string' },
        { field: 'InvoiceNo', label: 'Invoice No', type: 'string' },
        { field: 'Status', label: 'Status', type: 'string' }
    ];
    let importRules: RuleModel = {
        'condition': 'and',
        'rules': [{
            'label': 'Task ID',
            'field': 'TaskID',
            'type': 'number',
            'operator': 'equal',
            'value': 1
        }]
    };
    let qryBldrObj: QueryBuilder = new QueryBuilder({
        width: '70%',
        dataSource: hardwareData,
        columns: columnData,
        rule: importRules,
    });
    qryBldrObj.appendTo('#querybuilder');
    let template: string = '<tr><td>${TaskID}</td><td>${Category}</td><td>${Status}</td></tr>';
    let dataManagerQuery:Query;
    let button: Button = new Button({cssClass: `e-primary`, content:'get data'}, '#getdata');
    let validRule: RuleModel = qryBldrObj.getValidRules(qryBldrObj.rule);
    document.getElementById('getdata').onclick = (): void => {
        let compiledFunction: Function = compile(template);
       document.getElementById('datatable').style.display = 'block';
        dataManagerQuery = new Query().select(['TaskID', 'Category', 'Status']).where(qryBldrObj.getPredicate(validRule)).take(8);
         let result: Object[] = new DataManager(hardwareData).executeLocal(dataManagerQuery);
         let table: HTMLElement = (<HTMLElement>document.getElementById('datatable'));
         if (table.querySelectorAll('tbody')[1]) {
             table.querySelectorAll('tbody')[1].remove();
         }
         result.forEach((data: Object) => {
         table.appendChild(compiledFunction(data)[0]);
});
    }



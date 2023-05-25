

import { QueryBuilder, ColumnsModel, RuleModel } from '@syncfusion/ej2-querybuilder';
import { Button } from '@syncfusion/ej2-buttons';

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
        'condition': 'or',
        'rules': [{
            'label': 'Category',
            'field': 'Category',
            'type': 'string',
            'operator': 'equal',
            'value': 'Laptop'
        },
        {
        'condition': 'and',
            'rules': [{
                'label': 'Status',
                'field': 'Status',
                'type': 'string',
                'operator': 'notequal',
                'value': 'Pending'
            },
            {
                'label': 'Task ID',
                'field': 'TaskID',
                'type': 'number',
                'operator': 'equal',
                'value': 5675
            }]
        }]
    };
    let qryBldrObj: QueryBuilder = new QueryBuilder({
        width: '70%',
        dataSource: hardwareData,
        columns: columnData
    });
    qryBldrObj.appendTo('#querybuilder');
    let button: Button = new Button({cssClass: `e-primary`, content:'set Rules'}, '#importjson');
    document.getElementById('importjson').onclick = (): void => {
        qryBldrObj.setRules(importRules);
    }




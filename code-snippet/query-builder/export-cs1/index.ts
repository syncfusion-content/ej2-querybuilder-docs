

import { QueryBuilder, ColumnsModel, RuleModel } from '@syncfusion/ej2-querybuilder';
import { Button } from '@syncfusion/ej2-buttons';
import { Dialog } from '@syncfusion/ej2-popups';

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
        }]
    };
    let qryBldrObj: QueryBuilder = new QueryBuilder({
        width: '70%',
        dataSource: hardwareData,
        columns: columnData,
        rule: importRules
    });
     qryBldrObj.appendTo('#querybuilder');
    let dialogObj: Dialog = new Dialog({
        header: 'Query builder',
        height: 'auto',
        animationSettings: { effect: 'Zoom', duration: 400 },
        showCloseIcon: true,
        width: '50%',
        visible: false
    });
    dialogObj.appendTo('#defaultdialog');
    let button: Button = new Button({cssClass: `e-primary`, content:'get sql'}, '#getsql');
    document.getElementById('getsql').onclick = (): void => {
        dialogObj.content = qryBldrObj.getSqlFromRules(qryBldrObj.getRules());
         dialogObj.show();
    }
    button = new Button({cssClass: `e-primary`, content:'get rule'}, '#getrule');
    document.getElementById('getrule').onclick = (): void => {
        let validRule: RuleModel = qryBldrObj.getValidRules(qryBldrObj.rule);
         dialogObj.content = '<pre>' + JSON.stringify(validRule, null, 4) + '</pre>';
         dialogObj.show();
    }



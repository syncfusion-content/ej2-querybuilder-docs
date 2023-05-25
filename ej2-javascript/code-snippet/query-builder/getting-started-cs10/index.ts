

import { L10n } from '@syncfusion/ej2-base';
import { QueryBuilder, ColumnsModel, RuleModel } from '@syncfusion/ej2-querybuilder';

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

L10n.load({
    'ar-AE': {
        'querybuilder': {
            'AddGroup': 'إضافة مجموعة',
            'AddCondition': 'اضافة الشرط',
            'DeleteRule': 'أزل هذا الشرط',
            'DeleteGroup': 'حذف المجموعة',
            'Edit': 'تصحيح',
            'SelectField': 'اختر مجال',
            'DeleteRule': 'أزل هذا الشرط',
            'DeleteGroup': 'حذف المجموعة',
            'SelectOperator': 'حدد المشغل',
            'StartsWith': 'ابدا ب',
            'EndsWith': 'ينتهي مع',
            'Contains': 'يحتوي على',
            'Equal': 'مساو',
            'NotEqual': 'ليس متساوي',
            'LessThan': 'أقل من',
            'LessThanOrEqual': 'اصغر من او يساوي',
            'GreaterThan': 'أكثر من',
            'GreaterThanOrEqual': 'أكبر من أو يساوي',
            'Between': 'ما بين',
            'NotBetween': 'ليس بينهما',
            'In': 'في',
            'NotIn': 'ليس في',
            'Remove': 'إزالة',
            'ValidationMessage': 'هذه الخانة مطلوبه'
        }
    }
});

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

    let queryBuilder: QueryBuilder = new QueryBuilder({
        width: '70%',
        dataSource: hardwareData,
        columns: columnData,
        rule: importRules,
        enableRtl: true,
        locale: 'ar-AE',
});
queryBuilder.appendTo('#querybuilder');



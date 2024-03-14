ej.querybuilder.QueryBuilder.Inject(ej.querybuilder.QueryLibrary);
    /**
     * Default querybuilder sample
     */
        var columnData = [
        { field: 'TaskID', label: 'Task ID', type: 'number' },
        { field: 'Name', label: 'Name', type: 'string' },
        { field: 'Category', label: 'Category', type: 'string' },
        { field: 'SerialNo', label: 'Serial No', type: 'string' },
        { field: 'InvoiceNo', label: 'Invoice No', type: 'string' },
        { field: 'Status', label: 'Status', type: 'string' }
    ];
        var importRules = {
        'condition': 'or',
        'rules': [{
            'label': 'Category',
            'field': 'Category',
            'type': 'string',
            'operator': 'equal',
            'value': 'Laptop'
        }]
    };
    var hardwareData = [{
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
        var qryBldrObj = new ej.querybuilder.QueryBuilder({
            width: '70%',
            dataSource: hardwareData,
            columns: columnData,
            rule: importRules,
        });
        qryBldrObj.appendTo('#querybuilder');
        var dialogObj = new ej.popups.Dialog({
        header: 'Query builder',
        height: 'auto',
        animationSettings: { effect: 'Zoom', duration: 400 },
        showCloseIcon: true,
        width: '50%',
        visible: false
    });
    dialogObj.appendTo('#defaultdialog');
     document.getElementById('getsql').onclick = function() {
        dialogObj.content = qryBldrObj.getMongoQuery(qryBldrObj.getRules());
         dialogObj.show();
    }
    document.getElementById('getrule').onclick = function() {
         var validRule = qryBldrObj.getValidRules(qryBldrObj.rule);
         dialogObj.content = '<pre>' + JSON.stringify(validRule, null, 4) + '</pre>';
         dialogObj.show();
    }


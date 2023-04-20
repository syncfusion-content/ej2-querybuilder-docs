    /**
     * datamanager data querybuilder sample
     */
        var columnData =  [
        { field: 'TaskID', label: 'Task ID', type: 'number' },
        { field: 'Name', label: 'Name', type: 'string' },
        { field: 'Category', label: 'Category', type: 'string' },
        { field: 'SerialNo', label: 'Serial No', type: 'string' },
        { field: 'InvoiceNo', label: 'Invoice No', type: 'string' },
        { field: 'Status', label: 'Status', type: 'string' }
    ];
    var importRules = {
        'condition': 'and',
        'rules': [{
            'label': 'Task ID',
            'field': 'TaskID',
            'type': 'number',
            'operator': 'equal',
            'value': 1
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
            rule: importRules
        });
        qryBldrObj.appendTo('#querybuilder');
        var template = '<tr><td>${TaskID}</td><td>${Category}</td><td>${Status}</td></tr>';
        document.getElementById('getdata').onclick = function() {
            var compiledFunction = ej.base.compile(template);
            document.getElementById('datatable').style.display = 'block';
            var validRule = qryBldrObj.getValidRules(qryBldrObj.rule);
             var predicate = qryBldrObj.getPredicate(validRule);
             var dataManagerQuery = new ej.data.Query().select(['TaskID', 'Category', 'Status']).where(predicate).take(8);
         var result = new ej.data.DataManager(hardwareData).executeLocal(dataManagerQuery);
         var table = (document.getElementById('datatable'));
         if (table.querySelectorAll('tbody')[1]) {
             table.querySelectorAll('tbody')[1].remove();
         }
         result.forEach((data) => {
         table.appendChild(compiledFunction(data)[0]);
});
        }
       



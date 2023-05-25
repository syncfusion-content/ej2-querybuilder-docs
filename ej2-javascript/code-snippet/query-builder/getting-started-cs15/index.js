    /**
     *  querybuilder template sample
     */
    var elem;
    var dropDownObj;
    var multiSelectObj;
    var inOperators = ['in', 'notin'];
    var filter = [{
        field: 'Category',
        label: 'Category',
        type: 'string'
    },
    {
        field: 'PaymentMode',
        label: 'PaymentMode',
        type: 'string',
        operators: [
            { key: 'Equal', value: 'equal' },
            { key: 'Not Equal', value: 'notequal' },
            { key: 'In', value: 'in' },
            { key: 'Not In', value: 'notin' }
        ],
        template: {
            create: function () {
                elem = document.createElement('input');
                elem.setAttribute('type', 'text');
                return elem;
            },
            destroy: function (args) {
                var selectObj = ej.base.getComponent(document.getElementById(args.elementId), 'multiselect');
                if (selectObj) {
                    selectObj.destroy();
                }
                var dropdown = ej.base.getComponent(document.getElementById(args.elementId), 'dropdownlist');
                if (dropdown) {
                    dropdown.destroy();
                }
            },
            write: function (args) {
                var ds = ['Cash', 'Debit Card', 'Credit Card', 'Net Banking', 'Wallet'];
                if (inOperators.indexOf(args.operator) > -1) {
                    var multiSelectObj = new ej.dropdowns.MultiSelect({
                        dataSource: ds,
                        value: args.values,
                        mode: 'CheckBox',
                        placeholder: 'Select Transaction',
                        change: function (e) {
                            qryBldrObj.notifyChange(e.value, e.element);
                        }
                    });
                    multiSelectObj.appendTo('#' + args.elements.id);
                }
                else {
                    dropDownObj = new ej.dropdowns.DropDownList({
                        dataSource: ds,
                        value: args.values ? args.values : ds[0],
                        change: function (e) {
                            qryBldrObj.notifyChange(e.itemData.value, e.element);
                        }
                    });
                    dropDownObj.appendTo('#' + args.elements.id);

                }
            }
        }
    },
    {
        field: 'TransactionType',
        label: 'TransactionType',
        type: 'string'
    },
    {
        field: 'Description',
        label: 'Description',
        type: 'string'
    },
    {
        field: 'Date',
        label: 'Date',
        type: 'date'
    },
    {
        field: 'Amount',
        label: 'Amount',
        type: 'number' 
    }
    ];
    var importRules = {
        'condition': 'and',
        'rules': [{
                'label': 'PaymentMode',
                'field': 'PaymentMode',
                'type': 'string',
                'operator': 'equal',
                'value': 'Cash'
            }]
    };

    var expenseData = [{
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
  
    var qryBldrObj = new ej.querybuilder.QueryBuilder({
        dataSource: expenseData,
        columns: filter,
        width: '100%',
        rule: importRules
    });
    qryBldrObj.appendTo('#querybuilder');


    /**
     * querybuilder sample
     */
    
    var filter = [
    { field:"Category", label:"Category" ,type:"string"},
    { field: 'PaymentMode', label: 'PaymentMode', type: 'string', operators: customOperators , template:"#paymentTemplate"},
    { field: 'TransactionType', label: 'TransactionType', type: 'string',  operators: customOperators, template:"#transactionTemplate"},
    { field: 'Description', label: 'Description', type: 'string' },
    { field: 'Date', label: 'Date', type: 'string'},
    { field: 'Amount', label: 'Amount', type: 'string'},
];

var customOperators = [{value: 'equal', key: 'Equal'},
  {value: 'notequal', key: 'Not Equal'}];
var importRules = {
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

var queryBldrObj = new ej.querybuilder.QueryBuilder({
    columns: filter,
    rule: importRules,
    width: '100%',
    actionBegin: actionBegin
});
queryBldrObj.appendTo('#querybuilder');


function actionBegin(args) {
    var ruleID = args.ruleID
    if (args.requestType === 'value-template-create') {
        var checkBoxObj = new ej.buttons.CheckBox({ 
            label: 'Is Expense',
            checked: args.rule.value === "Expense" ? true: false,
            change: function(e){
                var elem = document.getElementById(ruleID).querySelector('.e-rule-value');this.qryBldrObj.notifyChange(e.checked === true ? 'Expense' : 'Income', elem, 'value');
            }
        });
        checkBoxObj.appendTo('#' + args.ruleID + '_checkbox');
        var ds = ['Cash', 'Debit Card', 'Credit Card', 'Net Banking'];
        var btnObj = new ej.dropdowns.DropDownList({
                dataSource: ds,
                fields: { text: 'key', value: 'value' },
                value: args.rule.value,
                change: (e) => {
                 var elem = document.getElementById(ruleID).querySelector('.e-rule-value');qryBldrObj.notifyChange(e.value , elem, 'value');
                }
        });
        btnObj.appendTo('#' + args.ruleID + '_paymentlist');
    }
}


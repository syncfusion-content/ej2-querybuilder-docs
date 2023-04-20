/**
     *  querybuilder headerTemplate sample
     */

var filter = [
    { field: 'EmployeeID', label: 'EmployeeID', type: 'number' },
    { field: 'FirstName', label: 'FirstName', type: 'string' },
    { field: 'LastName', label: 'LastName', type: 'string' },
    { field: 'Age', label: 'Age', type: 'number'},
    { field: 'City', label: 'City', type: 'string' },
    { field: 'Country', label: 'Country', type: 'string' }
];

var importRules = {
    'condition': 'and', 'not' : true, 
    'rules': [{
        'label': 'Age',
        'field': 'Age',
        'type': 'number',
        'operator': 'equal',
        'value': 34
    },
    {
        'label': 'LastName',
        'field': 'LastName',
        'type': 'string',
        'operator': 'equal',
        'value': 'vinit'
    },
    {
    'condition': 'or',
    'rules': [{
        'label': 'Age',
        'field': 'Age',
        'type': 'number',
        'operator': 'equal',
        'value': 34
    }]
}]
};

var queryBldrObj = new ej.querybuilder.QueryBuilder({ 
    columns: filter,
    rule: importRules,
    width: '100%',
    headerTemplate: '#headerTemplate',
    actionBegin: actionBegin,
    enableNotCondition: true
});
queryBldrObj.appendTo('#querybuilder');

    function actionBegin(args) {
        if (args.requestType === 'header-template-create') {
            var checkBoxObj = new ej.buttons.CheckBox({ 
                label: 'NOT',
                checked: args.notCondition,
                change: function(e){
                    queryBldrObj.notifyChange(e.checked,e.event.target, 'not')
                }
             });
            checkBoxObj.appendTo('#' + args.ruleID + '_notoption');
            var ds = [{'key': 'AND', 'value': 'and'},{'key': 'OR', 'value': 'or'}];
            var btnObj = new ej.dropdowns.DropDownList({
                dataSource: ds,
                fields: { text: 'key', value: 'value' },
                value: args.condition,
                cssClass: 'e-custom-group-btn e-active-toggle',
                change: (e) => {
                    queryBldrObj.notifyChange(e.value, e.element, 'condition');
                }
            });
            btnObj.appendTo('#' + args.ruleID + '_cndtnbtn');
            var ddbitems = [
                { text: 'AddGroup', iconCss: 'e-icons e-add-icon e-addgroup' },
                { text: 'AddCondition', iconCss: 'e-icons e-add-icon e-addrule' }
            ];
            var addbtn = new ej.splitbuttons.DropDownButton({
                items: ddbitems,
                cssClass: 'e-round e-small e-caret-hide e-addrulegroup',
                iconCss: 'e-icons e-add-icon',
                select: function(event) {
                    var addbtn = closest(event.element,'.e-dropdown-popup');  var ddb= addbtn.id.split('_');
                    if (event.item.text === 'AddGroup') {
                        queryBldrObj.addGroups([{condition: 'and', 'rules': [{}], not: false}], ddb[1]);
                    } else if (event.item.text === 'AddCondition') {
                        queryBldrObj.addRules([{}], ddb[1]);
                    }
                }
            });
            addbtn.appendTo('#' + args.ruleID + '_addbtn');
            var deleteGroup =  document.getElementById(args.ruleID).querySelector('.e-delete-btn');
            if (deleteGroup) {
                (deleteGroup ).onclick = function (e) {
                    queryBldrObj.deleteGroup(closest(e.target.offsetParent, '.e-group-container'));
                }
            }
        }
    }


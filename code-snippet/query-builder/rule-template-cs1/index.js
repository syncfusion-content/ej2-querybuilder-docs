    /**
     *  querybuilder template sample
     */
	 
    var filter = [
        { field: 'EmployeeID', label: 'EmployeeID', type: 'number' },
        { field: 'FirstName', label: 'FirstName', type: 'string' },
        { field: 'LastName', label: 'LastName', type: 'string' },
        { field: 'Age', label: 'Age', type: 'number', ruleTemplate: '#ageTemplate' },
        { field: 'City', label: 'City', type: 'string' },
        { field: 'Country', label: 'Country', type: 'string' },
    ];
    var importRules = {
        'condition': 'and',
        'rules': [{
            'label': 'Age',
            'field': 'Age',
            'type': 'number',
            'operator': 'greaterthanorequal',
            'value': 30
        }]
    };
    var fieldObj;
    var valueObj;
    var ruleID;
    var queryBldrObj = new ej.querybuilder.QueryBuilder({
        columns: filter,
        dataSource: employeeData,
        rule: importRules,
        width: '100%',
        actionBegin: actionBegin
    });
    queryBldrObj.appendTo('#querybuilder');
	
    function actionBegin(args) {
        ruleID = args.ruleID;
        if (args.requestType === 'template-create') {
            args.rule.operator = 'greaterthanorequal';
            fieldObj = new ej.dropdowns.DropDownList({
                dataSource: this.columns,
                fields: args.fields,
                value: args.rule.field,
                change: function (e) {
                    queryBldrObj.notifyChange(e.value, e.element, 'field');
                }
            });
            if (args.rule.value === '') {
                args.rule.value = 30;
            }
            valueObj = new ej.inputs.Slider({
                value: args.rule.value,
                min: 30,
                max: 50,
                ticks: { placement: 'Before', largeStep: 5, smallStep: 1, showSmallTicks: true },
                change: function (e) {
                    var elem = valueObj.element;
                    queryBldrObj.notifyChange(e.value, elem, 'value');
                    refreshTable(queryBldrObj.getRule(elem), elem.id.split('_valuekey0')[0]);
                },
                created: function () {
                    var elem = valueObj.element;
                    refreshTable(queryBldrObj.getRule(elem), elem.id.split('_valuekey0')[0]);
                }
            });
            fieldObj.appendTo('#' + args.ruleID + '_filterkey');
            valueObj.appendTo('#' + args.ruleID + '_valuekey0');
        }
    }
    function refreshTable(rule, ruleID) {
        var template = '<tr><td>${EmployeeID}</td><td>${FirstName}</td><td>${Age}</td></tr>';
        var compiledFunction = ej.base.compile(template);
        var predicate = queryBldrObj.getPredicate({condition: 'and', rules: [rule]});
        var dataManagerQuery = new ej.data.Query().select(['EmployeeID', 'FirstName', 'Age']).where(predicate);
        var result = new ej.data.DataManager(employeeData).executeLocal(dataManagerQuery);
        var table = document.querySelector('#' + ruleID + '_section #datatable');
        if (result.length) {
            table.style.display = 'block';
        }
        else {
            table.style.display = 'none';
        }
        table.querySelector('tbody').innerHTML = '';
        result.forEach(function (data) {
            table.querySelector('tbody').appendChild(compiledFunction(data)[0].querySelector('tr'));
        });
    }
	


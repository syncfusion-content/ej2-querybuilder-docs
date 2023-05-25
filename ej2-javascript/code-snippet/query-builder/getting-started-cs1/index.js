    /**
     * column querybuilder sample
     */
        var data = [
        { OrderID: 10248, CustomerID: 'VINET', EmployeeID: 5, Freight: 32.3800, OrderDate: "1996-07-02T00:00:00.000Z" },
        { OrderID: 10249, CustomerID: 'TOMSP', EmployeeID: 6, Freight: 32.3800, OrderDate: "1996-07-19T00:00:00.000Z" },
        { OrderID: 10250, CustomerID: 'HANAR', EmployeeID: 4, Freight: 32.3800, OrderDate: "1996-07-22T00:00:00.000Z" }];
        var qryBldrObj = new ej.querybuilder.QueryBuilder({
            width: '100%',
            dataSource: data,
        });
        qryBldrObj.appendTo('#querybuilder');


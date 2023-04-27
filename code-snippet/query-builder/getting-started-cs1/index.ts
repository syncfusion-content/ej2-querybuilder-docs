

import { QueryBuilder } from '@syncfusion/ej2-querybuilder';

let data: Object[] = [
    { OrderID: 10248, CustomerID: 'VINET', EmployeeID: 5, Freight: 32.3800, OrderDate: "07/09/1991" },
    { OrderID: 10249, CustomerID: 'TOMSP', EmployeeID: 6, Freight: 32.3800, OrderDate: "07/09/1991" },
    { OrderID: 10250, CustomerID: 'HANAR', EmployeeID: 4, Freight: 32.3800, OrderDate: "07/09/1991" }];

    let qryBldrObj: QueryBuilder = new QueryBuilder({
        width: '70%',
        dataSource: data,
    });
    qryBldrObj.appendTo('#querybuilder');



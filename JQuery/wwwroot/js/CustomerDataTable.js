﻿$(document).ready(function () {
    $('#customers').dataTable({
        "serverSide": true,
        "filter": true,
        "ajax": {
            "url": "/api/Customer",
            "type": "POST",
            "dataType":"json"
        },
        "columnDefs": [{
            "targets": [0],
            "visible": false,
            "searchable":false
        }],
        "columns": [
            { "data": "id", "name": "Id", "autowidth": true },
            { "data": "firstName", "name": "FirstName", "autowidth": true },
            { "data": "lastName", "name": "LastName", "autowidth": true },
            { "data": "email", "name": "Email", "autowidth": true },
            { "data": "contact", "name": "Contact", "autowidth": true },
            //{ "data": "dateOfBirth", "name": "DateOfBirth", "autowidth": true },
            {
                "render": function (data, type, row) {
                    var date = new Date(row.dateOfBirth);
                    var year = date.getFullYear();
                    var month = date.getMonth() + 1; // Months are zero-based in JavaScript
                    var day = date.getDate();
                    return '<span>' + year + '-' + month + '-' + day + '</span>';
                },
                "name": "DateOfBirth"
            },


            {
                "render": function (data, type, row) { return '<a href="#" class="btn btn-danger" onclick=DeleteCustomer("' + row.id + '"); > Delete </a>' },
                "orderable": false
            },
            
        ]


    });

});
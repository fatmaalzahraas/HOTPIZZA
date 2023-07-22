const order = {
    name: "order",
    title: "order",
    type: "document",
    fields : [
        {
            name: 'userInfo',
            title: 'UserInfo',
            type: 'object',
            fields: [
                {
                    name: 'firstName',
                    title: 'FirstName',
                    type: 'string',
                    options: {
                        maxLength: 25
                    }
                },
                {
                    name: 'lastName',
                    title: 'LastName',
                    type: 'string',
                    options: {
                        maxLength: 25
                    }
                },
                {
                    name: 'phone',
                    title: 'Phone',
                    type: 'string',
                    options: {
                        maxLength: 11
                    }
                },
                {
                    name: 'anotherPhone',
                    title: 'AnotherPhone',
                    type: 'string',
                    options: {
                        maxLength: 11
                    }
                },
                {
                    name: 'streetName',
                    title: 'StreetName',
                    type: 'string',
                    options: {
                    maxLength: 50
                    }
                },
                {
                    name: 'streetNo',
                    title: 'StreetNo',
                    type: 'number',
                },
                {
                    name: 'block',
                    title: 'Block',
                    type: 'string',
                    options: {
                        maxLength: 20
                    }
                },
                {
                    name: 'floor',
                    title: 'Floor',
                    type: 'string',
                },
                {
                    name: 'apartment',
                    title: 'Apartment',
                    type: 'number',
                },
                {
                    name: 'mentions',
                    title: 'Mentions',
                    type: 'string',
                    options: {
                        maxLength: 100
                    }
                }
            ]
        }
        ,
        {
            name: 'total',
            title: 'Total',
            type: 'number',
        },
        {
            name: 'status',
            title: 'Status',
            type: 'number'
        }
    ]
}
export default order;
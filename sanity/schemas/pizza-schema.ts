const pizza = {
    name: "pizza",
    title: "pizza",
    type: "document",
    fields: [
        {
            name: "name",
            title: "name",
            type: "string"
        },
        {
            name: "slug",
            title: "slug",
            type: "slug",
            options: {
                source: "name"
            }
        },
        {
            name: "image",
            title: "image",
            type: "image",
            options: {
                hotspot: true
            },
           /* fields: [
                {
                    name: "alt",
                    title: "alt",
                    type: "string"
                }
            ]*/
        },
        {
            name: "smallPrice",
            title: "smallPrice",
            type: "number",
        },
        {
            name: "mediumPrice",
            title: "mediumPrice",
            type: "number"
        },
        {
            name: "largePrice",
            title: "largePrice",
            type: "number"
        },
        {
            name: "description",
            title: "description",
            type: "string"
        },
        {
            name: "toppings",
            title: "toppings",
            type: "array",
            of: [{
                type: "object",
                fields: [
                    {type: "image", name: "image"},
                    {type: "string", name: "name"},
                    {type: "number", name: "price"}
                ]
            }]
        }
    ]
}
export default pizza;
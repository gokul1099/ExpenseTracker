import { appSchema,tableSchema } from "@nozbe/watermelondb";

export default appSchema({
    version :1,
    tables : [
        //table schemas goes here
        tableSchema({
            name:"transactions",
            columns:[
                {name:"title",type:"string"},
                {name:"type",type:"string",isIndexed:true},
                {name:"amount",type:"number"},
                {name:"created_at",type:"number"},
                {name:"update_at",type:"number"}
            ]
        })
    ]
})
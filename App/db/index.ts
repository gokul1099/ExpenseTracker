import { Platform } from "react-native";
import { Database } from "@nozbe/watermelondb";
import SQLiteAdapter from "@nozbe/watermelondb/adapters/sqlite"

//models
import Transactions from "./model/Transactions"; 

import schema from "./model/schema";
import migrations from "./model/migrations";

const adapter = new SQLiteAdapter({
    schema,
    migrations,
    onSetUpError(error) {
        console.log(error)
    },
})

const database = new Database({
    adapter,
    modelClasses:[
        Transactions
    ],
})

export default database
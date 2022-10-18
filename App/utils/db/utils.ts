import database from "../../db";


export const getExpense = async()=>{

    const data = await database.get("transactions").query(Q.where('type','Income')).fetch()
}

export const addTransactions = async(title:String,type:String,date:String,amount:String,db:any)=>{
    console.log(date,"date")
    await db.write(async()=>{
        const newData = await db.get("transactions").create((t)=>{
            t.title = title,
            t.type = type,
            t.amount = amount
        }
        )
        // db.unsafeResetDatabase()
    })
}
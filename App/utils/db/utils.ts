import database from "../../db";

const TRANSACTIONS = database.get("transactions")
export const getExpense = async () => {

    const data = await database.get("transactions").query(Q.where('type', 'Income')).fetch()
}

export const addTransactions = async (title: String, type: String, date: String, amount: String, db: any) => {
    await db.write(async () => {
        const newData = await TRANSACTIONS.create((t) => {
            t.title = title,
                t.type = type,
                t.amount = amount
        }
        )
        // db.unsafeResetDatabase()
    })
}

export const observeTransaction = () => {
    TRANSACTIONS.query().observe()
}
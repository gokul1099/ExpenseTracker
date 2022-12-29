import {Transaction} from "./model/TransactionModel";
import {createRealmContext} from "@realm/react";
import Realm from "realm";
// export const openRealm = async () => {
//   try {
//     const r = await Realm.open({
//       path: "myrealm",
//       schema: [TransactionSchema],
//     });
//     console.log("realm opened successfully");
//     return r;
//   } catch (e) {
//     console.log(e, "error");
//   }
// };

export const TransactionContext = createRealmContext({
  schema: [Transaction],
  onFirstOpen(realm) {
    realm.create("Transactions", {
      _id: new Realm.BSON.ObjectID(),
      type: "Expense",
      desc: "Online Shopping",
      amount: 100,
      createdAt: new Date(),
    });
  },
});

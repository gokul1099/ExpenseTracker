import Realm from "realm";

export class Transaction extends Realm.Object {
  _id!: Realm.BSON.ObjectId;
  type!: string;
  desc!: string;
  amount!: number;
  createdAt!: Date;

  static schema = {
    name: "Transactions",
    primaryKey: "_id",
    properties: {
      _id: "objectId",
      type: "string",
      desc: "string",
      amount: "float",
      createdAt: "date",
    },
  };
}

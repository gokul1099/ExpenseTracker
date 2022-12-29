import React from "react";
import Layout from "./Layout";
import {TransactionContext} from "../../db";
const {RealmProvider} = TransactionContext;
interface IProps {}

export function AddTransactionScreen(props: IProps) {
  return (
    <RealmProvider>
      <Layout {...props} />
    </RealmProvider>
  );
}

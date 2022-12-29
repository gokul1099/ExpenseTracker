import React from "react";
import Layout from "./Layout";

interface IProps {}
import {TransactionContext} from "../../db";
const {RealmProvider} = TransactionContext;
export function HomeScreen(props: IProps) {
  return (
    <RealmProvider>
      <Layout {...props} />
    </RealmProvider>
  );
}

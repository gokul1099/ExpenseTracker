import React from "react";
import { View, StyleSheet, TouchableOpacity, ScrollView, Button } from "react-native";
import SYSTEM from "../../theme";
import CustomText from "../../components/CustomText";
import TransactType from "../../components/TransactType";
import useSelectTheme from "../../hooks/useSelectTheme";
import TrasactItem from "../../components/TrasactItem";
import { useNavigation } from "@react-navigation/core";
import database from "../../db";
import * as TransactionUtils from "../../utils/db/utils"
import { useDatabase } from '@nozbe/watermelondb/hooks';
import withObservables from "@nozbe/with-observables";
export type RootStackParamList = {
  YourScreen: string
};
const H_MAX_HEIGHT = 15;
const H_MIN_HEIGHT = 52;
const H_SCROLL_DISTANCE = H_MAX_HEIGHT - H_MIN_HEIGHT;

interface Props { }
const Layout: React.FC<Props> = props => {
  const theme = useSelectTheme();
  const navigation = useNavigation()
  const styles = Styles(theme);
  const db = useDatabase()
  console.log(props.transactions, "prop")
  //get date from db
  const transactionsCollection = database.get("transactions").query()
  console.log(transactionsCollection?.collection, "collection")
  const onClick = () => {
    const date = new Date().toLocaleDateString()
    TransactionUtils.addTransactions(
      "test",
      "income",
      date,
      "1000",
      db
    )
  }

  return (
    <View style={{ flex: 1, padding: "5%", backgroundColor: theme.primary }}>
      <View style={styles.header}>
        <CustomText type="medium" text="My Wallet" variant="primary" />
      </View>
      <View style={[{ flex: 0.2 }]}>
        <View style={styles.totalIncomeContainer}>
          <View>
            <CustomText text={"Total Balance"} variant={"secondary"} />
          </View>
          <View>
            <CustomText text={"$ 4500"} variant={"secondary"} />
          </View>
        </View>
      </View>
      <View style={{ flex: 0.3, marginTop: "5%" }}>
        <View style={[styles.transactType]}>
          <View style={{ flex: 0.49 }} key="income">
            <TransactType type="Income" />
          </View>
          <View style={{ flex: 0.49 }} key="expense">
            <TransactType type="Expense" />
          </View>
        </View>
      </View>
      <View style={{ flex: 0.5 }}>
        <View style={styles.recentTitle}>
          <Button title="add" onPress={() => onClick()} />
          <CustomText text="Recent Transactions" variant={"primary"} />
          <TouchableOpacity onPress={() => navigation.navigate("transaction")}>
            <CustomText text="View All" variant={"tertiary"} />
          </TouchableOpacity>
        </View>
        <ScrollView style={{}} scrollEventThrottle={16} showsVerticalScrollIndicator={false}>
          <View style={{ flex: 1 }}>
            {props.transactions.map(item => {
              return <TrasactItem item={item._raw} key={item.id} />;
            })}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

Layout.defaultProps = {};

const Styles = (theme: any) =>
  StyleSheet.create({
    header: {
      flex: 0.15,
      justifyContent: "center",
    },
    totalIncomeContainer: {
      flex: 1,
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.secondary,
      borderRadius: 15,
    },
    transactType: { flex: 1, flexDirection: "row", justifyContent: "space-between" },
    recentTitle: {
      flexDirection: "row",
      marginBottom: "5%",
      justifyContent: "space-between"
    }
  });

const enhance = withObservables([], () => ({
  transactions: database.collections.get("transactions").query().observe()
}))
export default enhance(Layout);

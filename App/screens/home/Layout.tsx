import React from "react";
import {View, StyleSheet, TouchableOpacity, ScrollView, Button, SafeAreaView} from "react-native";
import SYSTEM from "../../theme";
import CustomText from "../../components/CustomText";
import TransactType from "../../components/TransactType";
import useSelectTheme from "../../hooks/useSelectTheme";
import TrasactItem from "../../components/TrasactItem";
import {useNavigation} from "@react-navigation/core";
import {FloatingButton} from "../../components/FloatingButton";
import {TransactionContext} from "../../db";
const {useQuery} = TransactionContext;
import {Transaction} from "../../db/model/TransactionModel";

interface Props {}
const Layout: React.FC<Props> = props => {
  const theme = useSelectTheme();
  const {spacing, typography, fontSize} = SYSTEM;
  const navigation = useNavigation();
  const styles = Styles(theme);

  const data = useQuery(Transaction);
  console.log(data, "data");

  return (
    <>
      <View style={{flex: 1, padding: "5%", backgroundColor: theme.primary}}>
        <View style={styles.header}>
          <CustomText type="medium" text="My Wallet" variant="primary" />
        </View>
        <View style={[{flex: 0.2}]}>
          <View style={styles.totalIncomeContainer}>
            <View>
              <CustomText text={"Total Balance"} variant={"secondary"} />
            </View>
            <View>
              <CustomText text={"$ 4500"} variant={"secondary"} />
            </View>
          </View>
        </View>
        <View style={{flex: 0.3, marginTop: "5%"}}>
          <View style={[styles.transactType]}>
            <View style={{flex: 0.49}} key="income">
              <TransactType type="Income" />
            </View>
            <View style={{flex: 0.49}} key="expense">
              <TransactType type="Expense" />
            </View>
          </View>
        </View>
        <View style={{flex: 0.5}}>
          <View style={styles.recentTitle}>
            <CustomText text="Recent Transactions" variant={"primary"} />
            <TouchableOpacity onPress={() => navigation.navigate("transaction")}>
              <CustomText text="View All" variant={"tertiary"} />
            </TouchableOpacity>
          </View>
          <ScrollView style={{}} scrollEventThrottle={16} showsVerticalScrollIndicator={false}>
            <View style={{flex: 1}}>
              {data?.map(item => {
                return (
                  <TrasactItem
                    _id={item._id}
                    amount={item.amount}
                    createdAt={item.createdAt}
                    desc={item.desc}
                    type={item.type}
                  />
                );
              })}
            </View>
          </ScrollView>
        </View>
        <FloatingButton />
      </View>
    </>
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
    transactType: {flex: 1, flexDirection: "row", justifyContent: "space-between"},
    recentTitle: {
      flexDirection: "row",
      marginBottom: "5%",
      justifyContent: "space-between",
    },
  });

export default Layout;

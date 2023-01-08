import React from "react";
import {View, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView} from "react-native";
import SYSTEM from "../../theme";
import CustomText from "../../components/CustomText";
import useSelectTheme from "../../hooks/useSelectTheme";
import {useNavigation} from "@react-navigation/core";
import {FloatingButton} from "../../components/FloatingButton";
import {TransactionContext} from "../../db";
const {useQuery} = TransactionContext;
import {Transaction} from "../../db/model/TransactionModel";
import {Button} from "../../components/Button";

interface Props {}
const Layout: React.FC<Props> = props => {
  const theme = useSelectTheme();
  const {spacing, typography, fontSize} = SYSTEM;
  const navigation = useNavigation();
  const styles = Styles(theme);
  console.log(theme, "te");
  const data = useQuery(Transaction);
  console.log(data, "data");

  return (
    <>
      <View style={{flex: 1, padding: "5%", backgroundColor: theme.primary}}>
        <Button type="primary" title="Primary button" action={() => console.log("Primary")} />
        <Button
          type="primary"
          title="Primary button"
          leftIcon="rightcircle"
          action={() => console.log("Primary")}
        />
      </View>
    </>
  );
};

Layout.defaultProps = {};

const Styles = (theme: any) => StyleSheet.create({});

export default Layout;

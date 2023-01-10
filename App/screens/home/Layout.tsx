import React from "react";
import {View, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, Text} from "react-native";
import SYSTEM from "../../theme";
import CustomText from "../../components/CustomText";
import useSelectTheme from "../../hooks/useSelectTheme";
import {useNavigation} from "@react-navigation/core";
import {FloatingButton} from "../../components/FloatingButton";
import {TransactionContext} from "../../db";
const {useQuery} = TransactionContext;
import {Transaction} from "../../db/model/TransactionModel";
import {Button} from "../../components/Button";
import {Pills} from "../../components/Pills";
import {PillDropDown} from "../../components/PillDropDown";

interface Props {}
const Layout: React.FC<Props> = props => {
  const theme = useSelectTheme();
  const {spacing, typography, fontSize} = SYSTEM;
  const navigation = useNavigation();
  const styles = Styles(theme);
  console.log(theme, "te");
  const data = useQuery(Transaction);

  return (
    <>
      <View style={{flex: 1, padding: "5%", backgroundColor: theme.primary}}>
        <Button type="primary" title="Primary" action={() => console.log("Primary")} size={"sm"} />
        <Button
          type="secondary"
          title="Primary button"
          leftIcon="rightcircle"
          action={() => console.log("Primary")}
          size={"lg"}
        />
        <Button
          type="primary"
          title="secondary"
          action={() => console.log("Primary")}
          size={"lg"}
        />
        <Button
          type="secondary"
          title="secondary"
          leftIcon="rightcircle"
          action={() => console.log("Primary")}
          size={"sm"}
        />
        <Pills type={"secondary"}>
          <Text>Hi hellow</Text>
        </Pills>
        <PillDropDown value="test" onSelect={value => console.log(value)} size={"lg"} />
      </View>
    </>
  );
};

Layout.defaultProps = {};

const Styles = (theme: any) => StyleSheet.create({});

export default Layout;

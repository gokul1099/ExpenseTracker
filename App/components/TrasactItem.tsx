import {View, Text, StyleSheet} from "react-native";
import React from "react";
import Icons from "../utils/Icons";
import useGetTheme from "../hooks/useSelectTheme";
import SYSTEM from "../theme/index";
import Realm from "realm";
interface TransactItemProps {
  _id: Realm.BSON.ObjectId;
  amount: number;
  createdAt: Date;
  desc: string;
  type: string;
}

// [{"_id": [ObjectId], "amount": 100, "createdAt": 2022-12-29T17:42:06.156Z, "desc": "Online Shopping", "type": "Expense"}
const TrasactItem = ({_id, amount, createdAt, desc, type}: TransactItemProps) => {
  const theme = useGetTheme();
  const {spacing} = SYSTEM;
  const Style = Styles(spacing, type);
  return (
    <View style={{flex: 0.6}}>
      <View style={Style.itemContainer}>
        <View style={{flex: 0.12}}>
          <Text>
            <Icons type={"antdesign"} name="pluscircleo" size={30} color={theme.Icons} />
          </Text>
        </View>
        <View style={{flex: 0.68}}>
          <View style={{flex: 1}}>
            <View>
              <Text style={Style.text}>{desc}</Text>
            </View>
            <View>
              <Text style={Style.text}>{new Date(createdAt).toLocaleDateString()}</Text>
            </View>
          </View>
        </View>
        <View style={{flex: 0.2}}>
          <Text style={Style.text}>{type}</Text>
        </View>
      </View>
    </View>
  );
};

const Styles = (spacing: any, type: string) => {
  return StyleSheet.create({
    itemContainer: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      borderWidth: 1,
      padding: `${spacing.small}%`,
      margin: `${spacing.tiny}%`,
      borderRadius: 15,
    },
    text: {
      color: type === "Income" ? "green" : "red",
    },
  });
};

export default TrasactItem;

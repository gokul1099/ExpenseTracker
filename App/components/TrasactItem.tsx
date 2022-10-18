import {View, Text, StyleSheet} from "react-native";
import React from "react";
import Icons from "../utils/Icons";
import useGetTheme from "../hooks/useSelectTheme";
import SYSTEM from "../theme/index";
interface TransactItemProps {
  item: any;
}
// type Data {
//     id: number,
//     type: String,
//     amount: number,
//     data: Date
// }

// {
//     id: 4,
//     type: "Expense",
//     amount: "20.00",
//     date: new Date()
//   },
const TrasactItem = (props: TransactItemProps) => {
  const theme = useGetTheme();
  const {spacing} = SYSTEM;
  const Style = Styles(spacing);
  return (
    <View key={props.item.id} style={{flex: 0.6}}>
      <View style={Style.itemContainer}>
        <View style={{flex: 0.12}}>
          <Text>
            <Icons type={"antdesign"} name="pluscircleo" size={30} color={theme.Icons} />
          </Text>
        </View>
        <View style={{flex: 0.68}}>
          <View style={{flex: 1}}>
            <View>
              <Text>{props.item.title}</Text>
            </View>
            <View>
              <Text>{props.item.date}</Text>
            </View>
          </View>
        </View>
        <View style={{flex: 0.2}}>
          <Text>{props.item.type}</Text>
        </View>
      </View>
    </View>
  );
};

const Styles = (spacing: any) =>
  StyleSheet.create({
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
  });

export default TrasactItem;

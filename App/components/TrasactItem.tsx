import {View, Text, StyleSheet} from "react-native";
import React from "react";
import Icons from "../utils/Icons";
import useGetTheme from "../hooks/useSelectTheme";
import SYSTEM from "../theme/index";
import withObservables from "@nozbe/with-observables";
interface TransactItemProps {
  item: any;
}
const TrasactItem = (props: TransactItemProps) => {
  const theme = useGetTheme();
  const {spacing} = SYSTEM;
  const Style = Styles(spacing, props.item.type);
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
              <Text style={Style.text}>{props.item.title}</Text>
            </View>
            <View>
              <Text style={Style.text}>{props.item.date}</Text>
            </View>
          </View>
        </View>
        <View style={{flex: 0.2}}>
          <Text style={Style.text}>{props.item.type}</Text>
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

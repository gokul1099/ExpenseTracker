import React, {useState} from "react";
import {View, Text, StyleSheet} from "react-native";
import useSelectTheme from "../hooks/useSelectTheme";
import Icons from "../utils/Icons";
import {typography, fontSize} from "../theme/typography";
interface PillDropDownType {
  value: string;
  onSelect: (value: any) => void;
  size: "lg" | "sm";
}

export function PillDropDown({value, onSelect, size}: PillDropDownType) {
  const theme = useSelectTheme();
  const Style = styles(theme, size);
  const [show, setShow] = useState<boolean>(false);
  return (
    <View style={Style.container}>
      <View style={Style.pillContainer}>
        <View style={{flex: 0.9}}>
          <Text style={Style.text}>{value}</Text>
        </View>
        <View style={{flex: 0.1}}>
          <Icons type="antdesign" size={20} name="down" color="black" />
        </View>
      </View>
    </View>
  );
}

const styles = (theme: any, size: string) =>
  StyleSheet.create({
    container: {
      borderWidth: 1,
      borderRadius: 10,
      width: size === "lg" ? "100%" : "50%",
      padding: "4%",
    },
    pillContainer: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      color: theme?.dark?.dark25,
      fontSize: fontSize.xl,
      fontFamily: typography.RobotoMedium,
    },
  });

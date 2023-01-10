import React from "react";
import {Pressable, StyleSheet, View} from "react-native";
import Icons from "../utils/Icons";
import CustomText from "./CustomText";
import useSelectTheme from "../hooks/useSelectTheme";
interface ButtonType {
  title: string;
  type: "primary" | "secondary";
  leftIcon?: string;
  rightIcon?: string;
  size: "lg" | "sm";
  action: () => void;
}

interface IconCompType {
  name: string;
}

export function Button({title, action, type, rightIcon, leftIcon, size}: ButtonType) {
  const theme = useSelectTheme();
  const bgColor = type === "primary" ? theme.primary.violet100 : theme.primary.violet20;
  const IconComp = ({name}: IconCompType) => {
    return <Icons name={name} size={20} type="antdesign" color="black" />;
  };

  return (
    <Pressable onPress={() => action()}>
      <View
        style={[
          style.btnContainer,
          {backgroundColor: bgColor, width: size === "lg" ? "100%" : "50%"},
        ]}>
        <View style={style.iconLeft}>{leftIcon && <IconComp name={leftIcon} />}</View>
        <View style={style.text}>
          <CustomText text={title} variant={type} />
        </View>
        <View style={style.iconRight}>{rightIcon && <IconComp name={rightIcon} />}</View>
      </View>
    </Pressable>
  );
}

const style = StyleSheet.create({
  btnContainer: {
    flexDirection: "row",
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    backgroundColor: "red",
  },
  iconRight: {
    flex: 0.2,
  },
  iconLeft: {
    justifyContent: "center",
    alignItems: "center",
    flex: 0.2,
  },
  text: {
    flex: 0.6,
    justifyContent: "center",
    alignItems: "center",
  },
});

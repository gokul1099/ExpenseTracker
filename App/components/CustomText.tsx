import React from "react";
import {StyleSheet, Text, TextStyle} from "react-native";
import SYSTEM from "../theme";
import useSelectTheme from "../hooks/useSelectTheme";
interface CustomTextProps {
  variant: "primary" | "secondary";
  text: string;
}

const CustomText = ({text, variant}: CustomTextProps) => {
  const {fontSize, typography} = SYSTEM;
  const theme = useSelectTheme();

  const primary: TextStyle = StyleSheet.flatten({
    fontFamily: typography.RobotoBold,
    fontSize: fontSize.xxl,
    fontWeight: "bold",
    color: theme.textPrimary,
  });
  const secondary: TextStyle = {
    fontFamily: typography.RobotoMedium,
    fontSize: fontSize.xl,
    fontWeight: "bold",
    color: theme.textSecondary,
  };
  console.log(variant);
  return <Text style={variant === "primary" ? primary : secondary}>{text}</Text>;
};

const style = StyleSheet.create({
  primary: {},
});

export default CustomText;

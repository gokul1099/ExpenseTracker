import React, {ReactNode} from "react";
import {View, ViewStyle} from "react-native";
import useSelectTheme from "../hooks/useSelectTheme";
interface PillsType {
  type: "primary" | "secondary";
  children: ReactNode;
}

export function Pills({children, type}: PillsType) {
  const theme = useSelectTheme();
  const style: ViewStyle = {
    borderWidth: 1,
    borderRadius: 20,
    width: "20%",
    padding: "1.5%",
    backgroundColor: type === "primary" ? theme?.light?.light200 : theme?.primary?.violet20,
  };
  return <View style={style}>{children}</View>;
}

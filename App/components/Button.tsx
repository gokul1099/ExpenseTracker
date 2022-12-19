import React from "react";
import {TouchableHighlight, StyleSheet, View} from "react-native";
import CustomText from "./CustomText";

interface ButtonType {
  title: string;
  action: () => void;
}

export function Button({title, action}: ButtonType) {
  return (
    <View style={{alignItems: "center"}}>
      <TouchableHighlight onPress={action} style={style.button}>
        <CustomText text={title} />
      </TouchableHighlight>
    </View>
  );
}

const style = StyleSheet.create({
  button: {
    backgroundColor: "gray",
    width: "90%",
    borderRadius: 30,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});

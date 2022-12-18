import React from "react";
import {Pressable, View, StyleSheet} from "react-native";
import Icons from "../utils/Icons";
import {useNavigation} from "@react-navigation/core";
export function FloatingButton() {
  const navigation = useNavigation();
  const onClick = () => {
    navigation.navigate("AddTransaction", {type: "Expense"});
  };
  return (
    <View style={style.container}>
      <Pressable onPress={() => onClick()}>
        <Icons type="antdesign" name="plus" size={30} color={"white"} />
      </Pressable>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    height: 60,
    width: 60,
    borderRadius: 60,
    backgroundColor: "gray",
    position: "absolute",
    bottom: 10,
    right: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});

import React from "react";
import {View, Text, StyleSheet, TouchableHighlight} from "react-native";
import {TouchableOpacity} from "react-native-gesture-handler";
import Icons from "../utils/Icons";
import useGetTheme from "../hooks/useSelectTheme";
import CustomText from "./CustomText";
interface OPTION {
  id: number;
  option: string;
}
interface DropDownProps {
  data: Array<OPTION>;
  onChange: (val: "Income" | "Expense") => void;
  defaultOption: string;
  //   storageKey: any;
}
export const DropDown = ({data, onChange, defaultOption}: DropDownProps) => {
  const [show, setShow] = React.useState(false);
  const [selected, setSelected] = React.useState(defaultOption);
  const theme = useGetTheme();
  const style = Styles();
  const onSelect = (value: any) => {
    setSelected(value);
    onChange(value);
    setShow(false);
  };
  return (
    <View style={style.container}>
      <View style={style.selectBar}>
        <View>
          <CustomText text={selected} />
        </View>
        <View>
          <TouchableOpacity onPress={() => setShow(!show)}>
            <Icons type="antdesign" name={show ? "up" : "down"} size={20} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      {show && (
        <View style={style.optionsContainer}>
          {data.length !== 0 &&
            data.map(item => {
              return (
                <TouchableHighlight
                  key={item.id}
                  style={[
                    style.option,
                    {backgroundColor: selected === item.option ? theme.secondary : ""},
                  ]}
                  onPress={() => onSelect(item.option)}>
                  <CustomText text={item?.option} />
                </TouchableHighlight>
              );
            })}
        </View>
      )}
    </View>
  );
};

const Styles = () =>
  StyleSheet.create({
    container: {
      flexDirection: "column",
      alignItems: "center",
    },
    selectBar: {
      flexDirection: "row",
      borderWidth: 1,
      justifyContent: "space-between",
      padding: 10,
      width: "90%",
      borderRadius: 10,
    },
    option: {
      width: "90%",
      height: "20%",
      padding: 5,
      alignItems: "center",
      justifyContent: "center",
    },
    optionsContainer: {
      width: "100%",
      alignItems: "center",
      zIndex: 1,
      position: "absolute",
      top: 50,
      height: 300,
      backgroundColor: "white",
    },
  });

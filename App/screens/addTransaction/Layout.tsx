import React, {useState} from "react";
import {View, StyleSheet, SafeAreaView, Pressable} from "react-native";
import CustomText from "../../components/CustomText";
import {InputContainer} from "../../components/InputContainer";
import {DropDown} from "../../components/DropDown";
import {RouteProp, NavigationProp} from "@react-navigation/native";
import Icons from "../../utils/Icons";
import useSelectTheme from "../../hooks/useSelectTheme";
import {useForm} from "../../hooks/useForm";
import {TextInput} from "react-native-gesture-handler";
import {Button} from "../../components/Button";
import {addTransactions} from "../../utils/db/utils";
import {useDatabase} from "@nozbe/watermelondb/hooks";
interface Props {
  route: RouteProp<{params: {type: string}}, "params">;
  navigation: NavigationProp<any, any>;
}
const Layout = ({route, navigation}: Props) => {
  const theme = useSelectTheme();
  const style = Styles(theme);
  const db = useDatabase();
  const [type, setType] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [data, setData] = useState<string>(new Date().getDate().toString());
  const typeData = [
    {
      id: 1,
      option: "Income",
    },
    {
      id: 2,
      option: "Expense",
    },
  ];
  const onContinue = () => {
    addTransactions(description, type, data, amount, db);
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: "red"}}>
      <View style={style.topContainer}>
        <View style={{flex: 1, flexDirection: "row"}}>
          <Pressable style={{flex: 0.4}} onPress={() => navigation.goBack()}>
            <Icons type="antdesign" name="arrowleft" size={30} color={"white"} />
          </Pressable>
          <View style={{flex: 0.6}}>
            <CustomText text={"title"} />
          </View>
        </View>
      </View>
      <View style={style.bottomContainer}>
        <View style={{flex: 1}}>
          <View style={{flex: 0.1}}></View>
          <View style={{flex: 0.2}}>
            <DropDown defaultOption="Income" data={typeData} onChange={val => setType(val)} />
          </View>
          <View style={{flex: 0.2, alignItems: "center"}}>
            <TextInput
              style={style.textInput}
              placeholder="Description"
              value={description}
              onChangeText={val => setDescription(val)}
            />
          </View>
          <View style={{flex: 0.2, alignItems: "center"}}>
            <TextInput
              style={style.textInput}
              placeholder="Amount"
              value={amount}
              onChangeText={val => setAmount(val)}
            />
          </View>
          <View style={{flex: 0.3}}>
            <Button title="Continue" action={() => onContinue()} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

Layout.propTypes = {};

const Styles = (theme: any) =>
  StyleSheet.create({
    topContainer: {
      flex: 0.4,
      marginTop: 10,
    },

    bottomContainer: {
      flex: 0.6,
      backgroundColor: "white",
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
    },
    textInput: {
      borderWidth: 1,
      width: "90%",
      borderRadius: 10,
    },
  });
export default Layout;

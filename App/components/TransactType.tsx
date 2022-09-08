import React from "react"
import { View, StyleSheet } from "react-native"
import SYSTEM from "../theme"
import CustomText from "./CustomText"
import Icons from "../utils/Icons"
import useSelectTheme from "../hooks/useSelectTheme"
interface TypeProps {
    type: String
}
const TransactType = ({ type }: TypeProps) => {
    const theme = useSelectTheme()
    const styles = Styles(theme)
    return (
        <View style={styles.container}>
            <View style={[styles.iconWrap, { backgroundColor: type === "Income" ? theme.green : theme.red }]}>
                <Icons type={"antdesign"} name={type == "Income" ? "arrowdown" : "arrowup"} size={20} color={type === "Income" ? theme.green : theme.red} />
            </View>
            <View style={{ flex: 0.2 }}><CustomText text={type} type="tertiary" /></View>
            <View style={{ flex: 0.2 }}><CustomText text={"1234"} type="tertiary" /></View>
        </View>
    )
}
const Styles = (theme: any) => (StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        margin: "10%",
        borderRadius: 15
    },
    iconWrap: {
        flex: 0.4,
        height: 30,
        width: 50,
        borderRadius: 25,
        opacity: 0.2,
        justifyContent: "center",
        alignItems: "center",

    }
}))
export default TransactType
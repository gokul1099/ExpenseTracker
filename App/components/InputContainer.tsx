import React from "react"
import { View, TextInput, StyleSheet, Text } from "react-native"
import useGetTheme from "../hooks/useSelectTheme"
import { DropDown } from "./DropDown"
interface InputContainerProps {
    type: "TextInput" | "DropDown",
    placeholder?: string,
    title: string,
    onChange: (key: any, value: any) => void,
    selectedData?: any
}
const data = [
    {
        id: 1,
        option: "Online Shopping"
    },
    {
        id: 2,
        option: 'Shopping'
    },
    {
        id: 3,
        option: "food"
    },
    {
        id: 4,
        option: "bus ticket"
    },
    {
        id: 5,
        option: "flight ticket"
    }
]
export const InputContainer = ({ type, placeholder, title, onChange, selectedData }: InputContainerProps) => {
    const theme = useGetTheme()
    const style = Styles(theme)
    const getKey = (title: string) => {
        switch (title) {
            case "Amount":
                return "amount"
            case "Title":
                return "title"
        }
    }
    console.log(selectedData, "da")
    return (
        <View style={style.inputContainer}>
            <View style={{ flex: 0.4 }}>
                <Text>{title}</Text>
            </View>
            <View style={{ flex: 0.7 }}>
                {
                    type === "TextInput" ?
                        (
                            <TextInput style={style.input} placeholder={placeholder} onChangeText={(text) => onChange(getKey(title), text)} />
                        ) :
                        (
                            <View style={style.input}>
                                <View style={{ flex: 1, flexDirection: "row" }}>
                                    <View style={{ flex: 0.95 }}><Text>{selectedData.type}</Text></View>
                                    <View><DropDown onChange={onChange} data={data} storageKey={getKey(title)} /></View>
                                </View>

                            </View>
                        )
                }
            </View>
        </View>
    )
}

const Styles = (theme: any) => StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: "10%",
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
})
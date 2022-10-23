import React from "react"
import { View, Text, StyleSheet, TouchableHighlight } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import Icons from "../utils/Icons"
import useGetTheme from "../hooks/useSelectTheme"
interface OPTION {
    id: number,
    option: string,
}
interface DropDownProps {
    data: Array<OPTION>
    onChange: (key: any, value: any) => void,
    storageKey: any

}
export const DropDown = ({ data, onChange, storageKey }: DropDownProps) => {
    const [show, setShow] = React.useState(false)
    const [selected, setSelected] = React.useState()
    const theme = useGetTheme()
    const style = Styles()
    const onSelect = (value: any) => {
        console.log(value)
        setSelected(value)
        onChange(storageKey, value)
        setShow(false)
    }
    return (
        <View style={style.container}>
            <TouchableOpacity onPress={() => setShow(!show)}>
                <Icons type="antdesign" name={show ? "up" : "down"} size={20} color="black" />
            </TouchableOpacity>
            {
                show &&
                (
                    <View style={{ marginTop: 10 }}>
                        {
                            data.length !== 0 && data.map((item) => {
                                return (
                                    <TouchableHighlight key={item.id} style={[style.option, { backgroundColor: selected === item.option ? theme.secondary : "" }]} onPress={() => onSelect(item.option)}>
                                        <Text>{item.option}</Text>
                                    </TouchableHighlight >
                                )
                            })
                        }
                    </View>
                )
            }
        </View>
    )
}

const Styles = () => (
    StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'column',
            alignItems: "flex-end"
        },
        option: {
            padding: "5%"
        }
    })
)
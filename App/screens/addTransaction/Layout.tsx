import React from 'react'
import { View, StyleSheet, SafeAreaView, TouchableOpacity } from "react-native"
import CustomText from '../../components/CustomText'
import { InputContainer } from '../../components/InputContainer'
import { RouteProp, NavigationProp } from '@react-navigation/native'
import Icons from '../../utils/Icons'
import useSelectTheme from "../../hooks/useSelectTheme"
import { useForm } from '../../hooks/useForm'
interface Props {
    route: RouteProp<{ params: { type: string } }, 'params'>,
    navigation: NavigationProp<any, any>
}
const Layout = ({ route, navigation }: Props) => {
    const theme = useSelectTheme()
    const style = Styles(theme)
    const { getData, handleOnChange } = useForm(
        {
            amount: 0,
            type: "",
            date: ""
        }
    )
    console.log(getData(), "data")
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={style.container}>
                <View style={style.header}>
                    <View style={{ flex: 0.4 }}>
                        <TouchableOpacity onPress={() => navigation.goBack()} >
                            <Icons name='arrowleft' color='black' size={20} type="antdesign" />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 0.6 }}>
                        <CustomText text={route.params.type} variant='primary' />
                    </View>
                </View>
                <View style={style.body}>
                    <InputContainer onChange={handleOnChange} type="TextInput" placeholder='Enter the Amount' title="Amount" />
                    <InputContainer onChange={handleOnChange} type="TextInput" placeholder='' title="Amount" />

                    <InputContainer selectedData={getData()} onChange={handleOnChange} type="DropDown" title="Title" />
                </View>
            </View>
        </SafeAreaView>
    )
}

Layout.propTypes = {}

const Styles = (theme: any) => (
    StyleSheet.create({
        container: {
            flex: 1,
            padding: "5%",
        },
        header: {
            flex: 0.2,
            flexDirection: "row",
            justifyContent: "space-between",
        },
        body: {
            flex: 0.5
        },


    })
)
export default Layout

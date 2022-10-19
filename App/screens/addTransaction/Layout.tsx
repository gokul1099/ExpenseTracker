import React from 'react'
import { View, StyleSheet } from "react-native"
import PropTypes from 'prop-types'

interface Props { }
const Layout: React.FC<Props> = props => {
    const style = Styles()
    return (
        <View style={style.container}>

        </View>
    )
}

Layout.propTypes = {}

const Styles = () => (
    StyleSheet.create({
        container: {
            flex: 1
        }
    })
)
export default Layout

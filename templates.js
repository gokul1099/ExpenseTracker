
function INDEX() {
    return (`/**
import React from 'react';
import Layout from './Layout';

interface IProps {}

export default function `+ screenName + `(props: IProps) {
return <Layout {...props} />;
}
`)
}

function LAYOUT(screenName) {
    return (`/**
    import React from 'react'
    import { View, Text, StyleSheet } from 'react-native'
    interface Props { }
    const Layout: React.FC<Props> = props => (
    <View style={styles.container}>
        <Text style={{ fontSize: 30 }}> `+ screenName + `</Text>
    </View>
)

    Layout.defaultProps = {}

    const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
    })

export default Layout
    
    `)
}

module.exports = {
    INDEX, LAYOUT
}
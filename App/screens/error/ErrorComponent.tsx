import React, { ErrorInfo } from "react"
import { Text, View, StyleSheet, ScrollView, Button } from "react-native"


export interface ErrorComponentProps {
    error: Error,
    errorInfo: ErrorInfo,
    onReset(): void
}

export const ErrorComponent = (props: ErrorComponentProps) => {
    return (
        <View style={Styles.container}>
            <Text style={Styles.errorTitle}>Error</Text>
            <View style={Styles.errorContainer}>
                <ScrollView>
                    <Text>{props?.error}</Text>
                </ScrollView>
            </View>
            <Button title="Reset" onPress={props.onReset} />
        </View>
    )
}
const Styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flex: 1,
        padding: 16,
        paddingVertical: 50,

    },
    errorContainer: {
        width: "100%",
        maxHeight: "60%",
        marginVertical: 15,
        paddingHorizontal: 10,
        paddingBottom: 15,
        borderRadius: 6
    },
    resetBtn: {
        paddingHorizontal: 40,
    },
    errorTitle: {
        color: "red",
        fontWeight: "bold",
        paddingVertical: 15
    },
    errorContent: {
        fontWeight: "bold",
        paddingVertical: 15,
    },
    image: {
        marginTop: 30,
        width: 64,
        height: 64
    }
})
import React from "react"
import { Text } from "react-native"
import SYSTEM from "../theme"

interface CustomTextProps {
    variant?: "primary" | "secondary" | "tertiary"
    text: String,
    type: String,
}

const CustomText = ({ text, variant, type }: CustomTextProps) => {
    const { fontSize, typography } = SYSTEM

    const primary = {
        fontFamily: typography.RobotoBold,
        fontSize: fontSize.xxl,
        // fontWeight: "bold"
    }
    return (
        <Text style={primary}>{text}</Text>
    )
}


export default CustomText
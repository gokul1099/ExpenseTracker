import React from "react"
import { Text } from "react-native"
import SYSTEM from "../theme"
import useSelectTheme from "../hooks/useSelectTheme"
interface CustomTextProps {
    variant?: "primary" | "secondary" | "tertiary"
    text: String,
    type?: String,
}

const CustomText = ({ text, variant, type }: CustomTextProps) => {
    const { fontSize, typography } = SYSTEM
    const theme = useSelectTheme()

    const primary = {
        fontFamily: typography.RobotoBold,
        fontSize: fontSize.xxl,
        fontWeight: "bold",
        color: theme.textColor1
    }
    const secondary = {
        fontFamily: typography.RobotoBold,
        fontSize: fontSize.xxl,
        color: theme.primary
    }
    const tertiary = {
        fontFamily: typography.RobotoBold,
        fontSize: fontSize.xxl,
        color: theme.tertiary
    }
    return (
        <Text style={variant == "primary" ? primary : variant == "secondary" ? secondary : tertiary}>{text}</Text>
    )
}


export default CustomText
import React from "react"

import AntDesign from "react-native-vector-icons/AntDesign"
interface IconProps {
    type: String,
    name: String,
    size: Number,
    color: String,
}

const Icons = (props: IconProps) => {
    const { type, name, color, size } = props

    const getIcon = (type: String) => {
        switch (type) {
            case 'antdesign':
                return AntDesign

        }
    };

    const IconType = getIcon(type)
    return <IconType name={name} color={color} size={size} />

}

export default Icons
import React from "react"

export function useForm(initialState: any) {
    const data = React.useRef(initialState)
    const handleOnChange = (key: any, value: any) => {
        return (
            data.current = {
                ...data.current,
                [key]: value
            }
        )
    }
    const getData = () => data.current

    return { getData, handleOnChange }
}
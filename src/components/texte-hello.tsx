import { useState } from "react";
import { Pressable, StyleProp, Text, TextStyle } from "react-native";

export type TexteHelloProps = {
    style?: StyleProp<TextStyle>,
    texteAffiche: string,
    callback?: () => void
}

export function TexteHello({ style, texteAffiche, callback }: TexteHelloProps) {


    const [premierClic, setSetPremierClic] = useState(false)

    return (
        <Pressable onPress={onClic}>
            <Text style={[style, {color : premierClic ? 'blue' : 'red'}]}> {texteAffiche} </Text>
        </Pressable>
    )

    function onClic() {

        setSetPremierClic(true);

        if (callback != null) {
            callback()
        }
    }
}
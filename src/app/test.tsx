import { MotDePasse } from "@/components/mot-de-passe";
import { StyleSheet, View } from "react-native";

export default function TestScreen() {

    // const maVariable = { proprieteA: 42, proprieteB: 'titi' }
    // const { proprieteA, proprieteB } = maVariable;
    // console.log(proprieteA);



    return (
        <View style={styles.contenu}>
            <MotDePasse maxLength={8} onMaxAtteint={(mdp) => console.log("max atteint :", mdp)} />
        </View>

    )
}





const styles = StyleSheet.create(
    {
        contenu: { justifyContent: 'center', alignItems: 'center', flex: 1 },
        texteHello: { color: 'red' }
    }
)

import { useTheme } from "@/hooks/use-theme";
import { Eye, EyeOff } from "lucide-react-native";
import { useState } from "react";
import { Pressable, StyleSheet, TextInput, View } from "react-native";

export type MotDePasseProps = {
    maxLength?: number,
    onMaxAtteint?: (valeur: string) => void
}

export function MotDePasse({ maxLength = 20, onMaxAtteint }: MotDePasseProps) {

    const [valeur, setValeur] = useState("")
    const [masque, setMasque] = useState(true)
    const theme = useTheme()
    const Icone = masque ? Eye : EyeOff

    return (
        <View style={[styles.conteneur, { borderColor: theme.textSecondary }]}>
            <TextInput
                style={[styles.input, { color: theme.text }]}
                placeholderTextColor={theme.textSecondary}
                value={valeur}
                onChangeText={onChange}
                secureTextEntry={masque}
                maxLength={maxLength}
                placeholder="Mot de passe"
                autoCapitalize="none"
            />
            <Pressable onPress={() => setMasque(!masque)}>
                <Icone size={20} color={theme.textSecondary} />
            </Pressable>
        </View>
    )

    function onChange(texte: string) {
        setValeur(texte)

        if (texte.length === maxLength && onMaxAtteint != null) {
            onMaxAtteint(texte)
        }
    }
}

const styles = StyleSheet.create({
    conteneur: { flexDirection: "row", alignItems: "center", borderWidth: 1, borderRadius: 8, paddingHorizontal: 10, width: 250 },
    input: { flex: 1, paddingVertical: 8 }
})

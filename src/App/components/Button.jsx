import { Pressable, Text, StyleSheet } from "react-native";

const BG_BUTTON = "#0045C4";
const TEXT_PRIMARY = "#FFFFFF";

export default function Button({
    textButton = "Entrar",
    backgroundColor = BG_BUTTON,
    textColor = TEXT_PRIMARY,
    borderColor = BG_BUTTON,
    borderWidth = 0,
    borderRadius = 20,
    onPress
}) {
    return (
        <Pressable
            style={[
                styles.button,
                {
                    backgroundColor: backgroundColor,
                    borderColor: borderColor,
                    borderWidth: borderWidth,
                    borderRadius: borderRadius
                }
            ]}
            onPress={onPress}
        >
            <Text style={[styles.title, { color: textColor }]}>
                {textButton}
            </Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        marginHorizontal: 25,
        marginVertical: 10,
    },

    title: {
        textAlign: "center",
        paddingVertical: 10,
        fontSize: 20,
        fontWeight: "500",
    }
});
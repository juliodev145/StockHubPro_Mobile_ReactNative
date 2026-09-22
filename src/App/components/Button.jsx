import { Pressable, Text, StyleSheet } from "react-native";

const BG_BUTTON = '#3CA7FF';
const TEXT_PRIMARY = '#FFFFFF';

export default function Button({    //props - properties 
    textButton = "Entrar",
    backgroundColor = BG_BUTTON,
    textColor = TEXT_PRIMARY,
    borderRadius = 20,
    onPress
}) {
    return (
        <Pressable
            style={[
                styles.button,
                {
                    backgroundColor: backgroundColor,
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
        marginHorizontal: 20,
        marginVertical: 10,
    },

    title: {
        textAlign: "center",
        marginVertical: 2,
        paddingVertical: 7,
    }
});
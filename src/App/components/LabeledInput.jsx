import { StyleSheet, Text, TextInput, View } from "react-native";

const INPUT_BG = "#f5f5f5";
const INPUT_BORDER = "#3CA7FF";
const LABEL_COLOR = "#000000";

export default function LabeledInput({label}){
    return(
        <View>
            <Text>
                {label}
            </Text>
            <TextInput
                placeholderTextColor="#B5B5B5"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    label:{
        marginBottom: 6,
        color: LABEL_COLOR,
        fontSize: 14,
        fontWeight: 600,
    },
    input:{
        backgroundColor: INPUT_BG,
        borderRadius: 10,
        borderColor: INPUT_BORDER,
        borderWidth: 1,
        fontSize: 14,
        paddingHorizontal: 10,
        paddingVertical: 12,
    },
})
import { StyleSheet, Text, TextInput, View } from "react-native";

const INPUT_BG = "#f5f5f5";
const INPUT_BORDER = "#0045C4";
const LABEL_COLOR = "#000000";

export default function LabeledInput({label, placeholder}){
    return(
        <View style={styles.container}>

            <TextInput 
                style={styles.input}
                placeholderTextColor="#B5B5B5"
                placeholder={placeholder}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginHorizontal: 25,
        marginTop: 10,
    },
    input:{
        backgroundColor: INPUT_BG,
        borderRadius: 10,
        borderColor: INPUT_BORDER,
        borderWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 15,
        fontSize: 16,
    },
})
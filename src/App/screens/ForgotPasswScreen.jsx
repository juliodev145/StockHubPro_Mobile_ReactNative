import { StyleSheet, Text, View } from "react-native"
import Header from "../components/Header";
import LabeledInput from "../components/LabeledInput";
import Button from "../components/Button";

const TEXT_COLOR = "#0045C4"

export default function ForgotPasswScreen(){
    return(
        <View style={styles.container}>

            <View style={styles.content}>

                <Header/>

                {/**iCONE  */}

                <View >
                    <Text style={styles.title}>
                        Esqueceu sua senha?
                    </Text>

                    <Text style={styles.subtitle}>
                        Redefina sua senha em duas etapas.
                    </Text>
                </View>

                <LabeledInput
                    placeholder= "Digite seu email"
                />
                <Button
                    textButton="Continuar"
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    title:{
        color: TEXT_COLOR,
        fontSize: 20,
        textAlign: "center",
        margin: 15,
    },
    subtitle:{
        fontSize: 16,
        textAlign: "center",
        marginBottom: 15,

    },
    container:{
        flex: 1,
    },
    content:{
        
    },

})
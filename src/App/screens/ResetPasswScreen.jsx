import { StyleSheet,Text,View } from "react-native";
import Header from "../components/Header";
import LabeledInput from "../components/LabeledInput";
import Button from "../components/Button";
const TEXT_COLOR = "#0045C4"
export default function ResetPasswScreen () {
   return (
    <View style={styles.container} >
    <View style={styles.content}>

          <Header/>
        
                        {/**iCONE  */}

    <View>
            <Text style={styles.title}>
               Redefinição de Senha

            </Text>

            <Text style={styles.title}>
                Acabamos de enviar um código para seu e-mail

            </Text>

            <Text style={styles.title}>
                Caso não encontre o e-mail na sua caixa de entrada verifique sua caixa de spam.

            </Text>
             
    </View>

             <LabeledInput
               placeholder= "Insira seu código"
              />

              <LabeledInput
               placeholder= "Insira seu e-mail"
              />

              <LabeledInput
               placeholder= "Repita seu e-mail"
              />

                <Button
                 textButton="Redefinir"
                              />
                 <Button
                 textButton="Fazer login"
                              />


    </View>



    </View>

   );
}

  const styles = StyleSheet.create({
    title:{
    color:TEXT_COLOR,
    fontSize:20,
    textAlign: "center",
    margin:15,
    },

    subtitle:{
    fontSize:16,
    textAlign:"center",
    marginBotton:15,

    },
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
    },
    title: {
        color: "#0045C4",
        fontSize: 20,
        textAlign: "center",
        margin: 15,
    },
});
import { View, Text, StyleSheet} from "react-native";
import Button from "../components/Button"
import LabeledInput from "../components/LabeledInput";
import { StatusBar } from "react-native";

const INPUT_BORDER = "#0045C4";
const LINK_COLOR = "#003CFF";

const BG_COLOR = "#0045C4";

export default function LoginScreen() {
  return (

    <View style={styles.container}>

      <StatusBar
        barStyle="light-content"    //statusbar claro
        backgroundColor={BG_COLOR}
        translucent={false}         //statusbar transparente
      />

      <Text style = {styles.title}>
          Bem vindo ao{" "}
          <Text style={styles.brand}>
            StockHubPro
          </Text>
      </Text>
      
      <Text style={styles.subTitle}>
        Entre para fazer a gestão do seu estoque.
      </Text>

        <LabeledInput
          placeholder="E-mail"
        />

      <LabeledInput
        placeholder="Senha"
      />
      
      <Text style={styles.link}>
        Esqueci minha senha
      </Text>

      <Button 
        textButton="Entrar"
      />

      <Button 
        textButton="Criar conta"
        backgroundColor="#FFFFFF"
        textColor="#0045C4"
        borderColor="#0045C4"
        borderWidth={1}
      />



      <Text style={styles.link}>
        Esqueci minha senha
      </Text>

    </View>

  );
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: "#FFFFFF",
      paddingTop: 62,
    },
    title:{
      fontSize: 25,
      fontWeight: 700,
      textAlign: "center",
      color: "#6B6E71",
      marginBottom: 26,
    },
    brand:{
      color: "#0045C4"
    },
    input:{
      borderColor: INPUT_BORDER,
      borderWidth: 1,
      padding: 10,
      borderRadius: 10,
      marginTop: 20,
    },
    subTitle:{
        textAlign: "center",
        fontSize: 16,
        marginBottom: 20,
    },
    link:{
        textDecorationLine: "underline",
        color: LINK_COLOR,
        textAlign: "center",
        margin: 30,
    }

})
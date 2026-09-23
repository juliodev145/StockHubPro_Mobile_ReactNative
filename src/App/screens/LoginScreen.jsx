import { View, Text, StyleSheet, TextInput } from "react-native";
import Button from "../components/Button"

const INPUT_BORDER = "#3CA7FF";
const LINK_COLOR = "#003CFF";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text style = {styles.title}>
        Bem vindo ao StockHubPro
      </Text>
      <Text style={styles.subTitle}>
        Entre para fazer a gestão do seu estoque.
      </Text>
      <TextInput style={styles.input}
        placeholder="E-mail"
      />
      <TextInput style={styles.input}
        placeholder="Senha"
      />
      <Text style={styles.link}>
        Esqueci minha senha
      </Text>
      <Button textButton="Entrar"/>
      <Button textButton="Criar conta"/>
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
      fontSize: 20,
      fontWeight: 700,
      textAlign: "center",
      color: "#6B6E71",
      marginBottom: 26,
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
    },
    link:{
        textDecorationLine: "underline",
        color: LINK_COLOR,
        textAlign: "center",
        margin: 30,
    }

})
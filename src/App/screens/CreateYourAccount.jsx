import { StyleSheet, Text, View, ScrollView, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import LabeledInput from "../components/LabeledInput";
import Button from "../components/Button";

const TEXT_COLOR = "#0045C4";

export default function CreateYourAccount() {
  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <StatusBar barStyle="light-content" backgroundColor={TEXT_COLOR} />

      <Header />

      <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
        {/* ICONE */}

        <Text style={styles.title}>Crie sua conta</Text>

        <LabeledInput placeholder="Nome" />
        <LabeledInput placeholder="E-mail" />
        <LabeledInput placeholder="Senha" />
        <LabeledInput placeholder="Repita sua senha" />
        <LabeledInput placeholder="Nome da empresa" />
        <LabeledInput placeholder="CNPJ" />
        <LabeledInput placeholder="CEP" />
        <LabeledInput placeholder="Logradouro" />
        <LabeledInput placeholder="Bairro" />
        <LabeledInput placeholder="Cidade" />
        <LabeledInput placeholder="Estado" />

        <View style={styles.uf}>
          <LabeledInput placeholder="UF" />
        </View>

        <Button textButton="Cadastrar" />

        <Button
          textButton="Fazer login"
          backgroundColor="#FFFFFF"
          textColor="#0045C4"
          borderColor="#0045C4"
          borderWidth={1}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: TEXT_COLOR,
  },
  scroll: {
    flex:1,
    backgroundColor: "#FFFFFF",
  },
  content: {
    paddingBottom: 100,
  },
  title: {
    color: TEXT_COLOR,
    fontSize: 20,
    textAlign:"center",
    margin:15,
  },
  uf:{
    width:"25%"
  },
});


import { StyleSheet, Text, View, ScrollView, StatusBar, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import Header from "../components/Header";
import LabeledInput from "../components/LabeledInput";
import Button from "../components/Button";
import BottomMenu from "../components/BottomMenu";

const TEXT_COLOR = "#0045C4";

export default function RegisterItemScreen() {
  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <StatusBar barStyle="light-content" backgroundColor={TEXT_COLOR} />

      <Header />

      <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name="arrow-back" size={26} color="#000000" />
        </TouchableOpacity>
        <Text style={styles.title}>Cadastrar item</Text>

        <View style={styles.card}>
          <LabeledInput placeholder="Nome do produto" />

          <View style={styles.row}>
            <View style={styles.flex}>
              <LabeledInput placeholder="Código do produto" />
            </View>
            <TouchableOpacity style={styles.scanButton}>  {/**TouchableOpacity - "area clicavel" */}
              <Ionicons name="barcode-outline" size={24} color="#000000" />
            </TouchableOpacity>
          </View>

          <LabeledInput placeholder="Preço (R$)" />
          <LabeledInput placeholder="Quantidade mínima" />
          <LabeledInput placeholder="Quantidade" />
          <LabeledInput placeholder="Categoria" />

          <View style={styles.buttons}>
            <View style={styles.flex}>
              <Button
                textButton="Limpar"
                backgroundColor="#FF0000"
                textColor="#FFFFFF"
              />
            </View>
            <View style={styles.flex}>
              <Button
                textButton="Cadastrar"
                backgroundColor="#3CA7FF"
                textColor="#FFFFFF"
              />
            </View>
          </View>
        </View>
      </ScrollView>

      <BottomMenu />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: TEXT_COLOR,
  },
  scroll: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  content: {
    paddingBottom: 30,
  },
  title: {
    color: TEXT_COLOR,
    fontSize: 20,
    textAlign: "center",
    margin: 15,
  },
  card: {
    marginHorizontal: 15,
    paddingBottom: 15,
    borderWidth: 1,
    borderColor: "#D9D9D9",
    borderRadius: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  flex: {
    flex: 1,
  },
  scanButton: {
    marginTop: 10,
    marginRight: 25,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 10,
    padding: 8,
  },
  buttons: {
    flexDirection: "row",
    marginTop: 20,
    marginHorizontal: 15,
    gap: 8,
    borderRadius: 10,
  },
  backButton: {
    marginTop: 10,
    marginLeft: 15,
    padding: 5,
  },
});
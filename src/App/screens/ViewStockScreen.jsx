import { StyleSheet, Text, View, ScrollView, StatusBar, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import Header from "../components/Header";
import LabeledInput from "../components/LabeledInput";
import BottomMenu from "../components/BottomMenu";

const TEXT_COLOR = "#0045C4";

const PRODUCT = {
  name: "Caneta azul",
  code: "7891234567890",
  category: "Papelaria",
  minQuantity: 10,
  currentQuantity: 50,
  totalValue: "R$ 75,00",
};

export default function ViewStockScreen() {
  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <StatusBar barStyle="light-content" backgroundColor={TEXT_COLOR} />

      <Header />

      <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
        <Text style={styles.title}>Estoque</Text>

        <View style={styles.row}>
          <View style={styles.flex}>
            <LabeledInput placeholder="Buscar produto" icon="search-outline" />
          </View>
          <TouchableOpacity style={styles.scanButton}>
            <Ionicons name="barcode-outline" size={24} color="#000000" />
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Text style={styles.info}>
            <Text style={styles.label}>Nome: </Text>{PRODUCT.name}
          </Text>
          <Text style={styles.info}>
            <Text style={styles.label}>Código: </Text>{PRODUCT.code}
          </Text>
          <Text style={styles.info}>
            <Text style={styles.label}>Categoria: </Text>{PRODUCT.category}
          </Text>
          <Text style={styles.info}>
            <Text style={styles.label}>Quantidade mínima: </Text>{PRODUCT.minQuantity}
          </Text>
          <Text style={styles.info}>
            <Text style={styles.label}>Quantidade atual: </Text>{PRODUCT.currentQuantity}
          </Text>
          <Text style={styles.info}>
            <Text style={styles.label}>Valor total: </Text>{PRODUCT.totalValue}
          </Text>

          <View style={styles.buttons}>
            <TouchableOpacity style={[styles.actionButton, styles.editButton]}>
              <Ionicons name="pencil" size={18} color="#000000" />
              <Text style={styles.editText}>Editar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.actionButton, styles.deleteButton]}>
              <Ionicons name="trash-outline" size={18} color="#FFFFFF" />
              <Text style={styles.deleteText}>Excluir</Text>
            </TouchableOpacity>
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
  card: {
    marginHorizontal: 25,
    marginTop: 20,
    padding: 15,
    borderWidth: 1,
    borderColor: TEXT_COLOR,
    borderRadius: 10,
  },
  info: {
    fontSize: 15,
    color: "#000000",
    marginBottom: 10,
  },
  label: {
    fontWeight: "700",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    gap: 10,
  },
  actionButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    borderRadius: 8,
    gap: 6,
  },
  editButton: {
    backgroundColor: "#E6E03A",
  },
  deleteButton: {
    backgroundColor: "#D64545",
  },
  editText: {
    color: "#000000",
    fontWeight: "700",
    fontSize: 15,
  },
  deleteText: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 15,
  },
});
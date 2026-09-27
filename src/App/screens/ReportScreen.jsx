import { StyleSheet, Text, View, ScrollView, StatusBar, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import Header from "../components/Header";
import BottomMenu from "../components/BottomMenu";

const TEXT_COLOR = "#0045C4";
const WARNING_COLOR = "#E0B400";

export default function ReportScreen() {
  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <StatusBar barStyle="light-content" backgroundColor={TEXT_COLOR} />

      <Header />

      <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
        <View style={styles.titleRow}>
          <TouchableOpacity style={styles.backButton}>
            <Ionicons name="arrow-back" size={26} color="#000000" />
          </TouchableOpacity>
          <Text style={styles.title}>Relatório mensal</Text>
        </View>

        <View style={styles.warning}>
          <Ionicons name="warning-outline" size={90} color={WARNING_COLOR} />
          <Text style={styles.warningTitle}>Tela em construção.</Text>
          <Text style={styles.warningText}>Resultados em breve.</Text>
          <Text style={styles.warningText}>Estamos preparando algo incrível!</Text>
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
  titleRow: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 15,
  },
  backButton: {
    position: "absolute",
    left: 25,
  },
  title: {
    color: TEXT_COLOR,
    fontSize: 20,
  },
  warning: {
    alignItems: "center",
    marginTop: 20,
    paddingHorizontal: 25,
  },
  warningTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#000000",
    marginTop: 10,
    marginBottom: 25,
  },
  warningText: {
    fontSize: 15,
    color: "#000000",
    marginBottom: 20,
    textAlign: "center",
  },
});
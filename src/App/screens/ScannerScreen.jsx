import { StyleSheet, Text, View, TouchableOpacity, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

const TEXT_COLOR = "#0045C4";

export default function ScannerScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      <View style={styles.card}>

        <Text style={styles.title}>Escanear código de barras</Text>
        <Text style={styles.subtitle}>Aponte a câmera para o código</Text>

        <View style={styles.cameraArea}>
          <Ionicons name="barcode-outline" size={60} color="#9AA5B1" />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
  },
  card: {
    marginHorizontal: 20,
    padding: 15,
    paddingBottom: 30,
    borderWidth: 1,
    borderColor: TEXT_COLOR,
    borderRadius: 10,
  },
  backButton: {
    alignSelf: "flex-start",
    marginBottom: 10,
  },
  title: {
    color: TEXT_COLOR,
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 15,
    color: "#000000",
    textAlign: "center",
    marginBottom: 20,
  },
  cameraArea: {
    height: 200,
    backgroundColor: "#D9D9D9",
    borderWidth: 1,
    borderColor: "#6B6E71",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
});
import { useState } from "react";
import { StyleSheet, Text, View, ScrollView, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import BottomMenu from "../components/BottomMenu";
import SideMenu from "../components/SideMenu";

const TEXT_COLOR = "#0045C4";

export default function HomeScreen() {
  const [menuVisible, setMenuVisible] = useState(false);  //menu inicia "não visível"

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <StatusBar barStyle="light-content" backgroundColor={TEXT_COLOR} />

      <Header />

      <View style={styles.middle}>
        <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
          <Text style={styles.title}>Início</Text>
          <Text style={styles.greeting}>Olá, usuário!</Text>

          <View style={styles.card}>

            <View style={styles.box}>
              <Text style={styles.boxLabel}>Total de item(s)</Text>
              <Text style={styles.boxValue}>125</Text>
            </View>

            <View style={styles.box}>
              <Text style={styles.boxLabel}>Estoque</Text>
              <Text style={styles.boxValue}>235</Text>
            </View>

            <View style={styles.box}>
              <Text style={styles.boxLabel}>Entradas</Text>
              <Text style={styles.boxValue}>450</Text>
            </View>

            <View style={styles.box}>
              <Text style={styles.boxLabel}>Saídas</Text>
              <Text style={styles.boxValue}>215</Text>
            </View>
          </View>
        </ScrollView>

        <SideMenu visible={menuVisible} onClose={() => setMenuVisible(false)} />
      </View>
    
      <BottomMenu onMenuPress={() => setMenuVisible(!menuVisible)} /> 
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: TEXT_COLOR,
  },
  middle: {
    flex: 1,
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
  greeting: {
    fontSize: 16,
    marginHorizontal: 25,
    marginBottom: 15,
    color: "#000000",
  },
  card: {
    marginHorizontal: 25,
    padding: 15,
    borderWidth: 1,
    borderColor: "#D9D9D9",
    borderRadius: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  box: {
    width: "47%",
    borderWidth: 1,
    borderColor: "#D9D9D9",
    borderRadius: 10,
    paddingVertical: 20,
    alignItems: "center",
    marginBottom: 15,
  },
  boxLabel: {
    fontSize: 14,
    color: "#000000",
    marginBottom: 10,
  },
  boxValue: {
    fontSize: 18,
    color: TEXT_COLOR,
    fontWeight: "700",
  },
});
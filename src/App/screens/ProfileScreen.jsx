import { StyleSheet, Text, View, ScrollView, StatusBar, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import Header from "../components/Header";
import LabeledInput from "../components/LabeledInput";
import BottomMenu from "../components/BottomMenu";

const TEXT_COLOR = "#0045C4";

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <StatusBar barStyle="light-content" backgroundColor={TEXT_COLOR} />

      <Header />

      <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
        <View style={styles.titleRow}>
          <TouchableOpacity style={styles.backButton}>
            <Ionicons name="arrow-back" size={26} color="#000000" />
          </TouchableOpacity>
          <Text style={styles.title}>Meu Perfil</Text>
        </View>

        <View style={styles.avatar}>
          <Ionicons name="person-circle-outline" size={130} color="#9AA5B1" />
        </View>

        <LabeledInput placeholder="Nome da empresa" />
        <LabeledInput placeholder="Nome" />
        <LabeledInput placeholder="E-mail" icon="mail-outline" />
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
  avatar: {
    alignItems: "center",
    marginVertical: 10,
  },
});
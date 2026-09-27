import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const MAIN_COLOR = "#0045C4";
const EXIT_COLOR = "#D64545";

const ITEMS = [
  { icon: "home-outline", label: "Início" },
  { icon: "add", label: "Cadastrar Item" },
  { icon: "remove", label: "Registrar Saída" },
  { icon: "cube-outline", label: "Estoque" },
  { icon: "bar-chart-outline", label: "Relatórios" },
  { icon: "person-circle-outline", label: "Meu perfil" },
];

export default function SideMenu({ visible, onClose }) {
  if (!visible) {
    return null;
  }

  return (
    <View style={styles.overlay}>
      <View style={styles.panel}>
        {ITEMS.map((item) => (
          <TouchableOpacity key={item.label} style={styles.item}>
            <Ionicons name={item.icon} size={24} color={MAIN_COLOR} />
            <Text style={styles.label}>{item.label}</Text>
          </TouchableOpacity>
        ))}

        <TouchableOpacity style={[styles.item, styles.exitItem]}>
          <Ionicons name="log-out-outline" size={24} color={EXIT_COLOR} />
          <Text style={styles.exitLabel}>Sair</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.outside} onPress={onClose} />
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: "row",
  },
  panel: {
    width: "65%",
    backgroundColor: "#FFFFFF",
    borderRightWidth: 1,
    borderRightColor: "#9AA5B1",
    paddingTop: 15,
    paddingHorizontal: 15,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: MAIN_COLOR,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 12,
    gap: 15,
  },
  label: {
    fontSize: 15,
    color: "#000000",
  },
  exitItem: {
    borderColor: EXIT_COLOR,
    marginTop: 15,
  },
  exitLabel: {
    fontSize: 15,
    color: "#000000",
  },
  outside: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
});
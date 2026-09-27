import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ICON_COLOR = "#0045C4";

const ITEMS = [
  { icon: "home-outline", label: "Início" },
  { icon: "add-circle-outline", label: "Cadastrar item" },
  { icon: "remove-circle-outline", label: "Saída de item" },
  { icon: "cube-outline", label: "Estoque" },
  { icon: "menu-outline", label: "Menu" },
];

export default function BottomMenu({ onMenuPress }) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom + 8 }]}>
      {ITEMS.map((item) => (
        <TouchableOpacity
          key={item.label}
          style={styles.item}
          onPress={item.label === "Menu" ? onMenuPress : undefined}
        >
          <Ionicons name={item.icon} size={26} color={ICON_COLOR} />
          <Text style={styles.label}>{item.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#D9D9D9",
    paddingTop: 8,
  },
  item: {
    alignItems: "center",
    flex: 1,
  },
  label: {
    fontSize: 10,
    color: "#6B6E71",
    marginTop: 2,
    textAlign: "center",
  },
});
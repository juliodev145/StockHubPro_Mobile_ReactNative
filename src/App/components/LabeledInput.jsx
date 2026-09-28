import { useState } from "react";
import { StyleSheet, TextInput, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const INPUT_BG = "#F5F5F5";
const INPUT_BORDER = "#0045C4";
const ICON_COLOR = "#585858";

export default function LabeledInput({ placeholder, icon, isPassword }) {
  const [hidden, setHidden] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.inputBox}>
        {icon && (
          <Ionicons name={icon} size={20} color={ICON_COLOR} style={styles.iconLeft} />
        )}

        <TextInput
          style={styles.input}
          placeholderTextColor="#858585"
          placeholder={placeholder}
          secureTextEntry={isPassword && hidden}  //para deixar a senha oculta
        />

        {isPassword && (
          <TouchableOpacity onPress={() => setHidden(!hidden)}>
            <Ionicons
              name={hidden ? "eye-off-outline" : "eye-outline"}
              size={20}
              color={ICON_COLOR}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    marginTop: 10,
  },
  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: INPUT_BG,
    borderRadius: 10,
    borderColor: INPUT_BORDER,
    borderWidth: 1,
    paddingHorizontal: 15,
  },
  iconLeft: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    fontSize: 16,
  },
});
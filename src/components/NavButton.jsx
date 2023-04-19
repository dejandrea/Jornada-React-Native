import { StyleSheet, TouchableOpacity, Text } from "react-native";

export default function NavButton({ onPress, text, color }) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.button, { backgroundColor: color }]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "tomato",
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
  },
});

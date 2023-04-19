import { StyleSheet, TouchableOpacity, Text } from "react-native";

export default function GoBackButton({onPress,text}) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.button}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#1c1a1d",
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
    marginRight: 20,
    marginBottom:20,
    alignSelf: "flex-end",
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
  },
});
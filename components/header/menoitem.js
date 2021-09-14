import { StyleSheet, View, Text, Pressable } from "react-native";

export function MenoItem({ title, onPress }) {
  return (
    <Pressable style={styles.linbox} onPress={onPress}>
      <Text style={styles.line}>____</Text>

      <Text style={styles.p}>{title}</Text>

      <Text style={styles.line}>__</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  linbox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },

  line: {
    color: "red",
    fontWeight: "bold",
  },

  p: {
    fontStyle: "bold",
    fontWeight: "600",
    fontSize: 20,
    lineHeight: 31,
    textAlign: "right",
    color: "#555555",
    cursor: "pointer",
  },
});

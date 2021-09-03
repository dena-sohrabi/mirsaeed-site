import { StyleSheet, View, Text } from "react-native";
import { Media } from "../media";
import Ax from "./ax";
import Matn from "./text";
export default function Section2(props) {
  return (
    <>
      <Media at="sm">
        <View style={[styles.container, { marginTop: 50, marginBottom: 0 }]}>
          <Ax />
          <Matn />
        </View>
      </Media>
      <Media greaterThan="sm">
        <View style={styles.container}>
          <Ax />
          <Matn />
        </View>
      </Media>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
    position: "relative",
    marginBottom: 150,
  },
});

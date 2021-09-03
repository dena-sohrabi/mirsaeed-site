import { StyleSheet, View, Text, Image } from "react-native";
import { Media } from "../media";
export default function List2({ title }) {
  return (
    <>
      <View style={styles.wrapper}>
        <View style={styles.box}>
          <Text style={styles.p}>{title}</Text>
          <Image source={{ uri: "/Polygon 11.png", width: 10, height: 20 }} />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    marginTop: 16,
  },
  p: {
    fontWeight: "normal",
    fontSize: 17,
    lineHeight: "170%",
    color: "#383333",
    paddingRight: 15,
  },
  box: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    flexDirection: "row",
  },
});

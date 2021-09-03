import { StyleSheet, View, Text, Image } from "react-native";
import { Media } from "../media";
export default function List({ title }) {
  return (
    <>
      <Media at="sm">
        <View style={styles.wrapper}>
          <Text style={styles.p}>{title}</Text>
          <Image source={{ uri: "/Polygon 11.png", width: 10, height: 20 }} />
        </View>
      </Media>
      <Media greaterThan="sm">
        <View style={styles.box}>
          <Text style={styles.p2}>{title}</Text>
          <Image source={{ uri: "/Polygon 11.png", width: 15, height: 30 }} />
        </View>
      </Media>
    </>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    // borderWidth: 5,
    // borderColor: "red",
    marginRight: 20,
    marginTop: 16,
  },
  box: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    flexDirection: "row",
    marginTop: 25,
  },
  p2: {
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 19,
    lineHeight: "150%",
    textAlign: "right",
    color: "#383333",
    paddingRight: 15,
  },
  p: {
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 12,
    lineHeight: "150%",
    textAlign: "right",
    color: "#383333",
    paddingRight: 15,
  },
});

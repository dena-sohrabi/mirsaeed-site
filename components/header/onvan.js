import { StyleSheet, Image, View, Text } from "react-native";
import { Media } from "../media";
import { useMediaQuery } from "react-responsive";

export function Onvan(props) {
  return (
    <>
      <Media at="sm">
        <View style={[styles.wrapper, { alignItems: "center" }]}>
          <Text style={[styles.h1, { fontSize: 35, textAlign: "center" }]}>
            مینا میرسعید
          </Text>

          <Text style={[styles.p, { fontSize: 15, textAlign: "center" }]}>
            مدرس زبان انگلیسی به صورت
            <br /> خصوصی و آنلاین
          </Text>
        </View>
      </Media>
      <Media greaterThan="sm">
        <View style={styles.wrapper}>
          <Text style={styles.h1}>مینا میرسعید</Text>

          <Text style={styles.p}>
            مدرس زبان انگلیسی به صورت
            <br /> خصوصی و آنلاین
          </Text>
        </View>
      </Media>
    </>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    zIndex: 2,
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    // marginRight: 100,
    width: "100%",
  },

  h1: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 62,
    lineHeight: "190%",
    textAlign: "right",
    color: "#3C3B3B",
    width: "100%",
    fontFamily: "Dana",
  },

  p: {
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 32,
    lineHeight: "170%",
    textAlign: "right",
    color: "#535050",
    fontFamily: "Dana",
  },
});

import { StyleSheet, View, Text } from "react-native";
import { Media } from "../media";
export default function H1(props) {
  return (
    <>
      <Media at="sm">
        <View style={[styles.textbox, { alignItems: "center" }]}>
          <Text
            style={[
              styles.h1,
              { fontSize: 30, textAlign: "center", paddingRight: 50 },
            ]}
          >
            از سال ۱۳۸۳ مشغول به
            <br /> تدریس زبان انگلیسی
          </Text>
        </View>
      </Media>
      <Media greaterThan="sm">
        <View style={styles.textbox}>
          <Text style={styles.h1}>
            از سال ۱۳۸۳ مشغول به
            <br /> تدریس زبان انگلیسی
          </Text>
        </View>
      </Media>
    </>
  );
}

const styles = StyleSheet.create({
  textbox: {
    display: "flex",
    alignItems: "flex-end",
  },
  h1: {
    fontFamily: "Dana",
    fontWeight: "bold",
    fontSize: 39,
    lineHeight: "150%",
    color: "#333333",
  },
});

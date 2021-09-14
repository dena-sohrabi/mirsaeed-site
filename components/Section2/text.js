import { StyleSheet, View, Text } from "react-native";
import { Media } from "../media";

export default function Matn(props) {
  return (
    <>
      <Media at="sm">
        <View style={styles.textbox2}>
          <Text style={[styles.h1, { fontSize: 20 }]}>
            یادگیری زبان به صورت انلاین
            <br /> به راحتی خانه خودتان
          </Text>
          <Text style={[styles.p, { fontSize: 15, width: 300 }]}>
            برای رزرو به پیج اینستاگرام یا به شماره ی<br /> واتساپ پیام دهید
          </Text>
        </View>
      </Media>
      <Media greaterThan="sm">
        <View style={styles.textbox}>
          <Text style={styles.h1}>
            یادگیری زبان به صورت آنلاین
            <br /> به راحتی خانه خودتان
          </Text>
          <Text style={styles.p}>
            برای رزرو به پیج اینستاگرام یا به شماره ی<br /> واتساپ پیام دهید
          </Text>
        </View>
      </Media>
    </>
  );
}
const styles = StyleSheet.create({
  textbox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 100,
    left: 100,
    right: 50,
  },
  h1: {
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 40,
    lineHeight: "160%",
    textAlign: "center",
    color: "#FFFFFF",
    textShadowColor: "#333",
    textShadowOffset: { width: 1, height: 2 },
  },
  p: {
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 15,
    lineHeight: "160%",
    textAlign: "center",
    color: "#FFFFFF",
    paddingTop: 10,
  },
  textbox2: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 70,
    left: 55,
  },
});

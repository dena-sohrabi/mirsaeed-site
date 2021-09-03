import { StyleSheet, View, Text } from "react-native";
import { Media } from "../media";
export default function Texts(props) {
  return (
    <>
      <Media at="sm">
        <View style={styles.textbox2}>
          <Text style={[styles.h1, { fontSize: 15 }]}>
            جهت رزرو و کسب اظلاعات در باره ی<br /> کلاس ها با شماره ی زیر تماس
            بگیرید
          </Text>
          <Text
            accessibilityRole="link"
            herf="tel:+98 938 801 5238"
            style={[styles.p, { fontSize: 12, paddingTop: 10 }]}
          >
            شماره تماس: 09388015238
          </Text>
        </View>
      </Media>
      <Media greaterThan="sm">
        <View style={styles.textbox}>
          <Text style={styles.h1}>
            جهت رزرو و کسب اظلاعات در باره ی<br /> کلاس ها با شماره ی زیر تماس
            بگیرید
          </Text>
          <Text style={styles.p}>شماره تماس: ۰۹۱۲۴۵۶۷۸۹</Text>
        </View>
      </Media>
    </>
  );
}
const styles = StyleSheet.create({
  textbox: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    marginRight: 50,
  },
  h1: {
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 25,
    lineHeight: "150%",
    textAlign: "right",
    color: "#FFFFFF",
  },
  p: {
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 20,
    lineHeight: "160%",
    textAlign: "right",
    color: "#E3E3E3",
    paddingTop: 20,
    paddingBottom: 30,
  },
  textbox2: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    marginRight: 10,
  },
});

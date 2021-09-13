import { StyleSheet, View, Text } from "react-native";
import { Media } from "../media";
import Bg from "./bg,";
import Logo from "./logo";
import Texts from "./text";

export default function Footer(props) {
  return (
    <View nativeID="footer">
      <Media at="sm">
        <View style={styles.container}>
          <Bg />
          <View style={styles.box2}>
            <View style={styles.wrapper2}>
              <Text
                accessibilityRole="link"
                href="https://t.me/mirsaeedenglish"
              >
                <Logo source="/telegram.png" />
              </Text>
              <Text
                accessibilityRole="link"
                href="https://www.instagram.com/mirsaeed.english/"
              >
                <Logo source="/instagram.png" />
              </Text>
            </View>
            <View style={styles.wrapper2}>
              <Text
                accessibilityRole="link"
                href="https://www.linkedin.com/in/mirsaeedmina/"
              >
                <Logo source="/youtube.png" href="" />
              </Text>
              <Text
                accessibilityRole="link"
                href="https://www.linkedin.com/in/mirsaeedmina/"
              >
                <Logo source="/clubhouse.png" />
              </Text>
            </View>
          </View>
          <Texts />
        </View>
      </Media>
      <Media greaterThan="sm">
        <View style={styles.container}>
          <Bg />

          <View style={styles.wrapper}>
            <Text accessibilityRole="link" href="https://t.me/mirsaeedenglish">
              <Logo source="/telegram.png" />
            </Text>
            <Text
              accessibilityRole="link"
              href="https://www.instagram.com/mirsaeed.english/"
            >
              <Logo source="/instagram.png" />
            </Text>
            <Text accessibilityRole="link" href="">
              <Logo source="/youtube.png" />
            </Text>
            <Text
              accessibilityRole="link"
              href="https://www.linkedin.com/in/mirsaeedmina/"
            >
              <Logo source="/clubhouse.png" />
            </Text>
          </View>
          <Texts />
        </View>
      </Media>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    marginTop: 100,
  },
  wrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    width: 300,
    marginBottom: -80,
    marginLeft: 60,
  },
  wrapper2: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    width: 90,
    height: 50,
    // marginBottom: -100,
    // marginLeft: 0,
  },
  box2: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 20,
    left: 30,
  },
});

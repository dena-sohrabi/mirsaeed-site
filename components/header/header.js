import { StyleSheet, View } from "react-native";
import { Logo } from "./logo";
import { Meno } from "./meno";
import { MobilLogo } from "./mobilelogo";
import { Media } from "../media";
import { Onvan } from "./onvan";

export default function Header(props) {
  return (
    <>
      <Media at="sm">
        <View style={styles.wrapper}>
          <View style={[styles.box, { height: 200 }]}>
            <MobilLogo />
          </View>
          <View style={styles.textbox}>
            <Onvan />
          </View>
        </View>
      </Media>
      <Media greaterThan="sm">
        <View style={styles.wrapper}>
          <View style={styles.box}>
            <Logo />

            <Onvan />
          </View>
        </View>
      </Media>
    </>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
    height: 400,
    width: "100%",
    position: "relative",
  },
  textbox: {
    width: "100%",
    // position: "absolute",
    // top: 220,
    // left: 150,
  },
});

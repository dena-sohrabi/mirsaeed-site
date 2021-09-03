import { StyleSheet, Image, View } from "react-native";
import { Media } from "../media";

export function Lakke(props) {
  return (
    <>
      <Media at="sm">
        <Image
          source={{
            uri: "/Vector100.png",
            width: 350,
            height: 290,
          }}
          style={styles.logo2}
        />
      </Media>
      <Media greaterThan="sm">
        <Image
          source={{
            uri: "/Vector100.png",
            width: 480,
            height: 400,
          }}
          style={styles.logo}
        />
      </Media>
    </>
  );
}

const styles = StyleSheet.create({
  logo: {
    position: "absolute",
    right: 110,
    top: 30,
  },
  logo2: {
    position: "absolute",
    left: 30,
    top: 25,
  },
});

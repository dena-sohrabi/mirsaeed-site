import { StyleSheet, Image } from "react-native";
import { Media } from "./media";

export function Circle(props) {
  return (
    <>
      <Image
        source={{
          uri: "/Ellipse.png",
          width: 100,
          height: 120,
        }}
        style={styles.logo}
      />
    </>
  );
}

const styles = StyleSheet.create({
  logo: {
    position: "absolute",
    top: -200,
    right: -80,
  },
});

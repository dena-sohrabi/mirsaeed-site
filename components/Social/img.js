import { StyleSheet, Image } from "react-native";
import { Media } from "../media";

export function Img(props) {
  return (
    <>
      <Image
        source={{ uri: "Ellipse 13.png", width: 30, height: 30 }}
        style={styles.img}
      />
    </>
  );
}
const styles = StyleSheet.create({
  img: {
    position: "absolute",
    bottom: 30,
    left: 0,
  },
});

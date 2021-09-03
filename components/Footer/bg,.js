import { StyleSheet, Image } from "react-native";
import { Media } from "../media";
export default function Bg(props) {
  return (
    <>
      <Media at="sm">
        <Image
          source={{ uri: "/Rectangle 7.png", width: "100%", height: 200 }}
          resizeMode="stretch"
          style={styles.bg}
        />
      </Media>
      <Media greaterThan="sm">
        <Image
          source={{ uri: "/Rectangle 7.png", width: "100%", height: 300 }}
          resizeMode="stretch"
          style={styles.bg}
        />
      </Media>
    </>
  );
}

const styles = StyleSheet.create({
  bg: {
    position: "absolute",
    bottom: 0,
  },
});

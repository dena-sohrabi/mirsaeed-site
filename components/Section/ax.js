import { StyleSheet, Image } from "react-native";
import { Media } from "../media";

export function Ax(props) {
  return (
    <>
      <Media at="sm">
        <Image
          source={{
            uri: "/Group 60.png",
            width: 100,
            height: 100,
          }}
          style={styles.ax2}
        />
      </Media>
      <Media greaterThan="sm">
        <Image
          source={{
            uri: "/Group 60.png",
            width: 200,
            height: 200,
          }}
          style={styles.ax}
        />
      </Media>
    </>
  );
}

const styles = StyleSheet.create({
  ax: {
    position: "absolute",
    bottom: 20,
    left: 0,
  },
  ax2: {
    position: "absolute",
    left: 50,
    bottom: -50,
  },
});

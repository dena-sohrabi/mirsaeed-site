import { StyleSheet, Image } from "react-native";
import { Media } from "../media";
export default function Ax(props) {
  return (
    <>
      <Media at="sm">
        <Image
          source={{ uri: "/Frame 24.png", width: 500, height: 300 }}
          style={styles.ax}
        />
      </Media>
      <Media greaterThan="sm">
        <Image
          source={{ uri: "/Frame 23.png", width: 1100, height: 400 }}
          style={styles.ax}
        />
      </Media>
    </>
  );
}

const styles = StyleSheet.create({
  ax: {
    borderRadius: 20,
  },
});

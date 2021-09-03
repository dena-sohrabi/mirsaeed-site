import { StyleSheet, Image } from "react-native";

export function Ax(props) {
  return (
    <>
      <Image
        source={{
          uri: "/Ellipse 2.png",
          width: 60,
          height: 100,
        }}
        style={styles.ax}
      />
    </>
  );
}

const styles = StyleSheet.create({
  ax: {
    position: "absolute",
    bottom: 50,
    left: 0,
  },
});

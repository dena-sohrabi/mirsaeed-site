import { StyleSheet, Image } from "react-native";

export function Logo(props) {
  return (
    <>
      <Image
        source={{
          uri: "/Group 591.png",
          width: 900,
          height: 400,
        }}
        style={styles.logo}
      />
    </>
  );
}

const styles = StyleSheet.create({
  logo: {
    position: "absolute",
    top: 0,
    left: 8,
  },
});

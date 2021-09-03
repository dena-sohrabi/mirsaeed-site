import { StyleSheet, Image } from "react-native";

export function MobilLogo(props) {
  return (
    <>
      <Image
        source={{
          uri: "/Frame 26.png",
          width: 380,
          height: 300,
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
    right: 0,
  },
});

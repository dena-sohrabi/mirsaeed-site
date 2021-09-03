import { StyleSheet, Image, View } from "react-native";
import { Media } from "../media";
export default function Logo({ source }) {
  return (
    <>
      <Media at="sm">
        <Image
          accessibilityRole="link"
          herf="#"
          source={{ uri: source, width: 35, height: 30 }}
          style={styles.logo}
        />
      </Media>
      <Media greaterThan="sm">
        <Image
          accessibilityRole="link"
          herf="#"
          source={{ uri: source, width: 45, height: 40 }}
          style={styles.logo}
        />
      </Media>
    </>
  );
}

const styles = StyleSheet.create({});

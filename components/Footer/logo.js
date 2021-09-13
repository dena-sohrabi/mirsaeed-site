import { StyleSheet, Image, View } from "react-native";
import { Media } from "../media";
export default function Logo({ source, href }) {
  return (
    <>
      <Media at="sm">
        <Image
          source={{ uri: source, width: 50, height: 50 }}
          style={styles.logo}
        />
      </Media>
      <Media greaterThan="sm">
        <Image
          source={{ uri: source, width: 70, height: 70 }}
          style={styles.logo}
        />
      </Media>
    </>
  );
}

const styles = StyleSheet.create({});

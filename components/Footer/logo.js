import { StyleSheet, Image, View } from "react-native";
import { Media } from "../media";
export default function Logo({ source, href }) {
  return (
    <>
      <Media at="sm">
        <View accessibilityRole="link" href={href}>
          <Image
            source={{ uri: source, width: 50, height: 50 }}
            style={styles.logo}
          />
        </View>
      </Media>
      <Media greaterThan="sm">
        <View accessibilityRole="link" href={href}>
          <Image
            source={{ uri: source, width: 70, height: 70 }}
            style={styles.logo}
          />
        </View>
      </Media>
    </>
  );
}

const styles = StyleSheet.create({});

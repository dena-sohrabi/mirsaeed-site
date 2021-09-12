import { StyleSheet, Image, View, Text, Pressable } from "react-native";
import { Media } from "../media";
import { Button } from "../docme";
export function Box({ source, title1, title2, marginLeft = 20, href }) {
  return (
    <>
      <Media at="sm">
        <View
          style={[
            styles.container,
            {
              width: 180,
              backgroundColor: "#FFFFFF1F",
              borderRadius: 30,
              marginLeft: marginLeft,
            },
          ]}
        >
          <Image
            source={{ uri: source, width: 80, height: 72 }}
            style={styles.img}
          />
          <Text style={[styles.h1, { fontSize: 16, paddingTop: 15 }]}>
            {title1}
          </Text>
          <Text
            style={[styles.p, { fontSize: 15, width: 150 }]}
            numberOfLines={3}
          >
            {title2}
          </Text>
          <Button title="مشاهده" href={href} />
        </View>
      </Media>
      <Media greaterThan="sm">
        <View style={styles.container}>
          <Image
            source={{ uri: source, width: 130, height: 130 }}
            style={styles.img}
          />
          <Text style={styles.h1}>{title1}</Text>
          <Text style={styles.p} numberOfLines={3}>
            {title2}
          </Text>
          <Button title="مشاهده" href={href} />
        </View>
      </Media>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    maxWidth: 300,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  h1: {
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 22,
    lineHeight: "220%",
    textAlign: "right",
    color: "#FFFFFF",
    paddingTop: 22,
  },
  p: {
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 18,
    lineHeight: "210%",
    textAlign: "center",
    color: "#D9D9D9",
    width: 200,
    paddingTop: 10,
  },
  docme: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 80,
    height: 30,
    backgroundColor: "#fff",
    borderRadius: 30,
    marginTop: 20,
  },
  img: {
    marginTop: 20,
  },
});

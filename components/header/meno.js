import { StyleSheet, View, Text } from "react-native";
import { MenoItem } from "./menoitem";

export function Meno({ scrollTo }) {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <View style={styles.container}>
        <MenoItem
          title="شبکه های اجتماعی"
          onPress={() => {
            let rect = document
              .getElementById("social")
              .getBoundingClientRect();
            scrollTo({ y: rect.y + 100 });
          }}
        />
        <MenoItem
          title="مدارک و سوابق"
          onPress={() => {
            let rect = document
              .getElementById("section")
              .getBoundingClientRect();
            scrollTo({ y: rect.y + 50 });
          }}
        />
        <MenoItem
          title="ارتباط با من"
          onPress={() => {
            let rect = document
              .getElementById("footer")
              .getBoundingClientRect();
            scrollTo({ y: rect.y });
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    width: "100%",
    maxWidth: "70%",
  },
});

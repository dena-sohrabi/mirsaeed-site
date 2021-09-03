import { useEffect, useRef } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import Footer from "../components/Footer/footer";
import Header from "../components/header/header";
import { Meno } from "../components/header/meno";
import Section from "../components/Section/section";
import Section2 from "../components/Section2/section";
import { Social } from "../components/Social/social";
import { Media } from "../components/media";
export default function App(props) {
  let scroll = useRef();
  // useEffect(() => {
  //   scroll.current.scrollTo({ y: 100 });
  // }, []);
  return (
    <ScrollView ref={scroll} style={{ height: "100vh" }}>
      <View
        style={{
          backgroundColor: "#EEE7E7",
          width: "100%",
        }}
      >
        <View style={styles.container}>
          <Header />
          <Media greaterThan="sm">
            <Meno
              scrollTo={(props) => {
                scroll.current.scrollTo(props);
              }}
            />
          </Media>
        </View>

        <View style={styles.container}>
          <Section />
        </View>
        <Social />
        <View style={styles.container}>
          <Section2 />
        </View>
        <Footer />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EEE7E7",
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    width: "100%",
    maxWidth: 1200,
    // minWidth: 500,
    marginLeft: "auto",
    marginRight: "auto",
    // borderWidth: 5,
    // borderColor: "red",
  },
  box: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "flex-end",

    width: 1300,
  },
});

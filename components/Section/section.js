import { StyleSheet, View } from "react-native";
import H1 from "./h1";
import { Media } from "../media";
import { Lakke } from "./img";
import List from "./list";
import List2 from "./smallList";
import { Ax } from "./ax";
import { Circle } from "../circle";
import { Button, Button2 } from "../docme";
export default function Section(props) {
  return (
    <View nativeID="section">
      <Media at="sm">
        <View style={styles.container2}>
          <Lakke />
          <Ax />
          <H1 />
          <View style={styles.wrapper}>
            <View>
              <List title="کارشناس ارشد آموزش زبان انگلیسی" />
              <List title="️کارشناس مترجمی زبان انگلیسی" />
              <List title="️اخذ مدرک مدرسی آیلتس از دانشگاه شهید بهشتی " />
              <List title="️چاپ مقاله در مورد کتاب  for corners  ونحوه  آموزش آن" />
            </View>
          </View>

          <Button title="رزرو کلاس" largeMobile />
        </View>
      </Media>
      <Media greaterThan="sm">
        <View style={styles.container}>
          <Circle />
          <Lakke />
          <Ax />
          <H1 />
          <View style={styles.wrapper}>
            <View style={styles.lins}>
              <View>
                <List2 title="️️اخذ مدرک زبان با گرایش بازرگانی سال ۸۸ از موسسه بازرگانی " />
                <List2 title="️مدرس زبان در موسسه ایران مهر و برخی از موسسهای آموزشی" />
                <List2 title="️️چاپ مقاله در ساله ۱۳۹۳ در مورد کتاب  for corners  ونحوه  آموزش" />
              </View>
              <View>
                <List title="️کارشناس ارشد آموزش زبان انگلیسی" />
                <List title="️کارشناس مترجمی زبان انگلیسی" />
                <List title="️اخذ مدرک مدرسی آیلتس از دانشگاه شهید بهشتی" />
              </View>
            </View>
          </View>
          <Button title="رزرو کلاس" />
        </View>
      </Media>
    </View>
  );
}

const styles = StyleSheet.create({
  lins: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
  },
  wrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    maxWidth: 950,
  },
  container: {
    position: "relative",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    marginTop: 220,
    marginBottom: 100,
  },
  container2: {
    position: "relative",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    marginTop: 100,
    marginBottom: 100,
  },
  wrapper2: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginRight: 20,
  },
});

import { StyleSheet, Image, View, Text } from "react-native";
import { Media } from "../media";
import { Ax } from "./ax";
import { Box } from "./box1";

import { Img } from "./img";

export function Social(props) {
  return (
    <View nativeID="social">
      <Media at="sm">
        <View style={styles.container}>
          <Ax />
          <Img />
          <View style={styles.textbox}>
            <Text style={[styles.h1, { fontSize: 20 }]}>
              با من همراه باشید در شبکه های اجتماعی
            </Text>
          </View>
          <View style={styles.wrapper2}>
            <Box
              source="/Group 66.png"
              title1="کتاب های آموزشی رایگان!"
              title2="برای دریافت کتاب های آموزشی رایگان از کانال تلگرام دیدن کنید"
              marginLeft={0}
            />
            <Box
              title1="ویدیو های آموزشی!"
              title2="برای مشاهده ی تدریس های رایگان و کاربردی به یتویوب مراجعه کنید"
              source="/Group 65.png"
            />
          </View>
          <View style={styles.wrapper2}>
            <Box
              title1="تدریس های کوتاه!"
              title2="  تدریس های کوتاه مفید را از پیج اینستاگرام مشاهده کنید"
              source="/Group 64.png"
              marginLeft={0}
            />
            <Box
              source="/Group 66.png"
              title1="کتاب های آموزشی رایگان!"
              title2="برای دریافت کتاب های آموزشی رایگان از کانال تلگرام دیدن کنید"
            />
          </View>
        </View>
      </Media>
      <Media greaterThan="sm">
        <View style={styles.container}>
          <View style={styles.textbox}>
            <Text style={styles.h1}>با من همراه باشید در شبکه های اجتماعی</Text>
          </View>
          <View style={styles.wrapper}>
            <Box
              title1="کتاب های آموزشی رایگان!"
              title2="برای دریافت کتاب های آموزشی رایگان از کانال تلگرام دیدن کنید"
              source="/Group 66.png"
            />
            <Box
              title1="ویدیو های آموزشی!"
              title2="برای مشاهده ی تدریس های رایگان و کاربردی به یتویوب مراجعه کنید"
              source="/Group 65.png"
            />
            <Box
              title1="تدریس های کوتاه!"
              title2="  تدریس های کوتاه مفید را از پیج اینستاگرام مشاهده کنید"
              source="/Group 64.png"
            />
            <Box
              title1="کلاس های آموزشی رایگان!"
              title2=" برای شرکت در دوره های آموزش رایگان در کلاب هوس عضو شوید"
              source="/Group 63.png"
            />
          </View>
        </View>
      </Media>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#011627",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
    position: "relative",
    paddingBottom: 100,
  },
  h1: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 32,
    lineHeight: "160%",
    textAlign: "center",
    color: "#FFFFFF",
  },
  textbox: {
    paddingTop: 50,
  },
  wrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
    maxWidth: 1200,
    paddingTop: 100,
    paddingBottom: 100,
    paddingLeft: 15,
    paddingRight: 15,
  },
  wrapper2: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    width: "100%",
    marginTop: 35,
    paddingLeft: 15,
    paddingRight: 15,
  },
});

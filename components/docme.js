import { StyleSheet, View, Pressable } from "react-native";
import { Media } from "./media";
import { useHover } from "./useHover";
export const Button = ({ title }) => {
  let [hovered, hoverListeners] = useHover();
  return (
    <>
      <Media at="sm">
        <Pressable
          herf="#"
          accessibilityRole="link"
          style={[
            styles.docme,
            {
              width: 80,
              height: 30,
              marginBottom: 20,
              marginTop: 20,
              color: "#000",
            },
            hovered && { backgroundColor: "#b91372", color: "#fff" },
          ]}
          {...hoverListeners}
        >
          {title}
        </Pressable>
      </Media>
      <Media greaterThan="sm">
        <Pressable
          herf="#"
          accessibilityRole="link"
          style={[
            styles.docme,
            hovered && { backgroundColor: "#b91372", color: "#fff" },
          ]}
          {...hoverListeners}
        >
          {title}
        </Pressable>
      </Media>
    </>
  );
};

const styles = StyleSheet.create({
  docme: {
    width: 100,
    height: 40,
    backgroundColor: "#fff",
    color: "#000",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    shadowColor: "#000",
    marginTop: 35,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.35,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

import { Pressable, StyleSheet, Text, View } from "react-native";

export const Tile = ({
  playTurn,
  contain = "",
}: {
  playTurn: () => void;
  contain: "" | "O" | "X";
}) => {
  return (
    <Pressable onPress={playTurn} style={styles.view}>
      {contain}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  view: {
    width: 48,
    height: 48,
    backgroundColor: "#d6d6d6",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
  },
});

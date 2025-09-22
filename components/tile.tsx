import { Pressable, StyleSheet, Text, View } from "react-native";
import { Symbol } from "../game";

export const Tile = ({
  onPress,
  symbol = "",
}: {
  onPress: () => void;
  symbol: Symbol;
}) => {
  return (
    <Pressable onPress={onPress} style={styles.view}>
      <Text>{symbol}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    aspectRatio: 1 / 1,
    backgroundColor: "#d6d6d6",
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    borderColor: "#333",
    borderRadius: 16,
    borderWidth: 2,
  },
});

import { StyleSheet, View } from "react-native";
import { Tile } from "./tile";
import { useGame } from "../game";

export const Table = () => {
  const { board, activePlayer, changeTurn, playTurn } = useGame();

  return (
    <View style={styles.table}>
      {board.map((row, rowIndex) => (
        <View style={styles.row} key={`row-${rowIndex}`}>
          {row.map((tile, tileIndex) => (
            <Tile
              symbol={tile}
              onPress={() => {
                playTurn(rowIndex, tileIndex);
              }}
              key={`tile-${rowIndex}-${tileIndex}`}
            ></Tile>
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  table: {
    flex: 1,
    gap: 4,
    flexDirection: "column",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  row: {
    flex: 1,
    gap: 4,
    flexDirection: "row",
  },
});

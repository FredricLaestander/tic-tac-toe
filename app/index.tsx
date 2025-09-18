import { StyleSheet, Text, View } from "react-native";
import { useGame } from "../game";

const Home = () => {
  const { board, activePlayer, changeTurn, placeSymbol } = useGame();
  return (
    <View>
      <View>
        <View></View>
        <View></View>
        <View></View>
      </View>

      <View>
        <View></View>
        <View></View>
        <View></View>
      </View>

      <View>
        <View></View>
        <View></View>
        <View></View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});

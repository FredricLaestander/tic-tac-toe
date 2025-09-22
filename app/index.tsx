import { StyleSheet, View } from "react-native";
import { Table } from "../components/table";

const Home = () => {
  return (
    <View style={styles.container}>
      <Table />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});

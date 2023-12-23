import "react-native-gesture-handler";
import Navigation from "./Navigation";
import { StyleSheet, View, Text } from "react-native";

export default function App() {
  const isHermes = () => {
    const enabled = !!global.HermesInternal;
    console.log("Hermes enabled:", enabled);
    return enabled;
  };

  // Call the function to check if Hermes is enabled and log the result
  console.log("Is Hermes enabled?", isHermes());

  return (
    <View style={styles.container}>
      <Text>hello</Text>
      <Navigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

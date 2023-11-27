import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import BigCard from "./components/BigCard";

const PlaceholderImage = require("./assets/images/background-image.png");

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hi Sharon,</Text>
      <Text>test1 Shuvi</Text>
      <StatusBar style="auto" />
      <BigCard placeholderImageSource={PlaceholderImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ADB6AA",
    alignItems: "center",
    justifyContent: "center",
  },
});

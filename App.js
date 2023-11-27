import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import BigCard from "./components/BigCard";
import React, { useState } from "react";
import SmallCard from "./components/SmallCard";

const PlaceholderImage = require("./assets/images/background-image.png");

export default function App() {
  const [response, setIsShowingText] = useState(true);

  return (
    <View style={styles.container}>
      <Text>Hi Sharon,</Text>
      <StatusBar style="auto" />
      <BigCard placeholderImageSource={PlaceholderImage} />
      <Text style={styles.othersSaidTitle}>Others said...</Text>
      <View style={styles.smallCards}>
        <SmallCard textMessage={"mom message"} />
        <SmallCard textMessage={"dad message"} />
        <SmallCard textMessage={"uncle message"} />
      </View>
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
  othersSaidTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  smallCards: {
    flexDirection: "row",
  },
});

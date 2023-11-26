import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { BigCard } from "./components/BigCard";

export default function App() {
  const [data, setData] = useState("");

  function handleTouchStart() {
    setData("new data");
  }

  return (
    <View style={styles.container}>
      <Text>thirdddddd</Text>
      <StatusBar style="auto" />
      <View style={styles.bigCard} onTouchStart={handleTouchStart}>
        <Text>{data}</Text>
      </View>
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
  bigCard: {
    backgroundColor: "green",
    width: 200,
    height: 200,
    borderRadius: 20,
  },
});

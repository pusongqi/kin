import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import BigCard from "./components/BigCard";
import React, { useState } from "react";
import SmallCard from "./components/SmallCard";
import HeaderTitle from "./components/HeaderTitle";
import OthersSaidTitle from "./components/OthersSaidTitle";

export default function App() {
  const [simpleTaskInputInfo, setSimpleTaskInputInfo] = useState("");
  const [showSimpleTaskModal, setShowSimpleTaskModal] = useState(false);
  const [simpleTaskSubmission, setSipmleTaskSubmission] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <HeaderTitle />
      <BigCard
        simpleTaskModalState={showSimpleTaskModal}
        setSimpleTaskModalState={setShowSimpleTaskModal}
        simpleTaskInputInfo={simpleTaskInputInfo}
        setSimpleTaskInputInfo={setSimpleTaskInputInfo}
        simpleTaskSubmission={simpleTaskSubmission}
        setSimpleTaskSubmission={setSipmleTaskSubmission}
      />
      <OthersSaidTitle />
      <View style={styles.smallCards}>
        <SmallCard textMessage={"mom message"} />
        <SmallCard textMessage={"dad message"} />
        <SmallCard textMessage={"uncle message"} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    flex: 1,
    alignItems: "left",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#ADB6AA",
    alignItems: "center",
    justifyContent: "center",
  },
  smallCards: {
    flexDirection: "row",
  },
});

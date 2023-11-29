import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import BigCard from "./components/BigCard";
import React, { useState } from "react";
import SmallCard from "./components/SmallCard";
import HeaderTitle from "./components/HeaderTitle";
import OthersSaidTitle from "./components/OthersSaidTitle";
import SubmitPrompt from "./components/SubmitPrompt";

export default function App() {
  const [simpleTaskInputInfo, setSimpleTaskInputInfo] = useState("");
  const [showSimpleTaskModal, setShowSimpleTaskModal] = useState(false);
  const [simpleTaskSubmission, setSipmleTaskSubmission] = useState(false);
  const [response, setIsShowingText] = useState(true);
  const [submitPromptModal, setSubmitPromptModal] = useState(false);


  
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
        <SmallCard
          user={require("./assets/images/RedHairAvatar.png")}
          imageInput={require("./assets/images/Meatballs.png")}
        />
        <SmallCard
          textMessage={'"olive bar chicken. this is..."'}
          user={require("./assets/images/PinkHairAvatar.png")}
        />
      </View>
      <SubmitPrompt
        submitPromptModal={submitPromptModal}
        setSubmitPromptModal={setSubmitPromptModal}
      />
      
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


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
  const [submitPromptInputInfo, setSubmitPromptInputInfo] = useState("");
  const [submitPromptSubmission, setSubmitPromptSubmission] = useState(false);
  const [submitPromptButtonText, setSubmitPromptButtonText] = useState(
    "Propose a future prompt",
  );
  const [existsFileAttach, setExistsFileAttach] = useState(false);
  const [existsSongAttach, setExistsSongAttach] = useState(false);
  const [existsPhotoAttach, setExistsPhotoAttach] = useState(false);
  const [existsAudioAttach, setExistsAudioAttach] = useState(false);
  const [showMediumTaskModal1, setShowMediumTaskModal1] = useState(false);
  const [showMediumTaskModal2, setShowMediumTaskModal2] = useState(false);
  const [mediumTaskComments1, setMediumTaskComments1] = useState(["love this"]);
  const [mediumTaskComments2, setMediumTaskComments2] = useState([]);
  const [mediumTaskLike1, setMediumTaskLike1] = useState(false);
  const [mediumTaskLike2, setMediumTaskLike2] = useState(false);

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
        existsFileAttach={existsFileAttach}
        setExistsFileAttach={setExistsFileAttach}
        existsSongAttach={existsSongAttach}
        setExistsSongAttach={setExistsSongAttach}
        existsPhotoAttach={existsPhotoAttach}
        setExistsPhotoAttach={setExistsPhotoAttach}
        existsAudioAttach={existsAudioAttach}
        setExistsAudioAttach={setExistsAudioAttach}
      />
      <OthersSaidTitle />
      <View style={styles.smallCards}>
        <SmallCard
          user={require("./assets/images/RedHairAvatar.png")}
          imageInput={require("./assets/images/Meatballs.png")}
          showMediumTaskModal={showMediumTaskModal1}
          setShowMediumTaskModal={setShowMediumTaskModal1}
          mediumTaskComments={mediumTaskComments1}
          setMediumTaskComments={setMediumTaskComments1}
          mediumTaskLike={mediumTaskLike1}
          setMediumTaskLike={setMediumTaskLike1}
        />
        <SmallCard
          textMessage={'"olive bar chicken... this is..."'}
          user={require("./assets/images/PinkHairAvatar.png")}
          showMediumTaskModal={showMediumTaskModal2}
          setShowMediumTaskModal={setShowMediumTaskModal2}
          mediumTaskComments={mediumTaskComments2}
          setMediumTaskComments={setMediumTaskComments2}
          mediumTaskLike={mediumTaskLike2}
          setMediumTaskLike={setMediumTaskLike2}
        />
      </View>
      {!simpleTaskSubmission ? (
        <SubmitPrompt
          submitPromptModal={submitPromptModal}
          setSubmitPromptModal={setSubmitPromptModal}
          submitPromptInputInfo={submitPromptInputInfo}
          setSubmitPromptInputInfo={setSubmitPromptInputInfo}
          submitPromptSubmission={submitPromptSubmission}
          setSubmitPromptSubmission={setSubmitPromptSubmission}
          submitPromptButtonText={submitPromptButtonText}
          setSubmitPromptButtonText={setSubmitPromptButtonText}
        />
      ) : (
        <SubmitPrompt
          submitPromptModal={submitPromptModal}
          setSubmitPromptModal={setSubmitPromptModal}
          submitPromptInputInfo={submitPromptInputInfo}
          setSubmitPromptInputInfo={setSubmitPromptInputInfo}
          submitPromptSubmission={submitPromptSubmission}
          setSubmitPromptSubmission={setSubmitPromptSubmission}
          submitPromptButtonText={submitPromptButtonText}
          setSubmitPromptButtonText={setSubmitPromptButtonText}
        />
      )}
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

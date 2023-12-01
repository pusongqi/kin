import {
  StyleSheet,
  Image,
  Button,
  Pressable,
  Modal,
  TextInput,
  Keyboard,
} from "react-native";
import { View, Text } from "react-native";
import { useFonts } from "expo-font";
// import { ThreeSixtyIcon } from "@mui/icons-material/ThreeSixty";
import XButton from "./XButton.js";
import Comment from "./Comment.js";
import CommentAudio from "./CommentAudio.js";
import Ionicons from "@expo/vector-icons/Ionicons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import AttachmentButtons from "./AttachmentButtons";
import React, { useState } from "react";
import AttachmentViewing from "./AttachmentViewing";

// The modal template here is inspired from https://reactnative.dev/docs/modal
export default function BigCard({
  simpleTaskModalState,
  setSimpleTaskModalState,
  simpleTaskInputInfo,
  setSimpleTaskInputInfo,
  simpleTaskSubmission,
  setSimpleTaskSubmission,
}) {
  const [showSubmitButton, setShowSubmitButton] = useState(true);
  const [image, setImage] = useState(null);
  const [file, setFile] = useState(null);
  const [album, setAlbum] = useState(false);
  const [voice, setVoice] = useState(false);
  const [fontsLoaded] = useFonts({
    "Humanist-Bold": require("../assets/fonts/Humanist-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  function handlePressSubmitAnswer() {
    setTimeout(() => {
      setSimpleTaskModalState(!simpleTaskModalState);
      setSimpleTaskSubmission(true);
    }, 500);
    setShowSubmitButton(false);
  }

  function handleDiscard() {
    setSimpleTaskModalState(!simpleTaskModalState);
    setAlbum(false);
    setFile(null);
    setImage(null);
    setVoice(false);
    setSimpleTaskInputInfo("");
    setSimpleTaskSubmission(false);
    setShowSubmitButton(true);
  }

  const handleKeyPress = (e) => {
    if (e.nativeEvent.key === "Enter") {
      Keyboard.dismiss();
      return;
    }
  };

  return (
    <Pressable onPress={() => setSimpleTaskModalState(!simpleTaskModalState)}>
      <View style={styles.bigCard}>
        <Modal
          visible={simpleTaskModalState}
          transparent={true}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setSimpleTaskModalState(!simpleTaskModalState);
          }}
        >
          <BlurView style={styles.absolute} tint="light" intensity={90} />

          <View style={styles.container}>
            {!simpleTaskSubmission ? (
              <View style={styles.modalView}>
                <Pressable onPress={() => setSimpleTaskModalState(!simpleTaskModalState)}>
                  <XButton />
                </Pressable>

                <Text style={styles.modalText}>what is your go-to recipe?</Text>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.modalInput}
                    onChangeText={setSimpleTaskInputInfo}
                    value={simpleTaskInputInfo}
                    placeholder="Type your answer here..."
                    placeholderStyle={styles.pholderStyle}
                    multiline={true}
                    textAlignVertical="top"
                    onKeyPress={handleKeyPress}
                    returnKeyType="done"
                  />
                </View>

                <AttachmentButtons
                  image={image}
                  setImage={setImage}
                  file={file}
                  setFile={setFile}
                  album={album}
                  setAlbum={setAlbum}
                  voice={voice}
                  setVoice={setVoice}
                />
                {showSubmitButton ? (
                  <Pressable
                    style={styles.submitButton}
                    onPress={() => {
                      handlePressSubmitAnswer();
                    }}
                  >
                    <Text style={styles.submitButtonText}>Submit</Text>
                  </Pressable>
                ) : (
                  <View style={styles.submittedBorder}>
                    <Text style={styles.submittedButtonText}>Submitted</Text>
                  </View>
                )}
              </View>
            ) : (
              <View>
                <View style={styles.holdBigAvatar}>
                  <Image
                    style={styles.bigAvatarImage}
                    source={require("../assets/images/LargeBrownHairAvatar.png")}
                  ></Image>
                </View>
                <View style={styles.modalView}>
                  <Pressable
                    onPress={() => setSimpleTaskModalState(!simpleTaskModalState)}
                  >
                    <XButton />
                  </Pressable>

                  <Text style={styles.answerCardTitle}>What Is Your Go-To Recipe?</Text>

                  <View style={styles.answerContainer}>
                    <Text style={styles.topLeftQuotation}>&ldquo;</Text>

                    <Text style={styles.bottomRightQuotation}>&rdquo;</Text>

                    {simpleTaskInputInfo.length > 0 ? (
                      <Text style={styles.answerCardBody}>{simpleTaskInputInfo}</Text>
                    ) : null}

                    <AttachmentViewing
                      image={image}
                      setImage={setImage}
                      file={file}
                      setFile={setFile}
                      album={album}
                      setAlbum={setAlbum}
                      voice={voice}
                      setVoice={setVoice}
                    />
                  </View>

                  <Pressable onPress={() => handleDiscard()}>
                    <View style={styles.card}>
                      <FontAwesome
                        name="trash-o"
                        size={20}
                        color="white"
                        style={styles.discardButton}
                      />
                    </View>
                  </Pressable>

                  <View style={styles.holdLikesList}>
                    <Image
                      style={styles.likesList}
                      source={require("../assets/images/LikeList.png")}
                    ></Image>
                  </View>
                  <View style={styles.holdComments}>
                    <Comment commentText={"sounds gross"} />
                    <CommentAudio />
                    <Comment commentText={"i can't wait to try!"} />
                  </View>
                </View>
              </View>
            )}
          </View>
        </Modal>

        <Text style={styles.bigText}>what is your go to recipe?</Text>
        {!simpleTaskSubmission ? (
          <View style={styles.buttonView}>
            <Text style={styles.submissionStatusText}>answer</Text>
            <AntDesign name="caretright" size={20} color="#EFEFEF" />
          </View>
        ) : (
          <View style={styles.buttonView}>
            <Text style={styles.submissionStatusText}>view</Text>
            <AntDesign name="caretright" size={20} color="#EFEFEF" />
          </View>
        )}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  absolute: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  container: {
    //controls the placement of the modal
    flex: 1,
    justifyContent: "center", //center vertically
    alignItems: "center", //center horizontally
  },
  bigCard: {
    width: "90%",
    height: 400,
    borderRadius: 40,
    backgroundColor: "#143109",
    padding: 20,
  },
  bigText: {
    color: "#EFEFEF",
    fontFamily: "Humanist-Bold",
    fontSize: 60,
    textAlign: "center",
    marginTop: 15,
    padding: 30,
  },
  buttonView: {
    display: "flex",
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    right: 0,
    marginBottom: 10,
    marginright: 10,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  modalText: {
    //Big text in the modal
    color: "#EFEFEF",
    marginBottom: 5,
    textAlign: "center",
    fontFamily: "Humanist-Bold",
    fontSize: 49,
  },
  modalInput: {
    width: 300,
    height: 185,
    backgroundColor: "#F5F5F5",
    fontFamily: "Humanist-Bold",
    borderRadius: 30,
    padding: 20,
    paddingTop: 20,
  },
  pholderStyle: {
    fontFamily: "Humanist-Bold",
    position: "absolute",
  },
  inputContainer: {
    flex: 1,
    padding: 20,
  },
  submitButton: {
    //Submit button
    borderRadius: 40, // Increased border-radius for a more rounded shape
    borderWidth: 2,
    borderColor: "#EFEFEF",
    marginTop: 30,
    paddingVertical: 15, // Adjust vertical padding for height
    paddingHorizontal: 100, // Adjust horizontal padding for width
    justifyContent: "center",
    alignItems: "center",
  },
  submitButtonText: {
    //Text of the Submit button
    fontSize: 23,
    color: "#EFEFEF",
    fontFamily: "Humanist-Bold",
  },
  submittedButtonText: {
    //Text of the Submit button
    fontSize: 23,
    color: "#8F947B",
    fontFamily: "Humanist-Bold",
  },
  submittedBorder: {
    borderRadius: 40, // Increased border-radius for a more rounded shape
    borderWidth: 2,
    borderColor: "#8F947B",
    marginTop: 30,
    paddingVertical: 15, // Adjust vertical padding for height
    paddingHorizontal: 82, // Adjust horizontal padding for width
    justifyContent: "center",
    alignItems: "center",
  },
  submissionStatusText: {
    fontSize: 32,
    color: "#EFEFEF",
    fontFamily: "Humanist-Bold",
    marginBottom: 7, //this centers it as much as possible somehow lol
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    //The shape of the modal and what's in it
    position: "relative",
    // margin: 20,
    backgroundColor: "#143109",
    borderRadius: 40,
    padding: 30,
    alignItems: "center",
    // elevation: 5,
    width: "90%",
    height: 562,
  },
  iconContainer: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  answerCardTitle: {
    fontSize: 25,
    marginTop: 10,
    color: "#EFEFEF",
    fontFamily: "Humanist-Bold",
  },
  answerCardBody: {
    fontSize: 20,
    color: "#EFEFEF",
    fontFamily: "Humanist-Bold",
    paddingTop: 10,
    paddingBottom: 10,
  },
  answerContainer: {
    marginTop: 20,
    marginBottom: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: "white",
    borderTopColor: "white", // White border at the top
    borderBottomColor: "white", // White border at the bottom
    borderLeftWidth: 0, // No border on the left
    borderRightWidth: 0, // No border on the right
    justifyContent: "center",
    alignItems: "center",
    width: 300,
  },
  topLeftQuotation: {
    position: "absolute",
    color: "#EFEFEF",
    fontFamily: "Humanist-Bold",
    top: 0,
    left: 0,
    fontSize: 24,
  },
  bottomRightQuotation: {
    position: "absolute",
    color: "#EFEFEF",
    fontFamily: "Humanist-Bold",
    bottom: 0,
    right: 0,
    fontSize: 24,
  },
  likesList: {
    marginBottom: 20,
  },
  holdLikesList: {
    marginLeft: 200,
  },
  holdBigAvatar: {
    alignItems: "center",
  },
  discardButton: {
    borderRadius: 10,
    borderColor: "#EFEFEF",
    borderWidth: 2,
    paddingVertical: 8,
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: -5,
    right: 115,
    fontWeight: "bold",
    fontFamily: "Humanist-Bold",
  },
});

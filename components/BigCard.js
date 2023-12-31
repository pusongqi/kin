import {
  StyleSheet,
  Image,
  Button,
  Pressable,
  TouchableOpacity,
  Modal,
  TextInput,
  Keyboard,
} from "react-native";
import { View, Text } from "react-native";
import { useFonts } from "expo-font";
// import { ThreeSixtyIcon } from "@mui/icons-material/ThreeSixty";
import XButton from "./XButton.js";
import CommentAudio from "./CommentAudio.js";
import CommentAudioNotUs from "./CommentAudioNotUs.js";
import Ionicons from "@expo/vector-icons/Ionicons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import AttachmentButtons from "./AttachmentButtons";
import React, { useState } from "react";
import AttachmentViewing from "./AttachmentViewing";
import PinkHairComment from "./PinkHairComment.js";

// The modal template here is inspired from https://reactnative.dev/docs/modal
export default function BigCard({
  simpleTaskModalState,
  setSimpleTaskModalState,
  simpleTaskInputInfo,
  setSimpleTaskInputInfo,
  simpleTaskSubmission,
  setSimpleTaskSubmission,
  existsFileAttach,
  setExistsFileAttach,
  existsSongAttach,
  setExistsSongAttach,
  existsPhotoAttach,
  setExistsPhotoAttach,
  existsAudioAttach,
  setExistsAudioAttach,
}) {
  const [showSubmitButton, setShowSubmitButton] = useState(true);
  const [image, setImage] = useState(null);
  const [file, setFile] = useState(null);
  const [album, setAlbum] = useState(false);
  const [voice, setVoice] = useState(false);
  const [fontsLoaded] = useFonts({
    "Humanist-Bold": require("../assets/fonts/Humanist-Bold.ttf"),
  });
  const [isPressed, setIsPressed] = useState(false);

  if (!fontsLoaded) {
    return null;
  }

  function handlePressSubmitAnswer() {
    if (
      simpleTaskInputInfo.length < 1 &&
      !existsFileAttach &&
      !existsSongAttach &&
      !existsPhotoAttach &&
      !existsAudioAttach
    ) {
      return;
    }
    setTimeout(() => {
      setSimpleTaskModalState(!simpleTaskModalState);
      setSimpleTaskSubmission(true);
    }, 500);
    setShowSubmitButton(false);
  }

  function handleDiscard() {
    setSimpleTaskSubmission(false);
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

  const handlePressIn = () => {
    setIsPressed(true);
  };
  const handlePressOut = () => {
    setIsPressed(false);
  };

  const shadowStyle = isPressed ? { ...styles.bigCardPressed } : { ...styles.bigCard };

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => setSimpleTaskModalState(!simpleTaskModalState)}
      onPressIn={() => handlePressIn()}
      onPressOut={() => handlePressOut()}
    >
      <View style={shadowStyle}>
        <Modal
          visible={simpleTaskModalState}
          animationType="fade"
          transparent={true}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setSimpleTaskModalState(!simpleTaskModalState);
          }}
        >
          <BlurView style={styles.absolute} tint="light" intensity={75} />

          <View style={styles.container}>
            {!simpleTaskSubmission ? (
              <View>
                <View style={styles.holdBigAvatarTop}>
                  <Image
                    style={styles.bigAvatarImage}
                    source={require("../assets/images/LargeBrownHairAvatar.png")}
                  ></Image>
                </View>

                <View style={styles.modalView}>
                  <TouchableOpacity
                    onPress={() => setSimpleTaskModalState(!simpleTaskModalState)}
                  >
                    <XButton />
                  </TouchableOpacity>

                  <Text style={styles.modalText}>what is your go-to recipe?</Text>
                  <View style={styles.inputContainer}>
                    <TextInput
                      style={styles.modalInput}
                      onChangeText={setSimpleTaskInputInfo}
                      value={simpleTaskInputInfo}
                      maxLength={80} // Set the character limit to 100
                      placeholder="Type your answer here..."
                      placeholderStyle={styles.pholderStyle}
                      multiline={true}
                      textAlignVertical="top"
                      onKeyPress={handleKeyPress}
                      returnKeyType="done"
                      minlength="10"
                    />
                    <Text style={styles.wordLimitText}>
                      {simpleTaskInputInfo.length} / 80 characters
                    </Text>
                  </View>

                  <View style={styles.attachmentButtonHolder}>
                    <AttachmentButtons
                      image={image}
                      setImage={setImage}
                      file={file}
                      setFile={setFile}
                      album={album}
                      setAlbum={setAlbum}
                      voice={voice}
                      setVoice={setVoice}
                      existsFileAttach={existsFileAttach}
                      setExistsFileAttach={setExistsFileAttach}
                      existsSongAttach={existsSongAttach}
                      setExistsSongAttach={setExistsSongAttach}
                      existsPhotoAttach={existsPhotoAttach}
                      setExistsPhotoAttach={setExistsPhotoAttach}
                      existsAudioAttach={existsAudioAttach}
                      setExistsAudioAttach={setExistsAudioAttach}
                    />
                  </View>

                  {showSubmitButton ? (
                    <TouchableOpacity
                      style={styles.submitButton}
                      onPress={() => {
                        handlePressSubmitAnswer();
                      }}
                    >
                      <Text style={styles.submitButtonText}>Submit</Text>
                    </TouchableOpacity>
                  ) : (
                    <View style={styles.submittedBorder}>
                      <Text style={styles.submittedButtonText}>Submitted</Text>
                    </View>
                  )}
                </View>
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
                  <TouchableOpacity
                    onPress={() => setSimpleTaskModalState(!simpleTaskModalState)}
                  >
                    <XButton />
                  </TouchableOpacity>

                  <Text style={styles.answerCardTitle}>what is your go-to recipe?</Text>

                  <View style={styles.answerContainer}>
                    <Text style={styles.topLeftQuotation}>&ldquo;</Text>

                    <Text style={styles.bottomRightQuotation}>&rdquo;</Text>

                    {simpleTaskInputInfo.length > 0 ? (
                      <Text style={styles.answerCardBody}>{simpleTaskInputInfo}</Text>
                    ) : null}
                    <View style={styles.attachments}>
                      <AttachmentViewing
                        image={image}
                        setImage={setImage}
                        file={file}
                        setFile={setFile}
                        album={album}
                        setAlbum={setAlbum}
                        voice={voice}
                        setVoice={setVoice}
                        existsFileAttach={existsFileAttach}
                        setExistsFileAttach={setExistsFileAttach}
                        existsSongAttach={existsSongAttach}
                        setExistsSongAttach={setExistsSongAttach}
                        existsPhotoAttach={existsPhotoAttach}
                        setExistsPhotoAttach={setExistsPhotoAttach}
                        existsAudioAttach={existsAudioAttach}
                        setExistsAudioAttach={setExistsAudioAttach}
                      />
                    </View>
                  </View>

                  <TouchableOpacity onPress={() => handleDiscard()}>
                    <View style={styles.discardButton}>
                      <FontAwesome name="trash-o" size={20} color="white" />
                    </View>
                  </TouchableOpacity>

                  <View style={styles.holdLikesList}>
                    <Image
                      style={styles.likesList}
                      source={require("../assets/images/LikeListNoUs.png")}
                    ></Image>
                  </View>
                  <View style={styles.holdComments}>
                    <PinkHairComment commentText={"sounds gross"} />
                    <CommentAudioNotUs />
                    <PinkHairComment commentText={"i can't wait to try!"} />
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
    </TouchableOpacity>
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
    //this means center vertically
    justifyContent: "center",
    //this means center horizontally
    alignItems: "center",
  },
  bigCard: {
    width: "90%",
    height: 380,
    borderRadius: 40,
    backgroundColor: "#143109",
    padding: 20,
    shadowColor: "black",
    shadowRadius: 6,
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.5,
    elevation: 5,
  },
  bigCardPressed: {
    width: "90%",
    height: 380,
    borderRadius: 40,
    backgroundColor: "#143109",
    padding: 20,
    shadowColor: "black",
    shadowRadius: 2,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.5,
    elevation: 2,
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
    // marginBottom: 10,
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
    borderRadius: 40,
    padding: 20,
    paddingTop: 20,
  },
  pholderStyle: {
    fontFamily: "Humanist-Bold",
    position: "absolute",
  },
  inputContainer: {
    flex: 1,
    marginTop: 20,
  },
  wordLimitText: {
    position: "absolute",
    fontFamily: "Humanist-Bold",
    fontSize: 12,
    bottom: 42,
    left: 26,
    color: "#143109",
  },
  submitButton: {
    //Submit button
    borderRadius: 40,
    borderWidth: 2,
    borderColor: "#EFEFEF",
    marginTop: 20,
    paddingVertical: 15,
    paddingHorizontal: 100,
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
    //Text of the Submitted button
    fontSize: 23,
    color: "#8F947B",
    fontFamily: "Humanist-Bold",
  },
  submittedBorder: {
    borderRadius: 40,
    borderWidth: 2,
    borderColor: "#8F947B",
    marginTop: 20,
    paddingVertical: 15,
    paddingHorizontal: 82,
    justifyContent: "center",
    alignItems: "center",
  },
  submissionStatusText: {
    fontSize: 32,
    color: "#EFEFEF",
    fontFamily: "Humanist-Bold",
    marginBottom: 7, //this centers it as much as possible
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    //The shape of the modal and what's in it
    backgroundColor: "#143109",
    borderRadius: 40,
    padding: 30,
    alignItems: "center",
    width: "90%",
    height: 562,
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  answerCardTitle: {
    fontSize: 25,
    marginTop: 10,
    color: "#EFEFEF",
    fontFamily: "Humanist-Bold",
  },
  answerContainer: {
    marginTop: 20,
    marginBottom: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: "white",
    borderTopColor: "white",
    borderBottomColor: "white",
    borderLeftWidth: 0,
    borderRightWidth: 0,
    justifyContent: "center",
    alignItems: "center",
    width: 300,
  },
  answerCardBody: {
    fontSize: 20,
    color: "#EFEFEF",
    fontFamily: "Humanist-Bold",
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: "center",
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
    marginBottom: 5,
  },
  holdLikesList: {
    marginLeft: 200,
  },
  holdBigAvatar: {
    alignItems: "center",
  },
  holdBigAvatarTop: {
    alignItems: "center",
  },
  discardButton: {
    borderColor: "#EFEFEF",

    paddingVertical: 8,
    paddingHorizontal: 10,
    position: "absolute",
    bottom: 22,
    left: 96,
  },
  attachments: {
    alignItems: "center",
  },
  attachmentButtonHolder: {
    // this is to maintain the spacing between textinput and submit button
    paddingBottom: -10,
  },
});

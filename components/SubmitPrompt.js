import { StyleSheet, 
  Image, 
  Button, 
  Pressable,
  Modal, 
  TextInput, 
  Keyboard,
  KeyboardAvoidingView, } from "react-native";
import { View, Text } from "react-native";
import { useFonts } from 'expo-font';
import XButton from "./XButton.js";
import { BlurView } from "expo-blur";
import React, { useState } from "react";
import { FontAwesome5 } from '@expo/vector-icons'; 
import { FontAwesome } from "@expo/vector-icons";

export default function SubmitPrompt({
    submitPromptModal,
    setSubmitPromptModal,
    submitPromptInputInfo,
    setSubmitPromptInputInfo,
    submitPromptSubmission,
    setSubmitPromptSubmission,
    submitPromptButtonText,
    setSubmitPromptButtonText,
    isEditable,
    setIsEditable,
}) {
    const [showSubmitButton, setShowSubmitButton] = useState(true);

    const [fontsLoaded] = useFonts({
    'Humanist-Bold': require('../assets/fonts/Humanist-Bold.ttf'),
    });

    if (!fontsLoaded) {
        return null;
      }

    
    function handlePressSubmitAnswer() {
      Keyboard.dismiss();
      setIsEditable(!isEditable);
      setTimeout(() => {
        
        setSubmitPromptModal(!submitPromptModal);
        setSubmitPromptSubmission(true);
      }, 2500);
      setShowSubmitButton(false);
      setSubmitPromptButtonText("Review submitted prompt")
    };

    function handleDiscard() {
      // setSubmitPromptModal(!submitPromptModal);
      setSubmitPromptInputInfo("");
      setIsEditable(!isEditable);
      setSubmitPromptSubmission(false);
      setShowSubmitButton(true);
    }

    const handleKeyPress = (e) => {
      if (e.nativeEvent.key === "Enter") {
        setIsEditable(!isEditable);
        Keyboard.dismiss();
        return;
      }

    };


  return (
    <View>
      <View style={styles.buttonPosition}>
        <Pressable 
          onPress={() => setSubmitPromptModal(true)} 
          style={styles.buttonOutline}>
          <Text style={styles.buttonText}>{submitPromptButtonText}</Text>
        </Pressable>
      </View>

      <Modal
          visible={submitPromptModal}
          transparent={true}
        >
            <BlurView style={styles.absolute} tint="light" intensity={90} />
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.keyBoardContainer}
          >
              <View style={styles.container}>
                <View>
                  <View style={styles.holdBigAvatar}>
                        <Image
                          style={styles.bigAvatarImage}
                          source={require("../assets/images/LargeBrownHairAvatar.png")}
                        ></Image>
                  </View>
                  <View style={styles.modalView}>
                      <Pressable onPress={() => setSubmitPromptModal(false)}>
                          <XButton/>
                      </Pressable>
                      <FontAwesome5 style={styles.diceIcon} name="dice" size={36} color="#EFEFEF" />


                      {showSubmitButton ? (
                      <Text style={styles.submitPromptText}>submitted prompts are drawn randomly each day from a pool of prompts - some from you and some from us!</Text>
                    ) : (
                      <Text style={styles.submittedPromptText}>thanks for submitting a prompt! if you change your mind, you can delete and write a new one. remember to come back later to see if it is asked!</Text>
                    )}  
                      
                      <View style={styles.inputContainer}>
                        <TextInput
                          style={styles.modalInput}
                          onChangeText={setSubmitPromptInputInfo}
                          value={submitPromptInputInfo}
                          placeholder="Type your own prompt here..."
                          placeholderStyle={styles.pholderStyle}
                          multiline={true}
                          editable={isEditable}
                          maxLength={80}
                          textAlignVertical="top"
                          onKeyPress={handleKeyPress}
                          returnKeyType="done"
                        />
                        <Text style={styles.wordLimitText}>{submitPromptInputInfo.length} / 80 characters</Text>
                      </View>

                      <Pressable style={styles.discardHolder} onPress={() => handleDiscard()}>
                          <FontAwesome
                            name="trash-o"
                            size={24}
                            color="#143109"
                            style={styles.discardButton}
                          />
                      </Pressable>
                      
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
                </View>
            </View>
          </KeyboardAvoidingView>
        </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  
  buttonOutline: {
    borderRadius: 40, // Increased border-radius for a more rounded shape
    // borderWidth: 2,
    // borderColor: "#EFEFEF",
    backgroundColor: "#143109",
    marginTop: 20,
    marginBottom: -30,
    paddingVertical: 15, // Adjust vertical padding for height
    paddingHorizontal: 50, // Adjust horizontal padding for width
    justifyContent: "center",
    alignItems: "center",
  },
  wordLimitText: {
    position: "absolute",
    fontFamily: "Humanist-Bold",
    fontSize: 12,
    bottom: 14,
    left: 24,
    color: "#143109",
  },
  buttonText: {
    fontSize: 16,
    color: "#EFEFEF",
    fontFamily: "Humanist-Bold",
  },
  buttonPosition: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: "center", //center vertically
    alignItems: "center", //center horizontally

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
  submitPromptText: {
    fontSize: 25,
    color: "#EFEFEF",
    fontFamily: "Humanist-Bold",
    textAlign: "center",
    
  },
  submittedPromptText: {
    fontSize: 21,
    color: "#EFEFEF",
    fontFamily: "Humanist-Bold",
    textAlign: "center",
    // marginBottom: 1,
  },
  absolute: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  holdBigAvatar: {
    alignItems: "center",
  },
  diceIcon: {
    marginBottom: 20,
  },
  inputContainer: {
    flex: 1,
    marginTop: 15,
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
  discardButton: {
    borderRadius: 10, // Increased border-radius for a more rounded shape
    // borderWidth: 2,
    borderColor: "#143109",
    marginTop: 30,
    paddingVertical: 10, // Adjust vertical padding for height
    paddingHorizontal: 12, // Adjust horizontal padding for width
    justifyContent: "center",
    alignItems: "center",
  },
  discardHolder: {
    position: "absolute",
    top: 365,
    right: 35,
  },
  keyBoardContainer: {
    flex: 1,
  },
});
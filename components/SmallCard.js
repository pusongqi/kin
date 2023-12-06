import {
  StyleSheet,
  Image,
  View,
  Text,
  TouchableOpacity,
  Pressable,
  Modal,
  TextInput,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { BlurView } from "expo-blur";
import XButton from "./XButton.js";
import UsComment from "./UsComment.js";
import CommentAudio from "./CommentAudio.js";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export default function SmallCard({
  textMessage,
  user,
  imageInput,
  showMediumTaskModal,
  setShowMediumTaskModal,
  mediumTaskComments,
  setMediumTaskComments,
  mediumTaskLike,
  setMediumTaskLike,
}) {
  [commentInfo, setCommentInfo] = useState("");

  const handlePress = () => {
    console.log("View button pressed!");
    //define action later
  };

  const [fontsLoaded] = useFonts({
    "Humanist-Bold": require("../assets/fonts/Humanist-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const handleSubmitAudioComment = () => {
    if (mediumTaskComments.length === 3) {
      setCommentInfo("");
      return;
    }
    setMediumTaskComments([...mediumTaskComments, ""]);
    setCommentInfo("");
  };

  const handleSubmitComment = (comment) => {
    if (mediumTaskComments.length === 3) {
      setCommentInfo("");
      return;
    }
    setMediumTaskComments([...mediumTaskComments, comment]);
    setCommentInfo("");
  };

  const handleCommentDelete = (index) => {
    const newComments = [...mediumTaskComments];
    newComments.splice(index, 1);
    setMediumTaskComments(newComments);
  };

  const handleLike = () => {
    setMediumTaskLike(!mediumTaskLike);
  };

  const handleSubmitAudioPress = () => {
    handleSubmitComment("audio");
    Keyboard.dismiss();
  };

  const handleSubmitButtonPress = () => {
    handleSubmitComment(commentInfo);
    Keyboard.dismiss();
  };

  const handleKeyPress = (e) => {
    if (e.nativeEvent.key === "Enter") {
      handleSubmitComment(commentInfo);
      Keyboard.dismiss();
      return;
    }
  };

  return (
    <Pressable onPress={() => setShowMediumTaskModal(!showMediumTaskModal)}>
      <View style={styles.smallCard}>
        <Modal
          visible={showMediumTaskModal}
          transparent={true}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setShowMediumTaskModal(!showMediumTaskModal);
          }}
        >
          <BlurView style={styles.absolute} tint="light" intensity={90} />
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.keyBoardContainer}
          >
            <View style={styles.container}>
              <View style={styles.holdBigAvatar}>
                <Image
                  style={styles.bigAvatarImage}
                  source={require("../assets/images/LargeRedHairAvatar.png")}
                ></Image>
              </View>
              <View style={styles.modalView}>
                <Pressable onPress={() => setShowMediumTaskModal(!showMediumTaskModal)}>
                  <XButton />
                </Pressable>
                <Text style={styles.answerCardTitle}>what is your go-to recipe?</Text>

                <View style={styles.answerContainer}>
                  <Text style={styles.topLeftQuotation}>&ldquo;</Text>
                  <Text style={styles.bottomRightQuotation}>&rdquo;</Text>
                  <Text style={styles.answerCardBody}>grandma's spaghetti!</Text>
                  <Image
                    source={require("../assets/images/Spaghetti.png")}
                    style={styles.imagesIconContainer}
                  />
                </View>
                {mediumTaskLike ? (
                  <View style={styles.holdLikesList}>
                    <Image
                      style={styles.likesList}
                      source={require("../assets/images/LikeListYesUs.png")}
                    ></Image>
                  </View>
                ) : (
                  <View style={styles.holdNotLikesList}>
                    <Image
                      style={styles.notLikesList}
                      source={require("../assets/images/LikeListNoUs.png")}
                    ></Image>
                  </View>
                )}
                <View style={styles.holdComments}>
                  {mediumTaskComments.map((comment, index) => (
                    <View key={index}>
                      {comment === "audio" ? (
                        <View>
                          <CommentAudio />
                          <TouchableOpacity
                            style={styles.discardButton}
                            onPress={() => handleCommentDelete(index)}
                          >
                            <FontAwesome name="trash-o" size={20} color="black" />
                          </TouchableOpacity>
                        </View>
                      ) : (
                        <View>
                          <UsComment commentText={comment} />
                          <TouchableOpacity
                            style={styles.discardButton}
                            onPress={() => handleCommentDelete(index)}
                          >
                            <FontAwesome name="trash-o" size={20} color="black" />
                          </TouchableOpacity>
                        </View>
                      )}
                    </View>
                  ))}
                </View>
                <View style={styles.holdCommentAvatar}>
                  <Image
                    style={styles.commentAvatar}
                    source={require("../assets/images/SharonIconComment.png")}
                  ></Image>
                </View>

                <View style={styles.commentInput}>
                  <TextInput
                    style={styles.textInput}
                    onChangeText={setCommentInfo}
                    value={commentInfo}
                    placeholder="reply..."
                    multiline={false}
                    textAlignVertical="center"
                    onKeyPress={handleKeyPress}
                    returnKeyType="done"
                  />
                </View>
                <Pressable
                  onPress={() => handleSubmitButtonPress()}
                  style={styles.submitButtonPress}
                >
                  <Ionicons name="send" size={24} color="#143109" />
                </Pressable>

                <Pressable
                  onPress={() => handleSubmitAudioPress()}
                  style={styles.micIconContainer}
                >
                  <FontAwesome name="microphone" color="white" size={50} />
                </Pressable>
                <Pressable onPress={() => handleLike()} style={styles.heartContainer}>
                  {mediumTaskLike ? (
                    <AntDesign name="heart" size={50} color="red" />
                  ) : (
                    <AntDesign name="heart" size={50} color="#EFEFEF" />
                  )}
                </Pressable>
              </View>
            </View>
          </KeyboardAvoidingView>
        </Modal>
        <View style={styles.contentContainer}>
          <Text style={styles.text}>{textMessage}</Text>
          {imageInput && <Image source={imageInput} style={styles.responseImage} />}
        </View>
        <View style={styles.avatarContainer}>
          <Image source={user} style={styles.avatarImage} />
        </View>
        <TouchableOpacity style={styles.viewButton} onPress={handlePress}>
          <Text style={styles.viewButtonText}>view</Text>
          <AntDesign name="caretright" size={18} color="white" />
        </TouchableOpacity>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  keyBoardContainer: {
    flex: 1,
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
  container: {
    //controls the placement of the modal
    flex: 1,
    justifyContent: "center", //center vertically
    alignItems: "center", //center horizontally
  },
  modalView: {
    //The shape of the modal and what's in it
    // position: "relative",
    // margin: 20,
    backgroundColor: "#143109",
    borderRadius: 40,
    padding: 30,
    alignItems: "center",
    // elevation: 5,
    width: "90%",
    height: 562,
  },
  smallCard: {
    width: 170,
    height: 170,
    borderRadius: 24,
    backgroundColor: "#143109",
    margin: 10,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  text: {
    color: "#fff",
    fontFamily: "Humanist-Bold",
    fontSize: 24,
    textAlign: "center",
  },
  avatarContainer: {
    position: "absolute",
    bottom: -25,
    left: -10,
  },
  avatarImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  responseImage: {
    position: "absolute",
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  viewButton: {
    position: "absolute",
    right: 15,
    bottom: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  viewButtonText: {
    color: "#fff",
    fontFamily: "Humanist-Bold",
    fontSize: 24,
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
    borderTopColor: "white", // White border at the top
    borderBottomColor: "white", // White border at the bottom
    borderLeftWidth: 0, // No border on the left
    borderRightWidth: 0, // No border on the right
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
  holdNotLikesList: {
    marginLeft: 200,
  },
  notLikesList: {
    marginBottom: 20,
  },
  holdLikesList: {
    marginLeft: 220,
  },
  likesList: {
    marginBottom: 20,
  },
  commentsContainer: {
    flex: 1,
    color: "white",
    width: "100%",
  },
  discardButton: {
    borderColor: "#EFEFEF",
    paddingVertical: 8,
    paddingHorizontal: 10,
    position: "absolute",
    bottom: 26,
    right: -2,
  },
  textInput: {
    borderRadius: 40, // Increased border-radius for a more rounded shape
    backgroundColor: "#EFEFEF",
    paddingHorizontal: 50, // Adjust horizontal padding for width
    paddingVertical: 10,
    height: 56,
    width: 190,
    padding: 10,
    paddingTop: 14,
    fontSize: 18,
    backgroundColor: "#F5F5F5",
    fontFamily: "Humanist-Bold",
    textAlignVertical: "center",
    // includeFontPadding: false,
  },
  commentInput: {
    position: "absolute",
    bottom: 12,
    left: 28,
    zIndex: 1,
  },
  holdCommentAvatar: {
    position: "absolute",
    zIndex: 2,
    bottom: 24,
    left: 8,
  },
  commentAvatar: {},
  micIconContainer: {
    position: "absolute",
    bottom: 16,
    right: 84,
  },
  heartContainer: {
    position: "absolute",
    bottom: 16,
    right: 20,
  },
  submitButtonPress: {
    position: "absolute",
    bottom: 28,
    // left: 160,
    right: 150,
    zIndex: 2,
  },
});

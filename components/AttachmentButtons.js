import React from "react";
import { View, Pressable, StyleSheet } from "react-native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import * as DocumentPicker from "expo-document-picker";
import * as ImagePicker from "expo-image-picker";

const AttachmentButtons = () => {
  const handleTextAttachment = async () => {
    console.log("Hey! It's actually a button for text attachment");
  };

  const handleMusicAttachment = async () => {
    console.log("Hey! It's actually a button for music attachment");
  };

  const handlePictureAttachment = async () => {
    console.log("Hey! It's actually a button for picture attachment");
  };

  const handleAudioAttachment = async () => {
    console.log("Hey! It's actually a button for audio attachment");
  };

  return (
    <View style={styles.attachmentButtons}>
      <Pressable onPress={handleTextAttachment}>
        <MaterialIcons
          style={styles.iconContainer}
          name="file-upload"
          size={48}
          color="black"
        />
      </Pressable>
      <Pressable onPress={handleMusicAttachment}>
        <MaterialIcons
          style={styles.iconContainer}
          name="music-note"
          size={48}
          color="black"
        />
      </Pressable>
      <Pressable onPress={handlePictureAttachment}>
        <FontAwesome
          style={styles.iconContainer}
          name="picture-o"
          size={48}
          color="black"
        />
      </Pressable>
      <Pressable onPress={handleAudioAttachment}>
        <FontAwesome
          style={styles.iconContainer}
          name="microphone"
          size={48}
          color="black"
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  attachmentButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  iconContainer: {
    padding: 10,
  },
});

export default AttachmentButtons;

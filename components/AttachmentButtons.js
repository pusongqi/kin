import React, { useState } from "react";
import { View, Pressable, StyleSheet, Image, TouchableOpacity } from "react-native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import * as DocumentPicker from "expo-document-picker";
import * as ImagePicker from "expo-image-picker";
import { AntDesign } from "@expo/vector-icons";

const albumCover = require("../assets/images/taylorSwift.png");

const AttachmentButtons = ({
  image,
  setImage,
  file,
  setFile,
  album,
  setAlbum,
  voice,
  setVoice,
  existsFileAttach,
  setExistsFileAttach,
  existsSongAttach,
  setExistsSongAttach,
  existsPhotoAttach,
  setExistsPhotoAttach,
  existsAudioAttach,
  setExistsAudioAttach,
}) => {
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      setExistsPhotoAttach(true);
    }
  };

  const pickDocuments = async () => {
    let result = await DocumentPicker.getDocumentAsync({
      type: "application/pdf",
    });

    console.log(result);

    if (!result.canceled) {
      setFile(result.assets[0].uri);
      setExistsFileAttach(true);
    }
  };

  const pickAlbum = () => {
    setAlbum(true);
    setExistsSongAttach(true);
  };

  const pickVoice = () => {
    setVoice(true);
    setExistsAudioAttach(true);
  };

  return (
    <View style={styles.attachmentButtons}>
      <TouchableOpacity onPress={pickDocuments} style={styles.attachmentButtonStyle}>
        {file ? (
          <AntDesign name="file1" size={48} color="#73c3ff" />
        ) : (
          <MaterialIcons
            style={styles.iconContainer}
            name="file-upload"
            color="white"
            size={45}
          />
        )}
      </TouchableOpacity>
      <TouchableOpacity onPress={pickAlbum} style={styles.attachmentButtonStyle}>
        {album ? (
          <Image source={albumCover} style={styles.imagesIconContainer} />
        ) : (
          <MaterialIcons
            style={styles.iconContainer}
            name="music-note"
            color="white"
            size={45}
          />
        )}
      </TouchableOpacity>
      <TouchableOpacity onPress={pickImage} style={styles.attachmentButtonStyle}>
        {image ? (
          <Image source={{ uri: image }} style={styles.imagesIconContainer} />
        ) : (
          <FontAwesome
            style={styles.iconContainer}
            name="picture-o"
            color="white"
            size={45}
          />
        )}
      </TouchableOpacity>
      <TouchableOpacity onPress={pickVoice} style={styles.attachmentButtonStyle}>
        {voice ? (
          <MaterialIcons name="multitrack-audio" size={45} color="#73c3ff" />
        ) : (
          <FontAwesome
            style={styles.iconContainer}
            name="microphone"
            color="white"
            size={45}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  attachmentButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  imagesIconContainer: {
    padding: 10,
    width: 48,
    height: 48,
    borderRadius: 4,
  },
  attachmentButtonStyle: {
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AttachmentButtons;

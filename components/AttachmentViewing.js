import React, { useState } from "react";
import { View, Pressable, StyleSheet, Image } from "react-native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import * as DocumentPicker from "expo-document-picker";
import * as ImagePicker from "expo-image-picker";
import { AntDesign } from "@expo/vector-icons";

const albumCover = require("../assets/images/taylorSwift.png");

const AttachmentViewing = ({
  image,
  setImage,
  file,
  setFile,
  album,
  setAlbum,
  voice,
  setVoice,
}) => {
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });
    delete result.cancelled;
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const pickDocuments = async () => {
    let result = await DocumentPicker.getDocumentAsync({
      type: "application/pdf",
    });
    delete result.cancelled;
    if (!result.canceled) {
      setFile(result.assets[0].uri);
    }
  };

  const pickAlbum = () => {
    setAlbum(!album);
  };

  const pickVoice = () => {
    setVoice(!voice);
  };

  return (
    <View style={styles.attachmentButtons}>
      {file || image || voice || album ? (
        <>
          <View style={styles.attachmentButtonStyle}>
            {file ? <AntDesign name="pdffile1" size={48} color="#73c3ff" /> : null}
          </View>
          <View style={styles.attachmentButtonStyle}>
            {album ? (
              <Image source={albumCover} style={styles.imagesIconContainer} />
            ) : null}
          </View>
          <View style={styles.attachmentButtonStyle}>
            {image ? (
              <Image source={{ uri: image }} style={styles.imagesIconContainer} />
            ) : null}
          </View>
          <View style={styles.attachmentButtonStyle}>
            {voice ? (
              <MaterialIcons name="multitrack-audio" size={45} color="#73c3ff" />
            ) : null}
          </View>
        </>
      ) : null}
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

export default AttachmentViewing;
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
  existsFileAttach,
  setExistsFileAttach,
  existsSongAttach,
  setExistsSongAttach,
  existsPhotoAttach,
  setExistsPhotoAttach,
  existsAudioAttach,
  setExistsAudioAttach,
}) => {

  return (
    <View style={styles.attachmentButtons}>
      {file || image || voice || album ? (
        <>
          { existsFileAttach ? (
              <View style={styles.attachmentButtonStyle}>
                {file ? <AntDesign name="pdffile1" size={55} color="#73c3ff" /> : null}
              </View>
            ) : (
              <View/>
            )
          }

          { existsSongAttach ? (
              <View style={styles.attachmentButtonStyle}>
                {album ? (
                  <Image source={albumCover} style={styles.imagesIconContainer} />
                ) : null}
              </View>
            ) : (
              <View/>
            )
          }

          { existsPhotoAttach ? (
              <View style={styles.attachmentButtonStyle}>
                {image ? (
                  <Image source={{ uri: image }} style={styles.imagesIconContainer} />
                ) : null}
              </View>
            ) : (
              <View/>
            )
          }

          { existsAudioAttach ? (
              <View style={styles.attachmentButtonStyle}>
                {voice ? (
                  <MaterialIcons name="multitrack-audio" size={55} color="#73c3ff" />
                ) : null}
              </View>
            ) : (
              <View/>
            )
          }
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
    width: 55,
    height: 55,
    borderRadius: 4,
  },
  attachmentButtonStyle: {
    width: 60,
    height: 60,
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AttachmentViewing;

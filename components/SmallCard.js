import { StyleSheet, Image, View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useFonts } from "expo-font";

export default function SmallCard({ textMessage, user, imageInput }) {
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

  return (
    <View style={styles.smallCard}>
      <View style={styles.contentContainer}>
        <Text style={styles.text}>{textMessage}</Text>
        {imageInput && (
          <Image source={imageInput} style={styles.responseImage} />
        )}
      </View>
      <View style={styles.avatarContainer}>
        <Image source={user} style={styles.avatarImage} />
      </View>
      {}
      <TouchableOpacity style={styles.viewButton} onPress={handlePress}>
        <Text style={styles.viewButtonText}>view</Text>
        <AntDesign name="caretright" size={18} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  smallCard: {
    width: 160,
    height: 210,
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
    left: -25,
  },
  avatarImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  responseImage: {
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
});

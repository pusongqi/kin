import { StyleSheet, Image } from "react-native";
import { View, Text } from "react-native";
import { useFonts } from 'expo-font';

export default function PinkHairComment({
    commentText,
  }) {

    const [fontsLoaded] = useFonts({
    'Humanist-Bold': require('../assets/fonts/Humanist-Bold.ttf'),
    });

    if (!fontsLoaded) {
        return null;
      }
  return (
    <View style={styles.fullComment}>
        <View style={styles.avatarContainer}>
          <Image style={styles.avatar} source={require("../assets/images/PinkHairComment.png")}></Image>
        </View>
        <View style={styles.commentBubble}>
            <Text style={styles.commentText}>{commentText}</Text>
        </View>  
    </View>
  );
}

const styles = StyleSheet.create({
  commentBubble: {
    borderRadius: 40, // Increased border-radius for a more rounded shape
    backgroundColor: "#D9D9D9",
    paddingHorizontal: 50, // Adjust horizontal padding for width
    // justifyContent: 'center',
    // alignItems: 'center',
    height: 35,
    width: 285,
    marginLeft: 10,
    zIndex: 1,
  },
  commentText: {
    color: "#000000",
    fontFamily: 'Humanist-Bold',
    fontSize: 23,
  },
  fullComment: {
    width: 300, // Adjusted width to accommodate padding
    height: 220, // Adjusted height to accommodate padding
    marginBottom: -160,
  },
  avatarContainer: {
    position: 'absolute',
    top: -15,
    left: 0,
    zIndex: 2,
  },
  avatar: {
    width: 51,
    height: 51,
    objectFit: 'cover',
  }

});
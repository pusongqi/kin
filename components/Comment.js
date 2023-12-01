import { StyleSheet, Image } from "react-native";
import { View, Text } from "react-native";
import { useFonts } from 'expo-font';

export default function Comment({}) {

    const [fontsLoaded] = useFonts({
    'Humanist-Bold': require('../assets/fonts/Humanist-Bold.ttf'),
    });

    if (!fontsLoaded) {
        return null;
      }
  return (
    <View style={styles.fullComment}>
        <View style={styles.avatarContainer}>
          <Image style={styles.avatar} source={require('../assets/images/PinkHairComment.png')}></Image>
        </View>
        <View style={styles.commentBubble}>
            <Text style={styles.commentText}>sounds gross</Text>
        </View>  
    </View>
  );
}

const styles = StyleSheet.create({
  commentBubble: {
    // position: "relative",
    borderRadius: 40, // Increased border-radius for a more rounded shape
    backgroundColor: "#D9D9D9",
    // paddingVertical: 15, // Adjust vertical padding for height
    paddingHorizontal: 50, // Adjust horizontal padding for width
    // justifyContent: 'center',
    // alignItems: 'center',
    height: 35,
    width: 305,
    marginLeft: 10,
    zIndex: 1,
  },
  commentText: {
    color: "#000000",
    fontFamily: 'Humanist-Bold',
    fontSize: 23,
  },
  fullComment: {
    width: 320, // Adjusted width to accommodate padding
    height: 220, // Adjusted height to accommodate padding
    // margin: -78, // Added margin for spacing around the containers
    // position: "relative",
    marginBottom: -160,
  },
  avatarContainer: {
    position: 'absolute',
    top: -15,
    left: 0,
    // width: '100%', // Make the image take the full width of the container
    // height: '100%', // Make the image take the full height of the container
    // objectFit: 'cover', // Maintain aspect ratio while covering the container
    zIndex: 2,
  },
  avatar: {
    width: 51,
    height: 51,
    // objectFit: 'cover',
  }

});
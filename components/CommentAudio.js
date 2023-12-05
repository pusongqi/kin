import { StyleSheet, Image } from "react-native";
import { View, Text } from "react-native";
import { useFonts } from 'expo-font';
import { FontAwesome } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 


export default function Comment({commentText}) {

    const [fontsLoaded] = useFonts({
    'Humanist-Bold': require('../assets/fonts/Humanist-Bold.ttf'),
    });

    if (!fontsLoaded) {
        return null;
      }
  return (
    <View style={styles.fullComment}>
        <View style={styles.avatarContainer}>
          <Image style={styles.avatar} source={require('../assets/images/SharonIconComment.png')}></Image>
        </View>
        <View style={styles.commentBubble}>
            <FontAwesome style={styles.playButton} name="play" size={16} color="black" />
            <MaterialIcons name="multitrack-audio" size={24} color="black" />
            <MaterialIcons name="multitrack-audio" size={24} color="black" />
            <MaterialIcons name="multitrack-audio" size={24} color="black" />
            <MaterialIcons name="multitrack-audio" size={24} color="black" />
            <MaterialIcons name="multitrack-audio" size={24} color="black" />
            <MaterialIcons name="multitrack-audio" size={24} color="black" />
        </View>  
    </View>
  );
}

const styles = StyleSheet.create({
  commentBubble: {
    // position: "relative",
    display: "flex",
    flexDirection: "row",
    borderRadius: 40, // Increased border-radius for a more rounded shape
    backgroundColor: "#D9D9D9",
    paddingHorizontal: 50, // Adjust horizontal padding for width
    height: 35,
    width: 310,
    marginLeft: 0,
    zIndex: 1,
    // justifyContent: "center",
    textAlignVertical: "center",
    alignItems: "center",

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
    left: -15,
    zIndex: 2,
  },
  avatar: {
    width: 51,
    height: 51,
    // objectFit: 'cover',
  },
  playButton: {
    marginRight: 10,
  }

});
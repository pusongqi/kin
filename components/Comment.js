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
    <View>
        <View style={styles.commentBubble}>
            <Text style={styles.commentText}>sounds gross</Text>
        </View>
        
    </View>
  );
}

const styles = StyleSheet.create({
  
  commentBubble: {
    borderRadius: 40, // Increased border-radius for a more rounded shape
    backgroundColor: "#D9D9D9",
    borderWidth: 2,
    borderColor: '#EFEFEF',
    marginTop: 30,
    // paddingVertical: 15, // Adjust vertical padding for height
    paddingHorizontal: 100, // Adjust horizontal padding for width
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
  commentText: {
    color: "#000000",
    fontFamily: 'Humanist-Bold',
    fontSize: 20,
  },

});
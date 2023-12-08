import { StyleSheet, Image } from "react-native";
import { View, Text } from "react-native";
import { useFonts } from 'expo-font';

export default function headerTitle({}) {
    const [fontsLoaded] = useFonts({
    'Humanist-Bold': require('../assets/fonts/Humanist-Bold.ttf'),
    });

    if (!fontsLoaded) {
        return null;
      }
  return (
    <View>
      <View style={styles.textContainer}>
        <Text style={styles.text}> others said...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  
  text: {
    color: "#1D1B20",
    fontFamily: 'Humanist-Bold',
    fontSize: 55,
    textAlign: "left"
  },
});
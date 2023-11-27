import { StyleSheet, Image } from "react-native";
import { View, Text } from "react-native";
import { useFonts } from 'expo-font';

export default function BigCard({ placeholderImageSource }) {
  const [fontsLoaded] = useFonts({
    'Humanist-Bold': require('../assets/fonts/Humanist-Bold.ttf'),
    });

    if (!fontsLoaded) {
        return null;
      }

  return (
    <View>
      <View style={styles.bigCard}>
        <Text style={styles.text}>what is your go to recipe?</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  bigCard: {
    width: '90%',
    height: 400,
    borderRadius: 40,
    backgroundColor: "#143109",
    padding: 20,
  },
  text: {
    color: "#EFEFEF",
    fontFamily: 'Humanist-Bold',
    fontSize: 60,
  },
});

import { StyleSheet, Image } from "react-native";
import { View, Text } from "react-native";
import { useFonts } from 'expo-font';
import { Feather } from '@expo/vector-icons'; 

export default function XButton({}) {
    const [fontsLoaded] = useFonts({
    'Humanist-Bold': require('../assets/fonts/Humanist-Bold.ttf'),
    });

    if (!fontsLoaded) {
        return null;
      }
  return (
    <View>
      <View style={styles.button}>
        <Feather name="x" size={30} color="#EFEFEF" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  
  button: {
    // color: "#1D1B20",
    // position: 'absolute',
    top: -15,
    left: 145,
    // padding: 10,
  },

});
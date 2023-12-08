import { StyleSheet, Image } from "react-native";
import { View, Text } from "react-native";
import { useFonts } from 'expo-font';

export default function HeaderTitle({}) {
    const [fontsLoaded] = useFonts({
    'Humanist-Bold': require('../assets/fonts/Humanist-Bold.ttf'),
    });

    if (!fontsLoaded) {
        return null;
      }
  return (
    <View>
      <View style={styles.headerTitle}>
        <Image source={require('../assets/images/SharonIcon.png')}></Image>
        <Text style={styles.text}> Hi Sharon,</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "#1D1B20",
    fontFamily: 'Humanist-Bold',
    fontSize: 58,
  },

  headerTitle: {
    flexDirection: "row",
  },
});
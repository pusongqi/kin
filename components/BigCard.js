import { StyleSheet, Image } from "react-native";
import { View, Text } from "react-native";

export default function BigCard({ placeholderImageSource }) {
  return (
    <View>
      <View style={styles.bigCard}>
        <Text style={styles.text}>What is your go to recipe?</Text>
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
    borderRadius: 24,
    backgroundColor: "#143109",
    padding: 20,
  },
  text: {
    color: "#EFEFEF",
    fontFamily: 'Humanist-Bold',
    fontSize: 60,
  },
});

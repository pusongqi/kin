import { StyleSheet, Image } from "react-native";
import { View, Text } from "react-native";

export default function SmallCard({ textMessage }) {
  return (
    <View>
      <View style={styles.smallCard}>
        <Text style={styles.text}>answer...</Text>
        <Text style={styles.text}>{textMessage}</Text>
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
  smallCard: {
    width: 160,
    height: 160,
    borderRadius: 24,
    backgroundColor: "#143109",
    padding: 20,
    margin: 10,
  },
  text: {
    color: "#fff",
  },
});

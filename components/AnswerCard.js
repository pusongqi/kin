import { StyleSheet, Image, TouchableOpacity } from "react-native";
import { View, Text } from "react-native";
import { useFonts } from "expo-font";

export default function AnswerCard({}) {
  //NOT YET IN USE -- EVENTUALLY SHOULD MOVE EVERYTHING FROM BIG CARD OVER TO HERE, BUT IT'S COMPLICATED FROM A STATE PERSPECTIVE
  const [fontsLoaded] = useFonts({
    "Humanist-Bold": require("../assets/fonts/Humanist-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View>
      <TouchableOpacity onPress={() => setSimpleTaskModalState(!simpleTaskModalState)}>
        <XButton />
      </TouchableOpacity>

      <Text>what is your go-to recipe?</Text>
      <TextInput
        style={styles.modalInput}
        onChangeText={setSimpleTaskInputInfo}
        value={simpleTaskInputInfo}
      />
      <Text>Likes</Text>
      <Text>uncle's reply</Text>
      <Text>mom's reply</Text>
      <Text>grandma's reply</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "#1D1B20",
    fontFamily: "Humanist-Bold",
    fontSize: 55,
  },
});

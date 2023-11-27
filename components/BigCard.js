import { StyleSheet, Image, Button, Pressable, Modal, TextInput } from "react-native";
import { View, Text } from "react-native";
import { useFonts } from "expo-font";

// The modal template here is inspired from https://reactnative.dev/docs/modal
export default function BigCard({
  simpleTaskModalState,
  setSimpleTaskModalState,
  simpleTaskInputInfo,
  setSimpleTaskInputInfo,
  simpleTaskSubmission,
  setSimpleTaskSubmission,
}) {
  const [fontsLoaded] = useFonts({
    "Humanist-Bold": require("../assets/fonts/Humanist-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Pressable onPress={() => setSimpleTaskModalState(!simpleTaskModalState)}>
      <View style={styles.bigCard}>
        <Modal
          visible={simpleTaskModalState}
          transparent={true}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setSimpleTaskModalState(!simpleTaskModalState);
          }}
        >
          <View style={styles.centeredView}>
            {!simpleTaskSubmission ? (
              <View style={styles.modalView}>
                <Button
                  title="Click to go back home"
                  color={"#fff"}
                  style={styles.closeButton}
                  onPress={() => setSimpleTaskModalState(!simpleTaskModalState)}
                ></Button>
                <Text style={styles.modalText}>Input your message below</Text>
                <TextInput
                  style={styles.modalInput}
                  onChangeText={setSimpleTaskInputInfo}
                  value={simpleTaskInputInfo}
                />
                <Button
                  title="Submit"
                  color={"#fff"}
                  style={styles.closeButton}
                  onPress={() => {
                    setSimpleTaskModalState(!simpleTaskModalState);
                    setSimpleTaskSubmission(true);
                  }}
                ></Button>
              </View>
            ) : (
              <View style={styles.modalView}>
                <Button
                  title="Click to go back home"
                  color={"#fff"}
                  style={styles.closeButton}
                  onPress={() => setSimpleTaskModalState(!simpleTaskModalState)}
                ></Button>
                <Text>question</Text>
                <Text>what is your fav recipe?</Text>
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
            )}
          </View>
        </Modal>

        <Text style={styles.text}>Today's question</Text>
        <Text style={styles.text}>What is your go to recipe?</Text>
        {!simpleTaskSubmission ? (
          <Text style={styles.submissionStatusText}>click to submit your answer</Text>
        ) : (
          <Text style={styles.submissionStatusText}>click to see your answer</Text>
        )}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  bigCard: {
    width: "90%",
    height: 400,
    borderRadius: 40,
    backgroundColor: "#143109",
    padding: 20,
  },
  text: {
    color: "#EFEFEF",
    fontFamily: "Humanist-Bold",
    fontSize: 60,
  },
  submissionStatusText: {
    color: "#fff",
    fontSize: 20,

    padding: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "green",
    borderRadius: 20,
    padding: 35,
    width: 350,
    height: 650,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  modalInput: {
    width: 200,
    height: 100,
    backgroundColor: "#fff",
  },
  closeButton: {
    backgroundColor: "#",
    width: 100,
    height: 100,
    borderRadius: 20,
    color: "black",
  },
  submissionStatusText: {
    color: "#fff",
    fontSize: 20,

    padding: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "green",
    borderRadius: 20,
    padding: 35,
    width: 350,
    height: 650,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  modalInput: {
    width: 200,
    height: 100,
    backgroundColor: "#fff",
  },
  closeButton: {
    backgroundColor: "#",
    width: 100,
    height: 100,
    borderRadius: 20,
    color: "black",
  },
});

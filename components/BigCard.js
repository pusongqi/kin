import { StyleSheet, Image, Button, Pressable, Modal, TextInput } from "react-native";
import { View, Text } from "react-native";
import { useFonts } from "expo-font";
// import { ThreeSixtyIcon } from "@mui/icons-material/ThreeSixty";
import XButton from "./XButton.js";
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons'; 



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
          <View style={styles.container}>
            {!simpleTaskSubmission ? (
              <View style={styles.modalView}>
                <Pressable onPress={() => setSimpleTaskModalState(!simpleTaskModalState)}>
                  <XButton/>
                </Pressable>
                
                <Text style={styles.modalText}>what is your go-to recipe?</Text>
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
                <Pressable onPress={() => setSimpleTaskModalState(!simpleTaskModalState)}>
                  <XButton/>
                </Pressable>
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

        <Text style={styles.bigText}>what is your go to recipe?</Text>
        {!simpleTaskSubmission ? (
          <View style={styles.buttonView}>
            <Text style={styles.submissionStatusText}>answer</Text>
            <AntDesign name="caretright" size={20} color="#EFEFEF" />
          </View>
          
        ) : (
          <View>
            <Text style={styles.submissionStatusText}>view</Text>
          </View>
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
  container: {
    // don't actually need to use yet
  },
  bigCard: {
    width: "90%",
    height: 400,
    borderRadius: 40,
    backgroundColor: "#143109",
    padding: 20,
  },
  bigText: {
    color: "#EFEFEF",
    fontFamily: "Humanist-Bold",
    fontSize: 60,
    textAlign: 'center',
    marginTop: 15,
    padding: 30,
  },
  buttonView: {
    display: 'flex',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    right: 0,
    marginBottom: 10,
    marginright: 10,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
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
    fontSize: 32,
    color: "#EFEFEF",
    fontFamily: "Humanist-Bold",
    marginBottom: 7, //this centers it as much as possible somehow lol
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "#143109",
    borderRadius: 20,
    padding: 35,
    width: 350,
    height: 650,
    alignItems: "center",
    elevation: 5,
  },
  modalText: {
    color: "#EFEFEF",
    fontFamily: 'Humanist-Bold',
    fontSize: 50,
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

import { StyleSheet, Image, Button, Pressable, Modal, TextInput } from "react-native";
import { View, Text } from "react-native";
import { useFonts } from 'expo-font';
import XButton from "./XButton.js";

export default function SubmitPrompt({
    submitPromptModal,
    setSubmitPromptModal,
}) {
    const [fontsLoaded] = useFonts({
    'Humanist-Bold': require('../assets/fonts/Humanist-Bold.ttf'),
    });

    if (!fontsLoaded) {
        return null;
      }
  return (
    <View style={styles.buttonPosition}>
        
        <Modal
          visible={submitPromptModal}
          transparent={true}
        >
            <View style={styles.testingBorder}>
                <View style={styles.modalView}>
                    
                    <Pressable onPress={() => setSubmitPromptModal(false)}>
                        <XButton/>
                    </Pressable>
                    <Text style={styles.submitPromptText}>Thank you for submitting a prompt! come back tomorrow to check if it’s been asked.</Text>
                </View>
            </View>
        </Modal>
      <Pressable 
        onPress={() => setSubmitPromptModal(true)} 
        style={styles.buttonOutline}>
        <Text style={styles.buttonText}>Propose a prompt</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  
  buttonOutline: {

    borderRadius: 40, // Increased border-radius for a more rounded shape
    borderWidth: 2,
    borderColor: '#EFEFEF',
    marginTop: 30,
    paddingVertical: 12, // Adjust vertical padding for height
    paddingHorizontal: 18, // Adjust horizontal padding for width
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: "#EFEFEF",
    fontFamily: "Humanist-Bold",
  },
  buttonPosition: {
    position: "absolute",
    right: 25,
    bottom: 25,
  },
  testingBorder: {
    flex: 1,
    justifyContent: "center", //center vertically
    alignItems: "center", //center horizontally
  },
  modalView: {
    margin: 20,
    backgroundColor: "#143109",
    borderRadius: 20,
    padding: 30,
    alignItems: "center",
    // elevation: 5,
    width: "90%",
    height: 562,
  },
  submitPromptText: {
    fontSize: 25,
    color: "#EFEFEF",
    fontFamily: "Humanist-Bold",
    textAlign: "center",
  }

});
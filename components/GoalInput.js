import { useState } from "react";
import { StyleSheet, TextInput, View, Button } from "react-native";

const GoalInput = (props) => {
  const [enterGoalText, setEnterGoalText] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnterGoalText(enteredText);
    console.log(enterGoalText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enterGoalText);
    setEnterGoalText("");
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your goal"
        onChangeText={goalInputHandler}
        value={enterGoalText}
      />
      <Button title="Add goal" onPress={addGoalHandler} />
    </View>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "78%",
    padding: 8,
  },
  inputContainer: {
    flex: 0.25,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
});

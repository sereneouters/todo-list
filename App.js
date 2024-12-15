import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  Pressable,
  View,
  Platform,
  Keyboard,
} from "react-native";
import Task from "./components/Task";

export default function App() {
  const [task, setTask] = useState("");
  const [taskItems, setTaskItems] = useState([]);
  const handleAddTask = () => {
    if (task.trim() === "") return;
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask("");
  };

  const completeTask = (index) => {
    let itemCopy = [...taskItems];
    itemCopy.splice(index, 1);
    setTaskItems(itemCopy);
  };

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Список дел</Text>

        <View style={styles.items}>
          {taskItems.map((item, index) => {
            return (
              <Pressable
                key={index}
                onPress={() => {
                  completeTask(index);
                }}
              >
                <Task text={item} />
              </Pressable>
            );
          })}
        </View>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "android" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder={"Написать задание"}
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        <Pressable onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </Pressable>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(190 190 190)",
  },
  tasksWrapper: { paddingTop: 80, paddingHorizontal: 20, fontSize: 18 },
  items: { marginTop: 30 },

  writeTaskWrapper: {
    position: "absolute",
    bottom: 40,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  addText: {
    fontSize: 30,
    color: "black",
    marginBottom: 5,
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    width: 250,
  },
  sectionTitle:{
    color: "black",
    fontSize: 30,
    textAlign: "center",
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",

  },
});

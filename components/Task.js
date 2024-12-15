import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Task = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}>
          
        </View>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <View style={styles.circular}></View>
    </View>
  );
};

export default Task;

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  itemLeft: { flexDirection: "row", alignItems: "center", flexWrap: "wrap" },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "rgb(63 63 63)",
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: "80%",
  },
  circular: {
    width: 20,
    height: 3,
    backgroundColor: "black", 
    borderRadius: 5,
  },
});

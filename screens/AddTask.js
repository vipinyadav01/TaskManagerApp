import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

export default function AddTask({ route, navigation }) {
  const { setTasks } = route.params;
  const [task, setTask] = useState("");

  const handleAdd = () => {
    setTasks((prev) => [...prev, task]);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Enter task" value={task} onChangeText={setTask} style={styles.input} />
      <Button title="Add Task" onPress={handleAdd} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  input: { borderWidth: 1, padding: 10, marginVertical: 10, borderRadius: 8 },
});

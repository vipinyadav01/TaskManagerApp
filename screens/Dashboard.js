import { useState } from "react";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Dashboard({ user, navigation }) {
  const [tasks, setTasks] = useState([]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {user.photoURL ? (
          <Image source={{ uri: user.photoURL }} style={styles.avatar} />
        ) : (
          <Image source={{ uri: `https://i.pravatar.cc/150?u=${user.uid}` }} style={styles.avatar} />
        )}
        <Text style={styles.email}>{user.email}</Text>
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={styles.task}>{item}</Text>}
        ListEmptyComponent={<Text>No tasks yet</Text>}
      />
      <TouchableOpacity style={styles.addBtn} onPress={() => navigation.navigate("AddTask", { setTasks })}>
        <Text style={{ color: "white", fontSize: 20 }}>＋</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { flexDirection: "row", alignItems: "center", marginBottom: 20 },
  avatar: { width: 40, height: 40, borderRadius: 20, marginRight: 10 },
  email: { fontSize: 16, fontWeight: "600" },
  task: { fontSize: 18, padding: 10, backgroundColor: "#eee", marginVertical: 5, borderRadius: 8 },
  addBtn: { position: "absolute", bottom: 30, right: 30, backgroundColor: "#6200ee", padding: 20, borderRadius: 50 },
});

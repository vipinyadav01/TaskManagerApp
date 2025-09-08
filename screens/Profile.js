import { signOut } from "firebase/auth";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import { auth } from "../firebaseConfig";

export default function Profile({ navigation }) {
  const user = auth.currentUser;

  return (
    <View style={styles.container}>
      <Image source={{ uri: user.photoURL || `https://i.pravatar.cc/150?u=${user.uid}` }} style={styles.avatar} />
      <Text style={styles.email}>{user.email}</Text>
      <Button title="Settings" onPress={() => navigation.navigate("Settings")} />
      <Button title="Logout" onPress={() => signOut(auth)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  avatar: { width: 80, height: 80, borderRadius: 40, marginBottom: 20 },
  email: { fontSize: 18, marginBottom: 20 },
});

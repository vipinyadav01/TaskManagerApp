import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>TaskManager</Text>
      <ActivityIndicator size="large" color="#6200ee" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff" },
  logo: { fontSize: 32, fontWeight: "bold", marginBottom: 20, color: "#6200ee" }
});

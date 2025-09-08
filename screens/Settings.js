import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { StyleSheet, Switch, Text, View } from "react-native";

export default function Settings() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem("theme").then((val) => {
      if (val) setDark(val === "dark");
    });
  }, []);

  const toggleTheme = () => {
    const newTheme = !dark ? "dark" : "light";
    setDark(!dark);
    AsyncStorage.setItem("theme", newTheme);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Dark Mode</Text>
      <Switch value={dark} onValueChange={toggleTheme} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 20 },
  text: { fontSize: 18 },
});

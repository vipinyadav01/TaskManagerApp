import { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import CustomButton from "../components/CustomButton";
import InputField from "../components/InputField";
import { signup } from "../services/authService";
import { validateEmail, validatePassword } from "../utils/validators";

export default function SignupScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = async () => {
    if (!validateEmail(email)) {
      return Alert.alert("Invalid Email", "Please enter a valid email address.");
    }
    if (!validatePassword(password)) {
      return Alert.alert("Weak Password", "Password must be at least 6 characters long.");
    }
    if (password !== confirmPassword) {
      return Alert.alert("Password Mismatch", "Passwords do not match.");
    }

    try {
      await signup(email, password);
      // Firebase automatically logs in the user after signup
    } catch (error) {
      Alert.alert("Signup Failed", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>

      <InputField placeholder="Email" value={email} onChangeText={setEmail} />
      <InputField placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} />
      <InputField placeholder="Confirm Password" secureTextEntry value={confirmPassword} onChangeText={setConfirmPassword} />

      <CustomButton title="Sign Up" onPress={handleSignup} />

      <Text style={styles.link} onPress={() => navigation.navigate("Login")}>
        Already have an account? Log in
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
  link: { marginTop: 20, textAlign: "center", color: "blue" },
});

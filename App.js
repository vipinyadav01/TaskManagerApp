import "react-native-gesture-handler";
import { AuthProvider } from "./constants/AuthContext";
import AppNavigator from "./navigation/AppNavigator";

export default function App() {
  return (
    <AuthProvider>
      <AppNavigator />
    </AuthProvider>
  );
}

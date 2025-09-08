import { DarkTheme, DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "./firebaseConfig";

import AddTask from "./screens/AddTask";
import Dashboard from "./screens/Dashboard";
import LoginScreen from "./screens/LoginScreen";
import Profile from "./screens/Profile";
import Settings from "./screens/Settings";
import SignupScreen from "./screens/SignupScreen";
import SplashScreen from "./screens/SplashScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (usr) => {
      setUser(usr);
      setLoading(false);
    });
    return unsub;
  }, []);

  if (loading) return <SplashScreen />;

  return (
    <NavigationContainer theme={user?.theme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack.Navigator>
        {user ? (
          <>
            <Stack.Screen name="Dashboard" options={{ headerShown: false }}>
              {() => <Dashboard user={user} />}
            </Stack.Screen>
            <Stack.Screen name="AddTask" component={AddTask} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Settings" component={Settings} />
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Signup" component={SignupScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

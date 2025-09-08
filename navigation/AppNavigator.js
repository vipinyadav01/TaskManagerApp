import { DarkTheme, DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useAuth } from "../constants/AuthContext";

import AddTask from "../screens/AddTask";
import Dashboard from "../screens/Dashboard";
import LoginScreen from "../screens/LoginScreen";
import Profile from "../screens/Profile";
import Settings from "../screens/Settings";
import SignupScreen from "../screens/SignupScreen";
import SplashScreen from "../screens/SplashScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  const { user, loading } = useAuth();

  if (loading) return <SplashScreen />;

  return (
    <NavigationContainer theme={user?.theme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          <>
            <Stack.Screen name="Dashboard">
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

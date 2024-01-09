import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { StyleSheet, Text } from "react-native";
import { RestaurantScreen } from "./assets/src/features/restaurants/screens/restaurants.screen";
import { theme } from "./assets/src/infrastructure/theme";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { SafeView } from "./assets/src/components/Utility/safearea.component";
import { Ionicons } from "@expo/vector-icons";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

const Tab = createBottomTabNavigator();
const SettingsScreen = () => (
  <SafeView>
    <Text>Settings</Text>
  </SafeView>
);
const MapsScreen = () => (
  <SafeView>
    <Text>Maps Screen</Text>
  </SafeView>
);
export default function App() {
  let [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  let [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ color, size }) => {
                let iconName;

                if (route.name === "Restaurants") {
                  iconName = "restaurant";
                } else if (route.name === "Settings") {
                  iconName = "settings";
                } else if (route.name === "Maps") {
                  iconName = "md-map-sharp";
                }

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: "tomato",
              tabBarInactiveTintColor: "gray",
            })}
          >
            <Tab.Screen name="Restaurants" component={RestaurantScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
            <Tab.Screen name="Maps" component={MapsScreen} />
          </Tab.Navigator>
        </NavigationContainer>
        <ExpoStatusBar style={styles.statusbar} />
      </>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  statusbar: {
    style: "auto",
  },
});

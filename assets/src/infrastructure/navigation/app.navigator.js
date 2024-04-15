import React, { useContext } from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Text, Button } from "react-native";
import { Animated } from "react-native";
import { SafeView } from "../../components/Utility/safearea.component";
import { RestaurantsNavigator } from "./restaurants.navigator";
import { MapScreen } from "../../features/map/screens/map.screen";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
import { RestaurantsContextProvider } from "../../services/restaurants/restaurants.context";
import { LocationContextProvider } from "../../services/restaurants/location/location.context";
import { FavouritesContextProvider } from "../../services/favourites/favourites.context";

const av = new Animated.Value(0);
av.addListener(() => {
  return;
});
const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: "restaurant",
  Settings: "settings",
  Maps: "md-map-sharp",
};
const SettingsScreen = () => {
  const { onLogout } = useContext(AuthenticationContext);
  return (
    <SafeView>
      <Text>Settings</Text>
      <Button title="logout" onPress={() => onLogout()} />
    </SafeView>
  );
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

export const AppNavigator = () => (
  <FavouritesContextProvider>
    <LocationContextProvider>
      <RestaurantsContextProvider>
        <Tab.Navigator screenOptions={createScreenOptions}>
          <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
          <Tab.Screen name="Maps" component={MapScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </RestaurantsContextProvider>
    </LocationContextProvider>
  </FavouritesContextProvider>
);

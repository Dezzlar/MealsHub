import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { StyleSheet } from "react-native";
import { theme } from "./assets/src/infrastructure/theme";

import { RestaurantsContextProvider } from "./assets/src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./assets/src/services/restaurants/location/location.context";
import { Navigation } from "./assets/src/infrastructure/navigation";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

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
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <Navigation />
          </RestaurantsContextProvider>
        </LocationContextProvider>
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

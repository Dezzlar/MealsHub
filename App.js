import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { StyleSheet } from "react-native";
import { theme } from "./assets/src/infrastructure/theme";

import { Navigation } from "./assets/src/infrastructure/navigation";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { AuthenticationContextProvider } from "./assets/src/services/authentication/authentication.context";

const firebaseConfig = {
  apiKey: "AIzaSyDr0zNCzj6RIvK5BCcaOatZ6VCnEHfG6fc",
  authDomain: "mealshub-f51cb.firebaseapp.com",
  projectId: "mealshub-f51cb",
  storageBucket: "mealshub-f51cb.appspot.com",
  messagingSenderId: "45660916290",
  appId: "1:45660916290:web:3b3116b96d4f3506923bdb",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

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
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style={styles.statusbar} />
    </>
  );
}

const styles = StyleSheet.create({
  statusbar: {
    style: "auto",
  },
});

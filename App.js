//import LoginScreen from "./src/App/screens/LoginScreen";

import { SafeAreaProvider } from "react-native-safe-area-context";
//import ForgotPasswScreen from "./src/App/screens/ForgotPasswScreen";

//import InfoScreen from "./src/App/screens/InfoScreen";

//import { SafeAreaProvider } from "react-native-safe-area-context";
import ResetPasswScreen from "./src/App/screens/ResetPasswScreen";

export default function App() {
  return (
    <SafeAreaProvider>
      <ResetPasswScreen />
    </SafeAreaProvider>
  );
}

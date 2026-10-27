import { SafeAreaProvider } from "react-native-safe-area-context";

//import InfoScreen from "./src/App/screens/InfoScreen";
//import CreateYourAccount from "./src/App/screens/CreateYourAccount";
//import ForgotPasswScreen from "./src/App/screens/ForgotPasswScreen";       
//import ResetPasswScreen from "./src/App/screens/ResetPasswScreen";
//import ForgotPasswScreen from "./src/App/screens/ForgotPasswScreen";
//import HomeScreen from "./src/App/screens/HomeScreen";
import RegisterItemScreen from "./src/App/screens/RegisterItemScreen";
//import RegisterExitScreen from "./src/App/screens/RegisterExitScreen";
//import ViewStockScreen from "./src/App/screens/ViewStockScreen";
//import ScannerScreen from "./src/App/screens/ScannerScreen";
//import ReportScreen from "./src/App/screens/ReportScreen";
//import ProfileScreen from "./src/App/screens/ProfileScreen";
//import RegisterExitScreen from "./src/App/screens/RegisterExitScreen";
//import { SafeAreaProvider } from "react-native-safe-area-context";
//import ResetPasswScreen from "./src/App/screens/ResetPasswScreen";

export default function App() {
  return (
    <SafeAreaProvider>
      <RegisterItemScreen/>
    </SafeAreaProvider>
  );
}

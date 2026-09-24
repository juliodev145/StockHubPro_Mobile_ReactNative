//import LoginScreen from "./src/App/screens/LoginScreen";

import { SafeAreaProvider } from "react-native-safe-area-context";
import ForgotPasswScreen from "./src/App/screens/ForgotPasswScreen";

//import InfoScreen from "./src/App/screens/InfoScreen";

//import { SafeAreaProvider } from "react-native-safe-area-context";



export default function App(){

    return (
      <SafeAreaProvider>
        <ForgotPasswScreen/>
      </SafeAreaProvider>
    )
    
    

  
 
  
}
import { Text, View } from "react-native";

const BG_COLOR = "#0045C4";
const TEXT_COLOR = "#FFFFFF"

export default function Header(){
    return(
        <View>
            <Text>
                StockHub Pro
            </Text>

            <Text>
                A gestão do seu estoque 
            </Text>
        </View>
    )
}
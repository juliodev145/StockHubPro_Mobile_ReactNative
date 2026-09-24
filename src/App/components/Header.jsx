import { StatusBar } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const BG_COLOR = "#0045C4";
const TEXT_COLOR = "#FFFFFF";

export default function Header() {
    return (
        <View style={styles.header}>

            <StatusBar
                barStyle="light-content"    //statusbar claro
                backgroundColor={BG_COLOR}
                translucent={false}         //statusbar transparente
            />

            <SafeAreaView edges={"bottom"}>
                <View style={styles.content}>

                    <Text style={styles.title}>
                        StockHub Pro
                    </Text>

                    <Text style={styles.subtitle}>
                        A gestão do seu estoque
                    </Text>

                </View>
            </SafeAreaView>

        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: BG_COLOR,
    },

    content: {
        height: 110,
        alignItems: "center",
        justifyContent: "center",
    },

    title: {
        color: TEXT_COLOR,
        fontSize: 30,
        fontWeight: "500",
        marginTop: 15,
    },

    subtitle: {
        color: TEXT_COLOR,
        fontSize: 20,
        marginTop: 20,
        marginBottom: 20,
        lineHeight: 26,
    },
});
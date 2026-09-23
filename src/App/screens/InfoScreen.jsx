import { StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";

const COLOR_TITLE = "#2C4A8C";

export default function InfoScreen() {
    return(
        <View style={styles.container}>

            <Header/>

            <View style={styles.content}>

                {/**Icone */}

                <View>
                    <Text style={styles.title}>
                        Quem somos?
                    </Text>
                
                    <Text style={styles.text}>
                        Somos uma empresa especializada no desenvolvimento de soluções tecnológicas para gestão de estoque.
                    </Text>
                
                    <Text style={styles.text}>
                        Nosso objetivo é ajudar empresas aorganizar, controlar e otimizar seus produtos de forma simples, eficiente esegura.
                    </Text>

                    <Text style={styles.title}>
                        Suporte e Atendimento
                    </Text>

                    <Text style={styles.text}>
                        Precisa de ajuda com o sistema?
                    </Text>

                    <Text style={styles.text}>
                        Telefone {"\n"}
                        (21) 3000-0000 {"\n"}
                        {"\n"}
                        WhatsApp {"\n"}
                        (21) 98888-0000
                    </Text>

                    <Text style={styles.text}>
                        Nossa equipe está pronta para atendervocê e esclarecer suas dúvidas.
                    </Text>
                
                </View>

            </View>

            {/**Navegação */}

        </View>
    )
}

const styles = StyleSheet.create({
    title:{
        color: COLOR_TITLE,
        fontSize: 20,
        fontWeight: 600,
        marginTop: 10,
    }, 
    content:{
        paddingHorizontal: 25,
        paddingVertical: 30,
    },
    text:{
        fontSize: 16,
        marginTop: 10,
    },
    container:{
        flex: 1,
    },
})
import React, { useState } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    TextInput,
    Image,
    ImageBackground,
    Button
} from 'react-native';

import themes from '../../../global/themes';
import { AntDesign, Octicons } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';

export default function Login(){
    const [text, setText] = useState("")
    const [senha, setSenha] = useState("")

    return(
        <View style={styles.container}>
            <ImageBackground
                source={require('../../assets/images/cidadeNoite.png')}
                style={styles.backgroundImage}
                imageStyle={{opacity: 0.6}}
            >
                <View style={styles.header}>
                    <Image 
                        source={require('../../assets/images/logoLogin.png')}
                        resizeMode="contain"
                        style={styles.imagem}
                    />
                </View>
                <View>
                    <View style={styles.linha}>
                        <AntDesign 
                            name="user"
                            size={22}
                            color="#000"
                        />
                        <TextInput
                            placeholder="Nome"
                            onChangeText={setText}
                            style={styles.input}
                            placeholderTextColor="#000"
                        />
                    </View>
                    <View style={styles.linha}>
                        <Octicons name="shield" size={24} color="black" />
                        <TextInput
                            placeholder="Senha"
                            onChangeText={setSenha}
                            style={styles.input}
                            placeholderTextColor="#000"
                        />
                    </View>
                    <RectButton
                        style={styles.loginButton}
                    >
                        <Text>Entrar</Text>
                    </RectButton>
                </View>
                <Text
                    style={styles.createAccountText}
                >
                    Não possui uma conta ainda? Crie uma!
                </Text>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    container: {
        flex: 1,
        backgroundColor: themes.colors.primary,
    },
    header: {
        height: 100,
    },
    texto: {
        color: themes.colors.primary,
        fontSize: 20
    },
    input: {
        width: 240,
        height: 55,
        paddingHorizontal: 15,
        paddingVertical: 20,
    },
    linha: {
        flexDirection: 'row',
        marginBottom: 25,
        width: 250,
        height: 50,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#ccc',
        paddingHorizontal: 10,
        opacity: 0.8
    },
    login: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 50
    },
    loginButton: {
        backgroundColor: themes.colors.buttonColor,
        height: 35,
        width: 240,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    createAccountText: {
        color: 'white',
        fontSize: 16,
    },
    imagem: {
        height: 100,
    }
})
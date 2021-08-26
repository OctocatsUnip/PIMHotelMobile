import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

export default function Login(){
    const [text, setText] = useState("")
    const [senha, setSenha] = useState("")

    return(
        <View style={styles.container}>
            <Text style={styles.login}>Login</Text>
            <View style={styles.linha}>
                <Text>Usuário: </Text>
                <TextInput
                    placeholder="Nome"
                    onChangeText={setText}
                    style={styles.input}
                    placeholderTextColor="#000"
                />
            </View>
            <View style={styles.linha}>
                <Text>Senha: </Text>
                <TextInput
                    placeholder="Senha"
                    onChangeText={setSenha}
                    style={styles.input}
                    placeholderTextColor="#000"
                />
            </View>
            <Text>{text}</Text>
            <Text>{senha}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    texto: {
        color: '#fff',
        fontSize: 20
    },
    input: {
        width: 180,
        height: 30,
        backgroundColor: '#ccc',
        padding: 5
    },
    linha: {
        flexDirection: 'row',
        marginBottom: 10,
        width: 250,
        height: 50,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    login: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 50
    }
})
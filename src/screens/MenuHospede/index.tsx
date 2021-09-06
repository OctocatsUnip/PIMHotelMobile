import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    SafeAreaView,
    ScrollView,
    StatusBar,
    View,
    ImageBackground,
    Image
} from 'react-native';

import themes from '../../../global/themes';
import { RectButton } from 'react-native-gesture-handler';
import { Entypo } from '@expo/vector-icons';

export default function MenuLogado() {

    const [page, setPage] = useState("1 2")

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.header}>
                    <StatusBar
                        translucent
                        backgroundColor="#000"
                    // barStyle="light-content"
                    />
                    <ImageBackground
                        source={require('../../assets/images/cabecalhoHotel.png')}
                        style={styles.backgroundImage}
                        imageStyle={{ opacity: 0.4 }}
                    >
                        <Entypo style={styles.menuSideBarButton}
                            name="menu"
                            size={36}
                            color="white"
                            onPress={() => { alert("you clicked me") }}
                        />
                    </ImageBackground>
                </View>
                <View>
                    <View style={styles.rooms}>
                        <Text style={styles.roomHeader}>
                            Meus quartos
                        </Text>
                        <View style={styles.roomsArea}>
                            <Image
                                source={require('../../assets/images/quarto1.png')}
                                resizeMode="contain"
                                style={styles.roomImage}
                            />
                            <View style={{ flex: 1, alignItems: 'center' }}>
                                <Text style={styles.roomsDescription}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat blandit ipsum dolor sit amet, consectetur adipiscing elit. Consequat blandit
                                </Text>
                                <RectButton
                                    style={styles.serviceButton}
                                    onPress={() => { alert("Quarto 1") }}
                                >
                                    <Text style={styles.textButton}>Serviços</Text>
                                </RectButton>
                            </View>
                        </View>
                        <View style={styles.roomsArea}>
                            <Image
                                source={require('../../assets/images/quarto2.png')}
                                resizeMode="contain"
                                style={styles.roomImage}
                            />
                            <View style={{ flex: 1, alignItems: 'center' }}>
                                <Text style={styles.roomsDescription}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat blandit ipsum dolor sit amet, consectetur adipiscing elit. Consequat blandit
                                </Text>
                                <RectButton
                                    style={styles.serviceButton}
                                    onPress={() => { alert("Quarto 2") }}
                                >
                                    <Text style={styles.textButton}>Serviços</Text>
                                </RectButton>
                            </View>
                        </View>
                        <View style={styles.page}>
                            <Text style={styles.pagesNumber}>
                                -- {page} --
                            </Text>
                            <Text>
                                ______________________________________________
                            </Text>
                        </View>
                    </View>
                    <View style={styles.newsletter}>
                        <Text style={styles.newsletterHeader}>
                            Últimas Notícias
                        </Text>
                        <View style={styles.newsletterArea}>
                            <Image
                                source={require('../../assets/images/newsletter1.png')}
                                resizeMode="contain"
                                style={styles.newsletterImage}
                            />
                            <View
                                style={{
                                    flex: 1,
                                    alignItems: 'center',
                                    paddingHorizontal: 10,
                                }}
                            >
                                <Text style={styles.newsletterTitle}>
                                    LOREM IPSUM
                                </Text>
                                <Text style={styles.newsletterDescription}>
                                    Lorem ipsum dolor sit amet, consectetur...
                                </Text>
                            </View>
                        </View>
                        <Image
                            source={require('../../assets/images/covid.png')}
                            resizeMode="stretch"
                            style={styles.bannerImage}
                        />
                        <View style={styles.newsletterArea}>
                            <Image
                                source={require('../../assets/images/newsletter2.png')}
                                resizeMode="contain"
                                style={styles.newsletterImage}
                            />
                            <View
                                style={{
                                    flex: 1,
                                    alignItems: 'center',
                                    paddingHorizontal: 10,
                                }}
                            >
                                <Text style={styles.newsletterTitle}>
                                    LOREM IPSUM
                                </Text>
                                <Text style={styles.newsletterDescription}>
                                    Lorem ipsum dolor sit amet, consectetur...
                                </Text>
                            </View>
                        </View>
                        <View style={{
                                    flex: 1,
                                    alignItems: 'center',
                                }}>
                            <RectButton
                                style={styles.newsletterButton}
                                onPress={() => { alert("Saiba Mais!") }}
                                >
                                <Text style={styles.textButton}>Saiba Mais!</Text>
                            </RectButton>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
    },
    header: {
        backgroundColor: "#000",
        height: 80,
        marginBottom: 100,
    },
    backgroundImage: {
        flex: 1,
        justifyContent: 'space-around',
    },
    menuSideBarButton: {
        width: 35,
        height: 35,
        alignItems: 'flex-start',
        marginLeft: 10,
    },
    scrollView: {
        backgroundColor: "white",
    },
    roomHeader: {
        fontSize: 20,
        fontWeight: "bold"
    },
    rooms: {
        marginLeft: 20,
    },
    roomsArea: {
        marginTop: 20,
        marginBottom: 30,
        flexDirection: 'row',
    },
    roomImage: {
    },
    roomsDescription: {
        fontSize: 16,
        marginLeft: 18,
        marginRight: 18,
        flexGrow: 1,
        flex: 1,
    },
    serviceButton: {
        backgroundColor: "#4B5B5B",
        height: 50,
        width: 130,
        alignItems: "center",
        justifyContent: "center",
    },
    textButton: {
        fontSize: 25,
        color: "white",
    },
    page: {
        alignItems: "center",
    },
    pagesNumber: {
        color: "#4B5B5B",
        fontSize: 20
    },
    newsletter: {
        // flex: 1, 
        // alignItems: 'center',
        marginTop: 30,
        marginBottom: 30,
        marginLeft: 20,
    },
    newsletterHeader: {
        fontSize: 30,
        fontWeight: "bold"
    },
    newsletterArea: {
        marginTop: 50,
        marginBottom: 50,
        flexDirection: 'row',
    },
    newsletterImage: {
        height: 140,
        width: 160,
    },
    newsletterTitle: {
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 10
    },
    newsletterDescription: {
        fontSize: 25,
        marginLeft: 18,
        marginRight: 18,
        flexGrow: 1,
        flex: 1,
    },
    bannerImage: {
        height: 120,
        width: 370,
    },
    newsletterButton: {
        backgroundColor: "#4B5B5B",
        height: 60,
        width: 160,
        alignItems: "center",
        justifyContent: "center",
    }
})
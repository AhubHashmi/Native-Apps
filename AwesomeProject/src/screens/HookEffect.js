import { View, Text, StyleSheet, FlatList, Image, ActivityIndicator, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function HookEffect(props) {
    const [myUserData, setMyUserData] = useState();
    const [isLoaded, setIsLoaded] = useState(true);

    const getUserData = async () => {
        try {
            const response = await fetch(
                "https://fakestoreapi.com/products"
            );
            const myData = await response.json();
            setMyUserData(myData);
            setIsLoaded(false);
            console.log(myData);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getUserData();
    }, []);

    return (
        <View style={{ alignItems: "center", backgroundColor: 'black' }}>
            {isLoaded ? (<View style={styles.loader}><ActivityIndicator size="large" color="#0000ff" /></View>)
                : (
                    <View>
                        <Text style={styles.mainHeader}>List Of Products</Text>
                        <FlatList
                            data={myUserData}
                            renderItem={({ item }) => {
                                return (
                                    <View style={styles.card}>
                                        <View style={styles.imgContainer}>
                                            <Image
                                                style={styles.imgStyle}
                                                resizeMode="cover"
                                                source={{ width: '100%', height: 150, uri: item.image, }}
                                            />
                                        </View>
                                        <View>
                                            <View style={styles.bioDataContainer}>
                                                <Text style={styles.bioData}>Bio-Data</Text>
                                                <Text style={styles.idNumber}>{item.id}</Text>
                                            </View>

                                            <View style={styles.mainContainer}>
                                                <Text style={styles.myName}>Title: {item.title}</Text>
                                                <Text style={styles.myName}>Price: {item.price}</Text>
                                                <Text style={styles.myName}>Category: {item.category}</Text>
                                                <TouchableOpacity onPress={() => props.navigation.navigate("data")}>
                                                    <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 16 }}>Click Here</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>
                                );
                            }}
                        />
                    </View>
                )
            }
        </View>
    );
};

const styles = StyleSheet.create({
    loader: {
        minHeight: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },

    mainContainer: {
        width: "100%",
        paddingTop: 50,
        backgroundColor: "#b696d7",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },

    card: {
        width: 250,
        backgroundColor: "#fff",
        display: "flex",
        justifyContent: "space-between",
        borderRadius: 5,
        marginVertical: 20,
        flexDirection: "column",
    },

    bioDataContainer: {
        width: "100%",
        backgroundColor: "white",
        display: "flex",
        justifyContent: "space-between",
        paddingVertical: 10,
        flexDirection: "row",
        alignItems: "center",
        fontFamily: "josefinSans_400Regular",
    },

    idNumber: {
        fontSize: 20,
        color: "black",
        // color: "rgba(255, 255, 255, 0.5)",
        fontFamily: "josefinSans_400Regular",
    },

    bioData: {
        fontSize: 30,
        color: "black",
        fontFamily: "josefinSans_400Regular",
    },

    mainHeader: {
        fontSize: 30,
        color: "white",
        fontFamily: "josefinSans_400Regular",
    },

    imgContainer: {
        padding: 10,
    },

    myName: {
        // padding: 10,
        fontWeight: 'bold',
    },
});
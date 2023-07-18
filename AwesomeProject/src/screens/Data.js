import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import styles from '../../styling';

export default function Data(props) {
    // const [productList, setProductList] = useState([]);
    // let getData = () => {
    //     let api = 'https://fakestoreapi.com/products';
    //     axios
    //         .get(api)
    //         .then(res => {
    //             console.log(res.data);
    //             setProductList(res.data);
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         });
    // };

    // let move = (e) => {
    //     navigation.navigate('Product', e)
    // }

    // useEffect(() => {
    //     getData();
    // }, []);

    return (
        <View style={{ alignItems: 'center', width: 355, height: 55 }}>
            <Text>Products Data</Text>
            {/* <Text style={{
                color: 'black',
                fontSize: 40,
                fontWeight: 'bold',
            }}>
                {e.title}
            </Text>
            {productList &&
                productList.map((e, i) => (
                    <TouchableOpacity
                        onPress={() => move(e)}
                        style={[
                            styles.bgWhite,
                            styles.m1,
                            styles.rounded,
                            { width: '28%' },
                        ]}
                        key={i}>
                        <Image
                            resizeMode="cover"
                            style={[{ width: '100%', height: 100 }, styles.rounded]}
                            source={{ uri: e.image }}
                        />
                    <View style={styles.p1}>
                        <Text numberOfLines={1}>{e.title}</Text>
                            <Text style={[styles.textDanger, styles.fs4]}>
                                Rs: {e.price}/-
                            </Text>
                        <Text>{props.navigation.getParam('title')}</Text>
                    </View>
                    // </TouchableOpacity>
                ))} */}
        </View>
    )
}
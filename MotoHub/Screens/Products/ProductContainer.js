import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Text, Icon, Box, NativeBaseProvider, extendTheme, FormControl, Input } from 'native-base';   

import ProductList from './ProductList'; 

const data = require('../../assets/data/products.json')

const ProductContainer = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(data);
        return () => {
            setProducts([])
        }
    }, [])

    return (
        <NativeBaseProvider>
            <Box>
                <FormControl>
                    <Input
                        placeholder="Search"
                        InputLeftElement={
                            <Icon name="search" size={5} color="gray.400" ml={2} />
                        }
                    />
                </FormControl>
            </Box>
            <View style={styles.container}>
                <Text>Product Container</Text>
                <View style={styles.listContainer}>
                    <FlatList
                        data={products} 
                        numColumns={2}
                        renderItem={({item}) => <ProductList key={item.brand} item={item}/>}
                        keyExtractor={item => item.brand}
                    />
                </View>
            </View>
        </NativeBaseProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gainsboro'
    },
    listContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: 'gainsboro'
    }
})

export default ProductContainer;

import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { SIZES, COLORS } from '../../constants';
import ProductCardView from './ProductCardView';
import styles from './productRow.style';

const ProductRow = () => {
    const products = [1,2,3,4];
  return (
    <View style = {styles.container}>
        <FlatList
        data={products}
        renderItem={({item}) => <ProductCardView/>}
        horizontal
        contentContainerStyle={{columnGap: SIZES.medium}}
        />
      
    </View>
  )
}

export default ProductRow


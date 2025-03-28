import { StyleSheet, Text, View, Image,  TouchableOpacity } from 'react-native'
import React from 'react'
import { SIZES, COLORS } from '../../constants';
import styles from './productCardView.styles';
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ProductCardView = () => {
    const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate("ProductDetails")}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/images/fn1.jpg")}
            style={styles.image}
          />
        </View>

        <View style={styles.details}>
          <Text style={styles.title} numberOfLines={1}>
            Products
          </Text>
          <Text style={styles.supplier} numberOfLines={1}>
            Products
          </Text>
          <Text style={styles.price}>$2353</Text>
        </View>

        <TouchableOpacity style={styles.addBtn}>
          <Ionicons name="add-circle" size={35} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  )
}

export default ProductCardView


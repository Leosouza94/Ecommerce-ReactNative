import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './home.style';
import {Ionicons, Fontisto} from "@expo/vector-icons";
import { Welcome } from '../components';
import Caroussel from '../components/home/Caroussel';
import Heading from '../components/home/Heading';
import ProductRow from '../components/products/ProductRow';

const Home = () => {
  return (
    <SafeAreaView>
        <View style = {styles.appBarWrapper}>
            <View style = {styles.appBar}>
                <Ionicons name='location-outline' size={24}/>
                <Text style = {styles.location}>Moscow</Text>

                <View style = {{alignItems: "flex-end"}}>
                    <View style = {styles.cartCount}>
                        <Text style = {styles.cartNumber}>8</Text>
                    </View>
                    <TouchableOpacity>
                        <Fontisto name='shopping-bag' size={24}/>
                    </TouchableOpacity>
                </View>

            </View>
            
        </View>

        <ScrollView>
            <Welcome/>
            <Caroussel/>   
            <Heading/>
            <ProductRow/>
        </ScrollView>
      
    </SafeAreaView>
  )
}

export default Home


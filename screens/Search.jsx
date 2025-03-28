import { StyleSheet, View, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {Feather, Ionicons} from '@expo/vector-icons'
import styles from './search.style'
import { COLORS, SIZES } from '../constants'

const Search = () => {
  return (
    <SafeAreaView>
      <View style={styles.searchContainer}>
            <TouchableOpacity >
                 
                <Ionicons name='camera-outline' size={SIZES.xLarge} style={styles.searchIcon}/>
            </TouchableOpacity>
            <View style={styles.searchWrapper}>
                <TextInput
                style={styles.searchInput}
                value=''
                onPressIn={()=>{}}
                placeholder='What are you looking for?'
                />
            </View>

            <View>
            <TouchableOpacity style={styles.searchButton}>
            <Feather name="search" size={24} color={COLORS.offwhite}/>
            </TouchableOpacity>
        </View>
        </View>
    </SafeAreaView>
  )
}

export default Search


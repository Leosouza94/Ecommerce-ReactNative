import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import {Feather, Ionicons} from '@expo/vector-icons'
import { COLORS } from '../../constants'
import styles from './heading.style'
import React from 'react'

const Heading = () => {
  return (
    <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.headerTitle}>New Rivals</Text>
      <TouchableOpacity>
        <Ionicons name="grid" size={24} color={COLORS.primary} />
      </TouchableOpacity>
    </View>
  </View>
  )
}

export default Heading


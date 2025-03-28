import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Slider from 'react-native-image-slider';


const Caroussel = () => {
  const images = [
    require('../../assets/images/fn1.jpg'),
    require('../../assets/images/fn2.jpg'),
    require('../../assets/images/fn3.jpg')
  ];

  return (
    <View style={styles.container}>
        
      <Slider
        images={images}
        style={styles.slider}
        loop={false} // Faz o carrossel voltar ao início após a última imagem
        //loopBothSides
        autoPlayWithInterval={3000}
        
      />

      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slider: {
    alignSelf: "center",
    width: '96%',
    height: 200,
    borderRadius: 15
  },
});

export default Caroussel;

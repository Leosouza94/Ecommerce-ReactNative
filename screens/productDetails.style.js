import { StyleSheet } from 'react-native'
import { COLORS,SIZES } from '../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite
  },
  upperRow:{
    marginHorizontal:20,
    flexDirection:"row",
    justifyContent: "space-between",
    alignItems:"center",
    position: "absolute",
    top: SIZES.xxLarge,
    width: SIZES.width -44,
    zIndex: 999

  },
  image:{
    width: "100%",
    
 
    //aspectRatio: 1,  // Mantém a proporção original
    resizeMode: "cover",  // Garante que a imagem não fique cortada
  },
  details:{
    marginTop: -SIZES.large,
    backgroundColor: COLORS.lightWhite,
    width: SIZES.width,
    borderTopLeftRadius:SIZES.medium,
    borderTopRightRadius: SIZES.medium
  }, 
  titleRow:{
    marginHorizontal:20,
    paddingBottom:SIZES.small,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    width:SIZES.width -44,
    top: 20
  },
  ratingRow:{
    paddingBottom:SIZES.small,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: SIZES.width-10,
    top: 5

  }, 
  rating:{
    top: SIZES.large,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginHorizontal: SIZES.large
  } ,  
  ratingText:{
    color: COLORS.gray,
    fontFamily: "medium"
  } ,
  title:{
    fontFamily:"bold",
    fontSize: SIZES.large
    
  },
  price: {
    paddingHorizontal:10,
    fontFamily:"bold",
    fontSize: SIZES.large
  },
  priceWrapper:{
    backgroundColor: COLORS.secondary,
    borderRadius:SIZES.large
  },
  descriptionWrapper:{
    marginTop:SIZES.large*2,
    marginHorizontal:SIZES.large
  },
  description:{
    fontFamily:"bold",
    fontSize: SIZES.large
  }
})

export default styles;
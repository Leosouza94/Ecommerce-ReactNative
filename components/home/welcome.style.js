import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
    container: {
        width: "100%"
    },
    welcomeTxt: (color,top) => ({
        fontFamily: "bold",
        fontSize: SIZES.xxLarge -6,
        marginTop:  top + 10,
        lineHeight: SIZES.xxLarge,
        color: color,
        marginHorizontal:  12

    }),
    searchContainer:{
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.medium,
        marginVertical: SIZES.medium
    },
    searchIcon: {
        marginHorizontal: 10,
        color: COLORS.gray,
        marginTop: SIZES.small
    },
    searchWrapper: {
        flex: 1,
        backgroundColor: COLORS.secondary,
        marginRight:SIZES.small,
        borderRadius: SIZES.small 
    },
    searchInput:{
        fontFamily: "regular",
        //width: "100%",
        //height: "100%",
        paddingHorizontal: SIZES.small,
        paddingTop: SIZES.medium - 3
    },
    searchButton: {
        width: 50,
        height: 50,
        borderRadius: SIZES.medium,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.primary

    }
    
})

export default styles;
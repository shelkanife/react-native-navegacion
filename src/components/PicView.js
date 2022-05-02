import React,{useState,useEffect} from 'react'
import { View,ImageBackground, Image,StyleSheet } from 'react-native'

const PicView = ({route}) => {
    const uri = route.params.uri
    
    return(
        <View style={styles.container}>
            <Image 
                style={{
                    // flex: 1,
                    height:600,
                    resizeMode: "center",
                    width:960,
                    // alignItems: "center",
                    // borderWidth:1,
                    // borderColor:'white',
                    // width:960,
                    // height:960,
                    }}
                source={{uri:`file:///${uri}`}}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'black'
    }
})

export default PicView
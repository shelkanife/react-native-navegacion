import React,{useState} from "react";
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ImageBackground,StyleSheet,Pressable,View,Text} from 'react-native'
import {colors} from '../styles/global'
import RNFS from 'react-native-fs'

const ImgNote = ({onPressFunction,navigation,uri}) => {
    const [visible,setVisible] = useState(true)
    

    return(
        <View>
            {
                visible 
                ? (<Pressable
                    onPress={() => navigation.navigate('PicView',{uri:uri})}>
                        <ImageBackground 
                        source={{uri:`file:///${uri}`}}
                        style={styles.img}>
                            <Pressable 
                            onPress={onPressFunction}
                            style={styles.close}>
                                <Ionicons name="close" color='#fff' size={30} />
                            </Pressable>
                        </ImageBackground>
                    </Pressable>)
                : (<></>)
            }
        </View>
    )
}

const styles = StyleSheet.create({
    img:{
        marginTop:16,
        width: '100%',
        height: 150,
        borderWidth:1,
        borderColor:colors.main
    },
    close:{
        marginLeft:'auto',
        width:30,
    }
})

export default ImgNote
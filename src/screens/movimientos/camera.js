import React from 'react'
import RNFS from 'react-native-fs'
import { Button, Icon } from 'native-base'
import {View,StyleSheet} from 'react-native'
import { RNCamera } from 'react-native-camera'
import { useCamera } from 'react-native-camera-hooks'
import {colors} from '../../styles/global'

const Camera = ({navigation,route}) => {
    const [{cameraRef},{takePicture}] = useCamera(null)
    
    const savePic = (filePath,newFilePath) => {
        try{
            RNFS.moveFile(filePath,newFilePath)
            .then(() => {
                navigation.navigate('MRegistrar',{imgPath:newFilePath,movement:route.params.movement})
                console.log('Imaged saved in: '+ newFilePath)
            })
            .catch((e) => alert(e))
        }catch(e){ alert(e) }
    }

    const captureHandle = async () =>{
        try{
            const data = await takePicture()
            const filePath = data.uri
            console.log(data)
            // const existAppFolder = await RNFS.exists(appDirectory)
            const newFilePath = `${RNFS.DocumentDirectoryPath}${Math.floor(new Date().getTime()/1000)}.jpg`
            // if(existAppFolder){
                savePic(filePath,newFilePath)
            // }else{
                // await RNFS.mkdir(appDirectory)
                // savePicInAppFolder(filePath,newFilePath)
            // }
        }catch(e){ alert(e) }
    }

    return(
        <View style={localeStyles.container}>
            <RNCamera
                ref={cameraRef}
                type={RNCamera.Constants.Type.back}
                style={localeStyles.preview}>
            <Button
                onPress={() => captureHandle()}
                style={localeStyles.shutterButton}>
                    <Icon name='camera' style={{fontSize:60}} />
                </Button>
            </RNCamera>
        </View>
    )
}

const localeStyles = StyleSheet.create({
    container:{
        flex:1
    },
    preview:{
        flex:1,
        alignItems:'center',
        justifyContent:'flex-end'
    },
    shutterButton:{
        backgroundColor:colors.main,
        height:100,
        width:'100%',
        justifyContent:'center'
    }
})

export default Camera
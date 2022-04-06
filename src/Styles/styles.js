import {StyleSheet,Dimensions} from 'react-native'

const styles=StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:"white"
    },
    iconView:{
        flex:1,
        justifyContent:'center',
        alignContent:'center',
        backgroundColor:'#1E63CB',
        alignItems:'center',
        backgroundColor:'#1E63CB',
    },
    icon:{
        borderWidth:2,
        borderColor:"#ffffff",
        textAlign: 'center',
        color:'#ffffff',
        fontSize:115,
        paddingLeft:5,
        borderRadius:100
    },
    title:{
        color:'black',
        fontWeight:'bold',
        fontSize:20,
        textTransform:'uppercase',
        marginBottom:10
    },
    form:{
        flex:2,
        backgroundColor:"#ffffff",
        flexDirection:'column',
        borderRadius:5,
        padding:16
    },
    forgot:{
        // marginTop:16,
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center'
    },
    btn:{
        marginTop:16,
        padding:16,
        borderRadius:20,
        backgroundColor:'#1E63CB',
        justifyContent:'center',
        alignSelf:'center',
        width:Dimensions.get('window').width/2
    },
    signUp:{
        display:"flex",
        flexDirection:"row",
        justifyContent:'center',
        backgroundColor:'#ffffff',
        // marginBottom:16
    }
})

const itemStyles={
    item:{
        borderWidth:2
    },
    txtInput:{
        fontSize:16,
        paddingHorizontal:16,
    },
    label:{
        fontSize:16
    }
}
export  {
    styles,
    itemStyles
}
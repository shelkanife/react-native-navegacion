import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    loadingText:{
        justifyContent:'center',
        alignContent:'center'
    },  
    scrollContainer:{
        flex:1
    },
    container:{
        height:80,
        marginTop:16,
        borderBottomColor:"#737373",
        borderBottomWidth:1
    },
    date:{
        backgroundColor:"#1E63CB",
        height:20,
        alignItems:"flex-start"
    },
    textDate:{
        color:"white", 
        paddingHorizontal:10
    },
    details:{
        display:"flex",
        marginLeft:10,
        flexDirection:'row',
        flexWrap:"wrap",
        alignItems:"center",
        paddingTop:5,
        paddingBottom:10
    },
    icon:{
        justifyContent:'center',
        color:'#FFFFFF',
        backgroundColor:'#1E63CB',
        fontSize:40,
        alignItems:"center",
        marginRight:10
    },
    presupuestoName:{
        fontSize:16,
        fontWeight:"bold"
    },
    item:{
        marginBottom: 10, 
        borderColor: '#1E63CB', 
        borderBottomWidth: 2 
    },
    textArea:{
        borderColor:'#1E63CB',
        borderWidth:2,
        width:'100%',
        height:150,
        borderRadius:30,
        padding:16
    },
    labelDate:{
        textAlign:'center',
        borderBottomColor:'#1E63CB',
        borderBottomWidth:2
    }
})
const itemStyles=StyleSheet.create({
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
})

export  {
    styles,
    itemStyles
}
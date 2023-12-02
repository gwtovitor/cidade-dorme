import { StyleSheet } from "react-native"

const menuStyles = StyleSheet.create({
    container:{
        backgroundColor: 'black',
        display: 'flex',
        justifyContent:'center',
        alignItems: 'center',
        height: '100%',
        width: '100%'
    },
    text:{
        color:'white',
    },
    logo:{
        width: '100%',
        objectFit: 'contain'
    }
})

export default menuStyles
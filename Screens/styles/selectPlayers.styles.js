import { StyleSheet } from "react-native"

const selectPlayersStyles = StyleSheet.create({
    container:{
        backgroundColor: 'black',
        display: 'flex',
        justifyContent:'center',
        alignItems: 'center',
        paddingVertical: 50,
        height: '100%',
        width: '100%'
    },
    text:{
        color: 'white',
        margin: 5
    },
    input:{
        backgroundColor: 'white',
        width: "80%",
        height: '5%',
        justifyContent:'center',
        display:'flex',
        alignItems:'center'

    },
    btn:{
        backgroundColor: 'blue',
        marginTop: 20,
        marginBottom: 50,
        width: '30%',
        display: 'flex',
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 5,
        height: '5%'
    },
    errorMsg: {
        color: 'red',
        marginVertical: 10
    },
    scrollContainer:{
        minHeight: '100%'
    },
    funcao:{
        color: 'white',
        margin: 10,
        fontSize: 30
    }
})

export default selectPlayersStyles
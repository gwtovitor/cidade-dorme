import { StyleSheet } from "react-native"

const instrucoesStyle = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 50,
        height: '100%',
        width: '100%'
    },
    text: {
        color: 'white',
        margin: 5,
        // whiteSpace: 'pre-line',
    },
    input: {
        backgroundColor: 'white',
        width: "80%",
        height: '5%',
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center'

    },
    btn: {
        backgroundColor: 'blue',
        marginTop: 20,
        marginBottom: 50,
        width: '30%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        height: '5%'
    },
    errorMsg: {
        color: 'red',
        marginVertical: 10
    },
    scrollContainer: {
        minHeight: '100%'
    },
    funcao: {
        color: 'white',
        margin: 10,
        fontSize: 30
    },
    listPlayer: {
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    viewInput: {
        marginBottom: 10,
        width: '100%',
        display: 'flex',
        alignItems: 'center'
    },
    title: {
        fontSize: 15,
        color: '#00BFFF'
    },
    titlePerson: {
        marginVertical: 12,
        fontSize: 15,
        color: '#03bb85'
    },


})

export default instrucoesStyle
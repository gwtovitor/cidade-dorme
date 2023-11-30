import { View, Text, TouchableOpacity } from "react-native";
import selectPlayersStyles from "./styles/selectPlayers.styles";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { useEffect, useState } from "react";
import { Button } from "react-native";

export default function ExibirFuncoes({ route, navigation }) {
    const { playerObj } = route.params
    const [index, setIndex] = useState(0)
    const [exibindo, setExibindo] = useState(false)
    const avançar = () => {
        setExibindo(false)
        console.log(playerObj.length)
        if(index <= playerObj.length - 2){
            setIndex(index + 1)
            console.log(index)
        }else{
            navigation.navigate('narradorTela', {playerObj: playerObj})
        }
        return
    }
    const functionName = (name)=>{
        if(name == 'AldeaoAssassino'){
            return 'Aldeão Assassino'
        }else if(name == 'DamaNoite'){
            return 'Dama da Noite'
        }else{
            return name
        }

        
    }
    return (
        <ScrollView contentContainerStyle={selectPlayersStyles.scrollContainer}>
            <View style={[selectPlayersStyles.container]}>
                <Text style={[selectPlayersStyles.text]}>Passe o Celular para</Text>
                <Text style={[selectPlayersStyles.text]}>{playerObj[index].nome}</Text>
                <Button
                    title="Exibir"
                    onPress={() => {
                        setExibindo(true)
                    }}
                />
                {exibindo &&
                    <>
                        <Text style={[selectPlayersStyles.text]}>Sua função é :</Text>
                        <Text style={[selectPlayersStyles.funcao]}>{functionName(playerObj[index].funcao)}</Text>
                        <Button
                            title="Avançar"
                            onPress={() => {
                                avançar()
                            }}
                        />
                    </>}

            </View>
        </ScrollView>
    )
}

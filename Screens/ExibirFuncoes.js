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
            navigation.replace('narradorTela', {playerObj: playerObj})
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
    const functionEmoji = (name)=>{
        console.log(name)
        if(name == 'AldeaoAssassino'){
            return '🧟'
        }else if(name == 'DamaNoite'){
            return '💃'
        }else if(name == 'Padre'){
            return '⛪'
        }
        else if(name == 'Bobo'){
            return '🤡'
        }
        else if(name == 'Bruxo'){
            return '🧙‍♂️'
        }
        else if(name == 'Detetive'){
            return '🕵️'
        }
        else if(name == 'Anjo'){
            return '👼'
        }
        else if(name == 'Assassino'){
            return '🔪'
        }
        else if(name == 'Aldeão'){
            return '🏠'
        }
    }


    return (
        <ScrollView contentContainerStyle={selectPlayersStyles.scrollContainer}>
            <View style={[selectPlayersStyles.container]}>
                <Text style={[selectPlayersStyles.text]}>Passe o Celular para</Text>
                <Text style={[selectPlayersStyles.funcao]}>{playerObj[index].nome}</Text>
                <Button
                    title="Exibir"
                    onPress={() => {
                        setExibindo(true)
                    }}
                />
                {exibindo &&
                    <>
                        <Text style={[selectPlayersStyles.text]}>Sua função é :</Text>
                        <Text style={[selectPlayersStyles.funcao]}>{functionName(playerObj[index].funcao) + ' ' + functionEmoji(playerObj[index].funcao)}</Text>
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

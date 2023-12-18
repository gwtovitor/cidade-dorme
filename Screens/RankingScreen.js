import { View, Text, TouchableOpacity, Button } from "react-native";
import selectPlayersStyles from "./styles/selectPlayers.styles";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { useEffect, useState } from "react";

export default function RankingScreen({ route, navigation }) {
    const { playerObj } = route.params;
    const { btnMenu } = route.params;

    const functionEmoji = (name) => {
        if (name == 'AldeaoAssassino') {
            return '🧟'
        } else if (name == 'DamaNoite') {
            return '💃'
        } else if (name == 'Padre') {
            return '⛪'
        }
        else if (name == 'Bobo') {
            return '🤡'
        }
        else if (name == 'Bruxo') {
            return '🧙‍♂️'
        }
        else if (name == 'Detetive') {
            return '🕵️'
        }
        else if (name == 'Anjo') {
            return '👼'
        }
        else if (name == 'Assassino') {
            return '🔪'
        }
        else if (name == 'Aldeão') {
            return '🏠'
        }
    }
    const functionName = (name) => {
        if (name == 'AldeaoAssassino') {
            return 'Aldeão Assassino'
        } else if (name == 'DamaNoite') {
            return 'Dama da Noite'
        } else {
            return name
        }
    }

    const returnColors = (funcao) => {
        if (funcao == 'Aldeão') return '#229A00'
        if (funcao == 'Padre') return '#474a51'
        if (funcao == 'Assassino') return 'red'
        if (funcao == 'AldeaoAssassino') return '#993399'
        if (funcao == 'Bobo') return '#FF6347'
        if (funcao == 'Detetive') return '#964B00'
        if (funcao == 'Anjo') return '#4169E1'
        if (funcao == 'DamaNoite') return '#4B0082'
        if (funcao == 'Bruxo') return 'black'
    }
    const sortedPlayerObj = [...playerObj].sort((a, b) => b.pontos - a.pontos);


    return (
        <ScrollView contentContainerStyle={selectPlayersStyles.scrollContainer}>
            <View style={[selectPlayersStyles.container]}>
                {
                    sortedPlayerObj.map((player, index) => (
                        <View key={index.toString()} style={{ marginBottom: 10, width: '100%', backgroundColor: returnColors(player.funcao), justifyContent: 'space-around', display: 'flex', alignItems: 'center' }}>
                            <Text style={{ color: returnColors(player.funcao) == 'white' ? 'black' : 'white', fontSize: 17 }}>{`Nome: ${player.nome}, Função: ${functionName(player.funcao)}` + ' ' + functionEmoji(player.funcao)} Pontos: {player.pontos}</Text>
                            <Text></Text>
                        </View>
                    ))
                }
                {btnMenu ?
                    <Button onPress={()=>{navigation.navigate('menuVolta',{playerObj: playerObj })}} title="Proxima partida"></Button> :
                    <Button  onPress={()=>{navigation.navigate('narradorTela',{playerObj: playerObj })}}  title="Voltar"></Button>}
            </View>
        </ScrollView>
    )
}

import React, { useState } from "react";
import { ScrollView, View, Text, Button } from "react-native";
import selectPlayersStyles from "./styles/selectPlayers.styles";
import { CommonActions } from '@react-navigation/native';
const NarradorTela = ({ route, navigation }) => {
    const { playerObj } = route.params;
    const [isExibindo, setIsExibindo] = useState(false);
    const functionName = (name) => {
        if (name == 'AldeaoAssassino') {
            return 'Aldeão Assassino'
        } else if (name == 'DamaNoite') {
            return 'Dama da Noite'
        } else {
            return name
        }
    }
    const handleNavigateToMenu = () => {
        navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [
                    { name: 'Menu' },
                ],
            })
        );
    };
    const functionEmoji = (name)=>{
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
    const returnColors = (funcao)=>{
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
    return (
        <ScrollView contentContainerStyle={[selectPlayersStyles.scrollContainer]}>
            <View style={[selectPlayersStyles.container]}>
                {isExibindo ? (
                    playerObj.map((player, index) => (
                        <View key={index.toString()} style={{ marginBottom: 10, width:'100%', backgroundColor:returnColors(player.funcao)}}>
                            <Text style={{ color: returnColors(player.funcao) == 'white' ? 'black':'white', fontSize: 17 }}>{`Nome: ${player.nome}, Função: ${functionName(player.funcao)}` + ' ' + functionEmoji(player.funcao)}</Text>
                            <Text></Text>
                        </View>
                    ))
                ) : (
                    <>
                        <Text style={{ color: 'white' }} >Passe o celular para o narrador</Text>
                        <Button title="Exibir" onPress={() => setIsExibindo(true)} />
                    </>
                )}

                {isExibindo && <>
                    <Button onPress={() => { navigation.navigate('menuVolta', { playerObj: playerObj }) }} title='Jogar novamente com os mesmos jogadores ?' />
                    <Text></Text>
                    <Button style={{ marginVertical: 12 }} onPress={() => { handleNavigateToMenu() }} title='Retornar para o Menu' />
                </>}
            </View>
        </ScrollView>
    );
};

export default NarradorTela;

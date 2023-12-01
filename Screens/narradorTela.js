import React, { useState } from "react";
import { ScrollView, View, Text, Button } from "react-native";
import selectPlayersStyles from "./styles/selectPlayers.styles";

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
    return (
        <ScrollView contentContainerStyle={[selectPlayersStyles.scrollContainer]}>
            <View style={[selectPlayersStyles.container]}>
                {isExibindo ? (
                    playerObj.map((player, index) => (
                        <View key={index.toString()} style={{ marginBottom: 10 }}>
                            <Text style={{ color: 'white' }}>{`Nome: ${player.nome}, Função: ${functionName(player.funcao)}`}</Text>
                        </View>
                    ))
                ) : (
                    <>
                        <Text style={{ color: 'white' }} >Passe o celular para o narrador</Text>
                        <Button title="Exibir" onPress={() => setIsExibindo(true)} />
                    </>
                )}

                {isExibindo && <Button onPress={() => { navigation.navigate('menuVolta', { playerObj: playerObj }) }} title='Jogar novamente com os mesmos jogadores ?' />}
            </View>
        </ScrollView>
    );
};

export default NarradorTela;

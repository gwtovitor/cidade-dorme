import React, { useEffect, useState } from "react";
import { ScrollView, View, TextInput, Text, Button } from "react-native";
import selectPlayersStyles from "./styles/selectPlayers.styles";

const PlayerNames = ({ route, navigation }) => {
    const { playerNumber, roles } = route.params;
    const [playerNames, setPlayerNames] = useState(Array(playerNumber).fill({ nome: '', funcao: '', pontos: 0 }));
    const [errorMsg, setErrorMsg] = useState('')
    const [avancar, setAvancar] = useState(false)

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    const randomizarFuncoes = () => {
        const funcoesDisponiveis = Object.entries(roles);

        const funcoesNecessarias = [];
        for (const [funcao, quantidade] of funcoesDisponiveis) {
            for (let i = 0; i < quantidade; i++) {
                funcoesNecessarias.push(funcao);
            }
        }
        const funcoesEmbaralhadas = shuffleArray(funcoesNecessarias);

        const jogadoresEmbaralhados = shuffleArray(playerNames);

        const novosPlayerNames = jogadoresEmbaralhados.map((player, index) => {
            const funcao = funcoesEmbaralhadas[index];
            return { nome: player.nome, funcao: funcao || 'Aldeão', pontos: 0 };
        });
        // const finalNamePlayers = shuffleArray(novosPlayerNames)
        setPlayerNames(novosPlayerNames);
    };


    const handlePlayerNameChange = (index, text) => {
        const newPlayerNames = [...playerNames];
        newPlayerNames[index] = { nome: text, funcao: '', pontos: 0 };
        setPlayerNames(newPlayerNames);
    };
    useEffect(() => {
        if (avancar) {
            navigation.navigate('exibirFuncoes', { playerObj: playerNames })
        }
    }, [playerNames])

    const concluir = () => {
        randomizarFuncoes();
        setAvancar(true)
    };

    return (
        <ScrollView contentContainerStyle={[selectPlayersStyles.scrollContainer]}>
            <View style={[selectPlayersStyles.container]}>
                {Array.from({ length: playerNumber }).map((_, index) => (
                    <View key={index.toString()} style={selectPlayersStyles.viewInput}>
                        <TextInput
                            placeholder={`Nome do Jogador ${index + 1}`}
                            style={{ backgroundColor: 'white', borderBottomWidth: 1, marginBottom: 5, padding: 5, width: '80%' }}
                            onChangeText={(text) => handlePlayerNameChange(index, text)}
                        />
                    </View>
                ))}
                <Text style={selectPlayersStyles.errorMsg}>{errorMsg}</Text>
                <Button
                    title="Concluir"
                    onPress={() => {
                        concluir();
                    }}
                />
            </View>
        </ScrollView>
    );
};

export default PlayerNames;

import React, { useState, useEffect } from "react";
import { ScrollView, View, Text, Button } from "react-native";
import selectPlayersStyles from "./styles/selectPlayers.styles";
import { CommonActions } from '@react-navigation/native';


const NarradorTela = ({ route, navigation }) => {

    const { playerObj } = route.params;
    const [objectPlayer, setObjectPlayer] = useState(playerObj)
    const [isExibindo, setIsExibindo] = useState(false);
    const [navigate, setNavigate] = useState(false);
    const [playerList, setPlayerList] = useState(playerObj)


    useEffect(() => {
        setPlayerList(playerObj)
    }, [playerObj])

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
    const handleNavigateToRanking = () => {
        if (playerList[0].funcao === "Assassino") {
            const updatedPlayers = objectPlayer.map((player) => {
                if (player.funcao === "Assassino") {
                    return { ...player, pontos: player.pontos + 5 };
                }
                return player;
            });
            setObjectPlayer(updatedPlayers);
        } else if (playerList[0].funcao === "Bobo") {
            const updatedPlayers = objectPlayer.map((player) => {
                if (player.funcao === "Bobo") {
                    return { ...player, pontos: player.pontos + 10 };
                }
                return player;
            });
            setObjectPlayer(updatedPlayers);
        } else {
            const updatedPlayers = objectPlayer.map((player) => {
                if (player.funcao !== "Bobo" && player.funcao !== "Assassino") {
                    return { ...player, pontos: player.pontos + 2 };
                }
                return player;
            });
            setObjectPlayer(updatedPlayers);
        }
        setNavigate(true)
    };

    useEffect(() => {
        if (navigate) navigation.navigate('ranking', { playerObj: objectPlayer, btnMenu: true });

    }, [objectPlayer]);


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

    const handleRemovePlayer = (index) => {
        const updatedPlayers = [...playerList];
        updatedPlayers.splice(index, 1);
        setPlayerList(updatedPlayers);
    };

    const handleTransformPlayer = (playerName) => {
        const updatedPlayers = objectPlayer.map((player) => {
            if (player.nome === playerName) {
                if (player.funcao === 'AldeaoAssassino') {
                    return { ...player, funcao: 'Assassino' };
                }
            }
            return player;
        });
        setObjectPlayer(updatedPlayers);

        // Atualize o estado playerList, se necessário
        const updatedPlayerList = playerList.map((player) => {
            if (player.nome === playerName && player.funcao === 'AldeaoAssassino') {
                return { ...player, funcao: 'Assassino' };
            }
            return player;
        });
        setPlayerList(updatedPlayerList);
    };

    return (
        <ScrollView contentContainerStyle={[selectPlayersStyles.scrollContainer]}>
           
            <View style={[selectPlayersStyles.container]}>
            <Button onPress={() => { navigation.push('ranking', { playerObj: objectPlayer, btnMenu: false }); }} title="Ranking"></Button>
              <Text></Text>
                {isExibindo ? (
                    playerList.map((player, index) => (
                        <View key={index.toString()} style={{ marginBottom: 10, width: '100%', backgroundColor: returnColors(player.funcao), justifyContent: 'space-around', display: 'flex', alignItems: 'center' }}>
                            <Text style={{ color: returnColors(player.funcao) == 'white' ? 'black' : 'white', fontSize: 17 }}>{`Nome: ${player.nome}, Função: ${functionName(player.funcao)}` + functionEmoji(player.funcao)}</Text>
                            <Text></Text>
                            <Text style={{ color: returnColors(player.funcao) == 'white' ? 'black' : 'white', fontSize: 17 }}>{`Pontos: ${player.pontos}`}</Text>
                            <Button onPress={() => { handleRemovePlayer(index) }} title="Remover Jogador"></Button>
                            <Text></Text>
                            {player.funcao == 'AldeaoAssassino' && <Button onPress={() => { handleTransformPlayer(player.nome) }} title="Transformar"></Button>}
                        </View>
                    ))
                ) : (
                    <>
                        <Text style={{ color: 'white' }} >Passe o celular para o narrador</Text>
                        <Button title="Exibir" onPress={() => setIsExibindo(true)} />
                    </>
                )}

                {isExibindo && <>
                    <Button onPress={() => { handleNavigateToRanking() }} title='Jogar novamente com os mesmos jogadores ?' />
                    <Text></Text>
                    <Button style={{ marginVertical: 12 }} onPress={() => { handleNavigateToMenu() }} title='Retornar para o Menu' />
                </>}
            </View>
        </ScrollView>
    );
};

export default NarradorTela;

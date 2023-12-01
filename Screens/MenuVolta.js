import { View, Text, TouchableOpacity } from "react-native";
import selectPlayersStyles from "./styles/selectPlayers.styles";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { useEffect, useState } from "react";
import { Button } from "react-native";

export default function MenuVolta({ route, navigation }) {
    const { playerObj } = route.params;
    const [newPlayerObj, setNewPlayerObj] = useState(playerObj);
    const [playerEquality, setPlayerEquality] = useState('Ola')
    const [avancar, setAvancar] = useState(true)
    const [playerNumber, setPlayerNumber] = useState(playerObj.length)
    const [objectOk, setObjectOk] = useState([])
    const [objectPlayers, setObject] = useState({
        Assassino: 0,
        Anjo: 0,
        Detetive: 0,
        Bruxo: 0,
        Bobo: 0,
        Padre: 0,
        AldeaoAssassino: 0,
        DamaNoite: 0,
    })

    const verificarFuncaoValida = (lista) => {
        if (!lista || lista.length === 0) {
            // Retorna falso se a lista for inválida ou vazia
            return false;
        }

        // Verifica se todos os itens têm "funcao" diferente de string vazia
        return lista.every(item => item.funcao !== '');
    };

    const removerJogador = (index) => {
        // Crie uma cópia da matriz playerObj
        const novaListaJogadores = [...newPlayerObj];
        // Remova o jogador pelo índice
        novaListaJogadores.splice(index, 1);
        // Atualize o estado com a nova lista de jogadores
        setNewPlayerObj(novaListaJogadores);
    };

    const VerifyPlayersNumber = () => {

        // Calcular a soma dos valores restantes
        const sumOfRoles = Object.values(objectPlayers).reduce(
            (acc, value) => acc + value,
            0
        );
        if (sumOfRoles > playerNumber) {
            setAvancar(true)
            return 'Numero de funções maior que o numero de jogadores'
        } else if (playerNumber < 2) {
            setAvancar(true)
            return 'Numero de jogadores não pode ser 0 ou 1'
        } else if (verificarFuncaoValida(objectOk)) {
            setAvancar(true)
            return 'Preencha a funcao de todos os jogadores'
        } else {
            setAvancar(true)
            return ''
        }
    };

    const shuffleArray = (array) => {
        // Função para embaralhar um array usando o algoritmo de Fisher-Yates
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    const randomizarFuncoes = () => {
        // const novaLista = playerObj.map(item => ({ ...item, funcao: '' }));
        // setNewPlayerObj(novaLista);

        const funcoesDisponiveis = Object.entries(objectPlayers);
        // console.log(funcoesDisponiveis)
        const funcoesNecessarias = [];
        for (const [funcao, quantidade] of funcoesDisponiveis) {
            for (let i = 0; i < quantidade; i++) {
                funcoesNecessarias.push(funcao);
            }
        }
        const funcoesEmbaralhadas = shuffleArray(funcoesNecessarias);
        const jogadoresEmbaralhados = shuffleArray(newPlayerObj);
        const novosPlayerNames = jogadoresEmbaralhados.map((player, index) => {
            const funcao = funcoesEmbaralhadas[index];
            return { nome: player.nome, funcao: funcao || 'Aldeão' };
        });
        setObjectOk(novosPlayerNames);
    };

    useEffect(() => {
        setPlayerEquality(VerifyPlayersNumber())
    }, [objectPlayers])

    const handleInputChange = (field, text) => {
        setObject((prevObject) => ({
            ...prevObject,
            [field]: parseInt(text) || 0,
        }));
    };
    const goToNext = () => {
        randomizarFuncoes()
        if (objectOk.length == 0) {
            return
        }
        if (avancar) {
            navigation.navigate('exibirFuncoes', { playerObj: objectOk })
        }
    }

    return (
        <ScrollView contentContainerStyle={selectPlayersStyles.scrollContainer}>
            <View style={[selectPlayersStyles.container]}>
                <View style={{ marginTop: 50 }}>
                    
                    {newPlayerObj.map((player, index) => (
                        <View key={index.toString()} style={{ marginTop: 10 }}>
                            <Text style={{ color: 'white' }}>{`Nome: ${player.nome}`}</Text>
                            <Button title='remover Jogador' onPress={() => { removerJogador(index) }}></Button>
                        </View>
                    ))}
                </View>
                <Text style={[selectPlayersStyles.text]}>Numero de Assassinos 🔪</Text>
                <TextInput
                    keyboardType="numeric"
                    placeholder="Numero de Assassinos"
                    style={[selectPlayersStyles.input]}
                    onChangeText={(text) => handleInputChange("Assassino", text)}
                    value={objectPlayers.Assassino.toString()}
                />

                <Text style={[selectPlayersStyles.text]}>Numero de Anjos 👼</Text>
                <TextInput keyboardType="numeric"
                    placeholder="Numero de Anjos"
                    style={[selectPlayersStyles.input]}
                    onChangeText={(text) => handleInputChange("Anjo", text)}
                    value={objectPlayers.Anjo.toString()}
                />

                <Text style={[selectPlayersStyles.text]}>Numero de Detetives 🕵️</Text>
                <TextInput
                    keyboardType="numeric"
                    placeholder="Numero de Detetives"
                    style={[selectPlayersStyles.input]}
                    onChangeText={(text) => handleInputChange("Detetive", text)}
                    value={objectPlayers.Detetive.toString()}
                />

                <Text style={[selectPlayersStyles.text]}>Numero de Bruxos 🧙‍♂️</Text>
                <TextInput
                    keyboardType="numeric"
                    placeholder="Numero de Bruxos"
                    style={[selectPlayersStyles.input]}
                    onChangeText={(text) => handleInputChange("Bruxo", text)}
                    value={objectPlayers.Bruxo.toString()}
                />

                <Text style={[selectPlayersStyles.text]}>Numero de Bobos 🤡</Text>
                <TextInput
                    keyboardType="numeric"
                    placeholder="Numero de Bobos"
                    style={[selectPlayersStyles.input]}
                    onChangeText={(text) => handleInputChange("Bobo", text)}
                    value={objectPlayers.Bobo.toString()}
                />

                <Text style={[selectPlayersStyles.text]}>Numero de Padres ⛪</Text>
                <TextInput
                    keyboardType="numeric"
                    placeholder="Numero de Padres"
                    style={[selectPlayersStyles.input]}
                    onChangeText={(text) => handleInputChange("Padre", text)}
                    value={objectPlayers.Padre.toString()}
                />
                <Text style={[selectPlayersStyles.text]}>Numero de Aldeões Assassinos 🧟</Text>
                <TextInput
                    keyboardType="numeric"
                    placeholder="Numero de Aldeões Assassinos"
                    style={[selectPlayersStyles.input]}
                    onChangeText={(text) => handleInputChange("AldeaoAssassino", text)}
                    value={objectPlayers.AldeaoAssassino.toString()}
                />

                <Text style={[selectPlayersStyles.text]}>Numero de Dama da Noite 💃</Text>
                <TextInput
                    keyboardType="numeric"
                    placeholder="Numero de Dama da Noite"
                    style={[selectPlayersStyles.input]}
                    onChangeText={(text) => handleInputChange("DamaNoite", text)}
                    value={objectPlayers.DamaNoite.toString()}
                />
                <Text style={[selectPlayersStyles.errorMsg]}>{playerEquality.toString()}</Text>
                {avancar &&
                    <TouchableOpacity onPress={goToNext} style={selectPlayersStyles.btn}>
                        <Text style={{ color: "white" }}>Jogar</Text>
                    </TouchableOpacity>
                }
            </View>
        </ScrollView>
    )
}

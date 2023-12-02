import { View, Text, TouchableOpacity } from "react-native";
import selectPlayersStyles from "./styles/selectPlayers.styles";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { useEffect, useState } from "react";
 
export default function SelectPlayers({ navigation }) {
    const [playerEquality, setPlayerEquality] = useState('Ola')
    const [avancar, setAvancar] = useState(false)
    const [playerNumber, setPlayerNumber] = useState('')
    const [objectPlayers, setObject] = useState({
        Assassino: '',
        Anjo: '',
        Detetive: '',
        Bruxo: '',
        Bobo: '',
        Padre: '',
        AldeaoAssassino: '',
        DamaNoite: '',
    })
    const VerifyPlayersNumber = () => {

        // Calcular a soma dos valores restantes
        const sumOfRoles = Object.values(objectPlayers).reduce(
            (acc, value) => acc + value,
            0
        );
        if (sumOfRoles > playerNumber) {
            setAvancar(false)
            return 'Numero de funções maior que o numero de jogadores'
        }else if(playerNumber < 2 ){
            setAvancar(false)
            return 'Numero de jogadores não pode ser 0 ou 1'
        } else {
            setAvancar(true)
            return ''
        }
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
    const goToNext = ()=>{
        if(avancar){
            navigation.navigate('playerNames', {roles: objectPlayers, playerNumber:playerNumber})
        }
    }

    return (
        <ScrollView contentContainerStyle={selectPlayersStyles.scrollContainer}>
            <View style={[selectPlayersStyles.container]}>
                <Text style={[selectPlayersStyles.text]}>Numero de Jogadores 🎮</Text>
                <TextInput
                    keyboardType="numeric" placeholder="Numero de Jogadores"
                    style={[selectPlayersStyles.input]}
                    onChangeText={(text) => setPlayerNumber(text)}
                    value={playerNumber.toString()}
                />

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

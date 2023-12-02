import { View, Text, TouchableOpacity } from "react-native";
import instrucoesStyle from "./styles/instrucoes.style";
import selectPlayersStyles from "./styles/selectPlayers.styles";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { useEffect, useState } from "react";
import { Button } from "react-native";

export default function Instruções({ navigation }) {


    return (
        <ScrollView contentContainerStyle={selectPlayersStyles.scrollContainer}>
            <View style={[selectPlayersStyles.container]}>
                <Text style={instrucoesStyle.title}>Objetivo do Jogo</Text>
                <Text style={instrucoesStyle.text}>
                    - Os aldeões tentam descobrir quem são os assassinos e eliminar todos antes que a cidade seja dizimada.{'\n'}
                    - Os assassinos tentam eliminar os aldeões e outros personagens de forma estratégica, evitando serem descobertos.
                </Text>
                <Text style={instrucoesStyle.title}>Personagens</Text>
                <Text style={instrucoesStyle.titlePerson}>Aldeão:</Text>
                <Text style={instrucoesStyle.text}>
                    - Função: Membro comum da cidade.{'\n'}
                    - Objetivo: Descobrir quem são os assassinos e garantir a sobrevivência da cidade.{'\n'}
                    - Ações: Votar durante o dia para eliminar suspeitos.
                </Text>
                <Text style={instrucoesStyle.titlePerson}>Assassino:</Text>
                <Text style={instrucoesStyle.text}>
                    - Função: Membro da cidade com o objetivo de eliminar outros personagens.{'\n'}
                    - Objetivo: Eliminar aldeões e outros personagens sem ser descoberto.{'\n'}
                    - Ações: Votar durante o dia para eliminar suspeitos e realizar assassinatos durante a noite.

                </Text>
                <Text style={instrucoesStyle.titlePerson}>Detetive:</Text>
                <Text style={instrucoesStyle.text}>
                    - Função: Investigador que pode descobrir a identidade de um jogador à noite.{'\n'}
                    - Objetivo: Identificar os assassinos e proteger a cidade.{'\n'}
                    - Ações: Escolher um jogador para investigar durante a noite.
                </Text>
                <Text style={instrucoesStyle.titlePerson}>Dama da Noite:</Text>
                <Text style={instrucoesStyle.text}>
                    - Função: Personagem misterioso com habilidades especiais.{'\n'}
                    - Objetivo: Influenciar o jogo de maneira estratégica.{'\n'}
                    - Ações: Visita um jogador durante a noite, se esse jogador for um assassino ela morre, se não ela permanece viva.

                </Text>
                <Text style={instrucoesStyle.titlePerson}>Padre:</Text>
                <Text style={instrucoesStyle.text}>
                    - Função: Líder religioso com poderes retirar um assassino do jogo.{'\n'}
                    - Objetivo: Proteger a cidade contra assassinatos.{'\n'}
                    - Ações: Escolher um jogador durante o JOGO INTEIRO para jogar água benta, caso esse jogador seja um assassino o assassino morre, caso não, o padre morre.
                </Text>
                <Text style={instrucoesStyle.titlePerson}>Bobo:</Text>
                <Text style={instrucoesStyle.text}>
                    - Função: Personagem inofensivo que busca ser eliminado (Joga sozinho).{'\n'}
                    - Objetivo: Ser eliminado pelos aldeões durante o dia.{'\n'}
                    - Ações: Nenhuma ação especial; tenta convencer os outros de que é suspeito.

                </Text>
                <Text style={instrucoesStyle.titlePerson}>Bruxo:</Text>
                <Text style={instrucoesStyle.text}>
                    - Função: Personagem com habilidades mágicas.{'\n'}
                    - Objetivo: Usar suas habilidades para influenciar o jogo.{'\n'}
                    - Ações: (SEMPRE É O PRIMEIRO A JOGAR) Durante a noite escolhe um personagem para dormir, esse jogador não poderá realizar nem uma ação e nem discutir durante o dia até a próxima noite.

                </Text>
                <Text style={instrucoesStyle.titlePerson}>Anjo:</Text>
                <Text style={instrucoesStyle.text}>
                    - Função: Ser celestial com poder de ressurreição.{'\n'}
                    - Objetivo: Proteger os aldeões.{'\n'}
                    - Ações: Escolher um jogador para proteger durante a noite, esse jogador não pode ser morto pelos assassinos.
                </Text>
                <Text style={instrucoesStyle.titlePerson}>Aldeão Assassino:</Text>
                <Text style={instrucoesStyle.text}>
                    - Função: É um aldeão comum, porém ao ser morto pelos assassinos, ele vira um assassino.{'\n'}
                    - Objetivo: Como aldeão deve ganhar o jogo com a aldeia, como assassino ganha o jogo com os assassino.{'\n'}
                    - Ações: Votar durante o dia para eliminar suspeitos, como assassino, votar em alguem para assassinar.
                </Text>
                <Text style={instrucoesStyle.title}>Mecânica do Jogo</Text>
                <Text style={instrucoesStyle.titlePerson}>Notas Importantes:</Text>
                <Text style={instrucoesStyle.text}>      
                    - Os jogadores mantêm suas identidades em segredo, exceto quando eliminados.{'\n'}
                    - As ações especiais dos personagens ocorrem durante a noite, enquanto as votações e eliminações acontecem durante o dia.
                </Text>
                <Text style={instrucoesStyle.titlePerson}>Dia:</Text>
                <Text style={instrucoesStyle.text}>
                    - Os jogadores discutem e votam em quem acreditam ser um assassino.{'\n'}
                    - O jogador mais votado é eliminado e sua identidade é revelada.
                </Text>
                <Text style={instrucoesStyle.titlePerson}>Noite:</Text>
                <Text style={instrucoesStyle.text}>
                    - Os personagens com habilidades especiais realizam suas ações secretas.{'\n'}
                    - Os assassinos escolhem uma vítima para eliminar.
                </Text>
                <Text style={instrucoesStyle.titlePerson}>Vitória:</Text>
                <Text style={instrucoesStyle.text}>
                    - Os aldeões vencem se todos os assassinos forem eliminados.{'\n'}
                    - Os assassinos vencem se o número de aldeões for igual ou menor ao número de assassinos.{'\n'}
                    - O bobo vence o jogo sozinho
                </Text>

            </View>
        </ScrollView>
    )
}

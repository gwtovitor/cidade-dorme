import { createStackNavigator } from '@react-navigation/stack';
import SelectPlayers from './Screens/SelectPlayers';
import Menu from './Screens/Menu';
import ExibirFuncoes from './Screens/ExibirFuncoes';
import PlayerNames from './Screens/PlayerNames';
import NarradorTela from './Screens/narradorTela';
import MenuVolta from './Screens/MenuVolta';
import Instruções from './Screens/Instrucoes';
import RankingScreen from './Screens/RankingScreen';

const Stack = createStackNavigator();

function Navigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{
        headerTransparent: true,
        title: '',
        headerShown: false
      }} name="Menu" component={Menu} />
      <Stack.Screen
        options={{
          headerTransparent: true,
          title: '',
          headerShown: false
        }}
        name="selectPlayers" component={SelectPlayers} />
      <Stack.Screen
        options={{
          headerTransparent: true,
          title: '',
          headerShown: false
        }}
        name="playerNames" component={PlayerNames} />
      <Stack.Screen
        options={{
          headerTransparent: true,
          title: '',
          headerShown: false
        }}
        name="exibirFuncoes" component={ExibirFuncoes} />
      <Stack.Screen
        options={{
          headerTransparent: true,
          title: '',
          headerShown: false
        }}
        name="narradorTela" component={NarradorTela} />
      <Stack.Screen
        options={{
          headerTransparent: true,
          title: '',
          headerShown: false
        }}
        name="menuVolta" component={MenuVolta} />
      <Stack.Screen
        options={{
          headerTransparent: true,
          title: '',
          headerShown: false
        }}
        name="instrucoes" component={Instruções} />
      <Stack.Screen
        options={{
          headerTransparent: true,
          title: '',
          headerShown: false
        }}
        name="ranking" component={RankingScreen} />
    </Stack.Navigator>
  )
}
export default Navigation

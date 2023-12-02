import { View } from "react-native";
import { Text } from "react-native";
import menuStyles from "./styles/menu.styles";
import { Button } from "react-native";
import { Image } from "react-native";
import logo from '../assets/Logo.jpg'
export default function Menu({navigation}){

    const jogar = ()=>{
        navigation.reset({
            index:0,
            routes: [{name: 'selectPlayers'}]
        })
    }
    return(
        <View style={[menuStyles.container]}>
            <Image style={[menuStyles.logo]} source={logo}></Image>
            <Text></Text>
            <Button onPress={()=>{jogar()}} title="Jogar" style={[menuStyles.textColor]}></Button>
            <Text></Text>
            <Button onPress={()=>{navigation.navigate('instrucoes')}} title="Instruções" style={[menuStyles.textColor]}></Button>
        </View>
    )
}

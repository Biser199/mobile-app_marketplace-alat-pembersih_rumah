import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, Login, Splash } from "../page";

const Stack = createNativeStackNavigator();

const Router = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Splash" component={Splash}/>
           <Stack.Screen name="Login" component={Login}/>
           <Stack.Screen name="Home" component={Home}/>
        </Stack.Navigator>
    )
}

export default Router;
import { SafeAreaView, Text, StyleSheet } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()

import MenuScreen from './screens/MenuScreen';
import CallScreen from './screens/CallScreen';

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Menu' component={MenuScreen} />
                <Stack.Screen name='Call' component={CallScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
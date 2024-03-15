import { View, StyleSheet, Button } from 'react-native';

export default function MenuScreen({ navigation }) {
    return(
        <View style={ styles.container }>
            <Button 
                title='Start Call' 
                onPress={ () => { navigation.navigate("Call") } }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
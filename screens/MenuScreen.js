import { View, StyleSheet, Button } from 'react-native';

export default function MenuScreen() {
    return(
        <View style={styles.container}>
            <Button title='Start Call'/>
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
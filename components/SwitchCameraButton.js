import { Text, StyleSheet, Pressable } from 'react-native'

export default function SwitchCameraButton({ onPress }) {
    return <Pressable style={ styles.button } onPress={ onPress }>
        <Text style={ styles.text }>Flip Camera</Text>
    </Pressable>
}

const styles = StyleSheet.create({
    button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    text: {
        margin: 40
    }
});
import { Pressable, Image, StyleSheet, View } from 'react-native';
import { useState } from 'react';

const size = 48;

export default function EndCallButton( { style, onPress }) {
    const [pressed, setPressed] = useState(false);

    return (
        <Pressable 
            style={ [style, styles.pressableContainer] } 
            onPressIn={ () => { setPressed(true) } }
            onPressOut={ () => { 
                setPressed(false) 
                onPress()
            } }
        >
            <Image style={ styles.image  } source={ require('../assets/end_call.png') } />
            <View style={ [styles.buttonHighlight, pressed ? styles.buttonPressed : styles.buttonNotPressed] }></View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    pressableContainer: {
        width: size,
        height: size
    },
    image: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%'
    },
    buttonHighlight: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        borderRadius: size / 2
    },
    buttonPressed: {
        opacity: 0.2
    },
    buttonNotPressed: {
        opacity: 0
    }
})
import { View, Button, StyleSheet } from 'react-native';
import { useState } from 'react';
import { Camera, CameraType } from 'expo-camera';
import EndCallButton from '../components/EndCallButton';

export default function CallScreen({ navigation }) {
    const [type, setType] = useState(CameraType.back);
    const [permission, requestPermission] = Camera.useCameraPermissions();

    if (!permission) {
        requestPermission()
    }

    if (permission && !permission.granted) {
        return (
            <View style={ styles.container }>
                <Text>No permission</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Camera style={ styles.camera }>
                <EndCallButton style={ styles.endCallButton } onPress={ () => { navigation.goBack(); } } />
            </Camera>
        </View>
    );
}

function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    camera: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: 20
    },
    endCallButton: {
        margin: 20
    }
});
import { View, Button, StyleSheet } from 'react-native';
import { useState } from 'react';
import { Camera, CameraType } from 'expo-camera';
import EndCallButton from '../components/EndCallButton';
import CallPicture from '../components/CallPicture';
import SwitchCameraButton from '../components/SwitchCameraButton';

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
            <Camera style={ styles.camera } type={ type }>
                <View style={ styles.cameraContainer }>
                    <EndCallButton style={ styles.endCallButton} onPress={ navigation.goBack }/>
                    <CallPicture style={ styles.callPicture } />
                    <SwitchCameraButton onPress={ () => { setType(current => (current === CameraType.back ? CameraType.front : CameraType.back)); } }/>
                </View>
            </Camera>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    camera: {
        flex: 1,
    },
    cameraContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    endCallButton: {
        position: 'absolute',
        bottom: 40
    },
    callPicture: {
        position: 'absolute',
        right: 20,
        top: 60,
        height: 120,
        width: 90,
        backgroundColor: '#fff',
    }
});
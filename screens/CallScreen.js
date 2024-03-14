import { View, SafeAreaView, StyleSheet } from 'react-native';
import { useState } from 'react';
import { Camera, CameraType } from 'expo-camera';

export default function CallScreen() {
    const [type, setType] = useState(CameraType.back);
    const [permission, requestPermission] = Camera.useCameraPermissions();

    if (!permission) {
        requestPermission()
    }

    if (permission && !permission.granted) {
        return (
        <View style={styles.container}>
            <Text>No permission</Text>
        </View>
        )
    }

    function toggleCameraType() {
        setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
    }

    return (
        <View style={styles.container}>
            <Camera style={styles.camera} type={type}>
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
        flex: 1
    }
});
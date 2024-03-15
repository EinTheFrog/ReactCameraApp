import { Image, StyleSheet } from 'react-native';

export default function CallPicture({style}) {
    return (
        <Image style={ [style, styles.image] } source={ require('../assets/person_portrait.jpg') } />
    )
}

const styles = StyleSheet.create({
    image: {
        borderRadius: 10
    }
});
import {Button, ButtonProps, Dimensions, StyleSheet, View } from 'react-native'




export default function MyButton(props: ButtonProps){
    return (
    <View style={styles.buttonView}>
        <Button {...props}></Button>
    </View>
    )
}



const styles = StyleSheet.create({
    buttonView: {
        width: Dimensions.get('screen').width - 160
    }
})
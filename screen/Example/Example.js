import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'

class Example extends Component {
    static navigationOptions = {
        title: 'Ejemplo'
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.message}>Pagina de Ejemplo</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    message: {
        fontSize: 24
    }
});

export default Example
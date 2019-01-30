import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

class MoviesDetail extends Component{
    static navigationOptions = ({navigation}) => {
        const {title} = navigation.getParam('movie');
        return {
            title: title
        }
    };

    render(){
        const detallePeli = this.props.navigation.getParam('movie');
        return (
            <ScrollView>
                <View style={ { flex: 1 } }>
                    <View style={ { flexDirection: "column" } }>
                        <Image 
                            style={styles.imgList}
                            source={{ uri: detallePeli.backdrop_path }}
                        />
                        <Image 
                            style={ styles.imgLitle }
                            source={{ uri: detallePeli.poster_path }}
                        />                    
                    </View>
                    <View style={ { flex: 1 } }>
                        <Text style={[styles.titleDetail, styles.paddingLeft]} >{detallePeli.title}</Text>
                        <Text style={[styles.dateDetail, styles.paddingLeft]} >{detallePeli.release_date}</Text>
                        <Text style={[styles.infoDetail, styles.paddingLeft]} >{detallePeli.overview }</Text>
                    </View>
                </View>
            </ScrollView>
            
        );
    }
}

const styles = StyleSheet.create({
    imgList:{
        height: 250,
        width: "100%"
    },
    imgLitle: { 
        width: "30%", 
        height: 200, 
        position: "absolute", 
        top: 30, 
        marginLeft:15, 
        borderColor: "#fff", 
        borderWidth: 3 
    },
    titleDetail:{
        marginTop: 15,
        fontSize: 24,
        fontWeight: "bold"
    },
    dateDetail:{
        fontSize: 15,
    },
    infoDetail: {
        fontSize: 20,
    },
    paddingLeft:{
        paddingLeft: 8,
        marginBottom: 4
    }
});


export default MoviesDetail;

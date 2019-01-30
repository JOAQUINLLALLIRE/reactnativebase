import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import TouchableWrapper from "../../TouchableWrapper/TouchableWrapper";

/* const moviesListItem = (props) => {
    console.log("Hoaaa.", props);
    return (
        <View style={ styles.containerItem }>
            <View style={styles.viewLeft}>
                <Image 
                    style={styles.imgList}
                    source={{ uri: props.poster_path }}
                />
            </View>
            <View style={styles.viewRight}>
                <Text style={styles.titleMovie}> {props.title} </Text>

                <View style={ { flexDirection:"row" } }>
                    <Text style={styles.generMovies}> 
                        {props.release_date}
                    </Text>
                    <Text style={styles.generMovies}> 
                        {props.release_date}
                    </Text>
                    <Text style={styles.generMovies}> 
                        {props.release_date}
                    </Text>
                </View>


            </View>
        </View>
    );
}; */

const moviesListItem = (props) => {
    const arrGenres = props.genres;
    // console.log("Generos ==> ", arrGenres);
    return (
        <TouchableWrapper onPress={props.onPress} >
            <View style={ styles.containerItem }>
                <View style={styles.viewLeft}>
                    <Image 
                        style={styles.imgList}
                        source={{ uri: props.poster_path }}
                    />
                </View>
                <View style={styles.viewRight}>
                    <Text style={styles.titleMovie}> {props.title} </Text>            
                    <View style={styles.viewContentGenres}>
                        {
                            arrGenres.map( (gener, i) => (
                                <View style={styles.contentGenre} key={`${i}-${gener}-${props.title}`} > 
                                    <Text style={styles.titleGenres}>
                                        {gener} 
                                    </Text>
                                </View> 
                            ))
                        }                    
                    </View>
                </View>
            </View>
        </TouchableWrapper>
    );
};


const styles = StyleSheet.create({
    imgList:{
        height: 180,
        width: "100%"
    },
    containerItem:{
        flexDirection: "row",
        padding: 10,
        backgroundColor: "#000000",
        borderBottomWidth: 1,
        borderColor: "#CFCECE"
    },
    viewLeft:{
        width: "40%"
    },
    viewRight:{
        width: "60%",
        paddingLeft: 15
    },
    viewContentGenres: {
        flexDirection: "row",
        flexWrap: "wrap"
    },
    contentGenre:{
       borderWidth: 1, 
       borderRadius: 10,
       backgroundColor: '#fff',
       // backgroundColor: 'yellow',
       marginRight: 6,
       marginBottom: 6
    },
    titleGenres:{
        textAlign: 'center',
        color: '#000',
        padding: 8,
        fontSize: 11,
        fontWeight: 'bold'
    },
    titleMovie:{
        fontWeight: 'bold',
        color:"#fff",
        fontSize: 20
    }
});


export default moviesListItem;

import React from "react";
import { FlatList, RefreshControl } from "react-native";
import MoviesListItem from "./moviesListItem/moviesListItem";


const moviesList = (props) => {
    console.log("Hoaaa.", props);
    return (
        <FlatList
            data={ props.movies }
            keyExtractor={(item)=> String(item.id) }
            renderItem={ ({item}) =>
                <MoviesListItem 
                    onPress={() => props.onItemPress(item)}
                    poster_path = {item.poster_path}
                    title = {item.title}
                    release_date = {item.release_date}
                    genres = {item.genres}
                />
             }
            refreshControl={
                <RefreshControl
                    refreshing={props.refreshing}
                    onRefresh={props.onRefresh}
                />
            }
        >
        </FlatList>
    );
};

/* const moviesList = (props) => {
    console.log("Hoaaa.", props);
    return (
        <FlatList
            data={ props.movies }
            renderItem={ ({item}) =>
                <View style={ styles.containerItem }>
                    <View style={styles.viewLeft}>
                        <Image 
                            style={styles.imgList}
                            source={{ uri: item.poster_path }}
                        />
                    </View>
                    <View style={styles.viewRight}>
                        <Text style={styles.titleMovie}> {item.title} </Text>
                        <Text style={styles.generMovies}> 
                        {item.release_date} 
                        </Text>
                    </View>
                </View>
             }
        >
        </FlatList>
    );
}; */


export default moviesList;

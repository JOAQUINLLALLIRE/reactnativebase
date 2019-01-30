import React, { Component } from 'react';
import { View, Text } from 'react-native';
// import dbMovies  from "../../dbMovies.json"
import MoviesList from "../../components/moviesList/moviesList";
import {connect} from "react-redux";
import {
    loadMoviesListAsync
} from "../../store/actions/movie.actions";

class Movies extends Component{


    componentDidMount() {
        this.props.asyncList()
    }

    // loadMoviesList = () => dbMovies;
    /* loadMoviesList () {
      console.log("Cargando Lista...") ;
      return dbMovies;  
      // return [];
      // return null;
    }  */

    render(){
        return (
            <View>
                {!this.props.error ? null :
                <Text>{ JSON.stringify(this.props.error)}</Text>}

                <MoviesList 
                    onItemPress={(movie) => {
                        this.props.navigation.navigate('MovieDetail', {movie})
                    }} 
                    // movies={dbMovies}
                    movies={this.props.movies}
                    refreshing={this.props.loading}
                    onRefresh={() => {
                        this.props.asyncList()
                    }}
                />
            </View>
            
        );
    }
}



const mapStateToProps = (state) => ({
    movies: state.movie.movies,
    loading: state.movie.loading,
    error: state.movie.error
});

const mapDispatchToProps = (dispatch) => ({
    asyncList : () => dispatch( loadMoviesListAsync() )
});

export default connect(mapStateToProps, mapDispatchToProps)(Movies)

// Sin Redux
// export default Movies;

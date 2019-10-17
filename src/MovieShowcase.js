import React, { Component } from 'react'
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return the correct 
    return movieData.map((data, i) => <MovieCard key = {i} {...data} />)
  }

    // return movieData.map(movie => {
    //   return <MovieCard
    //     key = {movie.id}
    //     title ={movie.title}
    //     IMDBRating = {movie.IMDBRating}
    //     genres = {movie.genres}
    //     poster = {movie.poster}
    //   />
    // })
    // }
  

  render() {
      return (
        <div id="movie-showcase"> {this.generateMovieCards()} </div>)
  }
}

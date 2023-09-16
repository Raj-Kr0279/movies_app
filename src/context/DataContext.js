import React, { createContext, useState, useEffect } from "react";

export const DataContext = createContext();

const DataProvider = ({ children }) => {

    const IMG_MAIN_URL = "https://image.tmdb.org/t/p/w1280/";
    const [tv, setTv] = useState([]);
    const [searchM, setSearchM] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [Movies, setMovies] = useState([]);
    const [movieItem, setMovieItem] = useState({});
    const BASE_URL = "https://api.themoviedb.org/3/";


    const movieDetails = (id) => {

        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNWUzZjgzMTgyYmE3MTYzZDMyYThmYTQxNWFjYzYyMCIsInN1YiI6IjY1MDVlM2M5NWFhZGM0MDBjN2RkODNjMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.s7V5wTi3sihl_nAUE21E8E-O8vTVCOWcMixUEhfx8cU'
            }
          };
          
          fetch(`${BASE_URL}movie/${id}?language=en-US`, options)
            .then(response => response.json())
            .then(data => setMovieItem(data))
            .catch(err => console.error(err));
    }
    const fetchUpcomingMovies = () => {
        fetch(
            `${BASE_URL} + movie/upcoming?api_key=${process.env.REACT_APP_TMDBKEY}&language=en-US&page=1`
        )
            .then((res) => res.json())
            .then((data) => {
                // console.log(data.results);
                setMovies(data.results);
                setIsLoaded(true)
            })
            .catch((err) => console.log(err));
    };

    const fetchTopRatedMovies = () => {
        fetch(
            `${BASE_URL}movie/top_rated?api_key=${process.env.REACT_APP_TMDBKEY}&language=en-US&page=1`
        )
            .then((res) => res.json())
            .then((data) => {
                // console.log(data.results);
                setMovies(data.results);
                setIsLoaded(true)
            })
            .catch((err) => console.log(err));
    };



    const fetchNowPlayingMovies = () => {
        fetch(
            `${BASE_URL}movie/now_playing?api_key=${process.env.REACT_APP_TMDBKEY}&language=en-US&page=1`
        )
            .then((res) => res.json())
            .then((data) => {
                // console.log(data.results);
                setMovies(data.results);
                setIsLoaded(true)
            })
            .catch((err) => console.log(err));
    };

    const fetchPopularMovies = () => {
        fetch(
            `${BASE_URL}movie/popular?api_key=${process.env.REACT_APP_TMDBKEY}&language=en-US&page=1`
        )
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                setMovies(data.results)
                setIsLoaded(true)
            })
            .catch((err) => console.log(err));
    };

    const searchMovies = (event) => {
        event.preventDefault();
        fetch(`${BASE_URL}search/movie?api_key=${process.env.REACT_APP_TMDBKEY}&language=en-US&query=${searchM}&page=1&include_adult=false`)
            .then(response => response.json())
            .then((data) => {
                setMovies(data.results)
                setIsLoaded(true)
            })
            .catch(error => console.log(error));
    }

    // tv -----------------------------------
    const searchTv = (SearchT) => {
        fetch(
            `https://api.themoviedb.org/3/search/tv?api_key=${process.env.REACT_APP_TMDBKEY}&language=en-US&page=1&query=${SearchT}&include_adult=false`
        )
            .then((response) => response.json())
            .then((data) => {
                setTv(data.results)

            })
            .catch((error) => console.log(error));
    };
    const fetchPopularTv = () => {
        fetch(
            `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_TMDBKEY}&language=en-US&page=1`
        )
            .then((res) => res.json())
            .then((data) => {
                // console.log(data.results);
                setTv(data.results);
            })
            .catch((err) => console.log(err));
    };

    const fetchTodayTv = () => {
        fetch(
            `https://api.themoviedb.org/3/tv/airing_today?api_key=${process.env.REACT_APP_TMDBKEY}&language=en-US&page=1`
        )
            .then((res) => res.json())
            .then((data) => {
                // console.log(data.results);
                setTv(data.results);
            })
            .catch((err) => console.log(err));
    };

    const fetchTopRatedTv = () => {



        fetch(
            `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.REACT_APP_TMDBKEY}&language=en-US&page=1`
        )
            .then((res) => res.json())
            .then((data) => {
                // console.log(data.results);
                setTv(data.results);
            })
            .catch((err) => console.log(err));
    };

  

    return (
        <DataContext.Provider
            value={{
                searchMovies,
                fetchPopularMovies,
                fetchNowPlayingMovies,
                fetchTopRatedMovies,
                fetchUpcomingMovies,
                fetchTopRatedTv,
                fetchTodayTv,
                fetchPopularTv,
                searchTv,
                tv, setTv,
                searchM, setSearchM,
                isLoaded, setIsLoaded,
                Movies, setMovies,
                IMG_MAIN_URL,
                movieDetails,
                movieItem, setMovieItem


            }}
        >
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;

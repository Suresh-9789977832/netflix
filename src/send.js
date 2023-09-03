const apikey = "fb6f205c96f81f03f27f8b24b8352a11"

const send = {
    fetchNetflixOriginals: `/discover/tv?api_key=${apikey}&with_network=213`,
    fetchTrending: `/trending/all/week?api_key=${apikey}&language=en-US`,
    fetchTopRated: `/movie/top_rated?api_key=${apikey}&language=en-US`,
    fetchActionMovies: `discover/movie/?api_key=${apikey}&with_genres=28`,
    fetchComedyMovies: `discover/movie/?api_key=${apikey}&with_genres=35`,
    fetchHorrorMovies: `discover/movie/?api_key=${apikey}&with_genres=27`,
    fetchRoanceMovies: `discover/movie/?api_key=${apikey}&with_genres=10749`,
    fetchDocumentaries: `discover/movie/?api_key=${apikey}&with_genres=99`,
    
}


export default send
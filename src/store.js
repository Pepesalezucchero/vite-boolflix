import { reactive } from 'vue'

export const store = reactive({
    movieList: [],
    apiMoviesUrl: 'https://api.themoviedb.org/3/search/movie?api_key=c4778a5a0028484ac45c14a2d94a23d6',
    seriesList: [],
    apiSeriesUrl: 'https://api.themoviedb.org/3/search/tv?api_key=c4778a5a0028484ac45c14a2d94a23d6',
    searchText: '',
    posterUrl: 'https://image.tmdb.org/t/p/w342'
});
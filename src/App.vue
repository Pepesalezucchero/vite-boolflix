<script>
//Importo axios
import axios from 'axios';
//Importo lo store
import { store } from './store';
//importo componenti
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'

export default {
  components: {
    AppHeader,
    AppMain
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    getMoviesSeries() {
      let myMovieUrl = store.apiMoviesUrl
      let mySeriesUrl = store.apiSeriesUrl

      //se scrivo qualcosa nell'input, inizia la composizione dell'Url delle API
      if (store.searchText !== '') {

        myMovieUrl += `&query=${store.searchText}`;
        mySeriesUrl += `&query=${store.searchText}`;

        //prendo le informazioni sui film fornite dalla API
        axios
        .get(myMovieUrl)
        .then((res => {
          store.movieList = res.data.results;
          console.log(store.movieList);
        }))
        .catch((err) => {
          console.log("Errori", err);
        });

        //prendo le informazioni sulle serie tv fornite dalla API
        axios
        .get(mySeriesUrl)
        .then((res => {
          store.seriesList = res.data.results;
          console.log(store.seriesList);
        }))
        .catch((err) => {
          console.log("Errori", err);
        });

        //per resettare l'input quando inviamo il testo
        store.searchText = '';
      }
    }
  },
  created () {
    this.getMoviesSeries();
  }
}
</script>

<template>

  <!-- intestazione pagina con logo e titolo -->
  <header>
    <nav>
      <AppHeader @search="getMoviesSeries"  />
    </nav>
  </header>
  <!-- contenuto principale della pagina -->
  <main>
    <!-- sezione contenuti-->
    <section>
      <AppMain />
    </section>

  </main>

</template>

<style lang="scss">
@use './styles/general.scss';

</style>
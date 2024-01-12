<script>
//Importo lo store
import { store } from '../store';

import AppProductCard from '../components/AppProductCard.vue'

export default {
    name: 'AppMain',
    components: {
        AppProductCard,
    },
    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <!-- contenuto centrale -->
    <main>
        <div class="main-container">
            <!-- sezione prodotti centro pagina -->
            <div class="central-content">
                <!-- sezione film -->
                <section v-if="store.movieList.length !== 0">
                    <h1 class="section-title">Film</h1>
                    <div class="container-film">
                        <AppProductCard v-for="movie in store.movieList" :key="movie.id" :movieOrSeries="movie" :myUrlImg="store.posterUrl" />
                    </div>
                </section>
                <!-- sezione serie tv -->
                <section v-if="store.seriesList.length !== 0">
                    <h1 class="section-title">Serie TV</h1>
                    <div class="container-series">
                        <AppProductCard v-for="series in store.seriesList" :key="series.id" :movieOrSeries="series" :myUrlImg="store.posterUrl" />
                    </div>
                </section> 
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.main-container {
    height: calc(100vh - 70px);
    overflow-y: auto;
}

.central-content {
    width: 80%;
    margin: 20px auto;
    border-radius: 8px;
}

.container-series, .container-film {
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}
.section-title {
    color: $tertiary;
    padding: 20px 0;
    margin-left: 5px;
    font-size: 30px;
}
</style>
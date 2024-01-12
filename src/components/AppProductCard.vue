<script>
//Importo lo store
import { store } from '../store';

export default {
    name: 'AppProductCard',
    props: {
        movieOrSeries: Object,
        myUrlImg: String
    },
    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <div class="card-container">
        <!-- cover davanti-->
        <div class="card-side front">
            <img class="cover-img" v-if="movieOrSeries.poster_path !== null" :src="myUrlImg + movieOrSeries.poster_path" :alt="movieOrSeries.original_title || movieOrSeries.original_name">

            <!-- in caso di mancata immagine di copertina -->
            <div v-else="movieOrSeries.poster_path === null">
                <h1 class="cover-not-found">{{ movieOrSeries.title || movieOrSeries.name }}</h1>
            </div>
        </div>
        <!-- informazioni dietro-->
        <div class="card_side back">
            <h2 class="product-title">Titolo: {{ movieOrSeries.title || movieOrSeries.name }}</h2>
            <h3 class="product-original-title">Titolo originale: {{ movieOrSeries.original_title || movieOrSeries.original_name }}</h3>
            <div class="flag">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/400px-Flag_of_Italy.svg.png" alt="">
            </div>
            <h1 class="rating">stelle</h1>
            <p class="overview">Trama: {{ movieOrSeries.overview }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.card-container {
    background-image: url(../../public/no-cover-img.jpg);
    background-size: cover;
    background-position: center;
    width: calc((100% / 4) - 20px);
    margin: 10px 0;
    cursor: pointer;
    perspective: 1000px;

    .card_side {
        width: 100%;
        
        overflow: hidden;
        border-radius: 3px;
        border: 2px solid $quaternary;
    }

    .back {
        transform: rotateY(180deg);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
        background-color: $secondary;
        overflow-y: auto;
    }
    &:hover .back {
        transition: 0.5s ease-in-out;
        transform: rotateY(0deg);
        box-shadow: 0px 0px 100px 100px rgba(128, 128, 128, 0.075);
    }
}

.cover-img {
    width: 100%;
    border-radius: 3px;
    border: 2px solid $quaternary;

    &:hover {
        transition: 0.25s ease-in-out;
    }
}

.flag img {
    width: 50px;
    height: 100%;
    vertical-align: middle;
}

.product-title, 
.product-original-title,
.rating,
.flag,
.overview {
    color: white;
    text-align: center;
    margin: 15px 0;
}

.cover-not-found {
    text-align: center;
    color: $tertiary;
    margin-top: 40px;
}
</style>
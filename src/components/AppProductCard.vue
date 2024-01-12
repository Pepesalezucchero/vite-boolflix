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
            //lista di bandiere specifiche usate
            flags: {
                it: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/1920px-Flag_of_Italy.svg.png',
                en: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/1920px-Flag_of_the_United_Kingdom_%281-2%29.svg.png',
                es: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bandera_de_Espa%C3%B1a.svg/1920px-Bandera_de_Espa%C3%B1a.svg.png',
                fr: 'https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg',
                de: 'https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg',
                ja: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Japan.svg/1024px-Flag_of_Japan.svg.png',
                zh: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg'
            }
        }
    },
    methods: {
        //funzione per far tornare i numeri interi per eccesso
        rating(number) {
            return Math.ceil(number);
        }
    }
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
            <!-- bandiere -->
            <div class="flag">
                <!-- bandiera specifica -->
                <img class="flag" v-if="flags[movieOrSeries.original_language]" :src="flags[movieOrSeries.original_language]"/>
                <!-- bandiera generica -->
                <img v-else="" src="https://flag-designer.appspot.com/gwtflags/SvgFileService?d=5&c1=1&c2=3&c3=7&o=6&c4=7&s=0&c5=4" alt="bandiera generica">
            </div>
            <div class="rating">
                <!-- ciclo che in base al numero ottenuto mette le stelle piene e vuote -->
                <span v-for="number in this.rating(movieOrSeries.vote_average / 2)"><i class="fa-solid fa-star" style="color: #ffffff;"></i></span>
                <span v-for="number in (5 - this.rating(movieOrSeries.vote_average / 2))"><i class="fa-regular fa-star" style="color: #ffffff;"></i></span>
            </div>
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

    .front {
        height: 100%;
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
    height: 100%;
    width: 100%;
    border-radius: 3px;
    border: 2px solid $quaternary;
    object-fit: cover;

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
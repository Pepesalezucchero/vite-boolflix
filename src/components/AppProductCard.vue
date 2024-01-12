<script>
export default {
    name: 'AppProductCard',
}
</script>

<template>
    <h2 class="section-title">Film</h2>
    <div class="container-film">
        <div class="card-container">
            <img class="cover-img" src="../../public/tyrtyrtyrtyrtyrtyr.jpg" alt="">
        </div>
        <div class="card-container">
            <img class="cover-img" src="../../public/tyrtyrtyrtyrtyrtyr.jpg" alt="">
        </div>
        <div class="card-container">
            <img class="cover-img" src="../../public/tyrtyrtyrtyrtyrtyr.jpg" alt="">
        </div>
        <div class="card-container">
            <img class="cover-img" src="../../public/tyrtyrtyrtyrtyrtyr.jpg" alt="">
        </div>
        <div class="card-container">
            <img class="cover-img" src="../../public/tyrtyrtyrtyrtyrtyr.jpg" alt="">
        </div>
        <div class="card-container">
            <img class="cover-img" src="../../public/tyrtyrtyrtyrtyrtyr.jpg" alt="">
        </div>
        <div class="card-container">
            <img class="cover-img" src="../../public/tyrtyrtyrtyrtyrtyr.jpg" alt="">
        </div>
        <div class="card-container">
            <img class="cover-img" src="../../public/tyrtyrtyrtyrtyrtyr.jpg" alt="">
        </div>

    </div>
    <h2 class="section-title">Serie TV</h2>
    <div class="container-series">
        <div class="card-container">
            <img class="cover-img" src="../../public/tyrtyrtyrtyrtyrtyr.jpg" alt="">
        </div>
        <div class="card-container">
            <img class="cover-img" src="../../public/tyrtyrtyrtyrtyrtyr.jpg" alt="">
        </div>
        <div class="card-container">
            <img class="cover-img" src="../../public/tyrtyrtyrtyrtyrtyr.jpg" alt="">
        </div>
        <div class="card-container">
            <img class="cover-img" src="../../public/tyrtyrtyrtyrtyrtyr.jpg" alt="">
        </div>
        <div class="card-container">
            <img class="cover-img" src="../../public/tyrtyrtyrtyrtyrtyr.jpg" alt="">
        </div>
        <div class="card-container">
            <img class="cover-img" src="../../public/tyrtyrtyrtyrtyrtyr.jpg" alt="">
        </div>
        <div class="card-container">
            <img class="cover-img" src="../../public/tyrtyrtyrtyrtyrtyr.jpg" alt="">
        </div>
        <div class="card-container">
            <img class="cover-img" src="../../public/tyrtyrtyrtyrtyrtyr.jpg" alt="">
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.container-series, .container-film {
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}
.card-container {
    width: calc((100% / 4) - 20px);
    //debug
    margin: 10px 0;
    cursor: pointer;

    &:hover {
        transition: 0.25s ease-in-out;
        box-shadow: 0px 0px 100px 100px rgba(128, 128, 128, 0.075);
    }
}

.section-title {
    color: $tertiary;
    padding: 20px 0;
    margin-left: 5px;
}

.cover-img {
    width: 100%;
    border-radius: 3px;
    border: 2px solid $quaternary;
}
</style>
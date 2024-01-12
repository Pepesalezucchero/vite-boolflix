<script>
export default {
    name: 'AppProductCard',
}
</script>

<template>
    <h1 class="section-title">Film</h1>
    <div class="container-film">
        <div class="card-container">
            <div class="card-side front">
                <img class="cover-img" src="../../public/tyrtyrtyrtyrtyrtyr.jpg" alt="">
            </div>

            <div class="card_side back">
                <h2 class="product-title">ciao!</h2>
                <h3 class="product-original-title">ciao!ertert</h3>
                <div class="flag">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/400px-Flag_of_Italy.svg.png" alt="">
                </div>
                <h1 class="rating">stelle</h1>
                <p class="overview">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate illo quis natus temporibus dolores molestias ex, corporis quas, recusandae omnis adipisci deserunt aliquam fugiat, odit odio! Minima similique ut voluptas. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa dignissimos exercitationem eveniet eius odit libero asperiores quae dolore explicabo corporis ea recusandae assumenda minima repudiandae voluptas culpa, quasi adipisci dolor.</p>
            </div>
        </div>
    </div>
    <h1 class="section-title">Serie TV</h1>
    <div class="container-series">
        <div class="card-container">
            <div class="card-side front">
                <img class="cover-img" src="../../public/tyrtyrtyrtyrtyrtyr.jpg" alt="">
            </div>

            <div class="card_side back">
                <h2 class="product-title">ciao!</h2>
                <h3 class="product-original-title">ciao!ertert</h3>
                <div class="flag">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/400px-Flag_of_Italy.svg.png" alt="">
                </div>
                <h1 class="rating">stelle</h1>
                <p class="overview">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate illo quis natus temporibus dolores molestias ex, corporis quas, recusandae omnis adipisci deserunt aliquam fugiat, odit odio! Minima similique ut voluptas. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa dignissimos exercitationem eveniet eius odit libero asperiores quae dolore explicabo corporis ea recusandae assumenda minima repudiandae voluptas culpa, quasi adipisci dolor.</p>
            </div>
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
.section-title {
    color: $tertiary;
    padding: 20px 0;
    margin-left: 5px;
    font-size: 30px;
}
.card-container {
    width: calc((100% / 4) - 20px);
    margin: 10px 0;
    cursor: pointer;
    height: 100%;
    perspective: 1000px;

    .card_side {
        width: 100%;
        height: 100%;
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

p {
    color: white;
}
</style>
<script>
import AppFilmCard from '../components/AppFilmCard.vue'
import AppSeriesCard from '../components/AppSeriesCard.vue'

export default {
    name: 'AppMain',
    components: {
        AppFilmCard,
        AppSeriesCard
    },
}
</script>

<template>
    <!-- contenuto centrale -->
    <div class="main-container">
        <div class="central-content">
            <!-- sezione film -->
            <section>
                <h2>Film</h2>
                <AppFilmCard />
            </section>
            <!-- sezione serie tv -->
            <section>
                <h2>Serie TV</h2>
                <AppSeriesCard />
            </section>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.main-container {
    height: calc(100vh - 70px);
    overflow-y: auto;
}

.central-content {
    width: 90%;
    margin: 20px auto;
}

h2 {
    color: $tertiary;
    padding: 20px 0;
}
</style>
<script>
import AppProductCard from '../components/AppProductCard.vue'

export default {
    name: 'AppMain',
    components: {
        AppProductCard,
    },
}
</script>

<template>
    <!-- contenuto centrale -->
    <main>
        <div class="main-container">
            <div class="central-content">
                <!-- sezione prodotti centro pagina -->
                    <AppProductCard />
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
    width: 90%;
    margin: 20px auto;
    border-radius: 8px;
}
</style>
<script>
export default {
    name: 'AppHeader',
}
</script>

<template>
    <!-- intestazione pagina con logo e titolo -->
    <div class="header-container">
        <a class="page-title" href="#"><h1>BOOLFIX</h1></a>
        <div class="search-container">
            <input class="search-bar" type="text" placeholder="Ricerca Contenuti">
            <button class="btn">Vai <i class="fa-solid fa-chevron-right" style="color: #ffffff;"></i></button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.header-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: $secondary;
    height: 70px;
    padding: 0 25px;
    border-bottom: 1px solid #420205;
    box-shadow: 0px 0px 70px 2px rgba(0, 0, 0, 0.651);

    .page-title {
        color: $primary;
        text-decoration: none;
    }

    .search-bar {
        padding: 8px 100px 8px 15px;
        margin-right: 10px;
        border-radius: 5px;
        letter-spacing: 1px;
        border-color: $quaternary;
        background-color: $secondary;
        color: $tertiary;
        outline: none;

        &:focus {
            border: 1px solid $primary;
            transition: 1s;
        }
    }

    .btn {
        padding: 10px 15px;
        font-weight: bold;
        color: $tertiary;
        background-color: $primary;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        letter-spacing: 2px;

        &:hover {
            transition: 0.5s ease-in-out;
            background: #b10911;
            box-shadow: 0px 0px 5px 2px $primary;
        }
    }
}
</style>
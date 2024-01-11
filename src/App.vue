<script>
//importo componenti
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'

export default {
  components: {
    AppHeader,
    AppMain
  }
}
</script>

<template>

  <!-- intestazione pagina con logo e titolo -->
  <header>
    <nav>
      <AppHeader />
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

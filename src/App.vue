<template>
  <div id="app">
    <PlanetsPage></PlanetsPage>
  </div>
</template>

<script>

import PlanetsPage from './views/PlanetsPage';

export default {
    name: 'App',
    components: {
        PlanetsPage
    }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

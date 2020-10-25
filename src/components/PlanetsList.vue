<template>
  <section class="planet-list">
    <PlanetCard
      v-for="planet in showedPlanets"
      :key="planet.name"
      :planet="planet"
    ></PlanetCard>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

import PlanetCard from './PlanetCard.vue';

export default {
    name: 'PlanetsList',
    components: { PlanetCard },
    computed: {
        ...mapGetters(['showedPlanets']),
    },
};
</script>

<style lang="scss" scoped>
.planet-list {
  display: flex;
  flex-wrap: wrap;
  margin: 30px 0;
}
</style>

<template>
  <div class="heading">
    <h2>Showing {{ planetsPerPage }} of {{ totalPlanets }} planets</h2>
    <SortButton @sort="sort"></SortButton>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import SortButton from './SortButton.vue';

export default {
    name: 'PlanetsHeading',
    components: {
        SortButton,
    },
    computed: {
        ...mapGetters(['planetsPerPage', 'totalPlanets']),
    },
    methods: {
        sort(orderByAsc) {
            this.$store.dispatch('setPlanetsOrderBy', orderByAsc);
        },
    },
};
</script>

<style lang="scss" scoped>
.heading {
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: space-between;

  h2 {
    font-size: 1.2em;
  }
}

@media screen and (min-width: 1024px) {
  .heading {
    flex-direction: row;
    h2 {
      font-size: 1.5em;
    }
  }
}
</style>

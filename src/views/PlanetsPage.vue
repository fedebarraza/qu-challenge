<template>
  <div class="planets-page">
    <h1>Star Wars Planets</h1>
    <Search @search="search"></Search>
    <div v-if="planetsLoaded">
        <template v-if="totalPlanets > 0">
          <PlanetsHeading></PlanetsHeading>
          <PlanetsList></PlanetsList>
          <Pagination
            :totalPages="totalPages"
            :currentPage="currentPage"
            @pagination="getPage"
          ></Pagination>
        </template>
        <NotFound v-else></NotFound>
    </div>
    <div v-else class="loading">
      <img
        src="https://cdn.lowgif.com/full/50864708956fbad5-.gif"
        alt="loading"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import Search from '../components/Search.vue';
import PlanetsHeading from '../components/PlanetsHeading.vue';
import PlanetsList from '../components/PlanetsList.vue';
import Pagination from '../components/Pagination.vue';
import NotFound from '../components/NotFound.vue';

export default {
    name: 'PlanetsPage',
    title: 'List of planets',
    components: {
        Search,
        PlanetsHeading,
        PlanetsList,
        Pagination,
        NotFound,
    },
    computed: {
        ...mapGetters([
            'currentPage',
            'planetsLoaded',
            'totalPlanets',
            'totalPages',
        ]),
    },
    async created() {
        this.$store.dispatch('setPlanetsLoading');
        this.$store.dispatch('getPlanets');
    },
    methods: {
        search(query) {
            this.$store.dispatch('setPlanetsLoading');
            this.$store.dispatch('setPlanetsQuery', query);
        },
        getPage(page) {
            this.$store.dispatch('setPlanetsPage', page);
        },
    },
};
</script>

<style lang="scss" scoped>
.planets-page {
  margin: 20px;

  h1 {
    text-align: center;
  }

  .loading {
    width: 200px;
    margin: 50px auto;

    img {
      width: 100%;
    }
  }

  @media screen and (min-width: 1024px) {
    max-width: 1140px;
    margin: 0 auto;

    .heading {
      flex-direction: row;
      h2 {
        font-size: 1.5em;
      }
    }

    .loading {
      margin-top: 90px;
    }
  }
}
</style>

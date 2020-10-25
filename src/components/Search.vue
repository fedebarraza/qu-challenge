<template>
  <div class="search">
    <form v-on:submit="search">
      <input v-model="query" placeholder="Type something like Tatooine..." />
    </form>
  </div>
</template>

<script>
export default {
    name: 'Search',
    data() {
        return {
            query: '',
        };
    },
    methods: {
        search(event) {
            event.preventDefault();
            this.$emit('search', this.query);
        },
    },
};
</script>

<style lang="scss">
.search {
  margin: 20px 0;

  form input {
    width: 270px;
    border: 0;
    font-size: 1.2em;
    border-bottom: 2px solid #b7c9e0;
    outline: 0;
    background-color: transparent;
    color: #fff;
  }

  @media screen and (min-width: 1024px) {
    width: 50%;
    margin: 0 auto;

    form input {
      font-size: 1.5em;
      width: 100%;
    }
  }
}
</style>

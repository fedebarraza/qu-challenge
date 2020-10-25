<template>
  <div class="sort-button">
    <button v-on:click="sort">{{ buttonText }}</button>
  </div>
</template>

<script>
export default {
    name: 'SortButton',
    data() {
        return {
            sortAsc: false,
        };
    },
    computed: {
        buttonText() {
            return this.sortAsc ? 'Sort Asc' : 'Sort Desc';
        },
    },
    methods: {
        sort() {
            this.sortAsc = !this.sortAsc;
            this.$emit('sort', this.sortAsc);
        },
    },
};
</script>

<style lang="scss" scoped>
.sort-button {
  text-align: right;

    &:hover {
        opacity: 0.9;
    }

  button {
    color: #000;
    padding: 15px;
    outline: none;
    border-radius: 6px;
    border: 2px solid rgb(255, 234, 0);
    background-color: rgb(255, 234, 0);
    font-weight: bold;
    cursor: pointer;
    text-transform: uppercase;
  }
}
</style>

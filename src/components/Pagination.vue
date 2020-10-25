<template>
    <div class="pagination" v-if="totalPages > 1">
        <a v-for="pageNumber in totalPages" :key="pageNumber" v-on:click="getPage" v-bind:class="{selected: currentPage == pageNumber}">{{pageNumber}}</a>
    </div>
</template>

<script>
export default {
    name: 'Pagination',
    props: {
        totalPages: {
            type: Number,
            required: true,
        },
        currentPage: {
            type: Number,
            required: false,
        },
    },
    methods: {
        getPage(event) {
            this.$emit('pagination', Number(event.target.text));
        }
    }
};
</script>

<style lang="scss" scoped>
    .pagination {
        margin: 30px 0;
        text-align: center;
        a {
            margin: 10px;
            padding: 5px;
            cursor: pointer;

            &:hover {
                text-decoration: underline;
            }

            &.selected {
                text-decoration: underline;
            }
        }
    }
</style>

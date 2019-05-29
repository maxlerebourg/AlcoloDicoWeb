<template>
    <div class="container">
        <h3>Quote</h3>
        <ul class="list-group">
            <li class="list-group-item" v-for="item in data">
                <h4>{{item.quote}}</h4>
                <p>{{item.date.substring(0,10)}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
    import {getListQuoteFromApi} from '../../API/QuoteAPI';
    export default {
        name: 'quote-list',
        data: () => {
            return {
                data: []
            }
        },
        created() {
            this.fetchData();
        },
        methods: {
            fetchData() {
                getListQuoteFromApi('new',100,0).then((data) => {
                    this.data = data;
                }).catch(() => {})
            }
        }
    }

</script>
<style scoped>

</style>


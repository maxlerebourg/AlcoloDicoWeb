<template>
    <div class="container">
        <h3>Cocktails</h3>
        <div class="card mt-3" v-for="item in data" >
            <img class="card-img rounded" width="100%" height="600px"
                 :src="item.images.split(',')[0]" :alt="item.name"
                style="object-fit: cover">
            <div class="card-img-overlay"
                 v-bind:style="{backgroundColor: (item.visible ? 'rgba(0,0,0,.3)' : 'rgba(0,0,0,.6)')}">
                <h1 class="font-weight-bold text-white align-self-end ">{{item.name}}</h1>
                <p class="font-weight-bold text-white justify-content-end align-items-end">{{item.preview}}</p>
                <div id="recipe" class="align-content-end" v-bind:style="{ display: (item.visible ? 'none' : 'inherit') }">
                    <p class="text-white" v-for="rule in item.recipe.split('.')">
                        {{rule.length > 1 ? rule + '.' : ''}}
                    </p>
                </div>
            </div>
            <a v-on:click="item.visible = !item.visible" class="stretched-link"></a>
        </div>
    </div>
</template>

<script>
    import {getListCocktailFromApi} from '../../API/CocktailAPI';

    export default {
        name: 'cocktail-list',
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
                getListCocktailFromApi().then((data) => {
                    this.data = data;
                }).catch(() => {
                })
            }
        }
    }

</script>
<style scoped>

</style>


<template>
    <div class="container">
        <h3>Jeux d'alcool</h3>
        <div class="row">
            <div class="card col-sm-3 m-auto" v-for="item in data" :id="'game_'+item.id">
                <div class="d-flex flex-column">
                    <img class="img-fluid rounded mt-1 mb-1" style="height: 200px; width: 100%; object-fit: cover"
                         :src="item.images.split(',')[0]" :alt="item.name"/>
                    <h5 class="font-weight-bold mt-0">{{item.name}}</h5>
                    <p>{{item.preview}}</p>
                    <div class="row justify-content-end align-items-center" v-if="item.comments && item.comments[0]">
                        <span class="m-1">
                            {{(Math.round(item.comments[0].rate * 10) / 10).toFixed(1)}}
                        </span>
                        <i class="fas fa-star text-warning mr-1" style="font-size: 10px"></i>
                    </div>
                    <a onclick="()=>{}" class="stretched-link"></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {getListGameFromApi} from '../../API/GameAPI';
    export default {
        name: 'game-list',
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
                getListGameFromApi().then((data) => {
                    this.data = data;
                }).catch(() => {
                })
            }
        }
    }

</script>
<style scoped>
    h3 {
        font-weight: bold;
    }
</style>


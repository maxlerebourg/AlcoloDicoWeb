<template>
    <div class="modal" :id="'GameModal_'+game.id" tabindex="-1" role="dialog"
         aria-labelledby="GameModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-body">
                    <h3>{{game.name}}</h3>
                    <p v-for="rule in game.rules.split('.')">{{rule}}.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "modal-game",
        props: ['game'],

    }
</script>

<style scoped>

</style>
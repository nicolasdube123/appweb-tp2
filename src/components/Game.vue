<script setup lang="ts">
    import { Player } from '../script/characterService';

    const props = defineProps({
        player: {
            type: Object as () => Player,
            required: true
        }
    });

    function fight() {
        
    }

    function end() {

    }

    function endWithRepair() {
        props.player.credit -= (100 - props.player.ship.vitality) * 5
        end()
    }
</script>

<template>
    <div class="container">
        <div class="d-flex justify-content-end row my-2">
            <div class="w-75">
                <div class="bg-primary rounded-top p-1 ps-2">
                    <p>Actions</p>
                </div>
                <div class="bg-dark rounded-bottom row">
                    <button @click="fight" class="col rounded bg-primary m-3 p-2 d-flex justify-content-center align-items-center text-center">
                        <p>Combattre</p>
                    </button>
                    <button @click="end" class="col rounded bg-primary m-3 p-2 d-flex justify-content-center align-items-center text-center">
                        <p>Terminer la mission</p>
                    </button>
                    <button @click="endWithRepair" class="col rounded bg-primary m-3 p-2 d-flex justify-content-center align-items-center text-center">
                        <p>Terminer la mission et réparer le vaisseau</p>
                    </button>
                </div>
            </div>
            <div class="w-25 d-flex flex-column">
                <div class="bg-primary rounded-top p-1 ps-2">
                    <p>Mission en cours</p>
                </div>
                <div class="bg-dark rounded-bottom p-1 ps-2 flex-fill">
                    <p class="fs-5">1 / 5</p>
                    <p>Objectif: survivre à 5 missions en obtenant le plus de crédits</p>
                </div>
            </div>
        </div>

        <div class="d-flex justify-content-end row my-2">
            <div class="w-50">
                <div class="bg-primary rounded-top p-1 ps-2">
                    <p>{{props.player.name}}</p>
                </div>
                <div class="bg-dark rounded-bottom p-2">
                    <p>Maitre - 0 CG</p>
                    <p class="ship-font text-center">{{props.player.ship.name}}</p>
                    <p class="text-center">progress bar</p>
                </div>
            </div>
            <div class="w-50">
                <div class="bg-primary rounded-top p-1 ps-2">
                    <p>Nom de l'adversaire</p>
                </div>
                <div class="bg-dark rounded-bottom p-2">
                    <p>Expert - 120 CG</p>
                    <p class="ship-font text-center">A-wing</p>
                    <p class="text-center">progress bar</p>
                </div>
            </div>
        </div>
    </div>
</template>
  
<style scoped>
p {
    color: white;
    margin-bottom: 0;
}

.row {
    margin-right: 0;
    margin-left: 0;
}

.ship-font {
    font-size: 0.75rem !important;
}
</style>

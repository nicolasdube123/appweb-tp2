<script setup lang="ts">
    import { Game } from "../App.vue"

    const props = defineProps({
        game: {
            type: Object as () => Game,
            required: true
        }
    });

    function fight() {
        console.log("Player: " + props.game.player.ship.vitality + " Opponent EXP: " + props.game.opponent.experience)
        console.log("Opponent: " + props.game.opponent.ship.vitality)

        if (playerHitsTarget(props.game.opponent.experience)) {
            props.game.opponent.ship.vitality -= 3 + Math.random() * 3
        } else {
            props.game.player.ship.vitality -= 3 + Math.random() * 3
        }

        console.log("new Player: " + props.game.player.ship.vitality)
        console.log("new Opponent: " + props.game.opponent.ship.vitality)
    }

    function end() {

    }

    function endWithRepair() {
        props.game.player.credit -= Math.ceil((100 - props.game.player.ship.vitality) * 5)
        props.game.player.ship.vitality = 100
        end()
    }

    function playerHitsTarget(experience : number) : boolean {
        let odds: number
        
        switch (experience) {
            case 1:
                odds = 0.2
                break;
            case 2:
                odds = 0.35
                break;
            case 3:
                odds = 0.5
                break;
            case 4:
                odds = 0.7
                break;
            default:
                console.log(experience)
                throw new Error("Invalid experience level")
        }

        // random() retourne un nombre aléatoire entre 0 et 1
        // Si odds = 0.7, il y a 70% de chance que le nombre aléatoire soit inférieur, etc.
        if (Math.random() <= odds) {
            return false
        }
        return true
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
                    <p>{{props.game.player.name}}</p>
                </div>
                <div class="bg-dark rounded-bottom p-2">
                    <p>Maitre - {{ props.game.player.credit }} CG</p>
                    <p class="ship-font text-center">{{props.game.player.ship.name}}</p>
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

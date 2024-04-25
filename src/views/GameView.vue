<script setup lang="ts">
    import { ref, watch } from "vue";
    import { Player, GameStatus } from "../App.vue";
    import { Character } from "../script/characterService"
    import { useRouter } from "vue-router";
    import Popup from "../components/Popup.vue"

    const router = useRouter()

    const emit = defineEmits(['nextRound', 'lost'])

    const props = defineProps({
        player: {
            type: Object as () => Player,
            required: true
        },
        opponent : {
            type: Object as () => Character,
            required: true
        },
        gameStatus : {
            type: Object as () => GameStatus,
            required: true
        }
    })

    //importer de characterService plutôt?
    const experiences: { [key: number]: string } = {
        1: "Débutant",
        2: "Confirmé",
        3: "Expert",
        4: "Maitre"
    }

    const initialPlayerHealth = props.player.ship.vitality
    let initialOpponentHealth = props.opponent.ship.vitality

    const creditsWonInLastRound = ref<number>(0)

    watch(() => props.opponent, (newOpponent : Character) => {
        initialOpponentHealth = newOpponent.ship.vitality;
    })

    function fight() {
        if (playerHitsTarget(props.opponent.experience)) {
            props.opponent.ship.vitality -= 3 + Math.random() * 3
            if (props.opponent.ship.vitality <= 0) {
                props.opponent.ship.vitality = 0
                winRound()
            }

        } else {
            props.player.ship.vitality -= 3 + Math.random() * 3
            if (props.player.ship.vitality <= 0) {
                props.player.ship.vitality = 0
                emit('lost')
            }
        }
    }

    function winRound() {
        end()
        creditsWonInLastRound.value = Number(props.opponent.credit)
        props.player.credit += Number(props.opponent.credit)
        props.opponent.credit = "0"
    }

    function end() {
        creditsWonInLastRound.value = 0
        emit('nextRound')
    }

    function endWithRepair() {
        while (repair()) {}
        end()
    }

    function repair() : boolean {
        if (props.player.ship.vitality < 100 && props.player.credit >= 5) {
            props.player.credit -= 5
            props.player.ship.vitality++
            return true
        }
        return false
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
                throw new Error("Invalid experience level")
        }

        // random() retourne un nombre aléatoire entre 0 et 1
        // Si odds = 0.7, il y a 70% de chance que le nombre aléatoire soit inférieur, etc.
        if (Math.random() <= odds) {
            return false
        }
        return true
    }
    
    function routeToHome() {
        router.push('/')
    }

    function routeToRanking() {
        router.push('/ranking')
    }
</script>

<template>
    
    <!--Apparaît si le joueur gagne la partie-->
    <Popup v-if="!props.gameStatus.hasStarted && props.gameStatus.hasWon" 
        @proceedPopup="routeToRanking"
        :optionToCancel=false
        :title="'Partie gagnée'"
        :text="'Vous avez gagné un total de ' + props.player.credit + ' CG.\nRedirection vers le score'"
    />

    <!--Apparaît si le joueur perd la partie-->
    <Popup v-if="!props.gameStatus.hasStarted && !props.gameStatus.hasWon" 
        @proceedPopup="routeToHome"
        :optionToCancel=false
        :title="'Partie terminée'"
        :text="'Meilleure chance la prochaine fois...\nRedirection vers la page d\'accueil'"
    />

    <div class="container">
        <div class="d-flex justify-content-end row my-2">
            <div class="w-75">
                <div class="bg-primary rounded-top p-1 ps-2">
                    <p>Actions</p>
                </div>
                <div class="bg-dark rounded-bottom row">
                    <button @click="fight" class="btn btn-outline-none col rounded bg-primary m-3 p-2 d-flex justify-content-center align-items-center text-center">
                        <p>Combattre</p>
                    </button>
                    <button @click="end" class="btn btn-outline-none col rounded bg-primary m-3 p-2 d-flex justify-content-center align-items-center text-center">
                        <p>Terminer la mission</p>
                    </button>
                    <button @click="endWithRepair" class="btn btn-outline-none col rounded bg-primary m-3 p-2 d-flex justify-content-center align-items-center text-center">
                        <p>Terminer la mission et réparer le vaisseau</p>
                    </button>
                </div>
            </div>
            <div class="w-25 d-flex flex-column">
                <div class="bg-primary rounded-top p-1 ps-2">
                    <p>Mission en cours</p>
                </div>
                <div class="bg-dark rounded-bottom p-1 ps-2 flex-fill">
                    <p class="fs-5">{{ props.gameStatus.mission }} / 5</p>
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
                    <p>Maitre - {{ props.player.credit }} CG</p>
                    <p class="ship-font text-center">{{props.player.ship.name}}</p>
                    <progress :value="props.player.ship.vitality" :max="initialPlayerHealth" class="w-100"></progress>
                </div>
            </div>
            <div class="w-50">
                <div class="bg-primary rounded-top p-1 ps-2">
                    <p>{{ props.opponent.name }}</p>
                </div>
                <div class="bg-dark rounded-bottom p-2">
                    <p>{{ experiences[props.opponent.experience] }} - {{ props.opponent.credit }} CG</p>
                    <p class="ship-font text-center">{{ props.opponent.ship.name }}</p>
                    <progress :value="props.opponent.ship.vitality" :max="initialOpponentHealth" class="w-100"></progress>
                </div>
            </div>
        </div>
    </div>
    <span v-if="creditsWonInLastRound > 0">Vous avez gagné {{ creditsWonInLastRound }} CG.</span>
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

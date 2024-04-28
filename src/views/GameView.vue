<script setup lang="ts">
    import { ref, watch } from "vue";
    import { Player, GameStatus } from "../App.vue";
    import { Character, fightingOdds } from "../script/characterService"
    import { useRouter } from "vue-router";
    import Popup from "../components/Popup.vue"
    import Action from "../components/Action.vue"
    import Mission from "../components/Mission.vue"
    import PlayerComponent from "../components/Player.vue"
    import Opponent from "../components/Opponent.vue"

    const router = useRouter()

    //const emit = defineEmits(['nextRound', 'lost'])
    const emit = defineEmits<{
        (event: 'nextRound'):void,
        (event: 'lost'):void,
        (event: 'addPlayerToRanking'):void
    }>()

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
        let odds: number = fightingOdds[experience]

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
            <Action @fight="fight" @end="end" @endWithRepair="endWithRepair"/>

            <Mission :mission="props.gameStatus.mission"/>
        </div>

        <div class="d-flex justify-content-end row my-2">
            <PlayerComponent :player="props.player" :initialPlayerHealth="initialPlayerHealth"/>
            <Opponent :opponent="props.opponent" :initialOpponentHealth="initialOpponentHealth"/>
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

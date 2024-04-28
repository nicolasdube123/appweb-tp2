<script setup lang="ts">
    import Header from "./components/Header.vue"
    import { ref } from "vue"
    import { ShipService, Ship, ShipsWithLife } from "./script/shipService";
    import { Character, CharacterService } from "./script/characterService";
    import { RankingService } from "./script/rankingService";

    export interface Player {
        name: String;
        credit: number;
        ship: ShipsWithLife;
    }

    export interface GameStatus {
        mission: number;
        hasStarted: boolean;
        hasWon: boolean | undefined;
    }

    const shipService: ShipService = new ShipService()
    const characterService: CharacterService = new CharacterService()
    const rankingService: RankingService = new RankingService()
    const charactersFought = ref<Array<Character>>([])

    let player = ref<Player | undefined>()
    let opponent = ref<Character | undefined>()
    let gameStatus = ref <GameStatus>({
        mission: 1,
        hasStarted: false,
        hasWon: undefined
    })

    async function createGame(formName: String, formShipId: String) {
        const playerShip : Ship = await shipService.getShip(formShipId)

        player.value = {
            name: formName,
            credit: 0,
            ship:  {
                id: playerShip.id,
                name: playerShip.name,
                vitality: 100
            }
        }

        const newOpponent = await getNewOpponent()
        opponent.value = newOpponent

        // Reset de gameStatus
        gameStatus.value = {
            mission: 1,
            hasStarted: true,
            hasWon: undefined
        }

    }

    async function getNewOpponent() : Promise<Character> {
        const characters = await characterService.getCharacters()
        const randomCharacter = characters[Math.floor(Math.random() * characters.length)]
        charactersFought.value.push(randomCharacter)
        return randomCharacter
    }

    async function incrementMission() {
        if (gameStatus.value.mission >= 5) {
            endGame()
        } else {
            gameStatus.value.mission++
            const newOpponent = await getNewOpponent()
            opponent.value = newOpponent
        }
    }

    function endGame() {
        if (player.value && gameStatus.value) {
            gameStatus.value.hasWon = (player.value.ship.vitality > 0)
            gameStatus.value.hasStarted = false
        }
    }

</script>

<template>
    <div class="container">
        <Header :gameStatus="gameStatus" @endGame="endGame"/>
        <Suspense>
            <RouterView v-slot="{ Component }">
                <component 
                    :is="Component" 
                    :player=player
                    :opponent=opponent
                    :gameStatus=gameStatus
                    v-on:submitForm="createGame"
                    v-on:nextRound="incrementMission"
                    v-on:lost="endGame"
                />
            </RouterView>
        </Suspense>
    </div>
</template>
  
<style scoped>

</style>

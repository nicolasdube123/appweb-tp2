<script setup lang="ts">
    import Header from "./components/Header.vue"
    import { ref } from "vue"
    import { ShipService, Ship, ShipsWithLife } from "./script/shipService";
    import { Character, CharacterService } from "./script/characterService";

    export interface Player {
        name: String;
        credit: number;
        ship: ShipsWithLife;
    }

    export interface GameStatus {
        mission: number;
        hasWon: boolean;
        hasStarted: boolean;
    }

    const shipService: ShipService = new ShipService()
    const characterService: CharacterService = new CharacterService()
    const charactersFought = ref<Array<Character>>([])

    let player = ref<Player | undefined>()
    let opponent = ref<Character | undefined>()
    let gameStatus = ref <GameStatus>({
        mission: 1,
        hasWon: false,
        hasStarted: false
    })

    async function createGame(formName: string, formShipId: string) {
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
            hasWon: false,
            hasStarted: true
        }

    }

    async function getNewOpponent() : Promise<Character> {
        const characters = await characterService.getCharacters()
        const randomCharacter = characters[Math.floor(Math.random() * characters.length)]
        charactersFought.value.push(randomCharacter)
        return randomCharacter
    }

    async function incrementMission() {
        if (gameStatus.value.mission++ > 5) {
            winGame()
        } else {
            const newOpponent = await getNewOpponent()
            opponent.value = newOpponent
        }
    }

    function loseGame() {
        gameStatus.value.hasStarted = false
    }

    function winGame() {
        gameStatus.value.hasWon = true
    }
</script>

<template>
    <div class="container">
        <Header :gameStatus="gameStatus" @endGame="loseGame"/>
        <Suspense>
            <RouterView v-slot="{ Component }">
                <component 
                    :is="Component" 
                    :player=player
                    :opponent=opponent
                    :gameStatus=gameStatus
                    v-on:submitForm="createGame"
                    v-on:nextRound="incrementMission"
                    v-on:lost="loseGame"
                />
            </RouterView>
        </Suspense>
    </div>
</template>
  
<style scoped>

</style>

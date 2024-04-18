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

    const shipService: ShipService = new ShipService()
    const characterService: CharacterService = new CharacterService()

    let player = ref<Player | undefined>()
    let opponent = ref<Character | undefined>()
    let mission = ref<number>(1)
    let hasWon = ref<boolean>(false)

    const charactersFought = ref<Array<Character>>([])

    async function createGame(formName: string, formShipId: string) {
        const playerShip : Ship = await shipService.getShip(formShipId)

        player.value = {
            name: formName,
            credit: 0,
            ship:  {
                id: playerShip.id,
                name: playerShip.name,
                vitality: 1000
            }
        }

        const newOpponent = await getNewOpponent()
        opponent.value = newOpponent

        mission.value = 1

        hasWon.value = false
    }

    async function getNewOpponent() : Promise<Character> {
        const characters = await characterService.getCharacters()
        const randomCharacter = characters[Math.floor(Math.random() * characters.length)]
        charactersFought.value.push(randomCharacter)
        return randomCharacter
    }

    async function incrementMission() {
        if (mission.value++ >= 5) {
            winGame()
        } else {
            const newOpponent = await getNewOpponent()
            opponent.value = newOpponent
        }
    }

    function loseGame() {

    }

    function winGame() {
        hasWon.value = true;
    }
</script>

<template>
    <div class="container">
        <Header/>
        <Suspense>
            <RouterView v-slot="{ Component }">
                <component 
                    :is="Component" 
                    :player=player
                    :opponent=opponent
                    :mission=mission
                    :hasWon=hasWon
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

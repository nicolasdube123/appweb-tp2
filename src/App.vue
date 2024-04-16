<script setup lang="ts">
    import Header from "./components/Header.vue"
    import { ref } from "vue"
    import { ShipService, Ship, ShipsWithLife } from "./script/shipService";
    import { Character, CharacterService } from "./script/characterService";

    interface Player {
        name: String;
        credit: number;
        ship: ShipsWithLife;
    }

    export interface Game {
        player: Player;
        opponent: Character;
        mission: number
    }

    const shipService: ShipService = new ShipService();
    const characterService: CharacterService = new CharacterService();

    let game = ref<Game | null>();

    async function createGame(formName: string, formShipId: string) {
        const playerShip : Ship = await shipService.getShip(formShipId)
        const characters = await characterService.getCharacters()

        game.value = {
            player: {
                name: formName,
                credit: 100,
                ship:  {
                    id: playerShip.id,
                    name: playerShip.name,
                    vitality: 100
                }
            },
            opponent: characters[Math.floor(Math.random() * characters.length)],
            mission : 1
        }
    }
</script>

<template>
    <div class="container">
        <Header/>
        <Suspense>
            <RouterView v-slot="{ Component }">
                <component 
                    :is="Component" 
                    :game=game
                    v-on:submitForm="createGame"
                />
            </RouterView>
        </Suspense>
    </div>
</template>
  
<style scoped>

</style>

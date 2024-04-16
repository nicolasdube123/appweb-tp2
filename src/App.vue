<script setup lang="ts">
    import Header from "./components/Header.vue"
    import { ref } from "vue"
    import { Player } from "./script/characterService";
    import { ShipService, Ships } from "./script/shipService";

    const service: ShipService = new ShipService();

    let player = ref<Player | null>();

    async function createPlayer(formName: string, formShipId: string) {
        const ship : Ships = await service.getShip(formShipId); 

        player.value = {
            name: formName,
            credit: 100,
            ship:  {
                id: ship.id,
                name: ship.name,
                vitality: 100
            }
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
                    :player=player
                    v-on:submitForm="createPlayer"
                />
            </RouterView>
        </Suspense>
    </div>
</template>
  
<style scoped>

</style>

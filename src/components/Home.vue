<script setup lang="ts">
    import { Ships, ShipService } from "../script/shipService"
    import { ref } from "vue"

    const service: ShipService = new ShipService();
    const ships: Array<Ships> = await service.getShips();

    const name = ref<String>('');
    const shipName = ref<String>('');
</script>

<template>
    <p>
        <span class="h1">Votre objectif:</span>
        <span class="h2 text-secondary"> survivre à 5 missions en obtenant le plus de crédits galactiques.</span>
    </p>
    <div id="shipForm" class="container w-25 border rounded">
        <form>
            <div class="form-group my-3">
                <label for="name">Votre nom:</label>
                <input type="text" class="form-control" id="name" v-model="name">
            </div>
            <div class="form-group my-3">
                <label for="shipSelect">Votre vaisseau:</label>
                <select class="form-select" id="shipSelect" v-model="shipName">
                    <option v-for="ship in ships" :value="ship.name">{{ship.name}}</option>
                </select>
            </div>
            <RouterLink @click="$emit('submitForm', name, shipName)" to="/game" class="btn btn-primary btn-block w-100 mb-3">Démarrer la partie</RouterLink>
        </form>
    </div>

</template>

<style scoped>

</style>

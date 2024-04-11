<script setup lang="ts">
    //import { Ships, ShipService } from "../script/shipService"

    //const service: ShipService = new ShipService();
    //let ships: Array<Ships> = await service.getShips();
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
            <input type="text" class="form-control" id="name">
        </div>
        <div class="form-group my-3">
            <label for="shipSelect">Votre vaisseau:</label>
            <select class="form-select" id="shipSelect">
                <!--<option v-for="ship in ships" value={{ship.id}}>{{ship.name}}</option>-->
                <option value="ship2">Vaisseau 2</option>
                <option value="ship3">Vaisseau 3</option>
            </select>
        </div>
        <button type="submit" class="btn btn-primary btn-block w-100 mb-3">Démarrer la partie</button>
        </form>
    </div>

</template>

<style scoped>

</style>

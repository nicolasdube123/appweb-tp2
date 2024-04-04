<script setup lang="ts">

</script>

<template>
    <h1>Votre objectif: survivre à 5 missions en obtenant le plus de crédits galactiques.</h1>
    <div id="shipForm">
        <form>
        <div class="form-group  ">
            <label for="name">Votre nom:</label>
            <input type="text" class="form-control" id="name">
        </div>
        <div class="form-group">
            <label for="shipSelect">Votre vaisseau:</label>
            <select class="form-control" id="shipSelect">
                <option value="ship1">Vaisseau 1</option>
                <option value="ship2">Vaisseau 2</option>
                <option value="ship3">Vaisseau 3</option>
            </select>
        </div>
        <button type="submit" class="btn btn-primary btn-block">Démarrer la partie</button>
        </form>
    </div>
</template>
  
<style scoped>

</style>

<script setup lang="ts">
    const props = defineProps<{
        mission: number
    }>()
</script>
<template>
    <div class="w-25 d-flex flex-column">
        <div class="bg-primary rounded-top p-1 ps-2">
            <p id="title">Mission en cours</p>
        </div>
        <div class="bg-dark rounded-bottom p-1 ps-2 flex-fill">
            <p class="fs-5" id="nbMission">{{ props.mission }} / 5</p>
            <p id="objective">Objectif: survivre à 5 missions en obtenant le plus de crédits</p>
        </div>
    </div>
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
<script setup lang="ts">
    import { Character, experiences } from "../script/characterService"

    const props = defineProps<{
        opponent: Character,
        initialOpponentHealth: number
    }>()
</script>
<template>
    <div class="w-50">
        <div class="bg-primary rounded-top p-1 ps-2">
            <p id="name">{{ props.opponent.name }}</p>
        </div>
        <div class="bg-dark rounded-bottom p-2">
            <p id="experience">{{ experiences[props.opponent.experience] }} - {{ props.opponent.credit }} CG</p>
            <p class="ship-font text-center" id="vaisseauNom">{{ props.opponent.ship.name }}</p>
            <progress :value="props.opponent.ship.vitality" :max="props.initialOpponentHealth" class="w-100" id="health"></progress>
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
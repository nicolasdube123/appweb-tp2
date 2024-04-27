<script setup lang="ts">
    import { Player } from "../App.vue";
    const props = defineProps<{
        player: Player,
        initialPlayerHealth: number
    }>()
</script>
<template>
    <div class="w-50">
        <div class="bg-primary rounded-top p-1 ps-2">
            <p>{{props.player.name}}</p>
        </div>
        <div class="bg-dark rounded-bottom p-2">
            <p>Maitre - {{ props.player.credit }} CG</p>
            <p class="ship-font text-center">{{props.player.ship.name}}</p>
            <progress :value="props.player.ship.vitality" :max="props.initialPlayerHealth" class="w-100"></progress>
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
<script setup lang="ts">
    const emit = defineEmits<{
        (event: 'fight'):void,
        (event: 'end'):void,
        (event: 'endWithRepair'):void
    }>()
</script>

<template>
    <div class="w-75">
        <div class="bg-primary rounded-top p-1 ps-2">
            <p>Actions</p>
        </div>
        <div class="bg-dark rounded-bottom row">
            <button @click="emit('fight')" class="btn btn-outline-none col rounded bg-primary m-3 p-2 d-flex justify-content-center align-items-center text-center">
                <p>Combattre</p>
            </button>
            <button @click="emit('end')" class="btn btn-outline-none col rounded bg-primary m-3 p-2 d-flex justify-content-center align-items-center text-center">
                <p>Terminer la mission</p>
            </button>
            <button @click="emit('endWithRepair')" class="btn btn-outline-none col rounded bg-primary m-3 p-2 d-flex justify-content-center align-items-center text-center">
                <p>Terminer la mission et réparer le vaisseau</p>
            </button>
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

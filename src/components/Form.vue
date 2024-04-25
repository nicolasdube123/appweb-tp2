<script setup lang="ts">
    import { watch } from 'vue';

    const props = defineProps<{ 
        isServiceAvailable: boolean
    }>()
    let isServiceAvailable: boolean = false

    watch(() => props.isServiceAvailable, (newValue) => {
        isServiceAvailable = newValue
    })
</script>

<template>
    <p>
        <span class="h1">Votre objectif:</span>
        <span class="h2 text-secondary"> survivre à 5 missions en obtenant le plus de crédits galactiques.</span>
    </p>
    <div class="erreur_message" v-if="!isServiceAvailable"><h3>{{ DB_ERROR_MESSAGE }}</h3></div>
    <div class="erreur_message" id="err_verification"></div>
    <div id="shipForm" class="container w-25 border rounded">
        <form>
            <div class="form-group my-3">
                <label for="name">Votre nom:</label>
                <input type="text" class="form-control" id="name" v-model="name">
            </div>
            <div class="form-group my-3">
                <label for="shipSelect">Votre vaisseau:</label>
                <select class="form-select" id="shipSelect" v-model="ship">
                    <Suspense>
                        <template #default>
                            <option v-for="ship in ships" :value="ship.id">{{ship.name}}</option>
                        </template>
                        <template #fallback>
                            <option value="waiting">Veuillez patienter</option>
                        </template>
                    </Suspense>
                </select>
            </div>
            <a class="btn btn-primary btn-block w-100 mb-3" @click="submitForm()">Démarrer la partie</a>
        </form>
    </div>
</template>

<style scoped>
</style>
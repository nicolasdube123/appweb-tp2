<script setup lang="ts">
    import { watch, ref } from 'vue';
    import { Ship } from "../script/shipService"

    const props = defineProps<{
        isServiceAvailable: boolean,
        ships: Array<Ship>
    }>()
    const isServiceAvailable = ref<Boolean>(props.isServiceAvailable)

    const emit = defineEmits<{
        (event: 'submitForm', playerName: String, playerShip: String):void
    }>()

    watch(() => props.isServiceAvailable, (newValue) => {
        isServiceAvailable.value = newValue
    })

    const DB_ERROR_MESSAGE = "Il semble y avoir un problème! Veuillez réessayer plus tard."
    const VERIFICATION_ERROR_MESSAGE = "Veuillez vous assurer de remplir tous les champs."

    const name = ref<String>()
    const ship = ref<String>()

    const hasValidationErrors = ref<Boolean>(false)

    function submitForm() {
        if (isFieldEmpty()) 
        {
            hasValidationErrors.value = true
        }
        else 
        {
            hasValidationErrors.value = false
            //Les vérifications de undefined sont faites dans isFieldEmpty
            // @ts-ignore
            emit("submitForm", name.value, ship.value?.toString())
        }
    }

    function isFieldEmpty() {
        if (name.value == undefined || ship.value == undefined) {
            return true
        }
        if (name.value.trim() === "" || ship.value === "") {
            return true
        }
        else {
            return false
        }
    }
</script>

<template>
    <p>
        <span class="h1">Votre objectif:</span>
        <span class="h2 text-secondary"> survivre à 5 missions en obtenant le plus de crédits galactiques.</span>
    </p>
    <div class="error-msg" id="err_db" v-if="!isServiceAvailable"><h3>{{ DB_ERROR_MESSAGE }}</h3></div>
    <div class="error-msg" id="err_verif" v-if="hasValidationErrors"><h3>{{ VERIFICATION_ERROR_MESSAGE }}</h3></div>
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
            <a class="btn btn-primary btn-block w-100 mb-3" id="start" @click="submitForm()">Démarrer la partie</a>
        </form>
    </div>
</template>

<style scoped>
    .error-msg {
      color: red;
      text-align: center;
    }
</style>
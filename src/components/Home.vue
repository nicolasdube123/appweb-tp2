<script setup lang="ts">
    import { ref } from "vue"
    import { Ship, ShipService } from "../script/shipService"
    import { useRouter } from "vue-router";

    const router = useRouter()
    const emit = defineEmits<{
        (event: 'submitForm', playerName: String, playerShip: String):void
    }>()

    const DB_ERROR_MESSAGE = "Il semble y avoir un problème! Veuillez réessayer plus tard."
    const VERIFICATION_ERROR_MESSAGE = "<h3>Veuillez vous assurer de remplir tous les champs.</h3>"

    let isServiceAvailable = true;
    const service: ShipService = new ShipService();
    let ships: Array<Ship> = []
        try {
            ships = await service.getShips();
            console.log("A")
            isServiceAvailable = true;
    } catch (error) {
        isServiceAvailable = false
    }

    const name = ref<String>()
    const ship = ref<String>()

    function submitForm() {
        if (isFieldEmpty()) {
            let divError = document.getElementById("err_verification") as HTMLElement
            divError.innerHTML=VERIFICATION_ERROR_MESSAGE
        }
        else {
            //Les vérifications de undefined sont faites dans isFieldEmpty
            // @ts-ignore
            emit("submitForm", name.value, ship.value)
            router.push({ name: "game" })
        }
    }

    function isFieldEmpty() {
        if (name.value == undefined || ship.value == undefined) {
            return true
        }
        if (name.value.trim() === "" || ship.value.trim() === "") {
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
    .erreur_message {
      color: red;
      text-align: center;
    }
</style>

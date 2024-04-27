<script setup lang="ts">
    import { ref } from "vue"
    import { Ship, ShipService } from "../script/shipService"
    import { useRouter } from "vue-router";
    import Form from "../components/Form.vue"

    const router = useRouter()
    const emit = defineEmits<{
        (event: 'submitForm', playerName: String, playerShip: String):void
    }>()

    let isServiceAvailable = ref<boolean>(false);
    const service: ShipService = new ShipService();
    let ships: Array<Ship> = []
    try {
        ships = await service.getShips();
        isServiceAvailable.value = true;
    } catch (error) {
        isServiceAvailable.value = false
    }

    function submitForm(name: String, ship: String) {
        emit("submitForm", name, ship)
        router.push({ name: "game" })
    }
</script>

<template>
    <Form :is-service-available="isServiceAvailable" :ships="ships" @submitForm="submitForm"/>
</template>

<style scoped>
    .erreur_message {
      color: red;
      text-align: center;
    }
</style>

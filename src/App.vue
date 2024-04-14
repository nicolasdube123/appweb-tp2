<script setup lang="ts">
    import Header from "./components/Header.vue"
    import { ref } from "vue"

    let name = ref('')
    let shipName = ref('')

    function receiveForm(formName: string, formShipName: string) {
        console.log("Name: " + formName)
        console.log("Ship: " + formShipName)
        name.value = formName
        shipName.value = formShipName
    }
</script>

<template>
    <div class="container">
        <Header/>
        <Suspense>
            <RouterView v-slot="{ Component }">
                <component 
                    :is="Component" 
                    :name=name 
                    :shipName=shipName 
                    v-on:submitForm="receiveForm"
                />
            </RouterView>
        </Suspense>
    </div>
</template>
  
<style scoped>

</style>

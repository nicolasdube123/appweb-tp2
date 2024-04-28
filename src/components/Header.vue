<script setup lang="ts">
    import { GameStatus } from '../App.vue'
    import { useRouter } from 'vue-router'
    import Popup from "./Popup.vue"
    import { ref } from "vue"

    const emit = defineEmits(['endGame'])

    const router = useRouter()
    const props = defineProps({
        gameStatus : {
            type: Object as () => GameStatus,
            required: true
        }
    })

    let chosenRoute = ref<string>()
    let isPopupActive = ref<boolean>(false)
    function showPopup(route: string) {
        chosenRoute.value = route
        isPopupActive.value = true
    }

    function closePopup() {
        isPopupActive.value = false
    }

    function route() {
        if (chosenRoute.value != undefined ) {
            router.push(chosenRoute.value)
        }
        closePopup()
        emit('endGame')
    }

</script>

<template>
        <Popup v-if="isPopupActive"
            @cancelPopup="closePopup" 
            @proceedPopup="route"
            :optionToCancel=true
            :title="'Êtes-vous sûrs?'"
            :text="'Cette action va terminer la partie. Voulez-vous procéder?'"
            id="leaving"
        />
        <div class="d-flex flex-row">
            <template v-if="props.gameStatus.hasStarted">
                <RouterLink to="/game" class="text-decoration-none h2 me-3" id="title">Titre du jeu</RouterLink>
                <span role="button" @click="showPopup('/')" class="text-decoration-none h3 mx-3 mt-1 text-secondary border-none" id="home">Accueil</span>
                <span role="button" @click="showPopup('/ranking')" class="text-decoration-none h3 mx-3 mt-1 text-secondary" id="score">Score</span>
            </template>
            <template v-else>
                <span class="text-decoration-none h2 me-3" id="title">Titre du jeu</span>
                <RouterLink to="/" class="text-decoration-none h3 mx-3 mt-1 text-secondary" id="home">Accueil</RouterLink>
                <RouterLink to="/ranking" class="text-decoration-none h3 mx-3 mt-1 text-secondary" id="score">Score</RouterLink>
            </template>
        </div>
</template>

<style scoped>

</style>

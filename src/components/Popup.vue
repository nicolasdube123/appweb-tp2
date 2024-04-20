<script setup lang="ts">

</script>

<template>
    <div class="popup fixed-top fixed-bottom fixed-left fixed-right d-flex align-items-center justify-content-center position-fixed">
        <div class="p-4 bg-white">
            <h2>Êtes-vous sûr?</h2>
            <p>Cette action va terminer la partie. Voulez-vous procéder?</p>
            <div class="d-flex align-items-center justify-content-around">
                <button @click="$emit('cancelPopup')" class="btn btn-danger">Non</button>
                <button @click="$emit('proceedPopup')" class="btn btn-success">Oui</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .popup {
        z-index: 99;
        background-color: rgba(0, 0, 0, 0.2);
    }
</style>
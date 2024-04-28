<script setup lang="ts">
    const props = defineProps({
        optionToCancel: Boolean,
        title: String,
        text: String
    })
</script>

<template>
    <div class="popup fixed-top fixed-bottom fixed-left fixed-right d-flex align-items-center justify-content-center position-fixed">
        <div class="p-4 bg-white">
            <h2 id="title">{{ props.title }}</h2>
            <p id="text">{{ props.text }}</p>
            <div class="d-flex align-items-center justify-content-around">
                <button v-if="props.optionToCancel" @click="$emit('cancelPopup')" class="btn btn-danger" id="cancel">Non</button>
                <button @click="$emit('proceedPopup')" class="btn btn-success" id="proceed">Ok</button>
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
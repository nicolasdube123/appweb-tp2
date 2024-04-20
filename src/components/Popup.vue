<script setup lang="ts">

</script>

<template>
    <div class="popup fixed-top fixed-bottom fixed-left fixed-right d-flex align-items-center justify-content-center position-fixed">
        <div class="p-4 bg-white">
            <h2>Are you sure?</h2>
            <p>This will cancel your current game. Are you sure you want to proceed?</p>
            <div class="d-flex align-items-center justify-content-around">
                <button @click="$emit('cancelPopup')" class="btn btn-danger">Cancel</button>
                <button @click="$emit('proceedPopup')" class="btn btn-success">Proceed</button>
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
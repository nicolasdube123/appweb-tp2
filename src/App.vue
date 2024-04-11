<script setup lang="ts">
    import Header from "./components/Header.vue"
    import Score from "./components/Score.vue"
</script>

<template>
    <div class="container">
        <Header/>
        <Score/>
        <Suspense>
            <RouterView/>
        </Suspense>
    </div>
</template>
  
<style scoped>

</style>

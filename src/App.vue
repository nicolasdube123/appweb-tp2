<script setup lang="ts">
    import Header from "./components/Header.vue"
    import Home from "./components/Home.vue"
    import Score from "./components/Score.vue"
</script>

<template>
    <div class="container">
        <Header/>
        <Home/>
        <Suspense>
            <Score/>
        </Suspense>
    </div>
</template>
  
<style scoped>

</style>

<script setup lang="ts">
    import Header from "./components/Header.vue"
</script>

<template>
    <div class="container">
        <Header/>
        <Suspense>
            <RouterView/>
        </Suspense>
    </div>
</template>
  
<style scoped>

</style>

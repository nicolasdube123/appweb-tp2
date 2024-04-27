<script setup lang="ts">
    import { Ranking } from "../script/rankingService"

    const props = defineProps<{
        ranking: Array<Ranking>
    }>()
    let ranking: Array<Ranking> = props.ranking
    
    ranking.sort((a: any, b: any) => { 
        const scoreA = a.score
        const scoreB = b.score
        if (scoreA < scoreB) {
            return 1
        }
        if (scoreA > scoreB) {
            return -1
        }
        return 0
    })
</script>

<template>
    <div class="mt-3">
        <div class="border-bottom border-dark-subtle fw-bold d-flex justify-content-center py-2">
            <p>Pointage</p>
        </div>
        <div v-for="player in ranking" class="border-top border-bottom py-2">
            <p>{{ player.name }} - {{ player.score }} CG</p>
        </div>
    </div>
</template>

<style scoped>
p {
    margin-bottom: 0;
}
</style>
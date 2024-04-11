<script setup lang="ts">
    import { Ranking, RankingService } from "../script/rankingService"

    const service: RankingService = new RankingService();

    let ranking: Array<Ranking> = await service.getRankings();
    //Pour comparer par le score
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    ranking.sort((a, b) => { 
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

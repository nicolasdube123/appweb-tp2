<script setup lang="ts">
    import { GameStatus, Player } from "../App.vue";
    import { Ranking, RankingService } from "../script/rankingService"
    import Score from "../components/Score.vue"

    const service: RankingService = new RankingService()
    let ranking: Array<Ranking> = await service.getRankings()

    const props = defineProps({
        player: {
            type: Object as () => Player,
            required: true
        },
        gameStatus : {
            type: Object as () => GameStatus,
            required: true
        }
    })

    if(props.player != undefined && props.gameStatus.hasWon) {
        ranking.push({
            id: "Player",
            name: props.player.name,
            score: props.player.credit
        })
    }

    //Pour comparer par le score
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
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
    <Score :ranking="ranking"/>
</template>

<style scoped>
</style>

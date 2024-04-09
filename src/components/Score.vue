<script setup lang="ts">
    import ShipsWithLife from "../script/shipService";
    import { Character, CharacterService } from "../script/characterService"

    const service: CharacterService = new CharacterService();
    let characters: Array<Character> = await service.getCharacters();
</script>

<template>
    <div>
        <ul v-for="character in characters">
            <li>{{ character.name }}</li>
        </ul>
    </div>
</template>

<style scoped>

</style>

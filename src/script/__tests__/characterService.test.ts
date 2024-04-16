import { describe, expect, it } from 'vitest'
import { Character, CharacterService } from "../characterService.ts"

const ANY_ID = "8531"

describe("characterService.ts", () => {

    it("Quand un personnage est demandé, retourne le personnage", async () => {
        const service = new CharacterService();

        const character: Character = await service.getCharacter(ANY_ID)
    
        expect(character).toBeDefined()
        expect(character.id).toBe(ANY_ID)
      })

      it("Quand les personnages sont demandés, retourne les personnages", async () => {
        const service = new CharacterService();

        const characters: Array<Character> = await service.getCharacters()
    
        expect(characters).toBeDefined()
        for (let i = 0; i < characters.length; i++) {
            expect(characters[i]).toBeDefined()
        }
      })
})
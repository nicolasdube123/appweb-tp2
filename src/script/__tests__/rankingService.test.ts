import { describe, expect, it } from 'vitest'
import { Player, RankingService } from "../rankingService.ts"

const ANY_ID = "1"

describe("rankingService.ts", () => {

    it("Quand un joueur est demandé, retourne le joueur", async () => {
        const service = new RankingService();

        const player: Player = await service.getRanking(ANY_ID)
    
        expect(player).toBeDefined()
        expect(player.id).toBe(ANY_ID)
      })

      it("Quand les joueurs ssont demandés, retourne les joueurs", async () => {
        const service = new RankingService();

        const players: Array<Player> = await service.getRankings()
    
        expect(players).toBeDefined()
        for (let i = 0; i < players.length; i++) {
            expect(players[i]).toBeDefined()
        }
      })
})
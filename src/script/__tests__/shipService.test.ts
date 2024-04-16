import { describe, expect, it } from 'vitest'
import { Ship, ShipService } from "../shipService.ts"

const ANY_ID = "20"

describe("shipService.ts", () => {

    it("Quand un vaisseau est demandé, retourne le vaisseau", async () => {
        const service = new ShipService();

        const ship: Ship = await service.getShip(ANY_ID)
    
        expect(ship).toBeDefined()
        expect(ship.id).toBe(ANY_ID)
      })

      it("Quand les vaisseaux sont demandés, retourne les vaisseaux", async () => {
        const service = new ShipService();

        const ships: Array<Ship> = await service.getShips()
    
        expect(ships).toBeDefined()
        for (let i = 0; i < ships.length; i++) {
            expect(ships[i]).toBeDefined()
        }
      })
})
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Score from '../Score.vue'
import { Ranking } from '../../script/rankingService'

const ANY_RANKING1: Ranking = {
  id: "1",
  name: "Nom1",
  score: 30
} 
const ANY_RANKING2: Ranking = {
  id: "2",
  name: "Nom2",
  score: 20
}
const ARRAY_ANY_RANKING: Array<Ranking> = [ANY_RANKING1, ANY_RANKING2]


describe('Score.vue', () => {
    it("Les entrants existent", async () => {
      let wrapper = mount(Score, {
        propsData: {
            ranking: ARRAY_ANY_RANKING
        }
      })
      const pointing = wrapper.find("#pointing")
      const players = wrapper.find("#players")
      
      expect(pointing.exists()).toBeTruthy()
      expect(players.exists()).toBeTruthy()
    })

    it("Les joueurs envoyé en props sont tous affichés", async () => {
      let wrapper = mount(Score, {
        propsData: {
            ranking: ARRAY_ANY_RANKING
        }
      })
      const players = wrapper.find("#players")
      
      expect(players.html()).toContain(ANY_RANKING1.name)
      expect(players.html()).toContain(ANY_RANKING2.name)
    })
})
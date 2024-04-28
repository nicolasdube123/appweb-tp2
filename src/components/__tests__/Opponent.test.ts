import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import Opponent from '../Opponent.vue'
import Character from '../../script/characterService'
import { ShipsWithLife } from '../../script/shipService'

const ANY_SHIP_WITH_LIFE: ShipsWithLife = {
  id: "3",
  name: "Vaisseau",
  vitality: 100
}

const ANY_OPPONENT: Character = {
  id: "1",
  name: "Nom",
  credit: "300",
  experience: "3",
  ship: ANY_SHIP_WITH_LIFE
}

describe('Opponent.vue', () => {
    it("Les champs existent", async () => {
      let wrapper = mount(Opponent, {
        propsData: {
            opponent: ANY_OPPONENT,
            initialOpponentHealth: 100
        }
      })
      const name = wrapper.find("#name")
      const experience = wrapper.find("#experience")
      const vaisseauNom = wrapper.find("#vaisseauNom")
      const health = wrapper.find("#health")
      
      expect(name.exists()).toBeTruthy()
      expect(experience.exists()).toBeTruthy()
      expect(vaisseauNom.exists()).toBeTruthy()
      expect(health.exists()).toBeTruthy()
    })

    it("Le status affiché équivaut à l'expérience envoyé en props", () => {
      let wrapper = mount(Opponent, {
        propsData: {
            opponent: ANY_OPPONENT,
            initialOpponentHealth: 100
        }
      })

      const experience = wrapper.find("#experience")
      const statusEquivalent = wrapper.vm.experiences[ANY_OPPONENT.experience]

      expect(experience.text()).toContain(statusEquivalent)
    })
})
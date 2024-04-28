import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import PlayerComponent from '../Player.vue'
import { Player } from '../../App.vue'
import { ShipsWithLife } from '../../script/shipService'

const ANY_SHIP_WITH_LIFE: ShipsWithLife = {
  id: "3",
  name: "Vaisseau",
  vitality: 100
}

const ANY_PLAYER: Player = {
  name: "Nom",
  credit: 300,
  ship: ANY_SHIP_WITH_LIFE
}

describe('Player.vue', () => {
  it("Les champs existent", async () => {
    let wrapper = mount(PlayerComponent, {
      propsData: {
          player: ANY_PLAYER,
          initialPlayerHealth: 100
      }
    })
    const name = wrapper.find("#name")
    const credit = wrapper.find("#credit")
    const vaisseauNom = wrapper.find("#vaisseauNom")
    const health = wrapper.find("#health")
    
    expect(name.exists()).toBe(true)
    expect(credit.exists()).toBe(true)
    expect(vaisseauNom.exists()).toBe(true)
    expect(health.exists()).toBe(true)
  })
})
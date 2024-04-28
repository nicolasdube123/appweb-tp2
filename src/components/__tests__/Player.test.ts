import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import PlayerComponent from '../Player.vue'
import Player from '../../App.vue'

describe('Player.vue', () => {
    it("Les entrants existent", async () => {
      let wrapper = mount(PlayerComponent, {
        propsData: {
            player: undefined,
            initialPlayerHealth: 0
        }
      })
      const name = wrapper.find("#name")
      
      expect(name.exists()).toBe(true)
    })
})
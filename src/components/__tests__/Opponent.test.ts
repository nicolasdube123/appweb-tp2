import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import Opponent from '../Opponent.vue'
import Character from '../../script/characterService'

describe('Form.vue', () => {
    it("Les entrants existent", async () => {
      let wrapper = mount(Opponent, {
        propsData: {
            opponent: undefined,
            initialOpponentHealth: 0
        }
      })
      const name = wrapper.find("#name")
      
      expect(name.exists()).toBe(true)
    })
})
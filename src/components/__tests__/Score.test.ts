import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import Score from '../Score.vue'
import Ranking from '../../script/rankingService'

describe('Score.vue', () => {
    it("Les entrants existent", async () => {
      let wrapper = mount(Score, {
        propsData: {
            ranking: []
        }
      })
      const name = wrapper.find("#name")
      
      expect(name.exists()).toBe(true)
    })
})
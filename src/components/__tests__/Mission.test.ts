import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import Mission from '../Mission.vue'

describe('Mission.vue', () => {
    it("Les entrants existent", async () => {
      let wrapper = mount(Mission, {
        propsData: {
          mission: 0
        }
      })
      const name = wrapper.find("#name")
      
      expect(name.exists()).toBe(true)
    })
})
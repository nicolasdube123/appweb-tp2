import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import Action from '../Action.vue'

describe('Form.vue', () => {
    it("Les entrants existent", async () => {
      let wrapper = mount(Action)
      const name = wrapper.find("#name")
      
      expect(name.exists()).toBe(true)
    })
})
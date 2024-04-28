import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import Popup from '../Popup.vue'

describe('Form.vue', () => {
    it("Les entrants existent", async () => {
      let wrapper = mount(Popup, {
        propsData: {
            optionToCancel: false,
            title: "Title",
            text: "Text"
        }
      })
      const name = wrapper.find("#name")
      
      expect(name.exists()).toBe(true)
    })
})
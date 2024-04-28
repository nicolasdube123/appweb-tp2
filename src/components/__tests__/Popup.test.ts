import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Popup from '../Popup.vue'

describe('Popup.vue', () => {
    it("Les entrants existent", async () => {
      let wrapper = mount(Popup, {
        propsData: {
            optionToCancel: true,
            title: "Title",
            text: "Text"
        }
      })
      const title = wrapper.find("#title")
      const text = wrapper.find("#text")
      const cancel = wrapper.find("#cancel")
      const proceed = wrapper.find("#proceed")
      
      expect(title.exists()).toBeTruthy()
      expect(text.exists()).toBeTruthy()
      expect(cancel.exists()).toBeTruthy()
      expect(proceed.exists()).toBeTruthy()
    })

    it("Si optionToCancel est faux, le champ pour cancel n'apparaît pas", () => {
      let wrapper = mount(Popup, {
        propsData: {
            optionToCancel: false,
            title: "Title",
            text: "Text"
        }
      })

      const cancel = wrapper.find("#cancel")

      expect(cancel.exists()).toBeFalsy()
    })

    it("Quand le joueur accepte de continuer, emit proceedPopup", () => {
      let wrapper = mount(Popup, {
        propsData: {
            optionToCancel: false,
            title: "Title",
            text: "Text"
        }
      })

      wrapper.find("#proceed").trigger("click")

      expect(wrapper.emitted("proceedPopup")).toBeTruthy()
    })

    it("Quand le joueur annule, emit cancelPopup", () => {
      let wrapper = mount(Popup, {
        propsData: {
            optionToCancel: true,
            title: "Title",
            text: "Text"
        }
      })

      wrapper.find("#cancel").trigger("click")

      expect(wrapper.emitted("cancelPopup")).toBeTruthy()
    })
})
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Form from '../Form.vue'
import { Ship } from '../../script/shipService'

const DB_ERROR_MESSAGE = "Il semble y avoir un problème! Veuillez réessayer plus tard."
const VERIFICATION_ERROR_MESSAGE = "Veuillez vous assurer de remplir tous les champs."

const ANY_SHIP: Ship = {
  id: "1",
  name: "Vaisseau"
}
const SHIPS_ARRAY: Array<Ship> = [ANY_SHIP]

describe('Form.vue', () => {
    it("Les entrants existent", async () => {
      let wrapper = mount(Form, {
        propsData: { 
          isServiceAvailable: true, 
          ships: [] }
      })
      const name = wrapper.find("#name")
      const select = wrapper.find("#shipSelect")
      const button = wrapper.find("a")
      
      expect(name.exists()).toBeTruthy()
      expect(select.exists()).toBeTruthy()
      expect(button.exists()).toBeTruthy()
    })

    
    it("Si le service est disponible, le message d'erreur n'existe pas", async () => {
      let wrapper = mount(Form, {
        propsData: { 
          isServiceAvailable: true, 
          ships: [] }
      })
      const errorMessage = wrapper.find("#err_db")
      
      expect(errorMessage.exists()).toBeFalsy()
    })

    it("Si le service n'est pas disponible, le message d'erreur bd existe", async () => {
      let wrapper = mount(Form, {
        propsData: { 
          isServiceAvailable: false, 
          ships: [] }
      })
      const errorMessage = wrapper.find("#err_db")
      
      expect(errorMessage.exists()).toBeTruthy()
      expect(errorMessage.text()).toContain(DB_ERROR_MESSAGE)
    })

    it("Si les champs sont vides, hasValidationErrors est vrai", async () => {
      let wrapper = mount(Form, {
        propsData: { 
          isServiceAvailable: false, 
          ships: [] }
      })
      await wrapper.find("#start").trigger("click")
      
      expect(wrapper.vm.hasValidationErrors).toBeTruthy()
    })

    it("Si les champs ne sont pas vides, hasValidationErrors est faux", async () => {
      let wrapper = mount(Form, {
        propsData: { 
          isServiceAvailable: false, 
          ships: SHIPS_ARRAY }
      })
      wrapper.vm.name="Nom"
      wrapper.vm.ship="id"
      await wrapper.find("#start").trigger("click")
      
      expect(wrapper.vm.hasValidationErrors).toBeFalsy()
    })

    it("Si hasValidationErrors est vrai, le message d'erreur verif apparait", async () => {
      let wrapper = mount(Form, {
        propsData: { 
          isServiceAvailable: false, 
          ships: [] }
        })

      wrapper.vm.hasValidationErrors = true
      await wrapper.vm.$nextTick()
      const errorMessage = wrapper.find("#err_verif")
      
      expect(errorMessage.exists()).toBeTruthy()
      expect(errorMessage.text()).toContain(VERIFICATION_ERROR_MESSAGE)
    })

    it("Si hasValidationErrors est faux, le message d'erreur verif n'apparait pas", async () => {
      let wrapper = mount(Form, {
        propsData: { 
          isServiceAvailable: false, 
          ships: [] }
        })

      wrapper.vm.hasValidationErrors = false
      await wrapper.vm.$nextTick()
      const errorMessage = wrapper.find("#err_verif")
      
      expect(errorMessage.exists()).toBeFalsy()
    })
  })
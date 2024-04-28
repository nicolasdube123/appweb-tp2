import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import Action from '../Action.vue'

describe('Action.vue', () => {
    it("Les entrants existent", async () => {
      let wrapper = mount(Action)
      const fight = wrapper.find("#fight")
      const end = wrapper.find("#end")
      const endWithRepair = wrapper.find("#endWithRepair")
      
      expect(fight.exists()).toBe(true)
      expect(end.exists()).toBe(true)
      expect(endWithRepair.exists()).toBe(true)
    })

    it("Quand combat est cliqué, emit fight", async () => {
        let wrapper = mount(Action)
        
        wrapper.find("#fight").trigger("click")

        expect(wrapper.emitted("fight")).toBeTruthy()
    })

    it("Quand terminé est cliqué, emit end", async () => {
        let wrapper = mount(Action)
        
        wrapper.find("#end").trigger("click")

        expect(wrapper.emitted("end")).toBeTruthy()
    })

    it("Quand terminé-et-réparer est cliqué, emit endWithRepair", async () => {
        let wrapper = mount(Action)
        
        wrapper.find("#endWithRepair").trigger("click")

        expect(wrapper.emitted("endWithRepair")).toBeTruthy()
    })
})
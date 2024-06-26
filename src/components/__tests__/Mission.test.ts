import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Mission from '../Mission.vue'

describe('Mission.vue', () => {
    it("Les champs existent", async () => {
      let wrapper = mount(Mission, {
        propsData: {
          mission: 0
        }
      })
      const title = wrapper.find("#title")
      const nbMission = wrapper.find("#nbMission")
      const objective = wrapper.find("#objective")
      
      expect(title.exists()).toBeTruthy()
      expect(nbMission.exists()).toBeTruthy()
      expect(objective.exists()).toBeTruthy()
    })

    it("Les champs existent", async () => {
      let missionNb: number = 3
      let wrapper = mount(Mission, {
        propsData: {
          mission: missionNb
        }
      })
      const nbMission = wrapper.find("#nbMission")
      
      expect(nbMission.text()).toContain(missionNb)
    })
})
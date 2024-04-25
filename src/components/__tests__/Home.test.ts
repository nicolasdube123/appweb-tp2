import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import Home from '../Home.vue'

// TODO() : Mettre un component qui fait juste l'affichage

describe('Home.vue', () => {
  it("Test", async () => {
    let wrapper = mount(Home)
    const name = wrapper.find("input")
    
    expect(name.exists()).toBe(true)
  })

  it("Lors du lancement de l'application", async () => {
    const name = wrapper.find("#name")
    console.log(router)
    
    expect(name.exists()).toBe(true)
  })
})

import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import Game from '../GameView.vue'


describe('Home.vue', () => {
  // TODO()
  it("Test", async () => {
    let wrapper = mount(Game)
    const name = wrapper.find("input")
    
    expect(true).toBe(true)
  })
})
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import Score from '../ScoreView.vue'


describe('Home.vue', () => {
  // TODO()
  it("Test", async () => {
    let wrapper = mount(Score)
    const name = wrapper.find("input")
    
    expect(true).toBe(true)
  })
})
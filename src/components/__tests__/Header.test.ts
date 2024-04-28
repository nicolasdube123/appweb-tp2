import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import Header from '../Header.vue'
import { ref } from 'vue'
import { GameStatus } from '../../App.vue'

let gameStatusStarted: GameStatus = {
  mission: 1,
  hasStarted: true,
  hasWon: undefined
}
let gameStatusNotStarted: GameStatus = {
  mission: 1,
  hasStarted: false,
  hasWon: undefined
}

describe('Header.vue', () => {
  it("Les champs existent en dehors de la partie", async () => {
    let wrapper = mount(Header, {
      propsData: {
        gameStatus: gameStatusNotStarted
      }
    })

    const title = wrapper.find("#title")
    const home = wrapper.find("#home")
    const score = wrapper.find("#score")
    
    expect(title.exists()).toBeTruthy()
    expect(home.exists()).toBeTruthy()
    expect(score.exists()).toBeTruthy()
  })

  it("Les champs existent dans la partie", async () => {
    let wrapper = mount(Header, {
      propsData: {
        gameStatus: gameStatusStarted
      }
    })

    const title = wrapper.find("#title")
    const home = wrapper.find("#home")
    const score = wrapper.find("#score")
    
    expect(title.exists()).toBeTruthy()
    expect(home.exists()).toBeTruthy()
    expect(score.exists()).toBeTruthy()
  })

  it("Si le joueur veut quitter la partie, un popup de confirmation apparait", async () => {
    let wrapper = mount(Header, {
      propsData: {
        gameStatus: gameStatusStarted
      }
    })

    wrapper.find("#home").trigger("click")
    await wrapper.vm.$nextTick()
    const popup = wrapper.find("#leaving")

    expect(popup.exists()).toBeTruthy()
  })
})
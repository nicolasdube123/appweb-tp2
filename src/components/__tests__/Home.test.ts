import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import Home from '../Home.vue'
import { createRouter, createWebHistory } from 'vue-router'
import router from "../../router"

// TODO() : Mettre un component qui fait juste l'affichage

describe('Home.vue', () => {
  let wrapper

  beforeEach(async () => {
    await router.isReady()
    wrapper = mount(Home, {
      global: {
        plugins: [router]
      }
    })
  })

  it('Lorsque le formulaire est envoyé, si le formulaire est valide, emit les informations du formulaire', async () => {
    const name = wrapper.find("input")
    console.log(router)
    
    expect(name.exists()).toBe(true)
  })
})

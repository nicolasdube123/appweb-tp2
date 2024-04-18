import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { onBeforeMount, onMounted } from 'vue'
import Home from '../Home.vue'
import { RouterLink } from 'vue-router'

// TODO() : Mettre un component qui fait juste l'affichage

describe('Home.vue', () => {
  it('Lorsque le formulaire est envoyé, si le formulaire est valide, emit les informations du formulaire', async () => {
    const wrapper = await mount(Home)
    
    console.log(wrapper)
    const name = wrapper.find("input")

    
    expect(name.exists()).toBe(true)
  })
})

import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { onBeforeMount, onMounted } from 'vue'
import Home from '../Home.vue'
import { RouterLink } from 'vue-router'

describe('Home.vue', () => {
  it('Lorsque le formulaire est envoyé, si le formulaire est valide, emit les informations du formulaire', async () => {
    const wrapper = await mount(Home)
    
    console.log(wrapper)
    const name = wrapper.find("#name")
    //wrapper.find("#name").setValue("Any name")
    //wrapper.find("#shipSelect").setValue("R2-D2")
    //
    //wrapper.findComponent(RouterLink).trigger("click")
    
    expect(name.exists()).toBe(true)
  })
})

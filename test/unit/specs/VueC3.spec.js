import Vue from 'vue'
import VueC3 from '@/components/VueC3.js'

describe('VueC3.js', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(VueC3)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.c3-tooltip-container'))
      .to.not.be.undefined
  })
})

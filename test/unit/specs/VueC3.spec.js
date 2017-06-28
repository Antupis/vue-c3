import Vue from 'vue'
import VueC3 from '@/components/VueC3.js'

describe('VueC3.js', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(VueC3)
    const vm = new Constructor().$mount()
    expect(vm.$el.id).to.equal('chart')
  })

  it('render function should return div with attrs', () => {
    const Constructor = Vue.extend(VueC3)
    const vm = new Constructor().$mount()
    expect(vm.$el.attributes[0].value).to.equal('chart')
    expect(vm.$el.attributes[1].value).to.equal('400')
    expect(vm.$el.attributes[2].value).to.equal('400')
    expect(vm.$el.attributes[3].value).to.equal('c3')
    expect(vm.$el.attributes[4].value)
      .to.equal('max-height: 320px; position: relative;')
  })

  it('props should have chartId', () => {
    const Constructor = Vue.extend(VueC3)
    const vm = new Constructor()
    expect(vm._props).to.have.property('chartId')
  })
})

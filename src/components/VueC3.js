
import Vue from 'vue'
import c3 from 'c3'
require('c3/c3.min.css')

export default Vue.extend({

  render: function (createElement) {
    return createElement('div', {
      attrs: {id: this.chartId, width: this.width, height: this.height},
      ref: 'div'})
  },

  props: {
    chartId: {
      default: 'chart',
      type: String
    },
    width: {
      default: 400,
      type: Number
    },
    height: {
      default: 400,
      type: Number
    },
    columns: {
      default: () => [],
      type: Array
    },
    types: {
      default: () => {},
      type: Object
    }
  },
  mounted () {
    this.chart = c3.generate({
      bindto: this.$el,
      data: {
        columns: this.columns,
        types: this.types
      }
    })
  },
  watch: {
    columns: function () {
      this.chart.load({
        columns: this.columns
      })
    }
  }
})


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
    },
    axes: {
      default: () => {},
      type: Object
    },
    axis: {
      default: () => {},
      type: Object
    },
    grid: {
      default: () => {},
      type: Object
    },
    regions: {
      default: () => [],
      type: Array
    },
    subchart: {
      default: () => {},
      type: Object
    },
    zoom: {
      default: () => {},
      type: Object
    },
    legend: {
      default: () => {},
      type: Object
    },
    tooltip: {
      default: () => {},
      type: Object
    },
    color: {
      default: () => {},
      type: Object
    },
    padding: {
      default: () => {},
      type: Object
    },
    transition: {
      default: () => {},
      type: Object
    },
    names: {
      default: () => {},
      types: Object
    }

  },
  mounted () {
    this.chart = c3.generate({
      bindto: this.$el,
      data: {
        columns: this.columns,
        types: this.types,
        axes: this.axes
      },
      axis: this.axis,
      grid: this.grid,
      regions: this.regions,
      subchart: this.subchart,
      zoom: this.zoom,
      legend: this.legend,
      tooltip: this.tooltip,
      color: this.color,
      padding: this.padding,
      transition: this.transition,
      names: this.names
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

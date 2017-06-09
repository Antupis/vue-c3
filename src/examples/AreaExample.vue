<template >
    <div class="col-xs-12 panel panel-default">
        <div class="panel-body">
          <div class="col-sm-6">
            <h3>Area Chart</h3>
            <Chart :chartId="'areachart'" :columns="areaDataS" :types="types">
            </Chart>
          </div>
          </div>
      </div>
</template>

<script>
import Chart from '../components/VueC3'

export default {
  components: {
    Chart
  },

  data () {
    return {
      areaDataS: [ ['data1', 300, 350, 300, 0, 0, 0], ['data2', 130, 100, 140, 200, 150, 50] ],
      types: {
        data1: 'area',
        data2: 'area-spline'
      }
    }
  },

  mounted () {
    console.log('area chart mounted')
  }
}
</script>

<style lang="css">
</style>

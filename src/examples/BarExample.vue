<template >
    <div class="col-xs-12 panel panel-default">
        <div class="panel-body">
          <div class="col-sm-6">
            <h3>Bar Chart</h3>
            <Chart v-bind:chartId="'barchart'" :columns="barData" :types="types">
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
      barData: [ ['data1', 300, 350, 300, 0, 0, 0], ['data2', 130, 100, 140, 200, 150, 50] ],
      types: {
        data1: 'bar',
        data2: 'bar'
      }
    }
  },

  mounted () {
    console.log('bar chart mounted')
    setTimeout(function () {
      console.log('fired')
      this.barData = [['data1', 30, 20, 50, 40, 60, 50, 100, 200]]
    }, 400)
  }
}
</script>

<style lang="css">
</style>

<template >
      <div class="col-xs-12 panel panel-default">
        <div class="panel-body">
          <div class="col-sm-6">
            <h3>Line Chart</h3>
            <chart chartId="line-chart" :columns="lineData">
            </chart>
          </div>
          </div>
        </div>
</template>

<script>
import chart from '../components/VueC3.js'

export default {
  components: {
    chart
  },

  data () {
    return {
      lineData: [ ['data1', 300, 350, 300, 0, 0, 0], ['data2', 130, 100, 140, 200, 150, 50] ]
    }
  },

  mounted () {
    console.log('line chart mounted')
  }
}
</script>

<style lang="css">
</style>

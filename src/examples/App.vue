<template>
  <div class="container">
    <h1 style="text-align:center;margin:40px 0;">Charts</h1>
    <area-example></area-example>
  </br>
    <line-example></line-example>
  </br>
  <bar-example></bar-example>
  </div>
</template>

<script>
  import AreaExample from './AreaExample'
  import LineExample from './LineExample'
  import BarExample from './BarExample'

  export default {
    components: {
      AreaExample, LineExample, BarExample
    }
  }
</script>

<style>
  .container {
    max-width: 800px;
    margin: 0 auto;
  }
</style>

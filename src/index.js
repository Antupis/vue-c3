import Chart from './components/VueC3.js'
import npmCfg from '../package.json'

const VueC3 = {
  version: npmCfg.version,
  Chart
}

export default VueC3

export {
  Chart
}

import { BASE_URL, TIME_OUT } from './config/index'
import JoonRequest from './request/index'
const joonRequest = new JoonRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestSuccessFn: (config) => {
      return config
    }
  }
})

export default joonRequest

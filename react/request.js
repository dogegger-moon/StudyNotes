import axios from 'axios'

let cancelToken = axios.CancelToken

const cancel = []

const removePending = config => {
  for(let p in cancel){
    if (cancel[p].u === config.url) {
      cancel[p].f()
    }
  }
}

// 请求拦截器 发送一个请求之前
axios.interceptors.request.use(config => {
  //在一个ajax发送前执行一下取消操作
  removePending(config)
  config.cancelToken = new cancelToken(c => {
    cancel.push({ 
      f: c,
      u: config.url,
    })
  })
  return config
}, error => {
switch (error.response && error.response.status) {
  case 504: 
    message.warning('后台错误')
    break;
  case 404:
    message.warning('未找到')
    //setTimeout(() => {
    //  window.location.href='http://www.baidu.com'
    //}, 2000)
    break;
    
    default:
      break;
  
}
  
  return Promise.reject(error)
})

//添加响应拦截器
axios.interceptors.response.use(response => {
  return response
}, error => {})

export function request (url, payload = {}) {
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url,
      data: payload
    })
      .then(response => {
        const data = response.data
        if (data.code === 200) {
          resolve(data.data)

        } else {
          reject(data) 
        }
      })
      .catch(err => {
        reject(err)
      })
  })
}

export function get (url, payload = {}) {
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url,
      params: payload
    })
      .then(response => {
        const data = response.data
        if (data.code === 200) {
          resolve(data.data)
        } else {
          // reject(data) 
        }
      })
      .catch(err => {
        // reject(err)
      })
  })
}

//路由拦截里面添加参数
        // config.data = { ...config.data.data, key: '5d2878270550ac239657ffa54edd96ff' }
        // config.headers = { ...config.headers, key: '5d2878270550ac239657ffa54edd96ff' }

        headers: {
           key: '5d2878270550ac239657ffa54edd96ff',
        }

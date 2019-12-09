import axios from 'axios'
import URLParse from 'url-parse'
import StateService from './stateService'
import { KV ,encrypt} from '_util/index'
import qs from 'qs';
import $ from 'jquery';

console.log($);

const { baseURL } = StateService.getConfig()
//console.log('baseURL', baseURL)

class Processor {
  constructor(endPointURL, config = {}) {
    const axiosConfig = Object.assign(
      {
        baseURL: endPointURL
        // withCredentials: false
      },
      config
    )
    this.config = axiosConfig
    this.rest = axios.create(axiosConfig)
  }
  //默认开启数据加密方式
  //加密采用AES加密，IV，IK放置在header 头部。
  get(url, params, config) {
    Object.assign(config, {
      headers: {
        ik: KV.ik,
        iv: KV.iv,
        
      }
    })
    //console.log('headers', config.headers);
    for(var a in data)
    {
      data[a]=encrypt(data[a],KV.ik,KV.iv)
    }
    const getConfig = {}
    if (params) Object.assign(getConfig, { params })
    if (config) Object.assign(getConfig, config)

    return this.rest.get(url, getConfig)
  }

  delete(url, config) {
    return this.rest.delete(url, config)
  }

  post(url, data, config = {}) {
    Object.assign(config, {
      headers: {
        ik: KV.ik,
        iv: KV.iv,
        
      }
    })
    //console.log('headers', config.headers);
    for(var a in data)
    {
      data[a]=encrypt(data[a],KV.ik,KV.iv)
    }

  
    return this.rest.post(url, qs.stringify(data), config)
  }

  put(url, data, config) {
    return this.rest.put(url, data, config)
  }

  patch(url, data, config) {
    return this.rest.patch(url, data, config)
  }
}

class APIService extends Processor {
  constructor() {
    super(baseURL)
    this.axios = axios
    this.initRest()
  }

  // api 请求拦截层
  initRest() {
    this.rest.interceptors.request.use(config => {
      console.log('config', config)
      if (!config.params) {
        config.params = {}
      }
      return config
    })
    this.rest.interceptors.response.use(res => {
      if (res.status === 200) {
        return res.data
        // if (res.data.status === '0') {
        //   window.location = '/xiaoheiping'
        //   return
        // } else {
        //   return res.data
        // }
      }
      return res
    })
  }

  // 保留一个高度可定制的请求方法
  request(config) {
    return axios.request(config)
  }

  create(url, config) {
    return new Processor(url, config)
  }

  /**
   * create full url w/ given pathname and query
   * @param {String} pathname URL.pathname
   * @param {Object} query the URL.query as object
   */
  stringify(pathname, query) {
    const { baseURL } = this.config // eslint-disable-line
    const parsed = URLParse(baseURL, true)
    parsed.set('pathname', pathname)
    parsed.set('query', query)
    return parsed.toString()
  }
}

export default new APIService()

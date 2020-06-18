import urlConfig from './config.js'

const request = {}
const headers = {}
const PORT1 = '/baseinfo'
    
request.globalRequest = (url, method, data, power) => {
    return new Promise((resolve, reject) => {
			uni.request({
				url: urlConfig + url,
				method,
				data: data,
				dataType: 'json',
				header: 'application/json'
			}).then(res => {
				resolve(res[1].data)
			}).catch(err => {
				reject(err)
			})
		})
 }
export default request
import request from './request.js'

const baseUrl = '/api/'
// POST请求方式
export const getVideoList = () => request.globalRequest(`${baseUrl}videos.json`, 'GET')

export default {
	getVideoList
}
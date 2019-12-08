import axios from 'axios'
import domain from '@/config/domain'

let http = axios.create({
	baseURL: domain.api[process.env.NODE_ENV]
})

http.interceptors.request.use(config => {
	if (!process.server) {
		config.headers['token'] = window.localStorage.token || "xxxxx"
	}
	return config
}, error => {
	return Promise.reject(error)
})

http.interceptors.response.use(res => {
	if (res.data.code === 0) {
		return res.data
	}
	return Promise.reject(res)
}, error => {
	return Promise.reject(error)
})

export default http
